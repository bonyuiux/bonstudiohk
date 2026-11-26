import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
import PhotoBrowser from "@/components/PhotoBrowser";
import ServiceItems from "@/components/ServiceItems";
import Btn from "@/components/Btn";
import JsonLd from "@/components/JsonLd";
import { flat, hongKong } from "@/content/pages";
import { pageMeta, serviceLd } from "@/lib/seo";

const { seoTitle, seoDescription } = hongKong;

export const metadata = pageMeta({ title: seoTitle, description: seoDescription, path: "/hong-kong", image: "/images/hk-harbourfront-run.jpg" });

export default function HongKong() {
  return (
    <Shell active="/hong-kong">
      <JsonLd data={serviceLd(seoTitle, seoDescription, "/hong-kong")} />
      <PhotoBrowser ids={flat(hongKong.gallery)} label="Hong Kong" />
      <div className="mt-block">
        <PageHead title={hongKong.title}>{hongKong.intro}</PageHead>
      </div>
      <div className="mt-block">
        <ServiceItems items={hongKong.sessions} />
      </div>
      <div className="mt-block">
        <Btn href="/contact" cta="hong_kong">
          {hongKong.button}
        </Btn>
      </div>
    </Shell>
  );
}
