import type { Metadata } from "next";
import { site } from "@/content/site";

/** Per-page metadata with canonical URL and social preview. */
export function pageMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_HK",
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/opengraph-image.jpg`,
  logo: `${site.url}/icon.png`,
  email: site.email,
  telephone: site.phoneE164,
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "Hong Kong", addressCountry: "HK" },
  areaServed: [{ "@type": "City", name: "Hong Kong" }],
  sameAs: [site.instagram.url],
  knowsAbout: ["Portrait photography", "Couple photography", "Pre-wedding photography", "Wedding photography", "Event photography", "Travel photoshoot"],
};

export function serviceLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: "Hong Kong" },
  };
}
