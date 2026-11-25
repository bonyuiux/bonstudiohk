import type { Metadata } from "next";
import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import TextBlock from "@/components/TextBlock";
import WhatsAppButton from "@/components/WhatsAppButton";
import LineLink from "@/components/LineLink";

export const metadata: Metadata = { title: "Styleguide", robots: { index: false, follow: false } };

const colors = [
  ["paper", "Page background", "bg-paper"],
  ["surface", "Photo placeholders", "bg-surface"],
  ["line", "Hairlines, field underlines", "bg-line"],
  ["ink", "Primary text", "bg-ink"],
  ["muted", "Secondary text", "bg-muted"],
  ["accent", "Buttons, active nav", "bg-accent"],
  ["accent-soft", "Numbers, small marks", "bg-accent-soft"],
  ["deep", "Footer", "bg-deep"],
] as const;

const type = [
  ["t-display", "Cormorant 300 · 48/52 → 72/76 → 88/92", "Hero headline only."],
  ["t-title", "Cormorant 300 · 36/40 → 44/48 → 56/60", "Page and section titles, service names."],
  ["t-heading", "Cormorant 400 · 24/30 → 28/34", "Names in a list: a package, a step."],
  ["t-body", "Jost 400 · 18/30", "All reading text, nav, links."],
  ["t-small", "Jost 400 · 14/20", "Numbers, labels, buttons."],
] as const;

const spacing = [
  ["tight", "8", "Lines inside one group: summary → detail, list items"],
  ["stack", "24", "Under a title, between form fields"],
  ["block", "40", "Before an action, between a title and its content"],
  ["row", "64", "Between repeated rows (services)"],
  ["section", "64 → 96 → 128", "Between sections"],
  ["gallery", "16 → 24", "Between photos"],
] as const;

export default function Styleguide() {
  return (
    <Shell>
      <PageHead title="Bon Studio styleguide" summary="Two typefaces, five type roles, one spacing scale, one layout.">
        Every page is a sidebar on the left and content on the right. Everything in the content column is left-aligned on its edge. Source:
        src/app/globals.css
      </PageHead>

      <Section label="The text pattern">
        <TextBlock size="heading" title="The one text pattern" />
        <div className="mt-block rounded-photo border border-line p-block">
          <TextBlock index="01" title="Portrait" summary="Couples · Family · Pet · Travel" action={<LineLink href="/portrait">View portrait</LineLink>}>
            Relaxed sessions for the people (and animals) you love, in Hong Kong or wherever you travel.
          </TextBlock>
        </div>
      </Section>

      <Section label="Type">
        <TextBlock size="heading" title="Type" />
        <ul className="mt-block border-b border-line">
          {type.map(([cls, spec, use]) => (
            <li key={cls} className="border-t border-line py-stack">
              <p className="t-small text-accent-soft">
                .{cls} · {spec} · {use}
              </p>
              <p className={`${cls} mt-tight`}>A soft pause in time.</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Spacing">
        <TextBlock size="heading" title="Spacing" />
        <ul className="mt-block max-w-text border-b border-line">
          {spacing.map(([name, px, use]) => (
            <li key={name} className="flex gap-stack border-t border-line py-stack">
              <span className="t-body w-24 shrink-0">{name}</span>
              <span className="t-body w-32 shrink-0 tabular-nums text-muted">{px}px</span>
              <span className="t-small pt-1 text-muted">{use}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Colour">
        <TextBlock size="heading" title="Colour" />
        <ul className="mt-block grid grid-cols-2 gap-gallery md:grid-cols-4">
          {colors.map(([name, use, cls]) => (
            <li key={name}>
              <div className={`h-24 rounded-photo border border-line ${cls}`} />
              <p className="t-body mt-tight">{name}</p>
              <p className="t-small text-muted">{use}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Links and buttons">
        <TextBlock size="heading" title="Links & buttons">
          Links are a line and a word. The only pill is WhatsApp.
        </TextBlock>
        <div className="mt-block flex flex-col items-start gap-stack">
          <LineLink href="/contact">Line link</LineLink>
          <WhatsAppButton location="styleguide" tone="line" label="WhatsApp line link" />
          <WhatsAppButton location="styleguide" />
        </div>
      </Section>
    </Shell>
  );
}
