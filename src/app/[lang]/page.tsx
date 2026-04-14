import type { Metadata } from "next";
import Link from "next/link";
import { packages } from "@/data/packages";
import { destinations } from "@/data/destinations";
import { homeTestimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { PackageCard } from "@/components/molecules/PackageCard";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { FeatureCard } from "@/components/molecules/FeatureCard";
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
    title: dict.home.meta.title,
    description: dict.home.meta.description,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.home;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[795px] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfGAqv_h10IUFI0Lo0IYtKhYQrzE4R5RCcn1YjrTUx4d_SD2HQVNr7qS6AGXqWFKE9oxVMscBDzhBgytobLu0gO-fWfsafxvgL0TFo3jhOiwVyeqyIKpXxgs2LFtMtC4VGT68uIYIM_ntvVERvFWQTQ32l21dDczj5O_gGiZ_bkd_-RRTCD7Gypc0w1QOxkWkuhQFTWiBIHZmSIAmYg5llJQiTKEZ1SX5h9hRMH4KvwB3Ygu9dGBRFpxqNrm8_AVAwzVlPKerYa7c"
            alt="Majestic Borobudur temple at sunrise"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-6 tracking-tight">
            {t.hero.titleLine1}{" "}
            <span className="text-primary">{t.hero.titleHighlight}</span>
            {t.hero.titleLine2 && (
              <span className="block text-3xl md:text-4xl mt-2 font-medium opacity-80">
                {t.hero.titleLine2}
              </span>
            )}
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-medium">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={`/${lang}/packages`} size="lg">
              {t.hero.ctaPackages}
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              variant="outline"
              icon="chat"
              size="lg"
              external
            >
              {t.hero.ctaChat}
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="bg-surface-container py-24 px-6 rounded-lg md:rounded-xl mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                {t.featured.label}
              </span>
              <h2 className="text-4xl font-extrabold">{t.featured.title}</h2>
            </div>
            <Link
              href={`/${lang}/packages`}
              className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline"
            >
              {t.featured.viewAll} <Icon name="arrow_forward" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} lang={lang as Locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="pt-16 pb-8 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <FeatureCard
            icon="travel_explore"
            title={t.why.localTitle}
            description={t.why.localDesc}
            iconBgClass="bg-primary-container"
            iconTextClass="text-primary"
          />
          <FeatureCard
            icon="lock_open"
            title={t.why.flexibleTitle}
            description={t.why.flexibleDesc}
            iconBgClass="bg-secondary-container"
            iconTextClass="text-secondary"
          />
          <FeatureCard
            icon="verified_user"
            title={t.why.whatsappTitle}
            description={t.why.whatsappDesc}
            iconBgClass="bg-tertiary-container"
            iconTextClass="text-tertiary"
          />
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                {t.topDestinations.label}
              </span>
              <h2 className="text-4xl font-extrabold">{t.topDestinations.title}</h2>
            </div>
            <Link
              href={`/${lang}/destinations`}
              className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline"
            >
              {t.topDestinations.viewAll} <Icon name="arrow_forward" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.slice(0, 3).map((dest) => (
              <Link
                key={dest.slug}
                href={`/${lang}/destinations/${dest.slug}`}
                className="group block bg-surface-container-lowest rounded-lg md:rounded-xl overflow-hidden border border-outline-variant/10 hover:shadow-lg transition-shadow"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={dest.cardImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={dest.categoryIcon} className="text-primary text-sm" />
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      {dest.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-sm text-on-surface-variant line-clamp-3">
                    {dest.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">{t.testimonials.title}</h2>
          <p className="text-on-surface-variant font-medium">
            {t.testimonials.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      {/* Custom Trip Banner */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-secondary-container rounded-lg md:rounded-xl p-12 text-center border-2 border-dashed border-secondary/20">
          <Icon name="edit_calendar" className="text-secondary text-5xl mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            {t.custom.title}
          </h2>
          <p className="text-lg text-on-secondary-container mb-10 max-w-2xl mx-auto">
            {t.custom.description}
          </p>
          <Button
            href={siteConfig.whatsappUrl}
            variant="secondary"
            icon="chat"
            size="lg"
            external
            className="mx-auto bg-secondary text-on-secondary hover:bg-secondary-dim"
          >
            {t.custom.cta}
          </Button>
        </div>
      </section>
    </div>
  );
}
