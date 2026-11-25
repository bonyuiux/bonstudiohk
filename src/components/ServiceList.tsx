import Link from "next/link";
import { services } from "@/content/site";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { ArrowIcon } from "./icons";

/** The four services as image cards. */
export default function ServiceList() {
  return (
    <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s, i) => (
        <li key={s.key}>
          <Reveal delay={i * 0.08}>
            <Link href={s.href} data-cta={`service_${s.key}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-photo bg-paper-200">
                <Photo id={s.cover} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="transition-transform duration-[1.2s] ease-soft group-hover:scale-[1.03]" />
              </div>
              <h3 className="t-h3 mt-5 flex items-center justify-between">
                {s.title}
                <ArrowIcon className="h-4 w-4 opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </h3>
              <p className="t-small mt-1 text-accent-soft">{s.items}</p>
              <p className="t-body mt-3 text-muted">{s.blurb}</p>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
