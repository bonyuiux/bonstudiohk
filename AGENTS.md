<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project context

Read `docs/PROJECT-LOG.md` first (status, hosting, domain, next steps) and `docs/MARKETING.md` for tags and events. Update the log when you change something significant.

## Rules

- **Type:** only the 5 roles in `src/app/globals.css` (`t-display`, `t-title`, `t-heading`, `t-body`, `t-small`). Never set font size, family or weight by hand. Text is always built with `TextBlock`: small number/label → title → summary (ink) → detail (muted) → action. No caps eyebrows, no italics.
- **Spacing:** only the named scale: `tight` 8, `stack` 24, `block` 40, `row` 64, `section` 64/96/128, `gallery` 16/24 (e.g. `mt-stack`, `pb-section`, `gap-gallery`). No other margins or gaps between content.
- **Even numbers only:** every font size, line height, spacing, radius and offset is an even number of pixels at every breakpoint (owner's rule). Sizes step at `md`/`lg`; no fluid `clamp()`. Only 1px hairlines are exempt.
- **Layout:** every page is `Shell` — the sticky `Sidebar` on the left (logo, Portrait/Wedding/Event/Hong Kong, divider, About/Service/Contact, WhatsApp + Instagram icons), content on the right. Inside the content everything is left-aligned on its edge; nothing is centred. Use `Section` for sections and `split` for text + photo. Below 1024px the sidebar becomes the top bar + menu (`Header`). Only the home page has the full-width hero above the shell.
- **Links** are `LineLink` (a line and a word). The only pill is the WhatsApp button.
- **Motion** is quiet: `data-reveal="text" | "image" | "line"` (see globals.css), `Figure` for photos, page fade in `app/template.tsx`. Content must stay visible without JS.
- **Colour:** light warm paper. Only the semantic roles (`paper`, `surface`, `line`, `ink`, `muted`, `accent`, `accent-soft`, `deep`, `on-deep`). No raw hex in components.
- **Content** lives in `src/content/` (site details, page copy, photo list). Components should not hard-code copy that the owner will want to change.
- **Leads go to WhatsApp.** Any new contact point must call `track()` from `src/lib/analytics.ts`, or be a plain `<a>` to wa.me / mailto / tel / instagram (auto-tracked by `Analytics.tsx`).
- Keep existing URLs: they carry the Google ranking from the Framer site.
