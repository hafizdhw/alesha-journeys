import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-surface-container rounded-t-[3rem] mt-20">
      <div className="w-full px-8 py-16 flex flex-col md:flex-row justify-between items-start gap-12 max-w-7xl mx-auto">
        <div className="max-w-sm">
          <span className="text-2xl font-bold text-primary mb-6 block font-[family-name:var(--font-headline)]">
            {siteConfig.name}
          </span>
          <p className="text-on-surface/80 mb-8 leading-relaxed">
            Authentic Yogyakarta experiences curated for the curious traveler.
            Private tours, local guides, and memories that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-primary font-[family-name:var(--font-headline)]">
              Explore
            </h4>
            <Link
              href="/packages"
              className="text-on-surface/80 hover:text-tertiary transition-colors"
            >
              Packages
            </Link>
            <Link
              href="/tour-guide"
              className="text-on-surface/80 hover:text-tertiary transition-colors"
            >
              Tour Guide
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-primary font-[family-name:var(--font-headline)]">
              Company
            </h4>
            <Link
              href="/about"
              className="text-on-surface/80 hover:text-tertiary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-on-surface/80 hover:text-tertiary transition-colors"
            >
              Contact
            </Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface/80 hover:text-tertiary transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-on-surface/5 py-8 text-center px-8">
        <p className="text-on-surface/60 text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
