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
        className={`nav-item ${hasActiveChild ? "nav-item--active" : ""}`}
      >
        {item.label}
        <span className="nav-chevron">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && item.children && (
        <div
          id={menuId}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={id}
          className="dropdown-menu absolute top-full left-0 min-w-[180px] z-50 mt-1"
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
                className={`dropdown-item ${isActive ? "dropdown-item--active" : ""}`}
              >
                ✧ {child.label}
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
      <nav aria-label="Main navigation" className="site-nav hidden md:flex items-center justify-center gap-1 flex-wrap">
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
              className={`nav-item ${isActive ? "nav-item--active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center">
        <button
          ref={hamburgerRef}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="hamburger-btn"
        >
          {mobileMenuOpen ? (
            <span className="text-lg">✖</span>
          ) : (
            <span className="text-lg">☰</span>
          )}
        </button>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            role="menu"
            className="mobile-menu absolute left-3 right-3 top-full mt-2 py-2 z-50 max-h-[70vh] overflow-y-auto"
          >
            {navItems.map((item, index) => {
              if (item.children) {
                const isExpanded = expandedSections.includes(item.label);
                const hasActiveChild = item.children.some(
                  (child) => child.href === pathname
                );

                return (
                  <div key={index} className="px-2 py-1">
                    <button
                      onClick={() => toggleSection(item.label)}
                      aria-expanded={isExpanded}
                      className={`nav-item w-full justify-between ${hasActiveChild ? "nav-item--active" : ""}`}
                    >
                      {item.label}
                      <span className="nav-chevron">{isExpanded ? "▲" : "▼"}</span>
                    </button>

                    {isExpanded && (
                      <div className="nav-section mt-1">
                        {item.children.map((child, childIndex) => {
                          const isActive = child.href === pathname;
                          return (
                            <Link
                              key={childIndex}
                              href={child.href || "#"}
                              role="menuitem"
                              aria-current={isActive ? "page" : undefined}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`dropdown-item ${isActive ? "dropdown-item--active" : ""}`}
                            >
                              ✧ {child.label}
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
                <div key={index} className="px-2 py-1">
                  <Link
                    href={item.href || "#"}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`nav-item w-full ${isActive ? "nav-item--active" : ""}`}
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
