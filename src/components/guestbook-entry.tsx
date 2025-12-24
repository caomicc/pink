interface GuestbookEntryProps {
  name: string;
  message: string;
  createdAt: string | Date;
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'just now';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? '' : 's'} ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears === 1 ? '' : 's'} ago`;
}

export function GuestbookEntry({ name, message, createdAt }: GuestbookEntryProps) {
  const date = typeof createdAt === 'string' ? new Date(createdAt) : createdAt;
  const relativeTime = formatRelativeTime(date);

  return (
    <div className="guestbook-entry">
      <div className="flex justify-between items-start mb-1">
        <span className="guestbook-entry-name">~{name}~</span>
        <span className="guestbook-entry-date">[{relativeTime}]</span>
      </div>
      <p className="guestbook-entry-message whitespace-pre-wrap break-words">{message}</p>
    </div>
  );
}
