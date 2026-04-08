import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { FAQItem } from "@/components/molecules/FAQItem";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Alesha Journeys to plan your perfect Yogyakarta experience.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <header className="mb-16 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight leading-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Whether you&apos;re looking for a hidden temple trek or a serene
          sunset at Parangtritis, we&apos;re here to curate your perfect
          Yogyakarta experience.
        </p>
      </header>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Primary Contact Column */}
        <div className="lg:col-span-7 space-y-12">
          {/* WhatsApp Hero Card */}
          <div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-8 md:p-12">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                <Icon name="chat" filled className="text-primary text-5xl" />
              </div>
              <div className="space-y-2 mb-8">
                <span className="text-primary font-semibold tracking-wider uppercase text-xs">
                  Direct Channel
                </span>
                <h2 className="text-4xl font-bold text-on-surface">
                  {siteConfig.whatsappDisplay}
                </h2>
              </div>
              <Button
                href={siteConfig.whatsappUrl}
                icon="chat"
                size="lg"
                external
              >
                Chat on WhatsApp
              </Button>
              <p className="mt-6 text-on-surface-variant text-sm flex items-center gap-2">
                <Icon name="schedule" className="text-primary text-sm" />
                We typically reply within 1 hour
              </p>
            </div>
          </div>

          {/* Checklist Section */}
          <div className="bg-surface-container rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Icon name="edit_note" className="text-primary" />
              What to include in your message
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "calendar_today",
                  title: "Travel date",
                  desc: "When are you arriving?",
                },
                {
                  icon: "groups",
                  title: "Number of people",
                  desc: "Solo, couple, or family?",
                },
                {
                  icon: "map",
                  title: "Preferred package",
                  desc: "Or request a custom one",
                },
                {
                  icon: "medical_services",
                  title: "Special needs",
                  desc: "Dietary or accessibility",
                },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="flex items-start gap-4 p-4 bg-surface-container-lowest rounded-lg"
                >
                  <Icon name={item.icon} className="text-primary" />
                  <div>
                    <h4 className="font-bold text-on-surface">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 py-4">
            <p className="font-bold text-on-surface">Follow our journey:</p>
            <div className="flex gap-6">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
                  href={link.href}
                >
                  <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary transition-all">
                    <Icon name={link.icon} filled />
                  </div>
                  <span className="font-medium">{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Column */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10">
            <h3 className="text-2xl font-bold mb-8">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>

            {/* Decorative Image */}
            <div className="mt-12 rounded-lg overflow-hidden h-48 relative">
              <img
                alt="Prambanan Temple"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqxwY3VoJuJBowiavWZnFGTEy8uvScRS3eDn6cvj2ukXIhnLBrKpOYs0btppZ2pTgWJJFmsp2eHzAB_8SztXa8NSFGSa2gE3vn3vcoEDkfbFAyHa8tsB_Mf6Wgrs5qPq016G84M5b4HuJ-jkdeJwlh80ysvCyj36FWi8QB253XefkOW0gtzmRhoUv6Stj3dQ7HsLIcnxHk1bcoOsY-N9U4YuyYHlzCE5KiVwlFsQ_q07SIbfunHRGcR8tk5oz8s0LTUQ52Y_jHssk"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                Jogja awaits you
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
