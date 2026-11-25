import Inner from "@/components/Inner";
import PhotoColumns from "@/components/PhotoColumns";
import Btn from "@/components/Btn";
import JsonLd from "@/components/JsonLd";
import type { CategoryPage } from "@/content/pages";
import { serviceLd } from "@/lib/seo";

/** Portrait / Wedding / Event: title, one line, gallery, full-width button. */
export default function Category({ page }: { page: CategoryPage }) {
  return (
    <Inner active={page.path}>
      <JsonLd data={serviceLd(page.seoTitle, page.seoDescription, page.path)} />
      <h1 className="t-page-title">{page.title}</h1>
      <p className="ph-cat__intro t-16">{page.intro}</p>
      <div className="ph-cat__gallery">
        <PhotoColumns columns={page.gallery} eager />
      </div>
      {page.gallery2 && (
        <div className="ph-cat__gallery">
          <PhotoColumns columns={page.gallery2} />
        </div>
      )}
      <Btn href="/contact" className="ph-cat__btn btn--block">
        Get in touch
      </Btn>
    </Inner>
  );
}
