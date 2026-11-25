import Inner from "@/components/Inner";
import Photo from "@/components/Photo";
import { about } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Bon Studio | Hong Kong Portrait & Travel Photographer",
  description: "Meet Bon, the photographer behind Bon Studio. A Hong Kong-based photographer capturing natural moments for couples, travelers, and families through calm, light-filled photography.",
  path: "/about",
  image: "/images/couple-caravan.jpg",
});

export default function About() {
  return (
    <Inner active="/about">
      <div className="ph-text">
        <p className="t-18">{about.label}</p>
        <h1 className="ph-text__title t-italiana">{about.title}</h1>
        <p className="ph-text__lead t-lead-brown">{about.lead}</p>
        <p className="ph-text__body t-16">{about.body}</p>
        <div className="ph-text__photos">
          {about.photos.map((id, i) => (
            <div key={id} className="ph-photo">
              <Photo id={id} fill sizes={i === 0 ? "(min-width: 810px) 36vw, 100vw" : "(min-width: 810px) 24vw, 100vw"} eager={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </Inner>
  );
}
