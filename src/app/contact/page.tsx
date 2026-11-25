import Inner from "@/components/Inner";
import { contactPage } from "@/content/pages";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Bon Studio | Hong Kong Photographer",
  description: "Get in touch with Bon Studio for portrait, wedding or travel photography in Hong Kong. Inquiries and bookings available via Instagram or WhatsApp.",
  path: "/contact",
});

export default function Contact() {
  return (
    <Inner active="/contact">
      <div className="ph-text ph-text--flush">
        <p className="t-18">{contactPage.label}</p>
        <h1 className="ct__title t-italiana">{contactPage.title}</h1>
        <p className="ct__intro t-16">
          {contactPage.intro}
          <br />
          {contactPage.intro2}
        </p>
        <div className="ct__rows">
          <div>
            <p className="ct__label t-14">Email</p>
            <div className="ct__value">
              <a className="t-18" href={`mailto:${site.email}`} data-location="contact_page">{site.email}</a>
            </div>
          </div>
          <div>
            <p className="ct__label t-14">Tel &amp; Wtsapp</p>
            <div className="ct__value">
              <a className="t-18 blue" href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener" data-location="contact_page">{site.phoneDisplay}</a>
            </div>
          </div>
          <div>
            <p className="ct__label t-14">Social</p>
            <div className="ct__value">
              <a className="t-18" href={site.instagram.url} target="_blank" rel="noopener" data-location="contact_page">Instagram</a>
              <span className="t-18">Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </Inner>
  );
}
