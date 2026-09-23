// Plantilla de las paginas SEO. Reproduce el lenguaje visual de /casa-piloto:
// hero oscuro cinematografico, bloques editoriales crema, Playfair con acento
// en italica y un unico objetivo de conversion, escribir por WhatsApp.
//
// Es un componente de servidor: el HTML llega completo a Google sin depender
// de JavaScript. Solo Reveal y TrackWA son de cliente.

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/casapiloto/Reveal";
import TrackWA from "@/components/casapiloto/TrackWA";
import { wa } from "@/lib/casaPiloto";
import { MODELOS } from "@/lib/modelos";
import { pagina as buscar } from "@/lib/seo/paginas";
import type { Pagina } from "@/lib/seo/tipos";

const SITIO = "https://www.domuboximport.com";
const ACENTO = "#c9d67e";

function Boton({ mensaje, origen, claro = false, children }: {
  mensaje: string; origen: string; claro?: boolean; children: React.ReactNode;
}) {
  return (
    <a
      href={wa(mensaje)}
      data-origen={origen}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-8 py-4 font-dmsans text-[13px] font-semibold tracking-[0.02em] transition-colors duration-300 ${
        claro
          ? "bg-[#f7f5f0] text-[#12130e] hover:bg-white"
          : "bg-[#4f5516] text-white hover:bg-[#3d4211]"
      }`}
    >
      {children}
    </a>
  );
}

function Esquema({ p }: { p: Pagina }) {
  const url = SITIO + p.ruta;
  const miga = [
    { name: "Inicio", item: SITIO },
    ...(p.tipo === "articulo" ? [{ name: "Blog", item: SITIO + "/blog" }] : []),
    ...(p.tipo === "modelo" ? [{ name: "Modelos", item: SITIO + "/#modelos" }] : []),
    { name: p.h1 + (p.h1Acento ? " " + p.h1Acento : ""), item: url },
  ];
  const grafo: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: miga.map((m, i) => ({ "@type": "ListItem", position: i + 1, ...m })),
    },
    p.tipo === "articulo"
      ? {
          "@type": "Article",
          headline: p.title,
          description: p.description,
          image: SITIO + p.imagen,
          datePublished: p.fecha,
          dateModified: p.fecha,
          author: { "@type": "Organization", name: "Domubox Import" },
          publisher: { "@id": SITIO + "/#negocio" },
          mainEntityOfPage: url,
        }
      : {
          "@type": "Service",
          name: p.title,
          description: p.description,
          provider: { "@id": SITIO + "/#negocio" },
          areaServed: ["A Coruña", "Galicia"],
          url,
        },
  ];
  if (p.faqs?.length)
    grafo.push({
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": grafo }),
      }}
    />
  );
}

export default function PaginaSEO({ p }: { p: Pagina }) {
  const relacionados = p.relacionados.map(buscar).filter(Boolean) as Pagina[];

  return (
    <main className="bg-[#f7f5f0]">
      <Esquema p={p} />
      <TrackWA />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#12130e] pt-28">
        <Image
          src={p.imagen}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12130e] via-[#12130e]/55 to-transparent" />
        <div className="relative z-10 w-full px-6 pb-16 md:px-16 md:pb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10" style={{ background: ACENTO }} />
            <span className="font-dmsans text-[10px] tracking-[0.3em] md:text-[11px]" style={{ color: ACENTO }}>
              {p.kicker}
            </span>
          </div>
          <h1 className="max-w-4xl font-playfair text-[clamp(2.2rem,6vw,5rem)] leading-[1] tracking-[-0.02em] text-white">
            {p.h1}
            {p.h1Acento && (
              <>
                {" "}
                <span className="italic" style={{ color: ACENTO }}>{p.h1Acento}</span>
              </>
            )}
          </h1>
          <p className="mt-8 max-w-2xl font-dmsans text-[16px] leading-relaxed text-white/80">
            {p.entradilla}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Boton mensaje={p.cta.mensaje} origen={`${p.origen} hero`} claro>
              Escribir por WhatsApp
            </Boton>
            <Link
              href="/casa-piloto"
              className="inline-flex items-center justify-center border border-white/25 px-8 py-4 font-dmsans text-[13px] font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-[#12130e]"
            >
              Ver la casa piloto
            </Link>
          </div>
        </div>
      </section>

      {/* ── MIGAS ───────────────────────────────────────────── */}
      <nav aria-label="Ruta" className="mx-auto max-w-5xl px-6 pt-8 font-dmsans text-[12px] text-[#6b6a5c] md:px-8">
        <Link href="/" className="hover:text-[#4f5516]">Inicio</Link>
        {p.tipo === "articulo" && (<> · <Link href="/blog" className="hover:text-[#4f5516]">Blog</Link></>)}
        {p.tipo === "modelo" && (<> · <Link href="/#modelos" className="hover:text-[#4f5516]">Modelos</Link></>)}
        {" · "}<span className="text-[#12130e]">{p.kicker.toLowerCase()}</span>
      </nav>

      {/* ── GALERIA (modelos) ───────────────────────────────── */}
      {p.galeria && (
        <section className="mx-auto max-w-6xl px-6 pt-10 md:px-8">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {p.galeria.map((src, i) => (
              <div key={src} className={`relative overflow-hidden bg-[#e8e3d6] ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
                <Image src={src} alt={`${p.h1} · foto ${i + 1}`} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── FICHA RAPIDA (modelos) ──────────────────────────── */}
      {p.datos && (
        <section className="mx-auto max-w-5xl px-6 pt-12 md:px-8">
          <Reveal>
            <div className="grid gap-px overflow-hidden border border-[#4f5516]/15 bg-[#4f5516]/15 sm:grid-cols-2">
              {p.datos.map((d) => (
                <div key={d} className="bg-white px-6 py-5 font-dmsans text-[15px] text-[#12130e]">{d}</div>
              ))}
            </div>
            {!!p.fichas?.length && (
              <div className="mt-6 flex flex-wrap gap-3">
                {p.fichas.map((f) => (
                  <a key={f.url} href={f.url} target="_blank" rel="noopener" className="border border-[#4f5516]/30 px-5 py-3 font-dmsans text-[13px] font-semibold text-[#4f5516] transition-colors hover:bg-[#4f5516] hover:text-white">
                    Ficha técnica · {f.name}
                  </a>
                ))}
              </div>
            )}
          </Reveal>
        </section>
      )}

      {/* ── CUERPO ──────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-6 pb-8 pt-12 md:px-8">
        {p.fecha && (
          <p className="mb-8 font-dmsans text-[12px] tracking-[0.12em] text-[#6b6a5c]">
            ACTUALIZADO · {new Date(p.fecha).toLocaleDateString("es-ES", { month: "long", year: "numeric" }).toUpperCase()}
          </p>
        )}
        {p.secciones.map((s) => (
          <Reveal key={s.h2}>
            <section className="mb-14">
              <h2 className="font-playfair text-[clamp(1.7rem,3.4vw,2.5rem)] leading-[1.08] tracking-[-0.01em] text-[#12130e]">
                {s.h2}
              </h2>
              <div className="mt-5 space-y-4 font-dmsans text-[16.5px] leading-[1.75] text-[#3a3a2e]">
                {s.p.map((t, i) => <p key={i}>{t}</p>)}
              </div>
              {s.lista && (
                <ul className="mt-5 space-y-2.5 font-dmsans text-[16px] leading-relaxed text-[#3a3a2e]">
                  {s.lista.map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 flex-none rounded-full bg-[#4f5516]" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.imagen && (
                <figure className="mt-8">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e3d6]">
                    <Image src={s.imagen} alt={s.pie ?? s.h2} fill sizes="(min-width:768px) 768px, 100vw" className="object-cover" />
                  </div>
                  {s.pie && <figcaption className="mt-3 font-dmsans text-[13px] text-[#6b6a5c]">{s.pie}</figcaption>}
                </figure>
              )}
            </section>
          </Reveal>
        ))}
      </article>

      {/* ── MODELOS ─────────────────────────────────────────── */}
      {p.mostrarModelos && (
        <section className="border-t border-[#4f5516]/10 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <h2 className="font-playfair text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.05] text-[#12130e]">
              Cinco modelos, <span className="italic text-[#4f5516]">una misma forma de construir</span>
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MODELOS.map((m) => (
                <Link key={m.slug} href={`/modelos/${m.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e3d6]">
                    <Image src={m.imagenes[0]} alt={`Casa prefabricada modelo ${m.nombre}`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <h3 className="mt-4 font-playfair text-[1.5rem] text-[#12130e]">{m.nombre}</h3>
                  <p className="mt-1 font-dmsans text-[14.5px] leading-relaxed text-[#5a5a4c]">{m.resumen}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PREGUNTAS ───────────────────────────────────────── */}
      {!!p.faqs?.length && (
        <section className="mx-auto max-w-3xl px-6 py-16 md:px-8">
          <h2 className="font-playfair text-[clamp(1.7rem,3.4vw,2.5rem)] text-[#12130e]">Preguntas frecuentes</h2>
          <div className="mt-8 divide-y divide-[#4f5516]/15 border-y border-[#4f5516]/15">
            {p.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-dmsans text-[16.5px] font-semibold text-[#12130e]">
                  {f.q}
                  <span className="mt-0.5 text-[#4f5516] transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 font-dmsans text-[15.5px] leading-[1.7] text-[#3a3a2e]">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#12130e] px-6 py-24 md:px-16">
        <Image src="/real/hf-bluehour.jpg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="font-playfair text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] text-white">
            {p.cta.titulo}
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-dmsans text-[16px] leading-relaxed text-white/75">{p.cta.texto}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Boton mensaje={p.cta.mensaje} origen={`${p.origen} cierre`} claro>
              Escribir por WhatsApp
            </Boton>
            <Link href="/casa-piloto" className="inline-flex items-center justify-center border border-white/25 px-8 py-4 font-dmsans text-[13px] font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-[#12130e]">
              Visitar la casa piloto
            </Link>
          </div>
          <p className="mt-5 font-dmsans text-[12px] text-white/50">Cita previa · Sin compromiso · Presupuesto cerrado</p>
        </div>
      </section>

      {/* ── SIGUE LEYENDO ───────────────────────────────────── */}
      {!!relacionados.length && (
        <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <p className="font-dmsans text-[11px] tracking-[0.3em] text-[#4f5516]">SIGUE LEYENDO</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {relacionados.map((r) => (
              <Link key={r.ruta} href={r.ruta} className="group block border border-[#4f5516]/15 bg-white p-6 transition-colors hover:border-[#4f5516]">
                <p className="font-dmsans text-[10.5px] tracking-[0.22em] text-[#94a11a]">{r.kicker}</p>
                <h3 className="mt-3 font-playfair text-[1.3rem] leading-snug text-[#12130e] group-hover:text-[#4f5516]">
                  {r.h1}{r.h1Acento ? " " + r.h1Acento : ""}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
