import type { MetadataRoute } from "next";
import { servicePages } from "../lib/seo-services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://mbdigitaltech.com.br").replace(/\/$/, "");
  const now = new Date();
  const routes = [
    { path: "", priority: 1, frequency: "weekly" as const },
    { path: "/servicos", priority: 0.95, frequency: "weekly" as const },
    ...servicePages.map(s=>({path:`/servicos/${s.slug}`,priority:0.85,frequency:"monthly" as const})),
    { path: "/orcamento", priority: 0.9, frequency: "monthly" as const },
    { path: "/privacidade", priority: 0.3, frequency: "yearly" as const },
    { path: "/termos", priority: 0.3, frequency: "yearly" as const },
  ];
  return routes.map(({path,priority,frequency})=>({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: frequency,
    priority,
  }));
}
