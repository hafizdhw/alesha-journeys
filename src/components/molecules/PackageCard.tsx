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
      <div className="relative rounded-lg overflow-hidden mb-6 aspect-[4/5]">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={pkg.cardImage}
          alt={pkg.title}
        />
        {/* Gradient scrim for overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Badge — top left */}
        {pkg.badge && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-primary">
            {pkg.badge}
          </div>
        )}

        {/* Price — bottom right overlay */}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
          <span className="text-white text-xs font-medium opacity-80">Mulai</span>
          <p className="text-white font-extrabold text-sm leading-tight">
            Rp {pkg.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      <h3 className="text-xl font-extrabold leading-tight mb-3">{pkg.title}</h3>
      <p className="text-on-surface-variant mb-6 line-clamp-2 text-sm">{pkg.description}</p>

      <Link
        href={`/${lang}/packages/${pkg.slug}`}
        className="block w-full py-3.5 bg-surface-container-high rounded-full font-bold text-center text-sm hover:bg-primary hover:text-on-primary transition-colors"
      >
        See Details
      </Link>
    </div>
  );
}
