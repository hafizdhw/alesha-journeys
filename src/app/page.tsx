import Link from "next/link";
import { packages } from "@/data/packages";
import { homeTestimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { PackageCard } from "@/components/molecules/PackageCard";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import { FeatureCard } from "@/components/molecules/FeatureCard";

export default function HomePage() {
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
            Discover Yogyakarta,{" "}
            <span className="text-primary">Your Way</span>
            <span className="block text-3xl md:text-4xl mt-2 font-medium opacity-80">
              Jelajahi Yogyakarta, Sesuai Caramu
            </span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-medium">
            Curated day trips &amp; private guides tailored to your personal
            rhythm. Experience the soul of Java beyond the ordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/packages" size="lg">
              Explore Packages
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              variant="outline"
              icon="chat"
              size="lg"
              external
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Packages (moved above Why Us per backlog) */}
      <section className="bg-surface-container py-24 px-6 rounded-xl mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                Signature Experiences
              </span>
              <h2 className="text-4xl font-extrabold">Curated Day Journeys</h2>
            </div>
            <Link
              href="/packages"
              className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline"
            >
              View All Packages{" "}
              <Icon name="arrow_forward" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <FeatureCard
            icon="travel_explore"
            title="Local Expertise"
            description="Deeply rooted knowledge of Jogja's hidden gems and cultural nuances."
            iconBgClass="bg-primary-container"
            iconTextClass="text-primary"
          />
          <FeatureCard
            icon="lock_open"
            title="Private & Flexible"
            description="No rigid schedules. We adapt to your pace and unexpected discoveries."
            iconBgClass="bg-secondary-container"
            iconTextClass="text-secondary"
          />
          <FeatureCard
            icon="verified_user"
            title="Easy WhatsApp Booking"
            description="Instant communication and flexible adjustments right from your phone."
            iconBgClass="bg-tertiary-container"
            iconTextClass="text-tertiary"
          />
        </div>
      </section>

      {/* Tour Guide CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary text-on-primary rounded-xl overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 p-12 lg:p-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Need a Personal Guide?
            </h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Hire a certified local guide for your own itinerary — flexible,
              bilingual, and deeply local. Perfect for those who want to wander
              without the worry.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Button href="/tour-guide" variant="outline" size="lg">
                Meet Our Guides
              </Button>
              <span className="text-sm italic opacity-70">
                Available independently from day trip packages
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-96 lg:h-auto self-stretch">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWT64aW78apI2x-DNxi9yfaM8DxHL8ZO5vtKcbZ2ABkYHOo-lWOjWMnsFu6hjj1i2AhT9uFAtFef2Cf4Y0ocsaGouno640jysCuOegLco-xtLD8V-oU_xboCzrb42e4rTlVqZ45nzx1K8qVHgyBAUUQ-gNychjnD_2FOn9oLOzhq4AfnlXYjcUOaYxwbV2wXMIrx44t6RB5gShv08W38VD-3rkhMRfFVWeLP9_c8xYPFgE7_hfWk6VnujFnTtaKNDRmJKJ1Y5hkXM"
              alt="Friendly local Indonesian tour guide"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Traveler Stories</h2>
          <p className="text-on-surface-variant font-medium">
            Hear from the souls who wandered with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeTestimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* Custom Trip Banner */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-secondary-container rounded-xl p-12 text-center border-2 border-dashed border-secondary/20">
          <Icon
            name="edit_calendar"
            className="text-secondary text-5xl mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-lg text-on-secondary-container mb-10 max-w-2xl mx-auto">
            We specialize in tailor-made journeys. Tell us your interests, and
            we&apos;ll craft a unique Yogyakarta experience just for you.
          </p>
          <Button
            href={siteConfig.whatsappUrl}
            variant="secondary"
            icon="chat"
            size="lg"
            external
            className="mx-auto bg-secondary text-on-secondary hover:bg-secondary-dim"
          >
            Plan your custom trip via WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
