import type { Metadata, Viewport } from "next";
import { Italiana, Jost } from "next/font/google";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { localBusinessLd } from "@/lib/seo";
import "./globals.css";

// Two families: Italiana (the logo's face, for titles) and Jost (for everything else)
const italiana = Italiana({ variable: "--font-italiana-loaded", subsets: ["latin"], weight: "400", display: "swap" });
const jost = Jost({ variable: "--font-jost-loaded", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Hong Kong Photographer | Couple, Pre-Wedding & Travel Portraits | Bon Studio", template: "%s" },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: { siteName: site.name, locale: "en_HK", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f5f3f0" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${italiana.variable} ${jost.variable}`}>
      <body>
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <JsonLd data={localBusinessLd} />
      </body>
    </html>
  );
}
