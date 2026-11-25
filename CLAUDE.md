<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project context

Read `docs/PROJECT-LOG.md` first (status, hosting, domain, next steps) and `docs/MARKETING.md` for tags and events. Update the log when you change something significant.

## Rules

- **This site is a 1:1 rebuild of the original Framer site** (owner's decision, 2026-11-25). Match it; do not redesign. All look values live in `src/app/globals.css`, measured from the live Framer site at its three breakpoints: phone < 810px, tablet 810–1199px, desktop ≥ 1200px.
- **Fonts:** Italiana (big headlines), Jost (everything else), Inter (form fields), as on the original.
- **Layout:** phone = white logo bar, content full width. Tablet/desktop = the sticky `Sidebar` on the left (Portrait/Wedding/Event/Hong Kong, divider, italic About/Service/Contact, WhatsApp + Instagram icons; current page bold) and content on the right (`Inner`). Home and /work pages have the full-screen video `Hero`.
- **Galleries:** `PhotoColumns` — two columns, landscape (`l`) or portrait (`p`) crop, light veil on hover. Photo order and shape per page live in `src/content/pages.ts`.
- **Content** lives in `src/content/` (site details, page copy, photo list). Components should not hard-code copy that the owner will want to change.
- **Leads go to WhatsApp.** Any new contact point must call `track()` from `src/lib/analytics.ts`, or be a plain `<a>` to wa.me / mailto / tel / instagram (auto-tracked by `Analytics.tsx`).
- Keep existing URLs: they carry the Google ranking from the Framer site.
