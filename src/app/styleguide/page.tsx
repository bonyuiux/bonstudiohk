import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import ButtonLink from "@/components/ButtonLink";

export const metadata: Metadata = { title: "Styleguide", robots: { index: false, follow: false } };

const colors = [
  ["paper", "Page background", "bg-paper"],
  ["surface", "Cards, inputs", "bg-surface"],
  ["line", "Hairlines, borders", "bg-line"],
  ["ink", "Primary text", "bg-ink"],
  ["muted", "Secondary text", "bg-muted"],
  ["accent", "Buttons, highlights", "bg-accent"],
  ["accent-soft", "Labels on light", "bg-accent-soft"],
  ["deep", "Footer, dark sections", "bg-deep"],
] as const;

const type = [
  ["t-display", "Cormorant 300 · 48→104px · lh 1.0", "Hero headline. One per page at most."],
  ["t-h1", "Cormorant 400 · 40→72px · lh 1.05", "Page title."],
  ["t-h2", "Cormorant 400 · 32→48px · lh 1.1", "Section title."],
  ["t-h3", "Cormorant 500 · 24→30px · lh 1.2", "Item title: a service, a package, a step."],
  ["t-lead", "Jost 400 · 18→21px · lh 1.55", "Intro paragraph under a title."],
  ["t-body", "Jost 400 · 16px · lh 1.65", "Default reading text."],
  ["t-small", "Jost 500 · 14px · lh 1.45", "Buttons, nav, form labels, captions."],
  ["t-eyebrow", "Jost 500 · 12px caps · +0.16em", "Label above a title."],
] as const;

export default function Styleguide() {
  return (
    <div className="container-site pb-section pt-32 md:pt-40">
      <p className="t-eyebrow text-muted">Design system</p>
      <h1 className="t-h1 mt-4">Bon Studio styleguide</h1>
      <p className="t-lead mt-5 max-w-[52ch] text-muted">
        Two typefaces, eight type roles, eight colour roles. Components only use these — never a raw font size or hex value. Source:
        <code className="t-small mx-1 rounded bg-paper-200 px-1.5 py-0.5">src/app/globals.css</code>
      </p>

      <h2 className="t-h2 mt-20 border-t border-line pt-8">Type</h2>
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

      <h2 className="t-h2 mt-20 border-t border-line pt-8">Colour</h2>
      <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {colors.map(([name, use, cls]) => (
          <li key={name}>
            <div className={`h-24 rounded-[3px] border border-line ${cls}`} />
            <code className="t-small mt-3 block text-accent">{name}</code>
            <p className="t-small text-muted">{use}</p>
          </li>
        ))}
      </ul>

      <h2 className="t-h2 mt-20 border-t border-line pt-8">Buttons</h2>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <WhatsAppButton location="styleguide" />
        <WhatsAppButton location="styleguide" tone="outline" />
        <ButtonLink href="/contact" tone="solid">Solid link</ButtonLink>
        <ButtonLink href="/contact">Outline link</ButtonLink>
        <ButtonLink href="/contact" tone="text">Text link</ButtonLink>
      </div>
      <div className="mt-6 inline-flex rounded-[3px] bg-deep p-6">
        <WhatsAppButton location="styleguide" tone="light" />
      </div>
    </div>
  );
}
