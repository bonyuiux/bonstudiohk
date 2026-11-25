import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/content/site";
import WhatsAppButton from "./WhatsAppButton";

/** Footer on the same shell: wordmark + nav on the left, words on the content edge. */
export default function Footer() {
  const rows = [
    { label: "WhatsApp & phone", value: site.phoneDisplay, href: `https://wa.me/${site.whatsappNumber}` },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Instagram", value: site.instagram.handle, href: site.instagram.url },
  ];
  return (
    <footer className="bg-deep text-on-deep">
      <div className="shell gap-y-block py-section">
        <div className="hidden lg:block">
          <Image src="/brand/wordmark-white.png" alt="Bon Studio" width={723} height={126} className="h-6 w-auto" />
          <ul className="mt-block space-y-tight">
            {[...nav.work, ...nav.studio].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="t-body opacity-70 transition-opacity hover:opacity-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="shell-content">
          <div className="max-w-text">
            <h2 className="t-title">Let’s capture something timeless.</h2>
            <p className="t-body mt-stack opacity-75">{site.replyPromise}</p>
            <div className="mt-block">
              <WhatsAppButton tone="line" location="footer" label="Start a chat on WhatsApp" />
            </div>
          </div>
          <dl className="mt-section max-w-text border-b border-on-deep/15">
            {rows.map((r) => (
              <div key={r.label} className="flex flex-col gap-tight border-t border-on-deep/15 py-stack sm:flex-row sm:gap-stack">
                <dt className="t-small w-40 shrink-0 pt-1 opacity-60">{r.label}</dt>
                <dd>
                  <a href={r.href} data-location="footer_details" target={r.href.startsWith("http") ? "_blank" : undefined} rel={r.href.startsWith("http") ? "noopener" : undefined} className="t-body transition-opacity hover:opacity-70">
                    {r.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="t-small mt-block opacity-60">© {new Date().getFullYear()} Bon Studio, Hong Kong</p>
        </div>
      </div>
    </footer>
  );
}
