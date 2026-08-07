"use client";

// Deslizador arrastrable: plegada <-> montada.
// El usuario "abre" la casa con el dedo. Es tactil, memorable y demuestra
// el sistema constructivo sin una sola linea de copy.
// Soporta raton, tactil y teclado (accesible).

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AntesDespues() {
  const cont = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(38);
  const arrastrando = useRef(false);

  const mover = useCallback((clientX: number) => {
    const r = cont.current?.getBoundingClientRect();
    if (!r) return;
    const p = ((clientX - r.left) / r.width) * 100;
    setPct(Math.min(96, Math.max(4, p)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => arrastrando.current && mover(e.clientX);
    const onTouch = (e: TouchEvent) => arrastrando.current && mover(e.touches[0].clientX);
    const soltar = () => (arrastrando.current = false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseup", soltar);
    window.addEventListener("touchend", soltar);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", soltar);
      window.removeEventListener("touchend", soltar);
    };
  }, [mover]);

  return (
    <div className="relative">
      <div
        ref={cont}
        className="relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden md:aspect-[16/10]"
        onMouseDown={(e) => {
          arrastrando.current = true;
          mover(e.clientX);
        }}
        onTouchStart={(e) => {
          arrastrando.current = true;
          mover(e.touches[0].clientX);
        }}
      >
        {/* despues: montada */}
        <Image
          src="/real/hf-hero.jpg"
          alt="Casa modular Canary Luxury montada y desplegada"
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* antes: plegada, recortada por el deslizador */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <Image
            src="/real/hf-plegada.jpg"
            alt="La misma vivienda plegada, lista para transporte"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* etiquetas */}
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 font-dmsans text-[10px] tracking-[0.2em] text-white backdrop-blur md:left-8 md:top-8 md:text-xs">
          ASÍ LLEGA
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-[#4f5516]/85 px-3 py-1 font-dmsans text-[10px] tracking-[0.2em] text-white backdrop-blur md:right-8 md:top-8 md:text-xs">
          ASÍ SE ENTREGA
        </span>

        {/* raíl */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          style={{ left: `${pct}%` }}
        />

        {/* tirador */}
        <button
          aria-label="Arrastra para ver la casa plegada o montada"
          className="absolute top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/15 backdrop-blur-md transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          style={{ left: `${pct}%` }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPct((p) => Math.max(4, p - 5));
            if (e.key === "ArrowRight") setPct((p) => Math.min(96, p + 5));
          }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden>
            <path d="M9 6 3 12l6 6zM15 6l6 6-6 6z" />
          </svg>
        </button>
      </div>

      <p className="mt-4 text-center font-dmsans text-xs tracking-[0.18em] text-[#8a8a82]">
        ← ARRASTRA PARA ABRIRLA →
      </p>
    </div>
  );
}
