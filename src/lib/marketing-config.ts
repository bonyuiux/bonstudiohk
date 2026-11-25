// Marketing tag IDs. Set them in Vercel → Project → Settings → Environment Variables
// (or .env.local when running on your Mac). Any tag left empty is simply not loaded.
// See docs/MARKETING.md for what each one is and where to find the ID.

export const marketing = {
  /** Google Analytics 4 measurement ID. Defaults to the ID the Framer site used, so reporting continues. */
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "G-QFZT5G20BF",
  /** Google Tag Manager container (GTM-XXXXXXX). Optional: use it if you want to manage tags without code. */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  /** Google Ads account (AW-XXXXXXXXX) and the conversion label for a lead. */
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
  googleAdsLeadLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL ?? "",
  /** Meta (Facebook / Instagram) Pixel ID. */
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  /** TikTok Pixel ID. */
  tiktokPixelId: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID ?? "",
};
