# Bon Studio design system

All values live in `src/app/globals.css`. Screens: **phone** < 810px · **tablet** 810–1199px · **desktop** ≥ 1200px. Every size and space is an even number of pixels.

## Type: 2 families, 4 roles, 2 weights

| Role | Family | Phone | Tablet | Desktop | Use |
|---|---|---|---|---|---|
| `t-display` | Italiana 400 (the logo's face) | 24/32 | 28/36 | 32/40 | Page and section titles. One per block. |
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

## Line language (owner, 2026-11-26)

The interface is drawn with thin lines, like a camera's viewfinder. **Every new UI element uses one of these motifs; no pills, boxes or shadows for state.**

| Motif | What it means | Where | Spec |
|---|---|---|---|
| **Progress line** | time passing, position in a sequence | hero carousel indicator | 32px long, 2px on photos (0.4 white track, solid white fill), fills left to right over the slide's time |
| **Frame corners** | this one is selected / focused | current thumbnail, keyboard focus in galleries | four 8px corners, 1px ink, 4px outside the item; "focus in" from 8px out, 0.4s. Class `.frame-mark` (+ `.is-on`) for anything new |
| **Drawn underline** | this text goes somewhere | hero link, footer link (`.textlink`) | no line at rest; on hover a 1px line draws in from the left, the → arrow nudges 6px, 0.4s |
| **Hairline rule** | one area ends, another starts | footer top, form fields | 1px `--line` on paper |
| **Hand line** | the photographer's own mark | hero big line only (one per site) | a pen-stroke swash with a small loop, 1.5px, draws in after the words arrive (1.4s) and again on hover. `.hero__line` + `.hand` |

Strokes: 1px on paper, 2px over photos (so they hold on a busy image). Motion: lines draw from the left or settle in from outside, 0.4s, `cubic-bezier(0.16, 1, 0.3, 1)`. Reduced motion: lines appear without drawing.

## Home hero

A full-bleed carousel: the film clip, then four photos (`home.slides` in `src/content/pages.ts`). Each slide shows for 6 seconds with a slow crossfade and settle. The logo sits top-left at sidebar size. Bottom-left (versions B and C combined):
- the big line in Italiana, which stays
- the slide's label as the second line, changing with each slide
- a hand-drawn swash under the big line (Hand line, see Line language)
- a text link to that category (drawn underline, see Line language)

Bottom-right: a sliding counter (01 / 05) and thin lines that fill as each slide plays. It pauses on hover and when the tab is hidden, and responds to swipe and the arrow keys. No zoom, no blur.

## Home below the hero

Gallery (`PhotoColumns`, with the sidebar) → **statement**: a full-width band with no sidebar, centred: one line in `t-display`, then one in `t-body` muted, 16 apart (64svh tall on tablet and desktop, section padding on phones) → "Have something in mind?" and the enquiry form, on the footer's grid (sidebar column empty) → footer. Copy: `homeSections` in `pages.ts`.

## Photo browser (category and /work pages)

After kengohino.com, in layout C (owner's pick): **the photos come first and the text is their caption.** The gallery is one screen a little shorter than the window, so the page title always shows below it in the first view. That's the cue that there's text underneath. The photo sits on a **soft panel** (`--surface`, a mount 32px on desktop and 16px on phones) and is always centred, landscape or portrait. On the right is a column of **even 3:2 thumbnails** (96×64, 4px apart) that slides so the current one stays at the vertical centre, inside the frame corners. Click the left or right half of the photo (the cursor says "← Prev" / "Next →"), use the arrow keys, or pick a thumbnail. "Full screen" opens the photo on its own. Phones get a 4:5 panel and a sideways 60×40 strip. Under it: title → paragraph → (Hong Kong: sessions) → button. Component: `PhotoBrowser`.

## Motion

Micro-animations come from [Motion Primitives](https://motion-primitives.com) (MIT), copied into `src/components/motion-primitives/`: TextEffect (hero text), ProgressiveBlur, Magnetic (buttons drift toward the pointer), SlidingNumber (counters), TransitionPanel (photo changes), Cursor (Prev/Next/Close), InView and AnimatedGroup (home rows). Reduced-motion settings are respected.

## Texture

A soft patch of window light with a shadow mullion drifts slowly at the top-right of every page (`Light` component), and a faint film grain covers the page. The footer has none (owner). It's decorative only, and turns off with reduced motion.
