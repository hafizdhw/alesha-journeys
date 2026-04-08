import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Alesha Journeys",
  whatsappUrl: "https://wa.me/620000000000",
  whatsappDisplay: "+62 XXX XXXX XXXX",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: "Tour Guide", href: "/tour-guide" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { platform: "Instagram", icon: "photo_camera", href: "#" },
    { platform: "TikTok", icon: "video_library", href: "#" },
  ],
};
