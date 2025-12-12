"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";

type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Personal",
    children: [
      { label: "About me", href: "/about" },
      { label: "Moodboard", href: "/moodboard" },
    ],
  },
  {
    label: "My Work",
    children: [
      { label: "PolishedDex", href: "/polisheddex" },
      { label: "Art", href: "/art" },
    ],
  },
  {
    label: "Collections",
    children: [
      { label: "Tamagotchi", href: "/tamagotchi" },
      { label: "Mechanical Keyboards", href: "/mechanical-keyboards" },
    ],
  },
  {
    label: "Fun",
    children: [
      { label: "Song of the week", href: "/song-of-the-week" },
      { label: "Resources", href: "/resources" },
      { label: "Guestbook", href: "/guestbook" },
    ],
  },
];

function ChevronDownIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={`ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 4.5L6 7.5L9 4.5" />
    </svg>
  );
}

function NavDropdown({
  item,
  currentPath,
  id,
}: {
  item: NavItem;
  currentPath: string;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const hasActiveChild = item.children?.some(
    (child) => child.href === currentPath
  );

  const activeClass = "text-sky-500 dark:text-sky-400";
  const defaultClass =
    "text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300";

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, closeDropdown]);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        closeDropdown();
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeDropdown]);

  // Focus first item when dropdown opens
  useEffect(() => {
    if (isOpen && menuItemsRef.current[0]) {
      setFocusedIndex(0);
      menuItemsRef.current[0]?.focus();
    }
  }, [isOpen]);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent, index: number) => {
    const itemCount = item.children?.length || 0;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        const nextIndex = (index + 1) % itemCount;
        setFocusedIndex(nextIndex);
        menuItemsRef.current[nextIndex]?.focus();
        break;
      case "ArrowUp":
        event.preventDefault();
        const prevIndex = (index - 1 + itemCount) % itemCount;
        setFocusedIndex(prevIndex);
        menuItemsRef.current[prevIndex]?.focus();
        break;
      case "Home":
        event.preventDefault();
        setFocusedIndex(0);
        menuItemsRef.current[0]?.focus();
        break;
      case "End":
        event.preventDefault();
        const lastIndex = itemCount - 1;
        setFocusedIndex(lastIndex);
        menuItemsRef.current[lastIndex]?.focus();
        break;
      case "Tab":
        closeDropdown();
        break;
    }
  };

  const menuId = `${id}-menu`;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        onKeyDown={handleButtonKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={menuId}
        className={`flex items-center px-3 py-2 font-medium text-sm rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${hasActiveChild ? activeClass : defaultClass}`}
      >
        {item.label}
        <ChevronDownIcon isOpen={isOpen} />
      </button>

      {isOpen && item.children && (
        <div
          id={menuId}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={id}
          className="absolute top-full left-0 min-w-[180px] bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50 mt-1"
        >
          {item.children.map((child, index) => {
            const isActive = child.href === currentPath;
            return (
              <Link
                key={index}
                ref={(el) => {
                  menuItemsRef.current[index] = el;
                }}
                href={child.href || "#"}
                role="menuitem"
                tabIndex={focusedIndex === index ? 0 : -1}
                onClick={closeDropdown}
                onKeyDown={(e) => handleMenuKeyDown(e, index)}
                className={`block text-left px-4 py-2 text-sm rounded-md mx-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-inset ${isActive ? activeClass : defaultClass} hover:bg-slate-100 dark:hover:bg-slate-700 focus-visible:bg-slate-100 dark:focus-visible:bg-slate-700`}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function HorizontalNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const activeClass = "text-sky-500 dark:text-sky-400";
  const defaultClass =
    "text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300";

  // Close mobile menu on escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav aria-label="Main navigation" className="hidden md:flex items-center justify-center gap-1">
        {navItems.map((item, index) => {
          if (item.children) {
            return (
              <NavDropdown
                key={index}
                item={item}
                currentPath={pathname}
                id={`nav-dropdown-${index}`}
              />
            );
          }

          const isActive = item.href === pathname;
          return (
            <Link
              key={index}
              href={item.href || "#"}
              aria-current={isActive ? "page" : undefined}
              className={`px-3 py-2 font-medium text-sm rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${isActive ? activeClass : defaultClass}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          ref={hamburgerRef}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          {mobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            role="menu"
            className="absolute left-0 right-0 top-full mx-3 mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-50 max-h-[70vh] overflow-y-auto"
          >
            {navItems.map((item, index) => {
              if (item.children) {
                const isExpanded = expandedSections.includes(item.label);
                const hasActiveChild = item.children.some(
                  (child) => child.href === pathname
                );

                return (
                  <div key={index} className="px-2">
                    <button
                      onClick={() => toggleSection(item.label)}
                      aria-expanded={isExpanded}
                      className={`flex items-center justify-between w-full px-3 py-2 font-medium text-sm rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${hasActiveChild ? activeClass : defaultClass}`}
                    >
                      {item.label}
                      <ChevronDownIcon isOpen={isExpanded} />
                    </button>

                    {isExpanded && (
                      <div className="ml-4 border-l-2 border-slate-200 dark:border-slate-700 pl-2">
                        {item.children.map((child, childIndex) => {
                          const isActive = child.href === pathname;
                          return (
                            <Link
                              key={childIndex}
                              href={child.href || "#"}
                              role="menuitem"
                              aria-current={isActive ? "page" : undefined}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`text-left block px-3 py-2 text-sm rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${isActive ? activeClass : defaultClass} hover:bg-slate-100 dark:hover:bg-slate-700`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = item.href === pathname;
              return (
                <div key={index} className="px-2">
                  <Link
                    href={item.href || "#"}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 font-medium text-sm rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${isActive ? activeClass : defaultClass} hover:bg-slate-100 dark:hover:bg-slate-700`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
