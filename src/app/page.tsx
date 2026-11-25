import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import Shell from "@/components/Shell";
import Section from "@/components/Section";
import TextBlock from "@/components/TextBlock";
import Gallery from "@/components/Gallery";
import Figure from "@/components/Figure";
import LineLink from "@/components/LineLink";
import ServiceList from "@/components/ServiceList";
import EnquiryForm from "@/components/EnquiryForm";
import { homeGallery, pages } from "@/content/pages";
import { site } from "@/content/site";

export default function Home() {
  const hk = pages["hong-kong"];
  return (
    <>
      <HeroVideo />
      <Shell afterHero>
        <Section id="intro">
          <TextBlock
            title="I capture quiet moments as they naturally unfold — gentle light, honest emotion."
            summary="A Hong Kong photographer for natural portraits, couples, weddings and travel photoshoots."
            action={
              <LineLink href="/about" cta="home_intro_about">
                About Bon Studio
              </LineLink>
            }
          />
        </Section>

        <Section label="Selected work">
          <TextBlock title="Moments with the people who matter.">
            See more{" "}
            <Link href="/work/portrait" className="text-ink underline hover:text-accent">portrait</Link>,{" "}
            <Link href="/work/wedding" className="text-ink underline hover:text-accent">wedding</Link> and{" "}
            <Link href="/work/commercial" className="text-ink underline hover:text-accent">commercial</Link> work.
          </TextBlock>
          <div className="mt-block">
            <Gallery ids={homeGallery} />
          </div>
        </Section>

        <Section label="Services">
          <TextBlock title="What I photograph" />
          <div className="mt-block">
            <ServiceList />
          </div>
        </Section>

        <Section label="Hong Kong photoshoot">
          <div className="split items-center">
            <div>
              <TextBlock
                title={hk.title}
                summary="A local photographer for couples, families and solo travellers."
                action={
                  <LineLink href="/hong-kong" cta="home_hk">
                    Hong Kong sessions
                  </LineLink>
                }
              >
                From the harbour to the backstreets — relaxed walking shoots at the best light of the day.
              </TextBlock>
            </div>
            <Figure id="hk-harbourfront-run" aspect="aspect-[4/5]" sizes="(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw" className="row-start-1 md:row-start-auto" />
          </div>
          <ul className="mt-block max-w-text border-b border-line">
            {hk.packages!.map((p, i) => (
              <li key={p.name} className="border-t border-line py-stack">
                <TextBlock as="h3" size="heading" index={`0${i + 1}`} title={p.name}>
                  {p.detail}
                </TextBlock>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="enquire" label="Enquire">
          <TextBlock title="Tell me about your moment.">{site.replyPromise}</TextBlock>
          <div data-reveal="text" className="mt-block">
            <EnquiryForm />
          </div>
        </Section>
      </Shell>
    </>
  );
}
