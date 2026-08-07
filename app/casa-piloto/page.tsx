// Landing de captacion para trafico pagado (Meta + Google Ads).
// Objetivo unico: escribir por WhatsApp para agendar visita a la casa piloto.
// Reglas de negocio: NO se publica precio ni direccion. Ambos son el gancho.
//
// Direccion de arte: monografia de arquitectura. Alterna bloques cinematograficos
// oscuros con bloques editoriales crema, grano de pelicula sobre la fotografia,
// tipografia sobredimensionada Playfair con acentos en italica, composicion asimetrica.
// Fotografia: sesion profesional del cliente + placas tratadas (hora dorada gallega).

import type { Metadata } from "next";
import Image from "next/image";
import Scrub from "@/components/casapiloto/Scrub";
import AntesDespues from "@/components/casapiloto/AntesDespues";
import GaleriaH from "@/components/casapiloto/GaleriaH";
import Videos from "@/components/casapiloto/Videos";
import Comparativa from "@/components/casapiloto/Comparativa";
import Perfiles from "@/components/casapiloto/Perfiles";
import { Reveal, Contador } from "@/components/casapiloto/Reveal";
import BarraMovil from "@/components/casapiloto/BarraMovil";
import { wa, CTA, FICHA, FAQS } from "@/lib/casaPiloto";

export const metadata: Metadata = {
  title: "Casa piloto en A Coruña · Visítala | DOMUBOX IMPORT",
  description:
    "Canary Luxury de 37 m² montada y visitable en A Coruña. Dos dormitorios, baño completo y acabados de serie. Agenda tu visita por WhatsApp.",
};

function BotonWA({
  mensaje,
  origen,
  children,
  variante = "solido",
  className = "",
}: {
  mensaje: string;
  origen: string;
  children: React.ReactNode;
  variante?: "solido" | "claro" | "linea" | "fantasma";
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 px-8 py-4 font-dmsans text-[13px] font-semibold tracking-[0.02em] transition-all duration-300";
  const estilos = {
    solido: "bg-[#4f5516] text-white hover:bg-[#3d4211]",
    claro: "bg-[#f7f5f0] text-[#12130e] hover:bg-white",
    linea: "border border-[#4f5516]/25 text-[#4f5516] hover:border-[#4f5516] hover:bg-[#4f5516] hover:text-white",
    fantasma: "border border-white/25 text-white hover:border-white hover:bg-white hover:text-[#12130e]",
  }[variante];

  return (
    <a
      href={wa(mensaje, origen)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${estilos} ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1s-.7 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.4 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2" />
      </svg>
      <span className="transition-transform duration-300 group-hover:translate-x-0.5">{children}</span>
    </a>
  );
}

/** Grano de pelicula: da textura fotografica y quita el look "render de IA". */
function Grano() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] opacity-[0.11] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  );
}

