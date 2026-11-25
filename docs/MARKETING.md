# Marketing: tags, events and automation

The goal: every enquiry is tracked back to the ad, post or search that brought it, and follow-up runs on its own.
This file covers what is built (phase 1) and what comes next (phases 2–3).

## Phase 1: built into the code

### Tags (switch on by adding an ID)

Tags load only when their ID is set. Set the IDs in **Vercel → Project → Settings → Environment Variables**, then redeploy. On your Mac, use `.env.local`.

| Variable | What it is | Where to find the ID |
|---|---|---|
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4. **Already on**, using the Framer site's ID `G-QFZT5G20BF`, so your history continues. | GA → Admin → Data streams |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (optional). Use it if you want to add tags yourself without code. If you also manage GA4 inside GTM, set `NEXT_PUBLIC_GA4_ID` to empty to avoid double counting. | tagmanager.google.com |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` + `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` | Google Ads conversion for each lead. | Google Ads → Goals → Conversions → your "Lead" action → Tag setup → "AW-…/label" |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel (Facebook and Instagram ads). | Meta Events Manager → Data sources |
| `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | TikTok Pixel. | TikTok Ads Manager → Assets → Events |

### Events sent automatically

Every event is pushed to the GTM `dataLayer` and to each tag that is switched on. Code: `src/lib/analytics.ts` and `src/components/Analytics.tsx`.

| Event | When | Counts as a lead? | GA4 | Google Ads | Meta | TikTok |
|---|---|---|---|---|---|---|
| `enquiry_submit` | Enquiry form sent (opens WhatsApp) | ✅ | + `generate_lead` | conversion | `Lead` | `SubmitForm` |
| `whatsapp_click` | Any WhatsApp button or link | ✅ | + `generate_lead` | conversion | `Contact` | `Contact` |
| `email_click` / `phone_click` | mailto / tel links | ✅ | + `generate_lead` | conversion | `Contact` | `Contact` |
| `instagram_click` | Instagram links | — | event | — | — | — |
| `cta_click` | "See Hong Kong sessions", "Send an enquiry", service cards… | — | event | — | — | — |
| Page views | Every page, including in-app navigation | — | auto | auto | `PageView` | `page` |

Each event carries `page_path`, `link_location` (header, footer, floating button…), `service` where known, and `lead_source`, the campaign that brought the visitor (see below).

**In GA4:** mark `generate_lead` as a **key event** (Admin → Events), so it shows as a conversion.

### Campaign attribution in WhatsApp

When a visitor arrives from a link with UTM tags, or from an ad click (`gclid`, `fbclid`, `ttclid`), the site remembers it. When they message you, the WhatsApp text ends with a line like:

> (sent from bonstudiohk.com · /hong-kong · instagram / social / spring-promo)

So you can see which post or ad brought each chat, even though WhatsApp itself is not tracked.

**Use UTM links everywhere you post.** Suggested scheme:

| Where | Link |
|---|---|
| Instagram bio | `https://bonstudiohk.com/?utm_source=instagram&utm_medium=bio` |
| Instagram story / post | `…/hong-kong?utm_source=instagram&utm_medium=social&utm_campaign=<post-name>` |
| Xiaohongshu | `…?utm_source=xiaohongshu&utm_medium=social&utm_campaign=<post-name>` |
| Google Business Profile | `…/?utm_source=google&utm_medium=gbp` |
| Klook / KKday / partners | `…/hong-kong?utm_source=<partner>&utm_medium=referral` |

### SEO

- Each page has its own title, description, canonical URL and social preview image.
- `sitemap.xml` and `robots.txt` are generated. After launch, submit `https://bonstudiohk.com/sitemap.xml` in Google Search Console.
- Structured data: `ProfessionalService` (local business) on every page, and `Service` on the four service pages.
- All photos have descriptive alt text for Google Images.
- Every Framer URL is kept, so rankings carry over.

## Phase 2: lead automation (next; needs your accounts)

Leads come in through WhatsApp, so automation has to go through WhatsApp too:

1. **WhatsApp Business app (free, do now):** set a greeting message, an away message and quick replies (`/price`, `/hk`, `/wedding`). Add labels: New lead, Quoted, Booked, Done.
2. **WhatsApp Business Platform (Cloud API)** via a provider such as respond.io, WATI or Twilio. Then:
   - Auto-reply with the right price guide based on the shoot type in the message.
   - Every new chat becomes a row in a CRM (Notion, Airtable or HubSpot free), with the `lead_source` line parsed out.
   - Follow-ups: a nudge after 2 days with no reply, a prep guide 3 days before the shoot, a review request and gallery link after delivery.
   - Send a "Booked" event back to Google Ads and Meta (offline conversions or the Conversions API), so ads optimise for real bookings, not just chats.
3. **Optional email capture:** a "Hong Kong photo spots guide" download in exchange for an email, feeding a newsletter in Resend or Mailchimp.

**Decisions needed from you:** WhatsApp provider (cost about US$15–50 a month), CRM choice, and whether to collect emails.

## Phase 3: content automation

- **SEO landing pages from data:** pages such as `/hong-kong/the-peak-photoshoot`, `/hong-kong/lamma-island-photoshoot` and `/pre-wedding/sai-kung` generated from one list of locations (photos, best time, how to get there). These are the most-searched terms for travel photoshoots.
- **Journal / blog** (MDX in the repo): one story per shoot, written with Claude from your notes, published by pushing to GitHub.
- **Instagram → site:** a scheduled GitHub Action that pulls your latest posts into a gallery, so the site never looks stale.
- **Scheduled social posts** from the same photo library (Buffer or Meta Business Suite API).
- **Weekly report:** a scheduled job that sends GA4 leads by source to your email or Notion.
