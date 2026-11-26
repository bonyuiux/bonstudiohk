import Work from "../../WorkPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Portrait Photography Portfolio | Bon Studio",
  description: "Browse portrait photography by Bon Studio, featuring couples, families, friends and travel portraits photographed in Hong Kong and abroad.",
  path: "/work/portrait",
});

export default function Page() {
  return <Work k="portrait" />;
}
