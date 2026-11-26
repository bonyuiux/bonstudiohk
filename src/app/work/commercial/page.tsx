import Work from "../../WorkPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Commercial Photography Portfolio | Bon Studio",
  description: "Browse commercial photography by Bon Studio, including brand campaigns, product photography and corporate portraits.",
  path: "/work/commercial",
});

export default function Page() {
  return <Work k="commercial" />;
}
