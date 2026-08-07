// Bifurcacion por perfil. La matriz de hooks identifico dos compradores muy
// distintos: la familia con parcela y el inversor de alojamiento turistico.
// Cada camino abre WhatsApp con un mensaje propio, asi el comercial ya sabe
// con quien habla antes de responder.

import Image from "next/image";
import { wa, CTA, PERFILES } from "@/lib/casaPiloto";
import { Reveal } from "./Reveal";

const FOTO: Record<string, string> = {
  vivienda: "/real/hf-paisaje.jpg",
  inversor: "/real/hf-bluehour.jpg",
};

export default function Perfiles() {
  return (
    <section className="border-y border-[#dfdbcd] bg-white px-5 py-16 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-dmsans text-[11px] tracking-[0.3em] text-[#94A11A]">DOS CAMINOS</p>
          <h2 className="mt-4 max-w-2xl font-playfair text-[clamp(2rem,6vw,3.5rem)] leading-[1.02] tracking-[-0.015em] text-[#12130e]">
            ¿La quieres para vivir
            <br />o para <span className="italic text-[#4f5516]">alquilarla</span>?
          </h2>
          <p className="mt-5 max-w-lg font-dmsans text-[15px] leading-relaxed text-[#717171]">
            Dinos cuál es tu caso y te contamos solo lo que te interesa, sin discursos genéricos.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PERFILES.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <a
                href={wa(CTA[p.mensaje])}
                data-origen={`perfil ${p.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-sm p-7 md:min-h-[26rem] md:p-9"
              >
                <Image
                  src={FOTO[p.id]}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d08]/92 via-[#0c0d08]/45 to-[#0c0d08]/25" />

                <div className="relative z-10">
                  <p className="font-dmsans text-[10px] tracking-[0.28em] text-[#c9d67e]">{p.kicker}</p>
                  <h3 className="mt-3 font-playfair text-2xl leading-tight text-white md:text-[2rem]">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 max-w-sm font-dmsans text-[13px] leading-relaxed text-white/75 md:text-sm">
                    {p.texto}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-dmsans text-[13px] font-semibold text-white">
                    {p.cta}
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center font-dmsans text-[13px] text-[#717171]">
            ¿Aún no sabes si tu parcela es apta?{" "}
            <a
              href={wa(CTA.parcela)}
              data-origen="parcela apta"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#4f5516] underline underline-offset-4 hover:no-underline"
            >
              Te lo decimos antes de que gastes un euro
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
