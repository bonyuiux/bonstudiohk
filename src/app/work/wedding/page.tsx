import Work from "../../WorkPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Wedding Photography Portfolio | Bon Studio",
  description: "Browse wedding photography by Bon Studio, featuring registry office ceremonies, pre-wedding sessions and wedding celebrations.",
  path: "/work/wedding",
});

export default function Page() {
  return <Work k="wedding" />;
}
