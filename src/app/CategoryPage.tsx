import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import PhotoBrowser from "@/components/PhotoBrowser";
import Btn from "@/components/Btn";
import JsonLd from "@/components/JsonLd";
import { flat, type CategoryPage } from "@/content/pages";
import { serviceLd } from "@/lib/seo";

/** Portrait / Wedding / Event: title + paragraph, the photo browser, a button. 48px between blocks. */
export default function Category({ page }: { page: CategoryPage }) {
  return (
    <Shell active={page.path}>
      <JsonLd data={serviceLd(page.seoTitle, page.seoDescription, page.path)} />
      <PageHead title={page.title}>{page.intro}</PageHead>
      <div className="mt-block">
        <PhotoBrowser ids={flat(page.gallery, page.gallery2)} label={page.title} />
      </div>
      <div className="mt-block">
        <Btn href="/contact" cta="category">
          Ask about a date
        </Btn>
      </div>
    </Shell>
  );
}
