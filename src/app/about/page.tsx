import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import Section from "@/components/Section";
import TextBlock from "@/components/TextBlock";
import Figure from "@/components/Figure";
import CtaBand from "@/components/CtaBand";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Bon Studio — Hong Kong Portrait Photographer",
  description: "Bon Studio is a Hong Kong photography studio focused on calm, natural portraits of couples, families and travellers. Minimal, airy and unforced.",
  path: "/about",
  image: "/images/couple-caravan.jpg",
});

export default function About() {
  return (
    <Shell>
      <PageHead title="A soft pause in time, carefully preserved." summary="Bon Studio is a Hong Kong–based photography studio focused on calm, natural portraits." />
      <Section label="Photos">
        <div className="split items-start">
          <Figure id="couple-caravan" aspect="aspect-[4/5]" eager sizes="(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw" />
          <Figure id="clifftop-traveller" aspect="aspect-[4/5]" delay={80} sizes="(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw" />
        </div>
      </Section>
      <Section label="Approach">
        <TextBlock title="I’m drawn to the in-between moments — when light settles, expressions soften, and things feel quietly alive.">
          With a minimalist, airy approach, I photograph couples, people and travellers in a way that feels relaxed and unforced. The goal isn’t
          to stage a moment, but to notice it — and keep it.
        </TextBlock>
      </Section>
      <CtaBand />
    </Shell>
  );
}
