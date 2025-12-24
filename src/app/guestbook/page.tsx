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
    <div className="guestbook-container">
      <h1 className="guestbook-title text-2xl mb-2 text-center">
        <span className="sparkle">✧</span> Sign My Guestbook! <span className="sparkle">✧</span>
      </h1>
      <p className="text-center mb-4 text-purple-800">
        ~*~ Leave a message and say hi! ~*~
      </p>

      <div className="mb-6">
        <GuestbookFormWithRefresh />
      </div>

      <div>
        <h2 className="text-lg mb-3 text-fuchsia-700">
          <span className="blink">★</span> Messages ({entries.length}) <span className="blink">★</span>
        </h2>
        {entries.length === 0 ? (
          <p className="text-center text-purple-600 italic">
            No messages yet... Be the first to sign! <span className="sparkle">✿</span>
          </p>
        ) : (
          <GuestbookEntries initialEntries={entries} />
        )}
      </div>

      <div className="text-center mt-4 text-xs text-purple-700">
        <span className="visitor-counter">{entries.length} visitors have signed!</span>
      </div>
    </div>
  );
}
