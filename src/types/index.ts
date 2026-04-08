export interface Package {
  slug: string;
  title: string;
  location: string;
  duration: "Full Day" | "Half Day";
  groupType: string;
  pickup: string;
  price: number;
  priceLabel: string;
  description: string;
  heroImage: string;
  cardImage: string;
  badge?: string;
  highlights: Highlight[];
  itinerary: ItineraryStep[];
  included: string[];
  notIncluded: string[];
  featureIcons: PackageFeature[];
}

export interface Highlight {
  icon: string;
  label: string;
}

export interface ItineraryStep {
  time: string;
  title: string;
  description: string;
}

export interface PackageFeature {
  icon: string;
  label: string;
}

export interface Guide {
  id: string;
  name: string;
  quote: string;
  languages: string;
  specialty: string;
  specialtyIcon: string;
  experience: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  country: string;
  initials: string;
  rating: number;
  colorClass: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  whatsappUrl: string;
  whatsappDisplay: string;
  navigation: NavItem[];
  socialLinks: { platform: string; icon: string; href: string }[];
}
