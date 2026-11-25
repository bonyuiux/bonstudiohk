<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Project context

Read `docs/PROJECT-LOG.md` first (status, hosting, domain, next steps) and `docs/MARKETING.md` for tags and events. Update the log when you change something significant.

## Rules

- **Type:** only the 8 roles in `src/app/globals.css` (`t-display`, `t-h1`, `t-h2`, `t-h3`, `t-lead`, `t-body`, `t-small`, `t-eyebrow`). Never set font size, family or weight by hand. This consistency was the main reason for the redesign.
- **Colour:** only the semantic roles (`paper`, `surface`, `line`, `ink`, `muted`, `accent`, `accent-soft`, `deep`, `on-deep`). No raw hex in components.
- **Content** lives in `src/content/` (site details, page copy, photo list). Components should not hard-code copy that the owner will want to change.
- **Leads go to WhatsApp.** Any new contact point must call `track()` from `src/lib/analytics.ts`, or be a plain `<a>` to wa.me / mailto / tel / instagram (auto-tracked by `Analytics.tsx`).
- Keep existing URLs: they carry the Google ranking from the Framer site.
