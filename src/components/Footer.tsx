import Image from "next/image";
import { site } from "@/content/site";
import Btn from "./Btn";

/** Footer on the same grid as every page: logo in the sidebar column, words in the content column. */
export default function Footer() {
  const rows = [
    { label: "Instagram", value: site.instagram.handle, href: site.instagram.url },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Tel & WhatsApp", value: site.phoneDisplay, href: `https://wa.me/${site.whatsappNumber}` },
  ];
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot__logo">
          <Image src="/brand/wordmark-white.png" alt="Bon Studio" width={723} height={126} />
        </div>
        <div className="shell__content">
          <div className="measure">
            <h2 className="t-display">Let’s capture something timeless.</h2>
            <p className="t-body muted mt-near">{site.replyPromise}</p>
            <div className="mt-block">
              <Btn href="/contact" light cta="footer">
                Let&apos;s connect
              </Btn>
            </div>
          </div>
          <div className="rows mt-block">
            {rows.map((r) => (
              <div key={r.label}>
                <p className="t-small muted">{r.label}</p>
                <a className="t-body mt-tight" style={{ display: "inline-block" }} href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel={r.href.startsWith("http") ? "noopener" : undefined} data-location="footer">
                  {r.value}
                </a>
              </div>
            ))}
          </div>
          <p className="t-small muted" style={{ marginTop: "var(--section)" }}>
            © {new Date().getFullYear()} Bon Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
