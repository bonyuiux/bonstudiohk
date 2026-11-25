import PageIntro from "@/components/PageIntro";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
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
    <>
      <PageIntro eyebrow="About" title="A soft pause in time, carefully preserved.">
        Bon Studio is a Hong Kong–based photography studio focused on calm, natural portraits.
      </PageIntro>

      <section className="container-site">
        <div className="grid gap-4 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-7">
            <div className="overflow-hidden rounded-photo"><Photo id="couple-caravan" sizes="(min-width: 768px) 58vw, 100vw" eager /></div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="overflow-hidden rounded-photo"><Photo id="clifftop-traveller" sizes="(min-width: 768px) 42vw, 100vw" /></div>
          </Reveal>
        </div>
      </section>

      <section className="container-site py-section">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="t-eyebrow text-muted">The approach</p>
          </Reveal>
          <Reveal className="space-y-6 lg:col-span-7" delay={0.1}>
            <p className="t-h3 font-normal">
              I’m drawn to the in-between moments — when light settles, expressions soften, and things feel quietly alive.
            </p>
            <p className="t-lead text-muted">
              With a minimalist, airy approach, I photograph couples, people and travellers in a way that feels relaxed and unforced.
              The goal isn’t to stage a moment, but to notice it — and keep it.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
