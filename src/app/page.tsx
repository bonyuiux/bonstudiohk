import Link from "next/link";
import MobileBar from "@/components/MobileBar";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import PhotoColumns from "@/components/PhotoColumns";
import ServiceItems from "@/components/ServiceItems";
import EnquiryForm from "@/components/EnquiryForm";
import Btn from "@/components/Btn";
import { home, serviceItems } from "@/content/pages";

export default function Home() {
  return (
    <>
      <MobileBar />
      <Hero lines={home.tagline} />

      {/* About */}
      <section className="h-about">
        <div className="h-about__inner">
          <p className="h-about__label t-16">{home.aboutLabel}</p>
          <h2 className="h-about__text">
            <span className="grey">{home.aboutGrey}</span>
            <br />
            <br />
            {home.aboutBlack.map((part, i) =>
              typeof part === "string" ? (
                <span key={i}>{part}</span>
              ) : (
                <Link key={i} href={part.href}>
                  {part.text}
                </Link>
              ),
            )}
          </h2>
          <Btn href="/contact" className="h-about__btn">
            Get in touch
          </Btn>
        </div>
      </section>

      {/* Works: sidebar + gallery (phone: title + tabs + gallery) */}
      <section className="h-works">
        <div className="h-works__head">
          <h2 className="t-jost-title">Works</h2>
          <nav className="h-works__tabs" aria-label="Works">
            <Link href="/portrait">Portrait</Link>
            <span aria-hidden />
            <Link href="/wedding">Wedding</Link>
            <span aria-hidden />
            <Link href="/hong-kong">Travel</Link>
          </nav>
        </div>
        <Sidebar />
        <PhotoColumns columns={home.gallery} home />
      </section>

      {/* Service */}
      <section className="h-sec">
        <h2 className="t-jost-title">Service</h2>
        <div className="h-sec__list">
          <ServiceItems items={serviceItems} />
          <Btn href="/contact" className="svc__btn">
            Get in touch
          </Btn>
        </div>
      </section>

      {/* Contact Us */}
      <section className="h-sec h-sec--contact">
        <h2 className="t-jost-title">Contact Us</h2>
        <div className="h-sec__list">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
