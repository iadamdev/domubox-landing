// Comparativa obra tradicional vs Domubox (deseo Tranquilidad).
//  · Movil: una tarjeta por fila. Tres columnas a 11px eran ilegibles.
//  · Escritorio: tabla de tres columnas.

import { COMPARATIVA } from "@/lib/casaPiloto";
import { Reveal } from "./Reveal";

export default function Comparativa() {
  return (
    <section className="px-5 py-16 md:px-16 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-dmsans text-[11px] tracking-[0.3em] text-[#94A11A]">SIN OBRA ETERNA</p>
          <h2 className="mt-4 font-playfair text-[clamp(2rem,7vw,3.75rem)] leading-[1.02] tracking-[-0.015em] text-[#12130e]">
            Lo que cambia respecto
            <br />a <span className="italic text-[#4f5516]">construir</span>.
          </h2>
        </Reveal>

        {/* MÓVIL: tarjetas */}
        <div className="mt-10 space-y-3 md:hidden">
          {COMPARATIVA.map((f, i) => (
            <Reveal key={f.punto} delay={i * 0.05}>
              <div className="rounded-sm border border-[#12130e]/10 bg-white p-4">
                <p className="font-dmsans text-[15px] font-semibold leading-snug text-[#12130e]">
                  {f.punto}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <p className="font-dmsans text-[9px] tracking-[0.18em] text-[#a8a49a]">TRADICIONAL</p>
                    <p className="mt-1 font-dmsans text-[13px] leading-snug text-[#a8a49a]">
                      {f.tradicional}
                    </p>
                  </div>
                  <div className="border-l border-[#4f5516]/20 pl-3">
                    <p className="font-dmsans text-[9px] font-bold tracking-[0.18em] text-[#4f5516]">
                      DOMUBOX
                    </p>
                    <p className="mt-1 font-dmsans text-[13px] font-semibold leading-snug text-[#4f5516]">
                      {f.domubox}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ESCRITORIO: tabla */}
        <div className="mt-14 hidden md:block">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-[#12130e]/15 pb-3">
            <span />
            <span className="text-center font-dmsans text-[10px] tracking-[0.2em] text-[#a8a49a]">
              OBRA TRADICIONAL
            </span>
            <span className="text-center font-dmsans text-[10px] font-bold tracking-[0.2em] text-[#4f5516]">
              DOMUBOX
            </span>
          </div>
          {COMPARATIVA.map((f, i) => (
            <Reveal key={f.punto} delay={i * 0.05}>
              <div className="grid grid-cols-[1.5fr_1fr_1fr] items-center border-b border-[#12130e]/8 py-5">
                <span className="pr-4 font-dmsans text-[15px] text-[#12130e]">{f.punto}</span>
                <span className="text-center font-dmsans text-[13px] text-[#a8a49a]">{f.tradicional}</span>
                <span className="text-center font-dmsans text-[13px] font-semibold text-[#4f5516]">
                  {f.domubox}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
