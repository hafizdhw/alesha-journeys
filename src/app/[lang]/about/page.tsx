import type { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { TeamCard } from "@/components/molecules/TeamCard";
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
    title: dict.about.meta.title,
    description: dict.about.meta.description,
  };
}

const valueIcons = ["verified_user", "eco", "volunteer_activism"] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.about;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[618px] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Yogyakarta Street Scene"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZj8JH_7Fw_XJlOepXpyrf-ZbKBehIwthNd74ZL0QiEe79pv1lVV6SmBBQmKxEZ0-7c5NgbuUJdRvzd649vXqu-eTZE7JTfVwBBNV7a5qTWq3nn0smqtYfNwplkoC9XzVN0rzzVyiIWPI5i__FDhpBYSm3VyhYTO5nuQM1NntEAUcbEgQi-ew9x7QMTuZ23GG85rzXHTPS7aDLS_HjJzkfi_Oe7zxyauXZPqEMc0TGpGrnKX1yeamcldDNKIugOKUi7ZVysR1Spb4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto font-medium">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                {t.story.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">
                {t.story.title}
              </h2>
            </div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>{t.story.p1}</p>
              <p>{t.story.p2}</p>
              <p>{t.story.p3}</p>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] rounded-lg md:rounded-xl overflow-hidden shadow-2xl rotate-3 translate-x-4">
              <img
                alt="Local Experience"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6ENpP8ycQhAWRqYvdUBx9fHMDFoWkkik8w617xdiz-cqGhAUBo_SFLaR6NZuMrWYQewmadToj38Jw2lcVGMX67h1CKrSV8yZICB9fTM9j99CNy-_vhtLOvD7PehEO8jNMC7ZN06_DXZFQYkTxH5MJNljTplC8RKKhovIYEHweusTIDxq4ty7hvpAoCw25aEyOR5v82jjvzOEf66TJ4t5U6J_KHZ8ZtZG2-64fYhtPWCQEjt-L_LH83i6rJI3PMY3MVcR1rBfFRLY"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square rounded-lg md:rounded-xl overflow-hidden shadow-2xl -rotate-6 border-8 border-background hidden md:block">
              <img
                alt="Cultural Detail"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpXgidxO5cOUeKxjfgqiBObPPvQdigW6UbTpmuyIesZgSFBGMwhNnttZyFqDbeF2mxErjYxDJuxdQIiiBXKuzRnwPgfM8y9869VkeNqjKByRO871ye_8IIfAb-_yR1O_Bk2h4clt_-nMzaEvy0ZulZMd20WJtYwubbySZg10lGdwVW5pmVQSRxZetXG0SKkY1Hrva4ZEH2cV04zBIR_DZl8v6rbjveiUWSxULnEFNVWuPMPKLhUb3508LlWafVvD5k0qi3Ghlpij8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-surface-container py-24 rounded-t-lg md:rounded-t-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-on-surface">
            {t.values.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {t.values.items.map((value, i) => (
              <div
                key={valueIcons[i]}
                className="bg-surface-container-lowest p-10 rounded md:rounded-lg shadow-sm border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Icon name={valueIcons[i]} className="text-primary text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-on-surface-variant">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.team.title}</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">{t.team.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-20 px-6 max-w-5xl mx-auto">
        <div className="bg-primary text-on-primary rounded-lg md:rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-dim to-transparent opacity-50" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">{t.cta.title}</h2>
            <p className="text-lg text-primary-container max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button href={`/${lang}/packages`} variant="secondary" size="lg">
                {t.cta.packagesCta}
              </Button>
              <Button
                href={siteConfig.whatsappUrl}
                variant="ghost"
                icon="chat"
                size="lg"
                external
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                {t.cta.chatCta}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
