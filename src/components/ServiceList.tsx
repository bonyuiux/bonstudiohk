import { services } from "@/content/site";
import TextBlock from "./TextBlock";
import Figure from "./Figure";
import LineLink from "./LineLink";

/** Services in the reference hierarchy: number, title, one-line summary, detail, line link — photo beside. */
export default function ServiceList() {
  return (
    <div className="space-y-row">
      {services.map((s, i) => (
        <article key={s.key} className="split items-center">
          <TextBlock
            as="h3"
            index={`0${i + 1}`}
            title={s.title}
            summary={s.items}
            action={
              <LineLink href={s.href} cta={`service_${s.key}`}>
                View {s.title.toLowerCase()}
              </LineLink>
            }
          >
            {s.blurb}
          </TextBlock>
          <Figure id={s.cover} aspect="aspect-[4/5]" sizes="(min-width: 1024px) 36vw, (min-width: 768px) 50vw, 100vw" className="row-start-1 md:row-start-auto" />
        </article>
      ))}
    </div>
  );
}
