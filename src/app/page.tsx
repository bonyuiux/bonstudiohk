import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import Band from "@/components/Band";
import Figure from "@/components/Figure";
import Drift from "@/components/Drift";
import Photo from "@/components/Photo";
import Gallery from "@/components/Gallery";
import LineLink from "@/components/LineLink";
import ServiceSections from "@/components/ServiceSections";
import EnquiryForm from "@/components/EnquiryForm";
import { homeGallery, pages } from "@/content/pages";
import { site } from "@/content/site";

export default function Home() {
  const hk = pages["hong-kong"];
  return (
    <>
      <HeroVideo />

      {/* About — Izanami-style offset pair: a small photo on the margin, a tall one on the right, words on the content line */}
      <Band id="intro" rail="About" className="scroll-mt-20 py-section" gridClassName="gap-y-12 lg:gap-y-0">
        <Drift distance={24} className="col-span-6 md:col-span-4 lg:col-span-3 lg:row-start-1 lg:mt-24 lg:pl-12">
          <Figure id="beanie-warm-drink" aspect="aspect-[4/5]" sizes="(min-width: 1024px) 20vw, 50vw" />
        </Drift>
        <Drift distance={56} className="axis-media lg:row-span-2 lg:row-start-1">
          <Figure id="ferry-deck-portrait" aspect="aspect-[3/4]" delay={160} sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" />
        </Drift>
        <div className="axis-text lg:row-start-2 lg:mt-32">
          <h2 data-reveal="text" className="t-title">
            I capture quiet moments as they naturally unfold — gentle light, honest emotion.
          </h2>
          <p data-reveal="text" className="t-body mt-6 max-w-[44ch] text-muted">
            A Hong Kong photographer for natural portraits, couples, weddings and travel photoshoots. Calm, airy and never staged.
          </p>
          <div data-reveal="text" className="mt-10">
            <LineLink href="/about" cta="home_intro_about">
              About Bon Studio
            </LineLink>
          </div>
        </div>
      </Band>

      <ServiceSections />

      {/* Selected work */}
      <Band rail="Work" className="py-section" gridClassName="gap-y-12 md:gap-y-16">
        <div className="axis-text">
          <h2 data-reveal="text" className="t-title">
            Moments with the people who matter.
          </h2>
          <p data-reveal="text" className="t-body mt-6 text-muted">
            More in{" "}
            <Link href="/work/portrait" className="text-ink underline hover:text-accent">portrait</Link>,{" "}
            <Link href="/work/wedding" className="text-ink underline hover:text-accent">wedding</Link> and{" "}
            <Link href="/work/commercial" className="text-ink underline hover:text-accent">commercial</Link> work.
          </p>
        </div>
        <div className="axis-wide">
          <Gallery ids={homeGallery} columns={3} />
        </div>
      </Band>

      {/* Hong Kong — full-bleed misty photograph, words on the content line */}
      <section aria-labelledby="hk-title" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Photo id="hk-promenade-walk" fill sizes="100vw" className="opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/40 to-paper" />
        </div>
        <Band rail="Hong Kong" className="py-section">
          <div className="axis-text py-16">
            <h2 id="hk-title" data-reveal="text" className="t-title">
              {hk.title}
            </h2>
            <p data-reveal="text" className="t-body mt-6 max-w-[44ch] text-ink/80">
              {hk.intro}
            </p>
            <ul className="mt-12 border-b border-line">
              {hk.packages!.map((p) => (
                <li key={p.name} data-reveal="text" className="border-t border-line py-6">
                  <h3 className="t-heading">{p.name}</h3>
                  <p className="t-body mt-1 text-muted">{p.detail}</p>
                </li>
              ))}
            </ul>
            <div data-reveal="text" className="mt-10">
              <LineLink href="/hong-kong" cta="home_hk">
                Hong Kong sessions
              </LineLink>
            </div>
          </div>
        </Band>
      </section>

      {/* Enquire */}
      <Band id="enquire" rail="Enquire" className="py-section">
        <div className="axis-text">
          <h2 data-reveal="text" className="t-title">
            Tell me about your moment.
          </h2>
          <p data-reveal="text" className="t-body mt-6 text-muted">
            {site.replyPromise}
          </p>
        </div>
        <div data-reveal="text" className="axis-wide lg:col-end-11">
          <EnquiryForm />
        </div>
      </Band>
    </>
  );
}
