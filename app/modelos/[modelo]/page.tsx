import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PaginaSEO from "@/components/seo/PaginaSEO";
import { PAGINAS, pagina } from "@/lib/seo/paginas";

// Solo existen las rutas registradas en lib/seo/paginas: cualquier otra da 404.
export const dynamicParams = false;

const PREFIJO = "/modelos/";
const deEsta = PAGINAS.filter((p) => p.ruta.startsWith(PREFIJO) && !p.ruta.slice(PREFIJO.length).includes("/"));

export function generateStaticParams() {
  return deEsta.map((p) => ({ modelo: p.ruta.slice(PREFIJO.length) }));
}

type Props = { params: Promise<{ modelo: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = pagina(PREFIJO + (await params).modelo);
  if (!p) return {};
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: p.ruta },
    openGraph: { title: p.title, description: p.description, images: [p.imagen], type: p.tipo === "articulo" ? "article" : "website" },
  };
}

export default async function Page({ params }: Props) {
  const p = pagina(PREFIJO + (await params).modelo);
  if (!p) notFound();
  return <PaginaSEO p={p} />;
}
