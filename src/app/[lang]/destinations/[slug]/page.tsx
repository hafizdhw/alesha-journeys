import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { packages } from "@/data/packages";
import { getDictionary, hasLocale, locales } from "@/dictionaries";
import type { Locale } from "@/dictionaries";
import { Icon } from "@/components/atoms/Icon";
import { Button } from "@/components/atoms/Button";
import { siteConfig } from "@/data/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const dest = getDestinationBySlug(slug);
  if (!dest) return {};
  const otherLang: Locale = lang === "en" ? "id" : "en";
  return {
    title: dest.name,
    description: dest.shortDescription,
    alternates: {
      languages: {
        [lang]: `/${lang}/destinations/${slug}`,
        [otherLang]: `/${otherLang}/destinations/${slug}`,
      },
    },
  };
}

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    destinations.map((dest) => ({ lang, slug: dest.slug }))
  );
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const dest = getDestinationBySlug(slug);
  if (!dest) notFound();

  const dict = await getDictionary(lang as Locale);
  const t = dict.destinations.detail;

  const linkedPackages = packages.filter((p) =>
    p.destinations?.includes(dest.slug)
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[45vh] md:h-[60vh] overflow-hidden">
        <img
          src={dest.heroImage}
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-16 md:pb-12 max-w-7xl mx-auto">
          <Link
            href={`/${lang}/destinations`}
            className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <Icon name="arrow_back" className="text-sm" />
            {t.backToDestinations}
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Icon name={dest.categoryIcon} className="text-xs" />
              {dest.category}
            </span>
            <span className="text-white/80 text-sm flex items-center gap-1">
              <Icon name="location_on" className="text-sm" />
              {dest.area}
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight">
            {dest.name}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
        {/* Main */}
        <div className="lg:col-span-2 space-y-10">
          <p className="text-lg text-on-surface-variant leading-relaxed">
            {dest.description}
          </p>

          {/* Highlights */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t.highlights}</h2>
            <ul className="space-y-3">
              {dest.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-on-surface-variant"
                >
                  <Icon
                    name="check_circle"
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tips */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t.tipsTitle}</h2>
            <ul className="space-y-3">
              {dest.tips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-on-surface-variant"
                >
                  <Icon
                    name="lightbulb"
                    className="text-secondary mt-0.5 shrink-0"
                  />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Practical info */}
          {(dest.entryFee || dest.openingHours) && (
            <div className="bg-surface-container-lowest rounded-lg md:rounded-xl p-6 border border-outline-variant/10 space-y-5">
              {dest.entryFee && (
                <div className="flex items-start gap-3">
                  <Icon name="confirmation_number" className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                      {t.entryFee}
                    </p>
                    <p className="font-semibold text-on-surface text-sm">
                      {dest.entryFee}
                    </p>
                  </div>
                </div>
              )}
              {dest.openingHours && (
                <div className="flex items-start gap-3">
                  <Icon name="schedule" className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                      {t.openingHours}
                    </p>
                    <p className="font-semibold text-on-surface text-sm">
                      {dest.openingHours}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Linked packages */}
          {linkedPackages.length > 0 && (
            <div className="bg-surface-container-lowest rounded-lg md:rounded-xl p-6 border border-outline-variant/10">
              <h3 className="font-bold text-on-surface mb-4 flex items-center gap-2">
                <Icon name="card_travel" className="text-primary" />
                {t.foundInPackages}
              </h3>
              <div className="space-y-3">
                {linkedPackages.map((pkg) => (
                  <Link
                    key={pkg.slug}
                    href={`/${lang}/packages/${pkg.slug}`}
                    className="flex items-center gap-3 p-3 rounded md:rounded-lg bg-surface-container hover:bg-primary-container transition-colors group"
                  >
                    <div className="w-12 h-12 rounded shrink-0 overflow-hidden">
                      <img
                        src={pkg.cardImage}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-on-surface text-sm group-hover:text-primary transition-colors truncate">
                        {pkg.title}
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Rp {pkg.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                    <Icon
                      name="arrow_forward"
                      className="text-primary text-sm shrink-0 transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Generic CTA */}
          <div className="bg-primary-container rounded-lg md:rounded-xl p-6">
            <p className="text-sm text-on-primary-container font-medium mb-4">
              Want to visit {dest.name} with a local expert?
            </p>
            <Button
              href={siteConfig.whatsappUrl}
              variant="primary"
              icon="chat"
              external
              className="w-full"
            >
              Ask via WhatsApp
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
