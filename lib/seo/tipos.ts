// Forma comun de todas las paginas SEO (landings, modelos y articulos).
// El contenido vive como datos; la plantilla PaginaSEO lo pinta. Anadir una
// pagina nueva es anadir un objeto, no un componente.

export type Seccion = {
  h2: string;
  p: string[];
  lista?: string[];
  imagen?: string;
  pie?: string;
};

export type Pagina = {
  ruta: string;
  tipo: "landing" | "modelo" | "articulo";
  title: string;
  description: string;
  kicker: string;
  h1: string;
  h1Acento?: string;
  entradilla: string;
  imagen: string;
  secciones: Seccion[];
  faqs?: { q: string; a: string }[];
  relacionados: string[];
  cta: { titulo: string; texto: string; mensaje: string };
  origen: string;
  fecha?: string;
  mostrarModelos?: boolean;
  galeria?: string[];
  datos?: string[];
  fichas?: { name: string; url: string }[];
};
