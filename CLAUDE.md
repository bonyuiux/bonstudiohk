<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project context

Read `docs/PROJECT-LOG.md` first (status, hosting, domain, next steps) and `docs/MARKETING.md` for tags and events. Update the log when you change something significant.

## Rules

- **Design system:** read `docs/DESIGN.md` first. All values are in `src/app/globals.css`.
- **Type:** 2 families (Italiana for titles, the logo's face; Jost for everything else), 4 roles only: `t-display`, `t-heading`, `t-body`, `t-small`, plus `.muted` for the secondary line. No labels above titles, no italics, no all-caps, no other sizes or weights.
- **Spacing:** only the scale `--tight` 8, `--near` 16, `--list` 24, `--block` 48, `--section` 48/64/96 (classes `mt-tight`, `mt-near`, `mt-list`, `mt-block`, `section + section`). Even numbers only, at all 3 screen sizes (phone < 810, tablet 810–1199, desktop ≥ 1200).
- **Layout:** every page is `Shell`: the sticky text `Sidebar` on the left (sticks at `--top`, never touching the top), content on the right, left-aligned, text max 640px. Phone: logo + Menu (`MobileNav`). Titles use `PageHead`. Only home has a hero (`HeroCarousel`).
- **The original Framer replica** is preserved at git tag `og-replica` if ever needed.
- **Content** lives in `src/content/` (site details, page copy, photo list). Components should not hard-code copy that the owner will want to change.
- **Leads go to WhatsApp.** Any new contact point must call `track()` from `src/lib/analytics.ts`, or be a plain `<a>` to wa.me / mailto / tel / instagram (auto-tracked by `Analytics.tsx`).
- Keep existing URLs: they carry the Google ranking from the Framer site.
