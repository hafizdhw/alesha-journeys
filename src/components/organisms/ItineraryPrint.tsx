"use client";
import Link from "next/link";
import { Package } from "@/types";
import { Icon } from "@/components/atoms/Icon";
import { siteConfig } from "@/data/site";

interface PrintLabels {
  duration: string;
  group: string;
  pickup: string;
  itinerary: string;
  whatsIncluded: string;
  notIncluded: string;
}

interface ItineraryPrintProps {
  pkg: Package;
  lang: string;
  labels: PrintLabels;
}

export function ItineraryPrint({ pkg, lang, labels }: ItineraryPrintProps) {
  return (
    <div>
      {/* Toolbar — hidden when printing */}
      <div className="print:hidden sticky top-0 z-10 bg-background/90 backdrop-blur-xl border-b border-outline-variant/10 px-6 py-3 flex items-center justify-between">
        <Link
          href={`/${lang}/packages/${pkg.slug}`}
          className="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
        >
          <Icon name="arrow_back" className="text-sm" />
          Back to Package
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-primary-dim transition-colors"
        >
          <Icon name="print" className="text-sm" />
          Print / Save as PDF
        </button>
      </div>

      {/* Print Content */}
      <div className="max-w-2xl mx-auto px-6 py-10 print:px-0 print:py-0 print:max-w-none">

        {/* Document Header */}
        <div className="flex items-start justify-between mb-8 pb-6 border-b-2 border-on-surface/20 print:border-black">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary print:text-black mb-1">
              {siteConfig.name}
            </p>
            <h1 className="text-2xl font-extrabold text-on-surface print:text-black leading-tight">
              {pkg.title}
            </h1>
          </div>
          <div className="text-right text-sm text-on-surface-variant print:text-black">
            <p className="font-medium">Date</p>
            <p className="border-b border-on-surface-variant print:border-black w-36 mt-1">&nbsp;</p>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="grid grid-cols-3 gap-4 bg-surface-container print:bg-transparent rounded md:rounded-lg p-4 mb-8 print:border print:border-black print:p-3">
          {[
            { icon: "schedule", label: labels.duration, value: pkg.duration },
            { icon: "groups", label: labels.group, value: pkg.groupType },
            { icon: "hotel", label: labels.pickup, value: pkg.pickup },
          ].map((item) => (
            <div key={item.icon} className="flex flex-col items-center text-center gap-1">
              <Icon name={item.icon} className="text-primary print:text-black" />
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant print:text-black font-bold">
                {item.label}
              </span>
              <span className="text-on-surface print:text-black font-semibold text-sm">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Itinerary */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-on-surface print:text-black uppercase tracking-wider mb-4 pb-2 border-b border-outline-variant print:border-black">
            {labels.itinerary}
          </h2>
          <div className="space-y-5 relative before:content-[''] before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/50 print:before:bg-black/30">
            {pkg.itinerary.map((step) => (
              <div key={step.time} className="relative pl-12">
                <div className="absolute left-0 top-0.5 flex items-center justify-center w-12">
                  <span className="text-xs font-bold text-primary print:text-black bg-primary-container print:bg-transparent print:border print:border-black rounded px-1.5 py-0.5 whitespace-nowrap">
                    {step.time}
                  </span>
                </div>
                <h3 className="font-bold text-on-surface print:text-black leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-on-surface-variant print:text-black/70 mt-0.5 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Included / Not Included */}
        <section className="grid grid-cols-2 gap-6 mb-8 pt-6 border-t border-outline-variant print:border-black">
          <div>
            <h3 className="text-sm font-bold text-on-surface print:text-black uppercase tracking-wider mb-3 flex items-center gap-1">
              <Icon name="check_circle" className="text-primary print:text-black text-sm" />
              {labels.whatsIncluded}
            </h3>
            <ul className="space-y-1.5">
              {pkg.included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-on-surface-variant print:text-black">
                  <span className="text-primary print:text-black mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-on-surface print:text-black uppercase tracking-wider mb-3 flex items-center gap-1">
              <Icon name="cancel" className="text-error print:text-black text-sm" />
              {labels.notIncluded}
            </h3>
            <ul className="space-y-1.5">
              {pkg.notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-on-surface-variant print:text-black">
                  <span className="text-on-surface-variant print:text-black mt-0.5">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Footer */}
        <div className="pt-4 border-t border-outline-variant print:border-black flex items-center justify-between">
          <p className="text-xs text-on-surface-variant print:text-black">
            <span className="font-bold">{siteConfig.name}</span> — Authentic Yogyakarta Experiences
          </p>
          <p className="text-xs font-bold text-primary print:text-black flex items-center gap-1">
            <Icon name="chat" className="text-xs" />
            {siteConfig.whatsappDisplay}
          </p>
        </div>
      </div>
    </div>
  );
}
