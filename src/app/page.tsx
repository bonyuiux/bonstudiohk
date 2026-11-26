import HeroCarousel from "@/components/HeroCarousel";
import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import PhotoColumns from "@/components/PhotoColumns";
import EnquiryForm from "@/components/EnquiryForm";
import { home, homeSections } from "@/content/pages";

/**
 * Home: hero → the gallery (with the sidebar) → a full-width statement → the enquiry form → footer.
 * The sidebar ends with the gallery; the statement and the form run without it (owner, 2026-11-26).
 */
export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Shell afterHero>
        <section aria-label="Works">
          <PhotoColumns columns={home.gallery} />
        </section>
      </Shell>

      <section className="statement" aria-label="About Bon Studio">
        <div className="statement__in">
          <p className="t-display">{homeSections.statement.lead}</p>
          <p className="t-body muted mt-near">{homeSections.statement.line}</p>
        </div>
      </section>

      {/* same grid as the footer: the sidebar column stays empty, so the form lines up with every page's content */}
      <section className="shell home-contact" id="contact">
        <div aria-hidden />
        <div className="shell__content">
          <PageHead as="h2" title={homeSections.contact.title}>
            <span className="muted">{homeSections.contact.intro}</span>
          </PageHead>
          <div className="mt-block">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
