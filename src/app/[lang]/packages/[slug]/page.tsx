import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { packages, getPackageBySlug } from "@/data/packages";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Badge } from "@/components/atoms/Badge";
import { getDictionary, hasLocale, locales } from "@/dictionaries";
import type { Locale } from "@/dictionaries";

export function generateStaticParams() {
  return packages.flatMap((pkg) =>
    locales.map((lang) => ({ lang, slug: pkg.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Not Found" };
  if (!hasLocale(lang)) return { title: pkg.title };
  const dict = await getDictionary(lang as Locale);
  return {
    title: `${pkg.title} ${dict.packageDetail.tourSuffix}`,
    description: pkg.description,
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const dict = await getDictionary(lang as Locale);
  const t = dict.packageDetail;

  return (
    <>
      <div className="pt-20 pb-32">
        {/* Hero */}
        <section className="relative h-[618px] w-full overflow-hidden mb-12">
          <img
            alt={pkg.title}
            className="w-full h-full object-cover"
            src={pkg.heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
            {pkg.badge && (
              <Badge variant="secondary" className="mb-4">
                <Icon name="star" filled className="text-sm" />
                {pkg.badge}
              </Badge>
            )}
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 max-w-4xl leading-tight">
              {pkg.title} {t.tourSuffix}
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Quick Info Bar */}
            <div className="grid grid-cols-3 gap-4 bg-surface-container-low rounded-xl p-6">
              {[
                { icon: "schedule", label: t.duration, value: pkg.duration },
                { icon: "groups", label: t.group, value: pkg.groupType },
                { icon: "hotel", label: t.pickup, value: pkg.pickup },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <Icon name={item.icon} className="text-primary" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                      {item.label}
                    </span>
                    <span className="text-on-surface font-semibold">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <article>
              <h2 className="text-2xl font-bold text-on-surface mb-4">
                {t.theExperience}
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-3xl">
                {pkg.description}
              </p>
            </article>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold text-on-surface mb-6">
                {t.highlights}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pkg.highlights.map((h) => (
                  <div
                    key={h.icon}
                    className="flex items-start gap-4 p-4 rounded-lg bg-surface-container"
                  >
                    <Icon name={h.icon} className="text-primary" />
                    <span className="font-medium">{h.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold text-on-surface mb-8">
                {t.itinerary}
              </h2>
              <div className="space-y-8 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
                {pkg.itinerary.map((step) => (
                  <div key={step.time} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <h3 className="font-bold text-lg">
                      {step.time} {step.title}
                    </h3>
                    <p className="text-on-surface-variant">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included / Not Included */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-surface-container-low p-8 rounded-xl">
              <div>
                <h2 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                  <Icon name="check_circle" className="text-primary" />
                  {t.whatsIncluded}
                </h2>
                <ul className="space-y-4 text-on-surface-variant">
                  {pkg.included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span>&bull;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                  <Icon name="cancel" className="text-error" />
                  {t.notIncluded}
                </h2>
                <ul className="space-y-4 text-on-surface-variant">
                  {pkg.notIncluded.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span>&bull;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column: Pricing Sidebar (Desktop) */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm">
              <div className="mb-8">
                <span className="text-on-surface-variant text-sm font-medium">
                  {t.startingFrom}
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-extrabold text-primary">
                    Rp {pkg.price.toLocaleString("id-ID")}
                  </span>
                  <span className="text-on-surface-variant text-sm">
                    {t.perPerson}
                  </span>
                </div>
                <p className="text-[10px] text-on-surface-variant mt-2 italic">
                  {t.finalPriceNote}
                </p>
              </div>
              <Button
                href={siteConfig.whatsappUrl}
                icon="chat"
                external
                className="w-full"
              >
                {t.bookViaWhatsApp}
              </Button>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <Icon name="verified_user" className="text-lg" />
                  {t.secureBooking}
                </div>
                <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <Icon name="calendar_month" className="text-lg" />
                  {t.flexibleRescheduling}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky Bottom Bar (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-t border-outline-variant/10 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-on-surface-variant">
            {t.startingFrom}
          </span>
          <span className="text-xl font-extrabold text-primary">
            Rp {pkg.price.toLocaleString("id-ID")}
          </span>
        </div>
        <Button href={siteConfig.whatsappUrl} icon="chat" external>
          {t.bookViaWhatsApp}
        </Button>
      </div>
    </>
  );
}
