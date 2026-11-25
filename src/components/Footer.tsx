import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/content/site";
import WhatsAppButton from "./WhatsAppButton";
import { ArrowIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-deep text-on-deep">
      <div className="container-site py-section">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="t-title max-w-[14ch]">Let’s capture something timeless.</h2>
            <p className="t-body mt-5 max-w-[34ch] opacity-75">{site.replyPromise}</p>
            <div className="mt-8">
              <WhatsAppButton tone="light" location="footer" label="Start a chat on WhatsApp" />
            </div>
          </div>

          <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1 lg:pl-12">
            <FooterItem label="WhatsApp & phone" href={`https://wa.me/${site.whatsappNumber}`} value={site.phoneDisplay} location="footer_details" />
            <FooterItem label="Email" href={`mailto:${site.email}`} value={site.email} location="footer_details" />
            <FooterItem label="Instagram" href={site.instagram.url} value={site.instagram.handle} location="footer_details" />
          </dl>
        </div>

        <div className="mt-20 flex flex-col gap-8 border-t border-on-deep/15 pt-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="Bon Studio — home">
            <Image src="/brand/wordmark-white.png" alt="Bon Studio" width={723} height={126} className="h-5 w-auto" />
          </Link>
          <nav aria-label="Footer">
            <ul className="t-small flex flex-wrap gap-x-6 gap-y-2 opacity-75">
              {[...nav.work, ...nav.studio].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:opacity-100 hover:underline underline-offset-4">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="t-small opacity-60">© {new Date().getFullYear()} Bon Studio, Hong Kong</p>
        </div>
      </div>
    </footer>
  );
}

function FooterItem({ label, value, href, location }: { label: string; value: string; href: string; location: string }) {
  return (
    <div>
      <dt className="t-small opacity-65">{label}</dt>
      <dd className="mt-2">
        <a
          href={href}
          data-location={location}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener" : undefined}
          className="t-body group inline-flex items-center gap-2 border-b border-on-deep/25 pb-1 transition-colors hover:border-on-deep"
        >
          {value}
          <ArrowIcon className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </dd>
    </div>
  );
}
