import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
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
    <Shell active="/hong-kong">
      <JsonLd data={serviceLd(seoTitle, seoDescription, "/hong-kong")} />
      <PageHead title={hongKong.title}>{hongKong.intro}</PageHead>
      <div className="mt-block">
        <ServiceItems items={hongKong.sessions} />
      </div>
      <div className="mt-block">
        <PhotoColumns columns={hongKong.gallery} />
      </div>
      <div className="mt-block">
        <Btn href="/contact" cta="hong_kong">
          Get in touch
        </Btn>
      </div>
    </Shell>
  );
}
