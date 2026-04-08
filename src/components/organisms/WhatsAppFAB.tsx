import { siteConfig } from "@/data/site";
import { Icon } from "@/components/atoms/Icon";

export function WhatsAppFAB() {
  return (
    <a
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-whatsapp text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <Icon name="chat" filled className="text-3xl" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
    </a>
  );
}
