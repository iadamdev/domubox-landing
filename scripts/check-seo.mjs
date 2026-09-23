// Comprobacion de las paginas SEO sobre el build. Uso: npm run build && node scripts/check-seo.mjs
// Falla (exit 1) si alguna pagina pierde canonical, title, h1 o esquema valido,
// si un enlace interno apunta a una ruta que no existe o si falta una imagen.
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const RAIZ = ".next/server/app";
const html = [];
const recorrer = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) recorrer(p);
  else if (f.endsWith(".html")) html.push(p);
});
recorrer(RAIZ);

const ruta = (p) => {
  const r = p.slice(RAIZ.length).replace(/\.html$/, "").replace(/\/index$/, "");
  return r === "" ? "/" : r;
};
const rutas = new Set(html.map(ruta));
const errores = [];
const nuevas = html.filter((p) => /casas-prefabricadas|casa-contenedor|mobil-home|\/modelos\/|\/blog/.test(p));

for (const f of nuevas) {
  const s = readFileSync(f, "utf8"), r = ruta(f);
  if (!/<link rel="canonical" href="https:\/\/www\.domuboximport\.com/.test(s)) errores.push(`${r}: sin canonical`);
  const t = s.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  if (!t) errores.push(`${r}: sin title`);
  if ((s.match(/<h1[\s>]/g) ?? []).length !== 1) errores.push(`${r}: no tiene exactamente un h1`);
  for (const m of s.matchAll(/type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try { JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&")); }
    catch { errores.push(`${r}: JSON-LD invalido`); }
  }
  for (const [, href] of s.matchAll(/href="(\/[^"#?]*)"/g)) {
    if (/^\/(_next|pdf|img|real|favicon)/.test(href)) continue;
    if (!rutas.has(href.replace(/\/$/, "") || "/")) errores.push(`${r}: enlace roto ${href}`);
  }
  for (const [, src] of s.matchAll(/(?:src|url)=?"?(\/(?:real|img)\/[^"&?,\s)]+)/g)) {
    if (!existsSync(join("public", decodeURIComponent(src)))) errores.push(`${r}: falta imagen ${src}`);
  }
}

console.log(`paginas nuevas revisadas: ${nuevas.length}`);
if (errores.length) { console.log([...new Set(errores)].join("\n")); process.exit(1); }
console.log("todo correcto");
