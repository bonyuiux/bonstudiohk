import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import LineLink from "@/components/LineLink";

export const metadata: Metadata = { title: "Styleguide", robots: { index: false, follow: false } };

const colors = [
  ["paper", "Page background", "bg-paper"],
  ["surface", "Photo placeholders", "bg-surface"],
  ["line", "Hairlines, borders", "bg-line"],
  ["ink", "Primary text", "bg-ink"],
  ["muted", "Secondary text", "bg-muted"],
  ["accent", "Hover, highlights", "bg-accent"],
  ["accent-soft", "Numbers, decoration", "bg-accent-soft"],
  ["deep", "Menu, footer", "bg-deep"],
] as const;

const type = [
  ["t-display", "Cormorant 300 · 48/52 → 72/76 → 96/100px", "Hero headline only."],
  ["t-title", "Cormorant 300 · 36/40 → 48/52 → 60/64px", "Page and section titles."],
  ["t-heading", "Cormorant 400 · 24/30 → 28/34px", "Names of things: a service, a package, a step."],
  ["t-body", "Jost 400 · 18/30px", "All reading text, intros included."],
  ["t-small", "Jost 400 · 14/20px", "Interface: nav, buttons, form labels, meta."],
] as const;

export default function Styleguide() {
  return (
    <div className="container-site pb-section pt-36 md:pt-48">
      <h1 className="t-title">Bon Studio styleguide</h1>
      <p className="t-body mt-5 max-w-[56ch] text-muted">
        Two typefaces, five type roles, three weights. A text block uses at most two roles: a serif title and sans body. No eyebrow
        labels, no all-caps. Every size, line height and spacing value is an even number of pixels. Source:
        <code className="t-small mx-1 rounded bg-surface px-1.5 py-0.5">src/app/globals.css</code>
      </p>

      <h2 className="t-title mt-20 border-t border-line pt-8">Type</h2>
      <ul className="mt-8 divide-y divide-line">
        {type.map(([cls, spec, use]) => (
          <li key={cls} className="grid gap-4 py-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <code className="t-small text-accent">.{cls}</code>
              <p className="t-small mt-1 text-muted">{spec}</p>
              <p className="t-small mt-1 text-muted">{use}</p>
            </div>
            <p className={`${cls} lg:col-span-9`}>A soft pause in time, carefully preserved.</p>
          </li>
        ))}
      </ul>

      <h2 className="t-title mt-20 border-t border-line pt-8">Colour</h2>
      <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {colors.map(([name, use, cls]) => (
          <li key={name}>
            <div className={`h-24 rounded-field border border-line ${cls}`} />
            <code className="t-small mt-3 block text-accent">{name}</code>
            <p className="t-small text-muted">{use}</p>
          </li>
        ))}
      </ul>

      <h2 className="t-title mt-20 border-t border-line pt-8">Links & buttons</h2>
      <p className="t-body mt-4 max-w-[56ch] text-muted">Links are a line and a word. The only pill is WhatsApp, in the header, menu and contact page.</p>
      <div className="mt-8 flex flex-col items-start gap-4">
        <LineLink href="/contact">Line link</LineLink>
        <WhatsAppButton location="styleguide" tone="line" label="WhatsApp line link" />
        <WhatsAppButton location="styleguide" />
        <WhatsAppButton location="styleguide" tone="outline" size="sm" />
      </div>

      <h2 className="t-title mt-20 border-t border-line pt-8">Layout</h2>
      <p className="t-body mt-4 max-w-[56ch] text-muted">
        Two alignment lines on every page: the margin, and the content line (column 4 of 12 on desktop, 3 on tablet, the margin on phones).
        Nothing is centred. Utilities: <code className="t-small">grid-site</code>, <code className="t-small">axis-text</code>,{" "}
        <code className="t-small">axis-wide</code>, <code className="t-small">axis-media</code>, <code className="t-small">axis-full</code>.
      </p>
    </div>
  );
}
