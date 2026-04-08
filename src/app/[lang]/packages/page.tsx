import type { Metadata } from "next";
import Link from "next/link";
import { packages } from "@/data/packages";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Badge } from "@/components/atoms/Badge";
import { getDictionary, hasLocale } from "@/dictionaries";
import type { Locale } from "@/dictionaries";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);
  return {
    title: dict.packages.meta.title,
    description: dict.packages.meta.description,
  };
}

export default async function PackagesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.packages;

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
              {t.hero.titleMain}{" "}
              <span className="text-primary">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              {t.hero.description}
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl transform rotate-2">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq8gnDfd33a5WLf1p462R8r98tNwZw9zAKkA7Kn1PfBCKPFRKWZ84bx0XAS2iHbDlql9mLgqC5uzr4eLTCVwydPnRd-wvHvfA6lwmHsFTQXUycP71x4-UlBnyf7JFRoepzaEBHLYRKXxN88_1Aw7swv2eqpKjmZF74DqQ9LFRmd_eQ159W4mSOIrIH4Y-4Rfo5m4DmhhBOwp6LS8FJv1M0nbWlNf3gBNyhlXOmNBjObp9QW_2TK6bGuGS2JcdLqfODZd3PbofshWA"
                alt="Stunning aerial view of Borobudur temple"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-48 rounded-lg overflow-hidden shadow-2xl border-8 border-surface transform -rotate-3 hidden md:block">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB62b2QutPQKrSu03-VmoAbTXG_6NBpstauPC7Sk0ibIzm8liyRlCK_LXcu1tXtxXgX8eYbQ0wXfZvsGFDqGG5eyWDVGCm_rmr6loz799Po8bdrRhIKmw0U2mhNyQHHn0NZEFYYs64pUJyEy3JSrfSHMIDV89wpyVgh-T3dxn3iCAG5m-18CwjxO2TzKnaRFf0gHz-ks82yweTvVCY2aiTJ2yxkDq80fJtsLIR3Es09Z-x2zihecdJUIitMeyKsf63jZ6T5UzrT8KU"
                alt="Traditional Javanese breakfast"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Package Listing */}
      <section className="px-6 py-12 max-w-5xl mx-auto space-y-12">
        {packages.map((pkg, index) => (
          <div
            key={pkg.slug}
            className={`group bg-surface-container-lowest rounded-lg p-8 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-10 transition-transform duration-300 hover:scale-[1.01]`}
          >
            <Link
              href={`/${lang}/packages/${pkg.slug}`}
              className="md:w-1/2 overflow-hidden rounded-md h-80 block"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={pkg.cardImage}
                alt={pkg.title}
              />
            </Link>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge
                    variant={
                      pkg.duration === "Full Day" ? "primary" : "secondary"
                    }
                  >
                    {pkg.duration}
                  </Badge>
                  <span className="text-tertiary flex items-center gap-1 font-medium text-sm">
                    <Icon name="location_on" className="text-sm" />{" "}
                    {pkg.location}
                  </span>
                </div>
                <Link href={`/${lang}/packages/${pkg.slug}`}>
                  <h2 className="text-3xl font-bold mb-4 text-on-surface hover:text-primary transition-colors">
                    {pkg.title}
                  </h2>
                </Link>
                <ul className="space-y-3 mb-8">
                  {pkg.featureIcons.map((f) => (
                    <li
                      key={f.icon}
                      className="flex items-center gap-3 text-on-surface-variant"
                    >
                      <Icon name={f.icon} className="text-primary" />
                      {f.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between border-t border-surface-container-high pt-6">
                <div>
                  <p className="text-xs text-outline">{t.card.from}</p>
                  <p className="text-xl font-bold text-on-surface whitespace-nowrap">
                    Rp {pkg.price.toLocaleString("id-ID")}
                    <span className="text-xs font-normal text-on-surface-variant ml-1">
                      {t.card.perPerson}
                    </span>
                  </p>
                </div>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-bold hover:bg-primary-dim transition-colors flex items-center gap-2"
                >
                  <Icon name="chat" />
                  <span className="hidden sm:inline">
                    {t.card.planViaWhatsApp}
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Custom Trip Banner */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto rounded-xl bg-primary-dim p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-on-primary mb-6">
              {t.custom.title}
            </h2>
            <p className="text-xl text-primary-container mb-10 max-w-2xl mx-auto">
              {t.custom.description}
            </p>
            <Button
              href={siteConfig.whatsappUrl}
              variant="secondary"
              icon="edit_calendar"
              size="lg"
              external
            >
              {t.custom.cta}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
