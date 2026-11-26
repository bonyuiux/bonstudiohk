import HeroCarousel from "@/components/HeroCarousel";
import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import PhotoColumns from "@/components/PhotoColumns";
import ServiceItems from "@/components/ServiceItems";
import EnquiryForm from "@/components/EnquiryForm";
import Btn from "@/components/Btn";
import { home, homeSections, serviceItems } from "@/content/pages";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Shell afterHero>
        <section className="section" aria-label="Works">
          <PhotoColumns columns={home.gallery} />
        </section>

        <section className="section">
          <PageHead as="h2" title={homeSections.services.title} />
          <div className="mt-block">
            <ServiceItems items={serviceItems} />
          </div>
          <div className="mt-block">
            <Btn href="/service" cta="home_service">
              {homeSections.services.button}
            </Btn>
          </div>
        </section>

        <section className="section" id="contact">
          <PageHead as="h2" title={homeSections.contact.title}>
            <span className="muted">{homeSections.contact.intro}</span>
          </PageHead>
          <div className="mt-block">
            <EnquiryForm />
          </div>
        </section>
      </Shell>
    </>
  );
}
