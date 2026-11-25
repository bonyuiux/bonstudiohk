import Inner from "@/components/Inner";
import PhotoColumns from "@/components/PhotoColumns";
import ServiceItems from "@/components/ServiceItems";
import Btn from "@/components/Btn";
import JsonLd from "@/components/JsonLd";
import { hongKong } from "@/content/pages";
import { pageMeta, serviceLd } from "@/lib/seo";

const seoTitle = "Travel & Tourist Photoshoot Hong Kong | Bon Studio";
const seoDescription = "Travel photography sessions in Hong Kong for visitors and travelers. Capture your time in the city with natural portraits at iconic and hidden locations.";

export const metadata = pageMeta({ title: seoTitle, description: seoDescription, path: "/hong-kong", image: "/images/hk-harbourfront-run.jpg" });

export default function HongKong() {
  return (
    <Inner active="/hong-kong">
      <JsonLd data={serviceLd(seoTitle, seoDescription, "/hong-kong")} />
      <p className="t-18">{hongKong.label}</p>
      <h1 className="ph-hk__title t-italiana">{hongKong.title}</h1>
      <p className="ph-hk__intro t-16">{hongKong.intro}</p>
      <div className="ph-hk__list">
        <ServiceItems items={hongKong.sessions} page />
      </div>
      <div className="ph-cat__gallery">
        <PhotoColumns columns={hongKong.gallery} className="gal--hk" />
      </div>
      <Btn href="/contact" className="ph-cat__btn btn--block">
        Get in touch
      </Btn>
    </Inner>
  );
}
