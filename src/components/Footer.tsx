import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/content/site";
import WhatsAppButton from "./WhatsAppButton";
import HKClock from "./HKClock";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-deep">
      <div className="grid-site gap-y-16 py-section">
        <div className="axis-text">
          <h2 data-reveal="text" className="t-title">Let’s capture something timeless.</h2>
          <p data-reveal="text" className="t-body mt-6 text-muted">{site.replyPromise}</p>
          <div data-reveal="text" className="mt-10">
            <WhatsAppButton tone="line" location="footer" label="Start a chat on WhatsApp" />
          </div>
        </div>

        <div className="axis-full grid grid-cols-12 gap-x-4 gap-y-10 border-t border-line pt-10 lg:gap-x-6">
          <nav aria-label="Footer" className="col-span-6 md:col-span-2 lg:col-span-3">
            <ul className="space-y-2">
              {[...nav.work, ...nav.studio].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="t-small text-muted transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <dl className="col-span-12 space-y-5 md:col-span-6 md:col-start-3 lg:col-span-5 lg:col-start-4">
            <FooterItem label="WhatsApp & phone" href={`https://wa.me/${site.whatsappNumber}`} value={site.phoneDisplay} />
            <FooterItem label="Email" href={`mailto:${site.email}`} value={site.email} />
            <FooterItem label="Instagram" href={site.instagram.url} value={site.instagram.handle} />
          </dl>
          <div className="hidden md:col-span-4 md:col-start-9 md:block md:justify-self-end">
            <HKClock className="text-muted" />
          </div>
        </div>

        <div className="axis-full flex items-center justify-between gap-6 border-t border-line pt-8">
          <div className="flex items-center gap-6">
            <Link href="/" aria-label="Bon Studio — home">
              <Image src="/brand/wordmark-white.png" alt="Bon Studio" width={723} height={126} className="h-4 w-auto opacity-80" />
            </Link>
            <p className="t-small text-muted">© {new Date().getFullYear()}</p>
          </div>
          <a href="#main" className="t-small text-muted transition-colors hover:text-ink">
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterItem({ label, value, href }: { label: string; value: string; href: string }) {
  const ext = href.startsWith("http");
  return (
    <div className="flex flex-col gap-1 md:flex-row md:gap-6">
      <dt className="t-small w-40 shrink-0 pt-1 text-muted">{label}</dt>
      <dd>
        <a href={href} data-location="footer_details" target={ext ? "_blank" : undefined} rel={ext ? "noopener" : undefined} className="t-body transition-colors hover:text-accent">
          {value}
        </a>
      </dd>
    </div>
  );
}
