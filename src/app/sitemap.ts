import type { MetadataRoute } from "next";
import { projects } from "../data/projects";
import { servicesData } from "../data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unitech.dev";

  const staticPages = [
    "",
    "/work",
    "/services",
    "/about",
    "/careers",
    "/contact",
    "/start",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const dynamicProjects = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const dynamicServices = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicProjects, ...dynamicServices];
}
