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

A full-bleed carousel: the film clip, then four photos (`home.slides` in `src/content/pages.ts`). Each slide shows for 6 seconds with a slow crossfade and settle. The logo sits top-left at sidebar size. Bottom-left (versions B and C combined):
- the big line in Italiana, which stays
- the slide's label as the second line, changing with each slide
- a button to that category

Bottom-right: a sliding counter (01 / 05) and thin lines that fill as each slide plays. It pauses on hover and when the tab is hidden, responds to swipe and the arrow keys, and a progressive blur sits behind the text.

## Photo browser (category and /work pages)

After kengohino.com: one large photo at a time with a thumbnail rail on the right (a strip under the photo on phones); the current thumbnail has corner marks. Click the left or right half (the cursor says "← Prev" / "Next →"), use the arrow keys or pick a thumbnail. The counter slides. "Full screen" opens the photo on its own ("Close" cursor, Esc). Photos crossfade with a light blur. Component: `PhotoBrowser`.

## Home: Recent work

One row per category: name (heading), one line (muted), "See all N"; then a strip of photos at a shared height that scrolls sideways with snap. Rows fade up on arrival, photos stagger in, and the right edge melts into a progressive blur. Component: `WorksIndex`, data `worksIndex` in `pages.ts`.

## Motion

Micro-animations come from [Motion Primitives](https://motion-primitives.com) (MIT), copied into `src/components/motion-primitives/`: TextEffect (hero text), ProgressiveBlur, Magnetic (buttons drift toward the pointer), SlidingNumber (counters), TransitionPanel (photo changes), Cursor (Prev/Next/Close), InView and AnimatedGroup (home rows). Reduced-motion settings are respected.

## Texture

A soft patch of window light with a shadow mullion drifts slowly at the top-right of every page, a darker version sits in the footer (`Light` component), and a faint film grain covers the page. It's decorative only, and turns off with reduced motion.
