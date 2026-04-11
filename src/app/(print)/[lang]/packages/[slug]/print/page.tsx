import { notFound } from "next/navigation";
import { packages, getPackageBySlug } from "@/data/packages";
import { getDictionary, hasLocale, locales } from "@/dictionaries";
import type { Locale } from "@/dictionaries";
import { ItineraryPrint } from "@/components/organisms/ItineraryPrint";

export function generateStaticParams() {
  return packages.flatMap((pkg) =>
    locales.map((lang) => ({ lang, slug: pkg.slug }))
  );
}

export default async function PrintItineraryPage({
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
    <div className="min-h-screen bg-background print:bg-white">
      <ItineraryPrint
        pkg={pkg}
        lang={lang}
        labels={{
          duration: t.duration,
          group: t.group,
          pickup: t.pickup,
          itinerary: t.itinerary,
          whatsIncluded: t.whatsIncluded,
          notIncluded: t.notIncluded,
        }}
      />
    </div>
  );
}
