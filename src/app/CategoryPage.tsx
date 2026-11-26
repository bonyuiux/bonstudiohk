import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import PhotoColumns from "@/components/PhotoColumns";
import Btn from "@/components/Btn";
import JsonLd from "@/components/JsonLd";
import type { CategoryPage } from "@/content/pages";
import { serviceLd } from "@/lib/seo";

/** Portrait / Wedding / Event: title + one paragraph, gallery, button. 48px between blocks. */
export default function Category({ page }: { page: CategoryPage }) {
  return (
    <Shell active={page.path}>
      <JsonLd data={serviceLd(page.seoTitle, page.seoDescription, page.path)} />
      <PageHead title={page.title}>{page.intro}</PageHead>
      <div className="mt-block">
        <PhotoColumns columns={page.gallery} eager />
      </div>
      {page.gallery2 && (
        <div style={{ marginTop: "var(--gallery-gap)" }}>
          <PhotoColumns columns={page.gallery2} />
        </div>
      )}
      <div className="mt-block">
        <Btn href="/contact" cta="category">
          Get in touch
        </Btn>
      </div>
    </Shell>
  );
}
