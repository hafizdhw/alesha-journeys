import type { Metadata } from "next";
import { guides } from "@/data/guides";
import { guideTestimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { GuideCard } from "@/components/molecules/GuideCard";
import { StarRating } from "@/components/molecules/StarRating";

export const metadata: Metadata = {
  title: "Tour Guide Service",
  description:
    "Hire a certified local guide who knows the hidden side of Yogyakarta.",
};

export default function TourGuidePage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight">
              Your Personal Jogja Expert
            </h1>
            <p className="text-xl text-on-surface-variant mb-8 leading-relaxed max-w-xl">
              Hire a certified local guide who knows the hidden side of
              Yogyakarta. From ancient secrets to the best street food spots.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href={siteConfig.whatsappUrl}
                icon="chat"
                size="lg"
                external
              >
                Hire a Guide
              </Button>
              <div className="flex items-center gap-2 px-6 py-4 bg-surface-container rounded-full">
                <Icon name="verified_user" className="text-primary" />
                <span className="font-medium">Certified Local Experts</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                alt="Friendly local guide"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbYB-RLVJt7XDc_2_pKapIak-ATJieBdCwGqLT9seLT7NCZvxAtnHFM_eK6zZrs23ZH5iby1l2_C6ILkHiT1orPr5PcRy25hWWtj-Kuicn8xs0-ftCVhg2FA_AiFXETqP1JeTxQdLou1NSCjdp9kZYNPFapCzlK43gk-IKyEog7PJzww9hHb8wzt5aFHLF_SPfqvJfz-A2kayXSTuGxNHrfV8j8WYnGMT2j6UKRIvhQPj_xQwByJ980CqF3UyTq63u-6dDjOwtrZE"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary-container rounded-lg -z-10" />
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-surface-container py-24 rounded-t-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-on-surface mb-4">
              Why Travel With Our Guides?
            </h2>
            <p className="text-on-surface-variant">
              Experience Jogja beyond the tourist trail with companions who care
              about your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "auto_stories",
                title: "Local knowledge & storytelling",
                desc: "Deep dives into history, folklore, and the living culture of the city.",
                bg: "bg-primary-container",
                fg: "text-primary",
              },
              {
                icon: "photo_camera",
                title: "Photography assistance",
                desc: "Our guides know the best angles and times for your perfect travel shots.",
                bg: "bg-secondary-container",
                fg: "text-secondary",
              },
              {
                icon: "map",
                title: "Flexible itinerary",
                desc: "Change plans on the fly. We adapt to your mood and the day\u2019s rhythm.",
                bg: "bg-tertiary-container",
                fg: "text-tertiary",
              },
              {
                icon: "translate",
                title: "Bahasa & English speaking",
                desc: "Seamless communication with locals and deep cultural bridging.",
                bg: "bg-primary-container",
                fg: "text-primary",
              },
            ].map((item) => (
              <div
                key={item.icon}
                className="bg-surface-container-lowest p-8 rounded-lg hover:scale-[1.02] transition-transform duration-300"
              >
                <div
                  className={`w-12 h-12 ${item.bg} ${item.fg} rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon name={item.icon} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 mb-24">
        <div className="bg-surface-container-lowest rounded-xl p-1 md:p-2 shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 p-8 md:p-12">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                Transparent Pricing
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Simple, fair, and flexible.
              </h2>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-extrabold text-on-surface">
                  From $45
                </span>
                <span className="text-on-surface-variant">/ day</span>
              </div>
              <p className="text-on-surface-variant max-w-md">
                Customizable based on duration and needs. Includes guide fee and
                basic travel assistance. Transportation can be arranged
                separately.
              </p>
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
                Chat on WhatsApp
              </Button>
              <p className="text-xs text-on-secondary-container text-center md:text-left opacity-75">
                No booking fees. Instant response during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          Start Your Journey in 3 Steps
        </h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[2px] bg-outline-variant/30 -z-10" />
          {[
            {
              num: "01",
              title: "Tell us your plan",
              desc: "Share your interests, travel dates, and what you\u2019re looking for in a guide.",
            },
            {
              num: "02",
              title: "We match you",
              desc: "We match you with the right guide who shares your passions and speaks your language.",
            },
            {
              num: "03",
              title: "Meet & explore",
              desc: "Meet your guide at your hotel or preferred spot and start exploring Yogyakarta together.",
            },
          ].map((step) => (
            <div key={step.num} className="text-center group">
              <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-container transition-colors border-4 border-background">
                <span className="text-2xl font-bold text-primary">
                  {step.num}
                </span>
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
            <h2 className="text-3xl font-bold mb-2">
              Meet Our Expert Guides
            </h2>
            <p className="text-on-surface-variant">
              Trained, passionate, and ready to welcome you.
            </p>
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
            <h2 className="text-4xl font-bold mb-6">
              What travelers say about us
            </h2>
            <p className="text-on-surface-variant mb-8">
              Personal stories from those who explored Yogyakarta through the
              eyes of our local guides.
            </p>
            <div className="bg-surface-container p-4 rounded-lg inline-block">
              <span className="text-3xl font-bold text-primary block">
                200+
              </span>
              <span className="text-xs font-medium uppercase text-on-surface-variant">
                5-Star Reviews
              </span>
            </div>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {guideTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/10 flex flex-col justify-between"
              >
                <div>
                  <StarRating
                    rating={t.rating}
                    className="mb-4 text-amber-500"
                  />
                  <p className="italic text-on-surface-variant mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${t.colorClass}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold">{t.author}</p>
                    <p className="text-xs text-on-surface-variant">
                      {t.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-primary rounded-xl p-12 text-center text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />
          <h2 className="text-4xl font-bold mb-6 relative z-10">
            Ready to explore with a local?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto relative z-10">
            Don&apos;t just see Yogyakarta, experience it. Book your guide today
            and start your authentic adventure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Button
              href={siteConfig.whatsappUrl}
              variant="whatsapp"
              icon="chat"
              size="lg"
              external
            >
              Book a Guide via WhatsApp
            </Button>
            <Button href="/about" variant="ghost" size="lg" className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
