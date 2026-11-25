"use client";

// Loads every marketing tag that has an ID in marketing-config.ts, captures campaign
// attribution, and auto-tracks clicks on WhatsApp / email / phone / Instagram links
// anywhere on the site (so plain <a> links in server components are tracked too).
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { marketing } from "@/lib/marketing-config";
import { captureAttribution } from "@/lib/attribution";
import { track, type EventName } from "@/lib/analytics";

function linkEvent(href: string): EventName | null {
  if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) return "whatsapp_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.includes("instagram.com")) return "instagram_click";
  return null;
}

export default function Analytics() {
  const pathname = usePathname();
  const first = useRef(true);

  // Attribution on every navigation (UTMs can arrive on any page)
  useEffect(() => {
    captureAttribution();
    if (first.current) {
      first.current = false;
      return;
    }
    // SPA page views for pixels (GA4 tracks history changes itself)
    window.fbq?.("track", "PageView");
    window.ttq?.page();
  }, [pathname]);

  // Delegated click tracking
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      if (a.dataset.tracked === "manual") return; // component tracks it itself
      const href = a.getAttribute("href") ?? "";
      const ev = linkEvent(href);
      if (ev) track(ev, { link_location: a.dataset.location ?? "inline", service: a.dataset.service });
      else if (a.dataset.cta) track("cta_click", { link_location: a.dataset.cta, link_url: href });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  const { ga4Id, gtmId, googleAdsId, metaPixelId, tiktokPixelId } = marketing;
  const gtagId = ga4Id || googleAdsId;

  return (
    <>
      {gtmId && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}

      {gtagId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${
              ga4Id ? `gtag('config','${ga4Id}');` : ""
            }${googleAdsId ? `gtag('config','${googleAdsId}');` : ""}`}
          </Script>
        </>
      )}

      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
        </Script>
      )}

      {tiktokPixelId && (
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${tiktokPixelId}');ttq.page();}(window,document,'ttq');`}
        </Script>
      )}
    </>
  );
}
