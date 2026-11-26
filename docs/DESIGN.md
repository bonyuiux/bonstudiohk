# Bon Studio design system

All values live in `src/app/globals.css`. Screens: **phone** < 810px · **tablet** 810–1199px · **desktop** ≥ 1200px. Every size and space is an even number of pixels.

## Type: 2 families, 4 roles, 2 weights

| Role | Family | Phone | Tablet | Desktop | Use |
|---|---|---|---|---|---|
| `t-display` | Italiana 400 (the logo's face) | 32/40 | 40/48 | 48/56 | Page and section titles. One per block. |
| `t-heading` | Jost 500 | 18/28 | 20/28 | 20/28 | Names in a list: a service, a session |
| `t-body` | Jost 400 | 16/24 | 16/24 | 16/24 | Everything you read, buttons, form fields |
| `t-small` | Jost 400 | 14/20 | 14/20 | 14/20 | Menu, labels, captions |

Grey (`.muted`) is the only other variation: it marks the secondary line (a description under a name, a field label). No labels above titles, no italics, no all-caps, no third weight.

## Spacing: one scale

| Token | Size | Relationship |
|---|---|---|
| `--tight` | 8 | A thing and its own description (name → detail, label → field, menu items) |
| `--near` | 16 | A title and its paragraph |
| `--list` | 24 | Items in a list, form fields, menu groups |
| `--block` | 48 | Blocks inside a section: intro → list → gallery → button |
| `--section` | 48 / 64 / 96 | Between sections |
| `--gutter` | 16 / 32 / 48 | Page edge |
| `--top` | 32 / 32 / 48 | Top of the page; the sidebar sticks at the same distance |
| `--gallery-gap` | 16 / 16 / 24 | Between photos |

Classes: `.mt-tight`, `.mt-near`, `.mt-list`, `.mt-block`, `.section + .section`.

Example (Hong Kong page): title → 16 → intro → 48 → sessions (name → 8 → detail, 24 between sessions) → 48 → gallery → 48 → button. That's three values in the whole page instead of the original's five or six.

## Layout

- **Sidebar** (tablet, desktop): logo, then three text groups (work · studio · WhatsApp/Instagram), 48px under the logo, 24px between groups, 8px between links. A small dot marks the current page. Sticky at `--top` (48px on desktop), so it never touches the top edge.
- **Phone:** logo + "Menu", which opens the same three groups full-screen.
- **Content:** left-aligned. Text never runs wider than 640px (`.measure`); photos use the full column.

## Home hero

A full-bleed carousel: the film clip, then four photos (`home.slides` in `src/content/pages.ts`). Each slide shows for 6 seconds with a slow crossfade and settle. The logo sits top-left at the same size as the sidebar logo. A line indicator fills as each slide plays; it pauses on hover and when the tab is hidden. It also responds to swipe and the arrow keys, and reduced motion removes the zoom.

**Three text versions to choose from** (temporary pill at the top right, or `?hero=a|b|c`):
- **A: Image only.** Logo and indicator, nothing else (closest to mikiyatakimoto.com).
- **B: Tagline.** "A soft pause in time, carefully preserved." bottom-left at display size (48px, was 64px centred).
- **C: Captions.** Each slide names its shoot and place ("Wedding · Hong Kong") with a link to that page, plus a 01 / 05 counter.

Once you've chosen, delete the `<div className="preview">` block in `src/components/HeroCarousel.tsx` and keep the chosen version (ask Claude: "keep hero version B and remove the switcher").
