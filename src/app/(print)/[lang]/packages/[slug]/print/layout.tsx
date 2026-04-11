import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";
import "@/app/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function PrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${plusJakartaSans.variable} ${beVietnamPro.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
