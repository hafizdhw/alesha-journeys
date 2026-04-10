import type { Metadata } from "next";
import { guides } from "@/data/guides";
import { guideTestimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { GuideCard } from "@/components/molecules/GuideCard";
import { StarRating } from "@/components/molecules/StarRating";
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
    title: dict.tourGuide.meta.title,
    description: dict.tourGuide.meta.description,
  };
}

const featureIcons = ["auto_stories", "photo_camera", "map", "translate"] as const;
const featureBgs = ["bg-primary-container", "bg-secondary-container", "bg-tertiary-container", "bg-primary-container"] as const;
const featureFgs = ["text-primary", "text-secondary", "text-tertiary", "text-primary"] as const;

export default async function TourGuidePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.tourGuide;

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-on-surface-variant mb-8 leading-relaxed max-w-xl">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={siteConfig.whatsappUrl} icon="chat" size="lg" external>
                {t.hero.cta}
              </Button>
              <div className="flex items-center gap-2 px-6 py-4 bg-surface-container rounded-full">
                <Icon name="verified_user" className="text-primary" />
                <span className="font-medium">{t.hero.badge}</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-lg md:rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Friendly local guide"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbYB-RLVJt7XDc_2_pKapIak-ATJieBdCwGqLT9seLT7NCZvxAtnHFM_eK6zZrs23ZH5iby1l2_C6ILkHiT1orPr5PcRy25hWWtj-Kuicn8xs0-ftCVhg2FA_AiFXETqP1JeTxQdLou1NSCjdp9kZYNPFapCzlK43gk-IKyEog7PJzww9hHb8wzt5aFHLF_SPfqvJfz-A2kayXSTuGxNHrfV8j8WYnGMT2j6UKRIvhQPj_xQwByJ980CqF3UyTq63u-6dDjOwtrZE"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary-container rounded md:rounded-lg -z-10" />
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-surface-container py-24 rounded-t-lg md:rounded-t-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-on-surface mb-4">{t.why.title}</h2>
            <p className="text-on-surface-variant">{t.why.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.why.features.map((feature, i) => (
              <div
                key={featureIcons[i]}
                className="bg-surface-container-lowest p-8 rounded md:rounded-lg hover:scale-[1.02] transition-transform duration-300"
              >
                <div
                  className={`w-12 h-12 ${featureBgs[i]} ${featureFgs[i]} rounded-lg md:rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon name={featureIcons[i]} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 mb-24">
        <div className="bg-surface-container-lowest rounded-lg md:rounded-xl p-1 md:p-2 shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 p-8 md:p-12">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                {t.pricing.label}
              </span>
              <h2 className="text-3xl font-bold mb-6">{t.pricing.title}</h2>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-extrabold text-on-surface">
                  {t.pricing.price}
                </span>
                <span className="text-on-surface-variant">{t.pricing.perDay}</span>
              </div>
              <p className="text-on-surface-variant max-w-md">{t.pricing.description}</p>
            </div>
            <div className="bg-secondary-container p-8 md:p-12 flex flex-col justify-center items-center md:items-start md:w-1/3">
              <Button
                href={siteConfig.whatsappUrl}
                variant="whatsapp"
                icon="chat"
                size="lg"
                external
                className="w-full mb-4"
              >
                {t.pricing.cta}
              </Button>
              <p className="text-xs text-on-secondary-container text-center md:text-left opacity-75">
                {t.pricing.noFees}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-center mb-16">{t.steps.title}</h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[2px] bg-outline-variant/30 -z-10" />
          {t.steps.items.map((step) => (
            <div key={step.num} className="text-center group">
              <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-container transition-colors border-4 border-background">
                <span className="text-2xl font-bold text-primary">{step.num}</span>
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guide Profiles */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">{t.guides.title}</h2>
            <p className="text-on-surface-variant">{t.guides.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold mb-6">{t.testimonials.title}</h2>
            <p className="text-on-surface-variant mb-8">{t.testimonials.subtitle}</p>
            <div className="bg-surface-container p-4 rounded md:rounded-lg inline-block">
              <span className="text-3xl font-bold text-primary block">
                {t.testimonials.reviewCount}
              </span>
              <span className="text-xs font-medium uppercase text-on-surface-variant">
                {t.testimonials.reviewLabel}
              </span>
            </div>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {guideTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-surface-container-lowest p-8 rounded md:rounded-lg shadow-sm border border-outline-variant/10 flex flex-col justify-between"
              >
                <div>
                  <StarRating rating={testimonial.rating} className="mb-4 text-amber-500" />
                  <p className="italic text-on-surface-variant mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${testimonial.colorClass}`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-xs text-on-surface-variant">{testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-primary rounded-lg md:rounded-xl p-12 text-center text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />
          <h2 className="text-4xl font-bold mb-6 relative z-10">{t.cta.title}</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto relative z-10">
            {t.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Button href={siteConfig.whatsappUrl} variant="whatsapp" icon="chat" size="lg" external>
              {t.cta.bookCta}
            </Button>
            <Button
              href={`/${lang}/about`}
              variant="ghost"
              size="lg"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:text-white"
            >
              {t.cta.aboutCta}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
