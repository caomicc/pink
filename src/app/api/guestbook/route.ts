import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const RATE_LIMIT_SECONDS = 60; // 1 minute

export async function GET() {
  try {
    const entries = await prisma.guestbookEntry.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return NextResponse.json(entries);
  } catch (error) {
    console.error('Failed to fetch guestbook entries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch entries' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message, website } = body;

    // Honeypot check - if website field is filled, it's a bot
    if (website) {
      // Silently reject but return success to not tip off bots
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    // Sanitize and limit input lengths
    const sanitizedName = name.trim().slice(0, 50);
    const sanitizedMessage = message.trim().slice(0, 500);

    if (sanitizedName.length === 0 || sanitizedMessage.length === 0) {
      return NextResponse.json(
        { error: 'Name and message cannot be empty' },
        { status: 400 }
      );
    }

    // Get IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';

    // Check rate limit
    const rateLimit = await prisma.rateLimit.findUnique({
      where: { ip },
    });

    if (rateLimit) {
      const timeSinceLastSubmission =
        (Date.now() - rateLimit.lastSubmission.getTime()) / 1000;

      if (timeSinceLastSubmission < RATE_LIMIT_SECONDS) {
        const waitTime = Math.ceil(RATE_LIMIT_SECONDS - timeSinceLastSubmission);
        return NextResponse.json(
          { error: `Please wait ${waitTime} seconds before posting again` },
          { status: 429 }
        );
      }
    }

    // Create the entry and update rate limit in a transaction
    const entry = await prisma.$transaction(async (tx) => {
      // Upsert rate limit
      await tx.rateLimit.upsert({
        where: { ip },
        update: { lastSubmission: new Date() },
        create: { ip, lastSubmission: new Date() },
      });

      // Create guestbook entry
      return tx.guestbookEntry.create({
        data: {
          name: sanitizedName,
          message: sanitizedMessage,
        },
      });
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error('Failed to create guestbook entry:', error);
    return NextResponse.json(
      { error: 'Failed to create entry' },
      { status: 500 }
    );
  }
}
