import GalleryPage from "@/components/templates/GalleryPage";
import { pages } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

const page = pages["event"];

export const metadata = pageMeta({ title: page.seoTitle, description: page.seoDescription, path: page.path, image: `/images/${page.photos[0]}.jpg` });

export default function Page() {
  return <GalleryPage page={page} />;
}
