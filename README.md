# Bon Studio — bonstudiohk.com

The Bon Studio photography website, moved from Framer to plain code so it can be edited with Claude Code, Cursor and similar tools, and so marketing tags and automation can live in the code.

**Stack:** Next.js 16 · Tailwind CSS v4 · Motion · TypeScript. All pages are static, so the site is fast and cheap to host.

> Status, hosting, domain and history: [`docs/PROJECT-LOG.md`](docs/PROJECT-LOG.md). Marketing tags, events and automation: [`docs/MARKETING.md`](docs/MARKETING.md).

## Run it

You need Node.js 20 or newer.

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

## Where things live

| I want to change… | Edit |
|---|---|
| Phone, email, Instagram, tagline, services, nav | `src/content/site.ts` |
| Text and photo order on Portrait / Wedding / Event / Hong Kong / Work pages | `src/content/pages.ts` |
| Home page photos (Selected work) | `homeGallery` in `src/content/pages.ts` |
| Photo list and alt text | `src/content/photos.ts` |
| Home, About, Service, Contact pages | `src/app/<page>/page.tsx` |
| Colours, fonts, sizes, spacing | `src/app/globals.css` |
| Header, footer, buttons, form | `src/components/` |
| Marketing tag IDs | environment variables, see `.env.example` |

## Adding photos

1. Put the full-size originals in a folder outside the project, named the way you want the file called, for example `peak-sunset-couple.jpg`.
2. Run `npm run photos -- ~/Desktop/new-photos`. The photos are resized into `public/images/`, and the script prints one line per photo.
3. Paste those lines into `src/content/photos.ts` and write the alt text (what is in the photo; it helps Google).
4. Add the photo ID to a gallery in `src/content/pages.ts`.

## Pages (same addresses as the Framer site)

`/` · `/portrait` · `/wedding` · `/event` · `/hong-kong` · `/about` · `/service` · `/contact` · `/work/portrait` · `/work/wedding` · `/work/commercial` · `/thankyou`.

## Design

See [`docs/DESIGN.md`](docs/DESIGN.md): two typefaces (Italiana + Jost), four type roles, one spacing scale, a quiet text sidebar, and a carousel hero with three versions to choose from (pill at the top right of the home page). The exact Framer replica is kept at git tag `og-replica`.

Design-system skills for Claude Code are installed in `.claude/skills/design-system-ops`. How to use them: [`docs/DESIGN-SYSTEM-OPS.md`](docs/DESIGN-SYSTEM-OPS.md).

## Deploy

Import this repo at https://vercel.com/new with no settings. Every push to `main` then deploys. Domain steps are in `docs/PROJECT-LOG.md`.
