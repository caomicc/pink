'use client';

import { useRouter } from 'next/navigation';
import { GuestbookEntry } from './guestbook-entry';
import { GuestbookForm } from './guestbook-form';

interface Entry {
  id: string;
  name: string;
  message: string;
  createdAt: Date | string;
}

interface GuestbookEntriesProps {
  initialEntries: Entry[];
}

export function GuestbookEntries({ initialEntries }: GuestbookEntriesProps) {
  const router = useRouter();

  const handleSuccess = () => {
    // Refresh server data after successful submission
    router.refresh();
  };

  return (
    <div className="space-y-3">
      {initialEntries.map((entry) => (
        <GuestbookEntry
          key={entry.id}
          name={entry.name}
          message={entry.message}
          createdAt={entry.createdAt}
        />
      ))}
    </div>
  );
}

// Re-export GuestbookForm with refresh capability
export function GuestbookFormWithRefresh() {
  const router = useRouter();

  return <GuestbookForm onSuccess={() => router.refresh()} />;
}
