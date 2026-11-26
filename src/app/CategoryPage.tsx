import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import PhotoBrowser from "@/components/PhotoBrowser";
import Btn from "@/components/Btn";
import JsonLd from "@/components/JsonLd";
import { categoryButton, flat, type CategoryPage } from "@/content/pages";
import { serviceLd } from "@/lib/seo";

/** Portrait / Wedding / Event: photos first, then the title and paragraph as their caption, then a button. 48px between blocks. */
export default function Category({ page }: { page: CategoryPage }) {
  return (
    <Shell active={page.path}>
      <JsonLd data={serviceLd(page.seoTitle, page.seoDescription, page.path)} />
      <PhotoBrowser ids={flat(page.gallery, page.gallery2)} label={page.title} />
      <div className="mt-block">
        <PageHead title={page.title}>{page.intro}</PageHead>
      </div>
      <div className="mt-block">
        <Btn href="/contact" cta="category">
          {categoryButton}
        </Btn>
      </div>
    </Shell>
  );
}
