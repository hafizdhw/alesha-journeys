import Link from "next/link";
import { Package } from "@/types";
import type { Locale } from "@/dictionaries";

interface PackageCardProps {
  pkg: Package;
  lang: Locale;
}

export function PackageCard({ pkg, lang }: PackageCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 group transition-all duration-500 hover:-translate-y-2">
      <div className="relative rounded-lg overflow-hidden mb-8 aspect-[4/5]">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={pkg.cardImage}
          alt={pkg.title}
        />
        {pkg.badge && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-primary">
            {pkg.badge}
          </div>
        )}
      </div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-extrabold leading-tight">{pkg.title}</h3>
        <span className="text-primary font-bold text-lg whitespace-nowrap">
          From ${pkg.price}
        </span>
      </div>
      <p className="text-on-surface-variant mb-8 line-clamp-2">{pkg.description}</p>
      <Link
        href={`/${lang}/packages/${pkg.slug}`}
        className="block w-full py-4 bg-surface-container-high rounded-full font-bold text-center hover:bg-primary hover:text-on-primary transition-colors"
      >
        See Details
      </Link>
    </div>
  );
}
