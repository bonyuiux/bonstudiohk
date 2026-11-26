import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import EnquiryForm from "@/components/EnquiryForm";
import { contactPage } from "@/content/pages";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Bon Studio | Hong Kong Photographer",
  description: "Get in touch with Bon Studio for portrait, wedding or travel photography in Hong Kong. Inquiries and bookings available via Instagram or WhatsApp.",
  path: "/contact",
});

export default function Contact() {
  const rows = [
    { label: "Tel & WhatsApp", value: site.phoneDisplay, href: `https://wa.me/${site.whatsappNumber}` },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Instagram", value: site.instagram.handle, href: site.instagram.url },
  ];
  return (
    <Shell active="/contact">
      <PageHead title={contactPage.title}>{contactPage.intro}</PageHead>
      <div className="rows mt-block">
        {rows.map((r) => (
          <div key={r.label}>
            <p className="t-small muted">{r.label}</p>
            <a className="t-body mt-tight" style={{ display: "inline-block" }} href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel={r.href.startsWith("http") ? "noopener" : undefined} data-location="contact_page">
              {r.value}
            </a>
          </div>
        ))}
      </div>
      <div className="mt-block">
        <EnquiryForm />
      </div>
    </Shell>
  );
}
