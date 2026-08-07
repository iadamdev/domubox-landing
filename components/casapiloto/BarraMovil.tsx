"use client";

// Barra fija inferior en movil: el CTA nunca desaparece de pantalla.
// Aparece tras salir del hero para no tapar la primera impresion.

import { useEffect, useState } from "react";
import { wa, CTA } from "@/lib/casaPiloto";

export default function BarraMovil() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#4f5516]/95 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-dmsans text-[11px] leading-tight text-white/70">Casa piloto · A Coruña</p>
          <p className="font-dmsans text-sm font-semibold leading-tight text-white">Visita con cita previa</p>
        </div>
        <a
          href={wa(CTA.visita)}
          data-origen="barra móvil"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-white px-5 py-2.5 font-dmsans text-sm font-bold text-[#4f5516] active:scale-95"
        >
          Agendar
        </a>
      </div>
    </div>
  );
}
