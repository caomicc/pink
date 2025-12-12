import { prisma } from '@/lib/prisma';
import { GuestbookEntries, GuestbookFormWithRefresh } from '@/components/guestbook-entries';

async function getEntries() {
  try {
    const entries = await prisma.guestbookEntry.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return entries;
  } catch (error) {
    console.error('Failed to fetch guestbook entries:', error);
    return [];
  }
}

export const revalidate = 30; // Revalidate every 30 seconds

export default async function GuestbookPage() {
  const entries = await getEntries();

  return (
    <div>
      <h1 className="h4 mb-4">📖 Guestbook</h1>
      <p className="mb-6 text-gray-600">
        Leave a message and say hi! I&apos;d love to hear from you 💕
      </p>

      <div className="mb-8">
        <GuestbookFormWithRefresh />
      </div>

      <div className="space-y-4">
        <h2 className="h6">Messages ({entries.length})</h2>
        {entries.length === 0 ? (
          <p className="text-gray-500 italic">
            No messages yet. Be the first to sign! ✨
          </p>
        ) : (
          <GuestbookEntries initialEntries={entries} />
        )}
      </div>
    </div>
  );
}