export default function CasaPiloto() {
  return (
    <main className="bg-[#f7f5f0] pb-20 md:pb-0">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[96vh] items-end overflow-hidden bg-[#12130e]">
        <Image
          src="/real/hf-hero.jpg"
          alt="Casa modular Canary Luxury montada en A Coruña"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d08] via-[#0c0d08]/45 to-[#0c0d08]/60" />
        <Grano />

        {/* raíl vertical: recurso editorial */}
        <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 md:block">
          <p className="font-dmsans text-[10px] tracking-[0.42em] text-white/35 [writing-mode:vertical-rl]">
            DOMUBOX IMPORT · CANARY LUXURY · A CORUÑA
          </p>
        </div>

        <div className="relative z-10 w-full px-6 pb-16 md:px-16 md:pb-24">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c9d67e]" />
            <span className="font-dmsans text-[10px] tracking-[0.32em] text-[#c9d67e] md:text-[11px]">
              CASA PILOTO VISITABLE
            </span>
          </div>

          <h1 className="max-w-4xl font-playfair text-[clamp(2.5rem,8.2vw,7rem)] leading-[0.94] tracking-[-0.02em] text-white">
            Otros venden
            <br />
            renders.
            <br />
            <span className="italic text-[#c9d67e]">Nosotros abrimos</span>
            <br />
            <span className="italic text-[#c9d67e]">la puerta.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md font-dmsans text-[15px] leading-relaxed text-white/75">
              Tenemos una <span className="text-white">Canary Luxury de 37 m²</span> montada en A Coruña.
              Dos dormitorios, baño completo y acabados de serie. Entra, tócala y decide con la casa
              delante, no con un catálogo.
            </p>

            <div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <BotonWA mensaje={CTA.visita} origen="hero visita" variante="claro">
                  Agendar mi visita
                </BotonWA>
                <BotonWA mensaje={CTA.precio} origen="hero precio" variante="fantasma">
                  Quiero el precio
                </BotonWA>
              </div>
              <p className="mt-4 font-dmsans text-[12px] text-white/55">
                Cita previa · Sin compromiso · Te respondemos por WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUESINA ───────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-[#4f5516]/15 bg-[#4f5516] py-3.5">
        <div className="flex animate-[deslizar_38s_linear_infinite] gap-10 whitespace-nowrap will-change-transform">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex shrink-0 gap-10 font-dmsans text-[11px] tracking-[0.28em] text-[#c9d67e]">
              <span>37 M² CONSTRUIDOS</span>
              <span className="text-white/30">◆</span>
              <span>DOS DORMITORIOS</span>
              <span className="text-white/30">◆</span>
              <span>MONTAJE EN DÍAS</span>
              <span className="text-white/30">◆</span>
              <span>GRAFENO + BAMBÚ</span>
              <span className="text-white/30">◆</span>
              <span>VISITABLE EN A CORUÑA</span>
              <span className="text-white/30">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SCROLL-SCRUB: el despliegue real ─────────────────── */}
      <Scrub />

      {/* ── ANTES / DESPUÉS ──────────────────────────────────── */}
      <section className="px-5 py-16 md:px-16 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="font-dmsans text-[11px] tracking-[0.3em] text-[#94A11A]">EL MISMO MÓDULO</p>
              <h2 className="mt-4 max-w-xl font-playfair text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.015em] text-[#12130e]">
                Una caja de acero.
                <br />
                Hasta que <span className="italic text-[#4f5516]">se abre</span>.
              </h2>
            </div>
            <p className="max-w-xs font-dmsans text-sm leading-relaxed text-[#717171]">
              Viaja plegada en un camión y se despliega sobre tu parcela. Sin gremios, sin escombro y sin
              meses de obra.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <AntesDespues />
          </Reveal>
        </div>
      </section>

      {/* ── CIFRAS ───────────────────────────────────────────── */}
      <section className="border-y border-[#dfdbcd] bg-white px-5 py-14 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-3">
          {[
            { n: 37, s: " m²", t: "Superficie construida" },
            { n: 2, s: "", t: "Dormitorios" },
            { n: 1, s: "", t: "Baño completo" },
          ].map((d, i) => (
            <Reveal key={d.t} delay={i * 0.1}>
              <div className="border-l border-[#4f5516]/20 pl-5">
                <Contador
                  to={d.n}
                  suffix={d.s}
                  className="block font-playfair text-[clamp(3rem,7vw,5rem)] leading-none text-[#4f5516]"
                />
                <p className="mt-3 font-dmsans text-[10px] tracking-[0.26em] text-[#8a8a82]">
                  {d.t.toUpperCase()}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── GALERÍA HORIZONTAL ───────────────────────────────── */}
      <GaleriaH />

      {/* ── VÍDEO REAL ───────────────────────────────────────── */}
      <Videos />

      <Comparativa />

      {/* ── MATERIALES + FICHA (asimétrico, foto desbordada) ── */}
      <section className="relative bg-[#12130e] py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-12 md:gap-0 md:px-0">
          <Reveal className="md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <Image
                src="/real/hf-materiales.jpg"
                alt="Detalle de materiales y acabados"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
              <Grano />
            </div>
          </Reveal>

          <Reveal delay={0.12} className="md:col-span-5 md:-ml-16 md:pr-16">
            <div className="bg-[#f7f5f0] p-8 md:p-12">
              <p className="font-dmsans text-[11px] tracking-[0.3em] text-[#94A11A]">CALIDAD DE SERIE</p>
              <h2 className="mt-4 font-playfair text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.04] tracking-[-0.015em] text-[#12130e]">
                Materiales
                <br />
                que <span className="italic text-[#4f5516]">se tocan</span>.
              </h2>
              <p className="mt-5 font-dmsans text-sm leading-relaxed text-[#717171]">
                Panel de grafeno con fibra de bambú, estructura totalmente galvanizada y base ignífuga de
                magnesio. Sistema monolítico, no un multicapa de OSB y lana.
              </p>

              <dl className="mt-8 border-t border-[#12130e]/10">
                {FICHA.map((f) => (
                  <div
                    key={f.k}
                    className="flex items-center justify-between gap-4 border-b border-[#12130e]/10 py-3"
                  >
                    <dt className="font-dmsans text-[10px] tracking-[0.16em] text-[#8a8a82]">
                      {f.k.toUpperCase()}
                    </dt>
                    <dd className="text-right font-dmsans text-[13px] font-semibold text-[#12130e]">{f.v}</dd>
                  </div>
                ))}
              </dl>

              <BotonWA mensaje={CTA.ficha} origen="ficha técnica" variante="linea" className="mt-8 w-full">
                Pedir ficha técnica
              </BotonWA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="px-5 py-16 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="font-dmsans text-[11px] tracking-[0.3em] text-[#94A11A]">DUDAS FRECUENTES</p>
            <h2 className="mt-4 font-playfair text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.015em] text-[#12130e]">
              Lo que todo
              <br />
              el mundo <span className="italic text-[#4f5516]">pregunta</span>.
            </h2>
            <p className="mt-6 max-w-xs font-dmsans text-sm leading-relaxed text-[#717171]">
              ¿Te queda alguna? Escríbenos y te la resolvemos por WhatsApp, sin compromiso.
            </p>
          </Reveal>

          <div>
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group border-b border-[#12130e]/12 py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <span className="flex gap-4">
                      <span className="mt-1 font-dmsans text-[10px] tracking-[0.2em] text-[#94A11A]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-playfair text-lg leading-snug text-[#12130e] md:text-xl">
                        {f.q}
                      </span>
                    </span>
                    <span className="mt-1 shrink-0 text-lg text-[#4f5516] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pl-9 font-dmsans text-sm leading-relaxed text-[#717171]">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Perfiles />

      {/* ── CIERRE ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[80vh] px-6 py-28 md:px-16 md:py-40">
          <Image
            src="/real/hf-bluehour.jpg"
            alt="Casa modular Canary al atardecer"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0c0d08]/72" />
          <Grano />

          <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em] text-white">
              Está montada.
              <br />
              <span className="italic text-[#c9d67e]">Ven a verla.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-md font-dmsans text-[15px] leading-relaxed text-white/75">
              Recórrela con nosotros, toca los materiales y resuelve tus dudas sobre tu parcela. Sales con
              presupuesto cerrado y sin compromiso.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BotonWA mensaje={CTA.visita} origen="cierre visita" variante="claro">
                Agendar visita
              </BotonWA>
              <BotonWA mensaje={CTA.precio} origen="cierre precio" variante="fantasma">
                Pedir precio
              </BotonWA>
            </div>

            <p className="mt-8 font-dmsans text-[11px] tracking-[0.2em] text-white/40">
              VISITAS CON CITA PREVIA · SIN COMPROMISO
            </p>
          </Reveal>
        </div>
      </section>

      <BarraMovil />
    </main>
  );
}
