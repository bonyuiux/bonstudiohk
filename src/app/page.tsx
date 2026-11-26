import HeroCarousel from "@/components/HeroCarousel";
import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import WorksIndex from "@/components/WorksIndex";
import ServiceItems from "@/components/ServiceItems";
import EnquiryForm from "@/components/EnquiryForm";
import Btn from "@/components/Btn";
import { serviceItems } from "@/content/pages";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Shell afterHero>
        <section className="section" aria-labelledby="works-title">
          <PageHead as="h2" title={<span id="works-title">Recent work</span>}>
            <span className="muted">Pick a row and scroll sideways, or open the whole set.</span>
          </PageHead>
          <div className="mt-block">
            <WorksIndex />
          </div>
        </section>

        <section className="section">
          <PageHead as="h2" title="What I shoot" />
          <div className="mt-block">
            <ServiceItems items={serviceItems} />
          </div>
          <div className="mt-block">
            <Btn href="/service" cta="home_service">
              How a shoot works
            </Btn>
          </div>
        </section>

        <section className="section" id="contact">
          <PageHead as="h2" title="Tell me about your shoot">
            <span className="muted">The date, the place and who’s coming is plenty. The form opens WhatsApp with your message ready to send.</span>
          </PageHead>
          <div className="mt-block">
            <EnquiryForm />
          </div>
        </section>
      </Shell>
    </>
  );
}
