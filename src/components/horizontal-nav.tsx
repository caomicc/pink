"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "PolishedDex", href: "/polisheddex" },
];

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
        className={cn(
          "flex items-center gap-1 transition-colors hover:text-primary",
          hasActiveChild ? "text-primary" : "text-muted-foreground"
        )}
      >
        {item.label}
        <span className="text-[8px]">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && item.children && (
        <div
          id={menuId}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={id}
          className="absolute top-full left-0 min-w-[140px] z-50 mt-2 py-2 px-3 border rounded-lg bg-card"
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
                className={cn(
                  "block py-1 transition-colors hover:text-primary",
                  isActive ? "text-primary underline underline-offset-2" : "text-muted-foreground"
                )}
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
      <nav
        aria-label="Main navigation"
        className="hidden md:flex items-center justify-center gap-8 py-3 px-4 mb-4 font-polished text-px"
      >
        <span className="text-muted-foreground">{"["}</span>
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
              className={cn(
                "transition-colors hover:text-primary",
                isActive ? "text-primary underline underline-offset-2" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          );
        })}
        <span className="text-muted-foreground">{"]"}</span>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center py-3 mb-4">
        <button
          ref={hamburgerRef}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="font-polished text-px px-3 py-1 border rounded bg-card text-muted-foreground hover:text-primary transition-colors"
        >
          {mobileMenuOpen ? "[ ✖ close ]" : "[ ☰ menu ]"}
        </button>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            role="menu"
            className="absolute left-4 right-4 top-16 mt-2 py-3 px-4 z-50 max-h-[70vh] overflow-y-auto border rounded-lg bg-card font-polished text-px"
          >
            {navItems.map((item, index) => {
              if (item.children) {
                const isExpanded = expandedSections.includes(item.label);
                const hasActiveChild = item.children.some(
                  (child) => child.href === pathname
                );

                return (
                  <div key={index} className="py-1">
                    <button
                      onClick={() => toggleSection(item.label)}
                      aria-expanded={isExpanded}
                      className={cn(
                        "w-full flex justify-between items-center py-1 transition-colors hover:text-primary",
                        hasActiveChild ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                      <span className="text-[8px]">{isExpanded ? "▲" : "▼"}</span>
                    </button>

                    {isExpanded && (
                      <div className="pl-3 border-l border-border ml-1 mt-1">
                        {item.children.map((child, childIndex) => {
                          const isActive = child.href === pathname;
                          return (
                            <Link
                              key={childIndex}
                              href={child.href || "#"}
                              role="menuitem"
                              aria-current={isActive ? "page" : undefined}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                "block py-1 transition-colors hover:text-primary",
                                isActive ? "text-primary underline underline-offset-2" : "text-muted-foreground"
                              )}
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
                <div key={index} className="py-1">
                  <Link
                    href={item.href || "#"}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block transition-colors hover:text-primary",
                      isActive ? "text-primary underline underline-offset-2" : "text-muted-foreground"
                    )}
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
