"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type NavItem = {
  label: string;
  href?: string;
  isSection?: boolean;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Personal",
    isSection: true,
    children: [
      { label: "About me", href: "/about" },
      { label: "Moodboard", href: "/moodboard" },
    ],
  },
  {
    label: "My Work",
    isSection: true,
    children: [
      { label: "PolishedDex", href: "/polisheddex" },
      { label: "Art", href: "/art" },
    ],
  },
  {
    label: "Collections",
    isSection: true,
    children: [
      { label: "Tamagotchi", href: "/tamagotchi" },
      { label: "Mechanical Keyboards", href: "/mechanical-keyboards" },
    ],
  },
  {
    label: "Fun",
    isSection: true,
    children: [
      { label: "Song of the week", href: "/song-of-the-week" },
      { label: "Resources", href: "/resources" },
      { label: "Guestbook", href: "/guestbook" },
    ],
  },
];

function ChevronIcon() {
  return (
    <svg
      width="3"
      height="24"
      viewBox="0 -9 3 24"
      className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
    >
      <path
        d="M0 0L3 3L0 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavLink({
  item,
  isChild = false,
  currentPath,
}: {
  item: NavItem;
  isChild?: boolean;
  currentPath: string;
}) {
  const isActive = item.href === currentPath;
  const activeClass = "text-sky-500 dark:text-sky-400";
  const defaultClass =
    "hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300";

  if (item.isSection && !item.href) {
    // Check if any child is active
    const hasActiveChild = item.children?.some(
      (child) => child.href === currentPath
    );
    return (
      <span
        className={`block py-1 font-medium ${hasActiveChild ? activeClass : defaultClass}`}
      >
        {item.label}
      </span>
    );
  }

  if (isChild) {
    return (
      <Link
        href={item.href || "#"}
        className={`group flex items-start py-1 ${isActive ? activeClass : defaultClass}`}
      >
        <ChevronIcon />
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      href={item.href || "#"}
      className={`block py-1 font-medium ${isActive ? activeClass : defaultClass}`}
    >
      {item.label}
    </Link>
  );
}

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <div className="text-left">
      <ul className="text-slate-700 text-sm leading-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink item={item} currentPath={pathname} />
            {item.children && (
              <ul>
                {item.children.map((child, childIndex) => (
                  <li key={childIndex} className="ml-4">
                    <NavLink item={child} isChild currentPath={pathname} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
