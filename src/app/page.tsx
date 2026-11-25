import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import Gallery from "@/components/Gallery";
import ServiceList from "@/components/ServiceList";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import ButtonLink from "@/components/ButtonLink";
import { homeGallery, pages } from "@/content/pages";
import { site } from "@/content/site";

export default function Home() {
  const hk = pages["hong-kong"];
  return (
    <>
      <HeroVideo />

      {/* Intro */}
      <section id="intro" className="container-site scroll-mt-20 py-section">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="t-eyebrow text-muted">About Bon Studio</p>
          <p className="t-h2 mt-6 [text-wrap:balance]">
            I capture quiet moments as they naturally unfold — gentle light, honest emotion.
          </p>
          <p className="t-lead mx-auto mt-6 max-w-[44ch] text-muted">
            A Hong Kong photographer for natural portraits, couples, weddings and travel photoshoots.
          </p>
          <div className="mt-9">
            <ButtonLink href="/about" tone="text" cta="home_intro_about">
              More about me
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      {/* Selected work */}
      <section aria-labelledby="work-title" className="container-site">
        <Reveal className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="t-eyebrow text-muted">Selected work</p>
            <h2 id="work-title" className="t-h2 mt-4">
              Moments with the people who matter.
            </h2>
          </div>
          <ul className="t-small flex flex-wrap gap-x-5 gap-y-2 text-muted">
            <li><Link className="underline-offset-4 hover:text-ink hover:underline" href="/work/portrait">Portrait</Link></li>
            <li><Link className="underline-offset-4 hover:text-ink hover:underline" href="/work/wedding">Wedding</Link></li>
            <li><Link className="underline-offset-4 hover:text-ink hover:underline" href="/work/commercial">Commercial</Link></li>
          </ul>
        </Reveal>
        <Gallery ids={homeGallery} columns={3} />
      </section>

      {/* Services */}
      <section aria-labelledby="services-title" className="container-site py-section">
        <Reveal className="mb-12 max-w-2xl">
          <p className="t-eyebrow text-muted">Services</p>
          <h2 id="services-title" className="t-h2 mt-4">What I photograph</h2>
        </Reveal>
        <ServiceList />
      </section>

      {/* Hong Kong photoshoot */}
      <section aria-labelledby="hk-title" className="bg-paper-200/60">
        <div className="container-site grid items-center gap-12 py-section lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-photo">
              <Photo id="hk-harbourfront-run" fill sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <p className="t-eyebrow text-muted">{hk.eyebrow}</p>
            <h2 id="hk-title" className="t-h2 mt-4">{hk.title}</h2>
            <p className="t-lead mt-5 text-muted">{hk.intro}</p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {hk.packages!.map((p) => (
                <li key={p.name} className="py-4">
                  <p className="t-h3">{p.name}</p>
                  <p className="t-small mt-1 text-muted">{p.detail}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/hong-kong" tone="solid" cta="home_hk">
                See Hong Kong sessions
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" aria-labelledby="enquire-title" className="container-site py-section">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="t-eyebrow text-muted">Enquire</p>
            <h2 id="enquire-title" className="t-h2 mt-4">Tell me about your moment.</h2>
            <p className="t-body mt-5 max-w-[34ch] text-muted">{site.replyPromise}</p>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
