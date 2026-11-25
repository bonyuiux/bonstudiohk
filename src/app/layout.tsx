import type { Metadata, Viewport } from "next";
import { Italiana, Jost, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { localBusinessLd } from "@/lib/seo";
import "./globals.css";

// The original site's fonts
const italiana = Italiana({ variable: "--font-italiana-loaded", subsets: ["latin"], weight: "400", display: "swap" });
const jost = Jost({ variable: "--font-jost-loaded", subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"], display: "swap" });
const inter = Inter({ variable: "--font-inter-loaded", subsets: ["latin"], weight: ["400"], display: "swap" });

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

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${italiana.variable} ${jost.variable} ${inter.variable}`}>
      <body>
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <JsonLd data={localBusinessLd} />
      </body>
    </html>
  );
}
