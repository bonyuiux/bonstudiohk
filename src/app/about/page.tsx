import Shell from "@/components/Shell";
import PageHead from "@/components/PageHead";
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
    <Shell active="/about">
      <PageHead title={about.title}>
        <p>{about.lead}</p>
        <p className="muted mt-near">{about.body}</p>
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
