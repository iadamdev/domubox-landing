"use client";

// Video real del cliente. Dos piezas:
//  · recorrido vertical grabado dentro de la casa (formato movil nativo)
//  · grua descargando el modulo del camion: la prueba logistica que nadie mas ensena
// Se reproducen solos, en silencio y en bucle, y solo cuando estan en pantalla
// (IntersectionObserver) para no gastar bateria ni datos de mas.

import { useEffect, useRef } from "react";

function VideoAuto({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}

export default function Videos() {
  return (
    <section className="bg-[#12130e] px-5 py-16 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-14">
          <p className="font-dmsans text-[11px] tracking-[0.3em] text-[#c9d67e]">GRABADO EN LA CASA REAL</p>
          <h2 className="mt-4 font-playfair text-[clamp(2rem,6vw,3.75rem)] leading-[1.02] text-white">
            No son renders.
            <br />
            Es <span className="italic text-[#c9d67e]">esta</span> casa.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-stretch">
          {/* recorrido vertical */}
          <figure className="relative overflow-hidden rounded-sm bg-black">
            <VideoAuto
              src="/video/recorrido.mp4"
              poster="/real/poster-recorrido.jpg"
              className="h-[26rem] w-full object-cover md:h-full"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
            <figcaption className="absolute bottom-4 left-4 flex items-baseline gap-3">
              <span className="font-dmsans text-[10px] tracking-[0.24em] text-[#c9d67e]">01</span>
              <span className="font-playfair text-lg text-white md:text-xl">Recorrido por dentro</span>
            </figcaption>
          </figure>

          {/* grúa */}
          <figure className="relative overflow-hidden rounded-sm bg-black">
            <VideoAuto
              src="/video/grua.mp4"
              poster="/real/poster-grua.jpg"
              className="h-[16rem] w-full object-cover md:h-full"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
            <figcaption className="absolute bottom-4 left-4 flex items-baseline gap-3">
              <span className="font-dmsans text-[10px] tracking-[0.24em] text-[#c9d67e]">02</span>
              <span className="font-playfair text-lg text-white md:text-xl">Así se descarga del camión</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
