import type { MetadataRoute } from "next";
import { PAGINAS } from "@/lib/seo/paginas";

// La web no tenia sitemap: Google solo encontraba lo que enlazaba la home.
const SITIO = "https://www.domuboximport.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const fijas = ["", "/casa-piloto", "/blog"].map((r) => ({
    url: SITIO + r,
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.9,
  }));
  const seo = PAGINAS.map((p) => ({
    url: SITIO + p.ruta,
    lastModified: p.fecha,
    changeFrequency: "monthly" as const,
    priority: p.tipo === "articulo" ? 0.6 : 0.8,
  }));
  return [...fijas, ...seo];
}
