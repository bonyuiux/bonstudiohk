import Shell from "@/components/Shell";
import PageHead, { Paras } from "@/components/PageHead";
import Photo from "@/components/Photo";
import { about } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Bon | Hong Kong Photographer | Bon Studio",
  description: "Meet Bon, a photographer based in Hong Kong, specialising in portraits, couples, weddings and travel photography.",
  path: "/about",
  image: "/images/couple-caravan.jpg",
});

export default function About() {
  return (
    <Shell active="/about">
      <PageHead title={about.title}>
        <p>{about.lead}</p>
        <div className="mt-near">
          <Paras text={about.body} className="muted" />
        </div>
      </PageHead>
      <div className="pair mt-block">
        {about.photos.map((id, i) => (
          <div key={id}>
            <Photo id={id} fill sizes={i === 0 ? "(min-width: 810px) 40vw, 100vw" : "(min-width: 810px) 28vw, 100vw"} eager={i === 0} />
          </div>
        ))}
      </div>
    </Shell>
  );
}
