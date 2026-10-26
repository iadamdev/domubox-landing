// Bloque de la home que enlaza las paginas SEO. La home recibe la mayor parte
// del trafico organico y solo enlazaba las paginas nuevas desde el pie: con
// enlaces visibles y en contexto Google les reparte mas autoridad.
import Link from "next/link";

const ZONAS = [
  { href: "/casas-prefabricadas-galicia", t: "Casas prefabricadas en Galicia" },
  { href: "/casas-prefabricadas-a-coruna", t: "A Coruña y su área" },
  { href: "/casas-prefabricadas-santiago-de-compostela", t: "Santiago, Ferrol y Carballo" },
  { href: "/casa-contenedor", t: "Casa contenedor" },
  { href: "/mobil-home-galicia", t: "Mobil home en Galicia" },
];
const GUIAS = [
  { href: "/blog/cuanto-cuesta-casa-prefabricada-galicia", t: "¿Cuánto cuesta una casa prefabricada?" },
  { href: "/blog/licencia-casa-prefabricada-galicia", t: "Licencia en Galicia" },
  { href: "/blog/casas-prefabricadas-cte", t: "Casas prefabricadas y el CTE" },
  { href: "/blog/casas-prefabricadas-llave-en-mano", t: "Llave en mano: qué incluye" },
];

export default function EnlacesHome() {
  return (
    <section className="bg-[#f7f5f0] px-6 py-20 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        {[["DÓNDE INSTALAMOS", ZONAS], ["ANTES DE COMPRAR", GUIAS]].map(([titulo, items]) => (
          <div key={titulo as string}>
            <p className="font-dmsans text-[11px] tracking-[0.3em] text-[#4f5516]">{titulo as string}</p>
            <ul className="mt-5 divide-y divide-[#4f5516]/15 border-y border-[#4f5516]/15">
              {(items as { href: string; t: string }[]).map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="flex items-center justify-between py-4 font-playfair text-[1.2rem] text-[#12130e] transition-colors hover:text-[#4f5516]">
                    {i.t}<span aria-hidden className="text-[#4f5516]">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
