import Category from "../CategoryPage";
import { categories } from "@/content/pages";
import { pageMeta } from "@/lib/seo";

const page = categories.event;

export const metadata = pageMeta({ title: page.seoTitle, description: page.seoDescription, path: page.path, image: `/images/${page.gallery[0][0].id}.jpg` });

export default function Page() {
  return <Category page={page} />;
}
