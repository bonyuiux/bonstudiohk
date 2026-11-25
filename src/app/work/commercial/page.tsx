import Work from "../../WorkPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Bon Studio.",
  description: "Bon Studio — minimalist commercial and portrait photography in Hong Kong. Soft, bright images that capture quiet, beautiful moments with intentional light and simplicity.",
  path: "/work/commercial",
});

export default function Page() {
  return <Work k="commercial" />;
}
