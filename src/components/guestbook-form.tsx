'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';

interface GuestbookFormProps {
  onSuccess?: () => void;
}

export function GuestbookForm({ onSuccess }: GuestbookFormProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // Honeypot field
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message, website }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      setSuccess(true);
      setName('');
      setMessage('');
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="guestbook-form space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm mb-1">
          ♥ Your Name ♥
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="~*~ What should we call you? ~*~"
          maxLength={50}
          required
          disabled={isSubmitting}
          className="field-input w-full"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm mb-1">
          ♥ Message ♥
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Leave a message... ☆彡"
          maxLength={500}
          rows={4}
          required
          disabled={isSubmitting}
          className="field-input w-full resize-none"
        />
      </div>

      {/* Honeypot field - hidden from real users, bots will fill it */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <Input
          id="website"
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {error && (
        <p className="msg-error">{error}</p>
      )}

      {success && (
        <p className="msg-success">~*~ Thanks for signing!! ~*~ ♥♥♥</p>
      )}

      <button type="submit" disabled={isSubmitting} className="btn-action">
        {isSubmitting ? '✧ Signing... ✧' : '✧ Sign Guestbook ✧'}
      </button>
    </form>
  );
}
