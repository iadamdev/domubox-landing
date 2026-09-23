// Registro de todas las paginas SEO. Las rutas, el sitemap y los enlaces
// "sigue leyendo" salen de aqui.

import { MODELOS } from "@/lib/modelos";
import { LANDINGS } from "./landings";
import { ARTICULOS } from "./blog";
import type { Pagina } from "./tipos";

// Las paginas de modelo se generan desde lib/modelos: no se escribe copy
// aparte para no desincronizarlas de la home.
const PAGINAS_MODELO: Pagina[] = MODELOS.map((m) => ({
  ruta: `/modelos/${m.slug}`,
  tipo: "modelo",
  title: `${m.nombre} · casa prefabricada modular | Galicia`,
  description: `${m.resumen} ${m.uso} Casa prefabricada modular de Domubox Import, con casa piloto visitable en A Coruña.`,
  kicker: `MODELO ${m.nombre.toUpperCase()}`,
  h1: m.nombre,
  h1Acento: "casa prefabricada modular.",
  entradilla: m.resumen,
  imagen: m.imagenes[0],
  galeria: m.imagenes.slice(0, 5),
  datos: m.datos,
  fichas: m.fichas,
  origen: `seo modelo ${m.slug}`,
  mostrarModelos: true,
  secciones: [
    { h2: `Así es la ${m.nombre}`, p: [m.descripcion] },
    { h2: "Para qué está pensada", p: [m.uso] },
    {
      h2: "Cómo llega a tu parcela",
      p: [
        "Se fabrica en taller y viaja en camión hasta tu terreno. Allí se coloca sobre su base y queda lista en días, sin la obra tradicional. Antes revisamos contigo la parcela: clasificación, accesos y acometidas.",
      ],
    },
  ],
  relacionados: [
    "/casas-prefabricadas-galicia",
    "/blog/cuanto-cuesta-casa-prefabricada-galicia",
    "/blog/licencia-casa-prefabricada-galicia",
  ],
  cta: {
    titulo: `¿Te interesa la ${m.nombre}?`,
    texto: "Pídenos la ficha y un presupuesto cerrado para tu parcela.",
    mensaje: `Hola, me interesa el modelo ${m.nombre}. ¿Me podéis dar información y presupuesto?`,
  },
}));

export const PAGINAS: Pagina[] = [...LANDINGS, ...PAGINAS_MODELO, ...ARTICULOS];

export const pagina = (ruta: string) => PAGINAS.find((p) => p.ruta === ruta);
