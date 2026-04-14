"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { Icon } from "@/components/atoms/Icon";
import type { Locale } from "@/dictionaries";

interface NavT {
  home: string;
  packages: string;
  destinations: string;
  tourGuide: string;
  about: string;
  contact: string;
}

interface HeaderProps {
  lang: Locale;
  navT: NavT;
}

export function Header({ lang, navT }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const otherLang: Locale = lang === "en" ? "id" : "en";
  // Swap locale prefix in current path
  const otherLangPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  const navItems = [
    { label: navT.home, href: `/${lang}` },
    { label: navT.packages, href: `/${lang}/packages` },
    { label: navT.destinations, href: `/${lang}/destinations` },
    // { label: navT.tourGuide, href: `/${lang}/tour-guide` },
    { label: navT.about, href: `/${lang}/about` },
    { label: navT.contact, href: `/${lang}/contact` },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl print:hidden">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} />
          </button>
          <Link
            href={`/${lang}`}
            className="text-2xl font-bold tracking-tight text-primary font-[family-name:var(--font-headline)]"
          >
            {siteConfig.name}
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface/70 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href={otherLangPath}
          className="text-sm font-bold text-primary hover:opacity-70 transition-opacity uppercase tracking-wider"
        >
          {otherLang}
        </Link>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-outline-variant/10 px-6 py-4 space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  isActive ? "text-primary font-bold" : "text-on-surface/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={otherLangPath}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-primary uppercase tracking-wider"
          >
            Switch to {otherLang.toUpperCase()}
          </Link>
        </div>
      )}
    </header>
  );
}
