import HeroCarousel from "@/components/HeroCarousel";
import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import PhotoColumns from "@/components/PhotoColumns";
import ServiceItems from "@/components/ServiceItems";
import EnquiryForm from "@/components/EnquiryForm";
import Btn from "@/components/Btn";
import { home, serviceItems } from "@/content/pages";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Shell afterHero>
        <section className="section" aria-label="Works">
          <PhotoColumns columns={home.gallery} />
        </section>

        <section className="section">
          <PageHead as="h2" title="Service" />
          <div className="mt-block">
            <ServiceItems items={serviceItems} />
          </div>
          <div className="mt-block">
            <Btn href="/service" cta="home_service">
              More about services
            </Btn>
          </div>
        </section>

        <section className="section" id="contact">
          <PageHead as="h2" title="Contact us">
            <span className="muted">Tell me the date, the place and who’s coming. The form opens WhatsApp with your message ready to send.</span>
          </PageHead>
          <div className="mt-block">
            <EnquiryForm />
          </div>
        </section>
      </Shell>
    </>
  );
}
