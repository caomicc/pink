import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function resolveTailwindColor(tailwindColor: string) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return { hex: '' };
  }
  let styles = getComputedStyle(document.documentElement);
  let hex = styles.getPropertyValue(tailwindColor);
  return { hex };
}
