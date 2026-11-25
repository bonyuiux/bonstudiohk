import { services } from "@/content/site";
import Band from "./Band";
import Figure from "./Figure";
import Drift from "./Drift";
import LineLink from "./LineLink";

/** Each service as its own quiet chapter: words on the content line, a photo on the right. */
export default function ServiceSections({ rail = "Services" }: { rail?: string }) {
  return (
    <Band rail={rail} gridClassName="">
      {services.map((s, i) => (
        <article key={s.key} className="axis-full grid grid-cols-12 items-center gap-x-4 gap-y-10 border-t border-line py-16 md:py-24 lg:gap-x-6">
          <div className="order-2 col-span-12 md:order-1 md:col-span-6 md:col-start-3 lg:col-span-4 lg:col-start-4">
            <p data-reveal="text" className="t-small tabular-nums text-accent-soft">
              0{i + 1}
            </p>
            <h3 data-reveal="text" className="t-title mt-4">
              {s.title}
            </h3>
            <p data-reveal="text" className="t-body mt-6 text-ink">
              {s.items}
            </p>
            <p data-reveal="text" className="t-body mt-2 text-muted">
              {s.blurb}
            </p>
            <div data-reveal="text" className="mt-10">
              <LineLink href={s.href} cta={`service_${s.key}`}>
                View {s.title.toLowerCase()}
              </LineLink>
            </div>
          </div>
          <Drift distance={32} className="axis-media order-1 md:order-2 md:col-start-9 lg:col-start-9">
            <Figure id={s.cover} aspect="aspect-[4/5]" sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 100vw" />
          </Drift>
        </article>
      ))}
    </Band>
  );
}
