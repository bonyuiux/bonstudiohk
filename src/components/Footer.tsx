import { site } from "@/content/site";
import Btn from "./Btn";
import { ArrowIcon, WhatsAppIcon } from "./icons";

/** The original brown footer. */
export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__top">
        <div>
          <p className="t-16">Contact</p>
          <h2 className="foot__title t-jost-title">Let’s capture something timeless.</h2>
          <Btn href="/contact" variant="white" className="foot__btn">
            Let&apos;s connect
          </Btn>
        </div>
        <div className="foot__rows">
          <div>
            <p className="foot__label t-14">Instagram</p>
            <a className="foot__row" href={site.instagram.url} target="_blank" rel="noopener" data-location="footer">
              <span className="t-18">{site.instagram.handle}</span>
              <span className="foot__icon"><ArrowIcon /></span>
            </a>
          </div>
          <div>
            <p className="foot__label t-14">Email</p>
            <a className="foot__row" href={`mailto:${site.email}`} data-location="footer">
              <span className="t-18">{site.email}</span>
              <span className="foot__icon"><ArrowIcon /></span>
            </a>
          </div>
          <div>
            <p className="foot__label t-14">Tel &amp; Wtsapp</p>
            <a className="foot__row" href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener" data-location="footer">
              <span className="t-18 blue">{site.phoneDisplay}</span>
              <span className="foot__icon"><WhatsAppIcon /></span>
            </a>
          </div>
        </div>
      </div>
      <p className="foot__copy t-16">2025 Own by Bon Studio.</p>
    </footer>
  );
}
