import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ARTICULOS } from "@/lib/seo/blog";

export const metadata: Metadata = {
  title: { absolute: "Blog de casas prefabricadas y modulares en Galicia | DOMUBOX IMPORT" },
  description:
    "Guías claras sobre casas prefabricadas y modulares en Galicia: precios, licencias, llave en mano, financiación y turismo rural.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <main className="bg-[#f7f5f0] pb-24">
      <section className="bg-[#12130e] px-6 pb-16 pt-36 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-dmsans text-[11px] tracking-[0.3em] text-[#c9d67e]">BLOG · CASAS PREFABRICADAS</p>
          <h1 className="mt-4 max-w-3xl font-playfair text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.02] text-white">
            Todo lo que conviene saber <span className="italic text-[#c9d67e]">antes de comprar.</span>
          </h1>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTICULOS.map((a) => (
            <Link key={a.ruta} href={a.ruta} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e3d6]">
                <Image src={a.imagen} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <p className="mt-4 font-dmsans text-[10.5px] tracking-[0.22em] text-[#94a11a]">{a.kicker}</p>
              <h2 className="mt-2 font-playfair text-[1.45rem] leading-snug text-[#12130e] group-hover:text-[#4f5516]">
                {a.h1} {a.h1Acento}
              </h2>
              <p className="mt-2 font-dmsans text-[14.5px] leading-relaxed text-[#5a5a4c]">{a.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
