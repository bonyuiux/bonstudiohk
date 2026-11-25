import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = ["", "/portrait", "/wedding", "/event", "/hong-kong", "/about", "/service", "/contact", "/work/portrait", "/work/wedding", "/work/commercial"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : ["/portrait", "/wedding", "/event", "/hong-kong"].includes(r) ? 0.9 : 0.6,
  }));
}
