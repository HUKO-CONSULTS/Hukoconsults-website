import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hukoconsults.com";
  return ["", "/services", "/projects", "/about", "/contact", "/privacy-policy", "/terms", "/cookies"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-09-14"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" || path === "/services" || path === "/projects" ? 0.9 : 0.6,
  }));
}
