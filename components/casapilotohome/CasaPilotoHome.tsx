"use client";

// Bloque de la home que anuncia la casa piloto y empuja a agendar visita.
// Es el activo diferencial de la marca en A Coruna: la competencia ensena
// renders, aqui se puede entrar. Lleva el trafico a /casa-piloto, que es la
// pagina de conversion, y ofrece ademas el atajo directo a WhatsApp.

import Image from "next/image";
import Link from "next/link";
import { wa, CTA } from "@/lib/casaPiloto";

export default function CasaPilotoHome() {
  return (
    <section className="relative overflow-hidden bg-[#12130e]">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 md:grid-cols-2">
        {/* vídeo real del despacho de la casa */}
        <div className="relative min-h-[20rem] md:min-h-[34rem]">
          <video
            src="/video/grua.mp4"
            poster="/real/poster-grua.jpg"
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25" />
          <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 font-dmsans text-[10px] tracking-[0.2em] text-white backdrop-blur">
            DESCARGA REAL EN A CORUÑA
          </span>
        </div>

        {/* mensaje y llamadas a la acción */}
        <div className="flex flex-col justify-center px-6 py-14 md:px-14 md:py-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c9d67e]" />
            <span className="font-dmsans text-[10px] tracking-[0.3em] text-[#c9d67e]">
              NOVEDAD · A CORUÑA
            </span>
          </div>

          <h2 className="font-playfair text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.04] text-white">
            Ya tenemos una casa
            <br />
            <span className="italic text-[#c9d67e]">montada y visitable.</span>
          </h2>

          <p className="mt-6 max-w-md font-dmsans text-[15px] leading-relaxed text-white/75">
            Una Canary Luxury de 37 m² con dos dormitorios, baño completo y acabados de serie. Ven, ábrela,
            toca los materiales y decide con la casa delante en vez de con un catálogo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={wa(CTA.visita)}
              data-origen="home casa piloto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#f7f5f0] px-7 py-4 font-dmsans text-[13px] font-semibold text-[#12130e] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1s-.7 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.4 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2" />
              </svg>
              Agendar mi visita
            </a>

            <Link
              href="/casa-piloto"
              className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-4 font-dmsans text-[13px] font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#12130e]"
            >
              Ver la casa piloto
              <span aria-hidden>→</span>
            </Link>
          </div>

          <p className="mt-5 font-dmsans text-[12px] text-white/45">
            Visitas con cita previa · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
