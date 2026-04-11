import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import { getDictionary, hasLocale, locales } from "@/dictionaries";
import type { Locale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { Icon } from "@/components/atoms/Icon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  const otherLang: Locale = lang === "en" ? "id" : "en";
  return {
    title: dict.destinations.meta.title,
    description: dict.destinations.meta.description,
    alternates: {
      languages: {
        [lang]: `/${lang}/destinations`,
        [otherLang]: `/${otherLang}/destinations`,
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const categoryColors: Record<string, string> = {
  Temple: "bg-primary-container text-primary",
  Beach: "bg-tertiary-container text-tertiary",
  Nature: "bg-secondary-container text-secondary",
  Heritage: "bg-surface-container-high text-on-surface-variant",
  Culture: "bg-secondary-container text-secondary",
  Museum: "bg-primary-container text-primary",
};

export default async function DestinationsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.destinations;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto text-center">
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
          {t.hero.label}
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
          {t.hero.title}{" "}
          <span className="text-primary">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>
      </section>

      {/* Grid */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/${lang}/destinations/${dest.slug}`}
              className="group bg-surface-container-lowest rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dest.cardImage}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 bg-white/90 backdrop-blur-md text-primary`}
                  >
                    <Icon name={dest.categoryIcon} className="text-xs" />
                    {dest.category}
                  </span>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <p className="text-xs text-on-surface-variant font-medium mb-1 flex items-center gap-1">
                  <Icon name="location_on" className="text-xs text-tertiary" />
                  {dest.area}
                </p>
                <h2 className="text-lg md:text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                  {dest.name}
                </h2>
                <p className="text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  {dest.shortDescription}
                </p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-bold">
                  {t.card.exploreButton}
                  <Icon
                    name="arrow_forward"
                    className="text-sm transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
