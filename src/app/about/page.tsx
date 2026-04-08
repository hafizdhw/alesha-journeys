import type { Metadata } from "next";
import { teamMembers } from "@/data/team";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { TeamCard } from "@/components/molecules/TeamCard";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Born from a deep love for Yogyakarta. Learn about Alesha Journeys and our mission.",
};

export default function AboutPage() {
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
            We Are Alesha Journeys
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Curating authentic memories in the heart of Java.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface leading-tight">
                Born from a deep love for Yogyakarta.
              </h2>
            </div>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                Alesha Journeys didn&apos;t start in an office; it began on the
                back of a vintage scooter cruising through the narrow alleys of
                Kotagede and the quiet temple paths of Prambanan. We saw a gap
                between the standard &ldquo;tourist routes&rdquo; and the
                vibrant, breathing soul of Yogyakarta that locals know.
              </p>
              <p>
                Our mission is simple: to show you the authentic side of our
                home. We want you to feel the warmth of a Javanese morning, the
                richness of our heritage, and the genuine smiles of people who
                call this land home.
              </p>
              <p>
                With a team of local experts, historians, and friends, we curate
                journeys that are personal, sustainable, and deeply immersive. We
                don&apos;t just take you to places; we connect you to stories.
              </p>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-3 translate-x-4">
              <img
                alt="Local Experience"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6ENpP8ycQhAWRqYvdUBx9fHMDFoWkkik8w617xdiz-cqGhAUBo_SFLaR6NZuMrWYQewmadToj38Jw2lcVGMX67h1CKrSV8yZICB9fTM9j99CNy-_vhtLOvD7PehEO8jNMC7ZN06_DXZFQYkTxH5MJNljTplC8RKKhovIYEHweusTIDxq4ty7hvpAoCw25aEyOR5v82jjvzOEf66TJ4t5U6J_KHZ8ZtZG2-64fYhtPWCQEjt-L_LH83i6rJI3PMY3MVcR1rBfFRLY"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square rounded-xl overflow-hidden shadow-2xl -rotate-6 border-8 border-background hidden md:block">
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
      <section className="bg-surface-container py-24 rounded-t-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-on-surface">
            The Pillars of Our Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "verified_user",
                title: "Authenticity",
                desc: "We bypass the generic to bring you true Javanese culture, from hidden art studios to the best morning gudeg in town.",
              },
              {
                icon: "eco",
                title: "Sustainability",
                desc: "Protecting our heritage and supporting local artisans ensures that the Yogyakarta we love thrives for generations.",
              },
              {
                icon: "volunteer_activism",
                title: "Warmth",
                desc: "In Javanese, we call it \u2018Ngayogyakarto\u2019\u2014a feeling of being at home. We treat every guest as a member of our family.",
              },
            ].map((value) => (
              <div
                key={value.icon}
                className="bg-surface-container-lowest p-10 rounded-lg shadow-sm border border-outline-variant/10 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Icon name={value.icon} className="text-primary text-3xl" />
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet the Curators
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            The passionate locals who bring your Indonesian adventures to life.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-20 px-6 max-w-5xl mx-auto">
        <div className="bg-primary text-on-primary rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-dim to-transparent opacity-50" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Want to travel with us?
            </h2>
            <p className="text-lg text-primary-container max-w-2xl mx-auto">
              Your authentic Yogyakarta adventure is just a conversation away.
              Let&apos;s create a journey that belongs only to you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button href="/packages" variant="secondary" size="lg">
                See Our Packages
              </Button>
              <Button
                href={siteConfig.whatsappUrl}
                variant="ghost"
                icon="chat"
                size="lg"
                external
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
