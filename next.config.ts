import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    qualities: [75, 85],
    formats: ["image/avif", "image/webp"],
  },
  // Old Framer addresses that should land somewhere useful (all others are kept 1:1).
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/work", destination: "/portrait", permanent: true },
      { source: "/thank-you", destination: "/thankyou", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:dir(images|video|brand)/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
