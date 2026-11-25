import PageHead from "@/components/PageHead";
import Band from "@/components/Band";
import Figure from "@/components/Figure";
import Drift from "@/components/Drift";
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
      <PageHead rail="About" title="A soft pause in time, carefully preserved.">
        Bon Studio is a Hong Kong–based photography studio focused on calm, natural portraits.
      </PageHead>

      <Band gridClassName="gap-y-6 lg:gap-y-0">
        <Drift distance={24} className="col-span-6 md:col-span-4 lg:col-span-3 lg:mt-40 lg:pl-12">
          <Figure id="clifftop-traveller" aspect="aspect-[4/5]" sizes="(min-width: 1024px) 20vw, 50vw" />
        </Drift>
        <div className="axis-wide">
          <Figure id="couple-caravan" sizes="(min-width: 1024px) 70vw, 100vw" eager delay={120} />
        </div>
      </Band>

      <Band rail="Approach" className="py-section">
        <div className="axis-text">
          <h2 data-reveal="text" className="t-title">
            I’m drawn to the in-between moments — when light settles, expressions soften, and things feel quietly alive.
          </h2>
          <p data-reveal="text" className="t-body mt-6 max-w-[52ch] text-muted">
            With a minimalist, airy approach, I photograph couples, people and travellers in a way that feels relaxed and unforced. The goal
            isn’t to stage a moment, but to notice it — and keep it.
          </p>
        </div>
      </Band>

      <CtaBand />
    </>
  );
}
