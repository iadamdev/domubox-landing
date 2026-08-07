"use client";

// Scroll-scrub: el usuario despliega la casa con su propio scroll.
// Secuencia de 48 fotogramas del video real de montaje, pintados en canvas.
//
// El "pinnado" se hace con position:sticky de CSS, NO con pin de GSAP.
// El pin de GSAP inserta un spacer en el DOM y React pierde la referencia de
// sus nodos (NotFoundError: removeChild). Con sticky, GSAP solo lee el progreso
// y no toca la estructura: React manda sobre el DOM y todo convive.

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FRAMES = 48;
const src = (i: number) => `/scrub/f${String(i).padStart(3, "0")}.jpg`;

export default function Scrub() {
  const sec = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cv = canvas.current;
    const s = sec.current;
    if (!cv || !s) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const imgs: HTMLImageElement[] = [];
    let frame = 0;

    const pintar = () => {
      const img = imgs[Math.round(frame)];
      if (!img?.complete || !img.naturalWidth) return;
      const cr = cv.width / cv.height;
      const ir = img.naturalWidth / img.naturalHeight;
      let w = cv.width;
      let h = cv.height;
      let x = 0;
      let y = 0;
      if (ir > cr) {
        w = cv.height * ir;
        x = (cv.width - w) / 2;
      } else {
        h = cv.width / ir;
        y = (cv.height - h) / 2;
      }
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.drawImage(img, x, y, w, h);
    };

    const dimensionar = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = cv.offsetWidth * dpr;
      cv.height = cv.offsetHeight * dpr;
      pintar();
    };

    // Carga diferida: la secuencia son ~2 MB. Cargarla en el arranque penaliza
    // el LCP en movil, y el LCP afecta al Quality Score de Ads y a la entrega en Meta.
    // Se descarga cuando el usuario se acerca a la seccion.
    let cargadas = 0;
    const descargar = () => {
      for (let i = 1; i <= FRAMES; i++) {
        const img = new Image();
        img.src = src(i);
        img.onload = () => {
          if (++cargadas === 1) {
            dimensionar();
            setListo(true);
          }
        };
        imgs[i - 1] = img;
      }
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          descargar();
          io.disconnect();
        }
      },
      { rootMargin: "150% 0px" }
    );
    io.observe(s);

    window.addEventListener("resize", dimensionar);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const st = ScrollTrigger.create({
        trigger: s,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          frame = self.progress * (FRAMES - 1);
          pintar();
        },
      });
      return () => st.kill();
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      frame = FRAMES - 1;
      pintar();
    });

    return () => {
      io.disconnect();
      window.removeEventListener("resize", dimensionar);
      mm.revert();
    };
  }, []);

  return (
    // La altura extra es el recorrido del scrub; el interior queda pegado arriba.
    <section ref={sec} className="relative h-[300vh] bg-[#0f100c]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvas} className="absolute inset-0 h-full w-full" />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/90 to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 top-0 p-5 pt-24 md:p-12 md:pt-28">
          <p className="font-dmsans text-[10px] tracking-[0.3em] text-white/65 md:text-xs">
            SISTEMA PLEGABLE · MONTAJE REAL
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 pb-12 md:p-12 md:pb-16">
          <h2 className="font-playfair text-[clamp(2rem,8vw,4.5rem)] leading-[1.02] text-white">
            Llega plegada.
            <br />
            <span className="italic text-[#c9d67e]">Se abre en tu parcela.</span>
          </h2>
          <p className="mt-4 max-w-md font-dmsans text-[13px] leading-relaxed text-white/75 md:text-base">
            Desliza para ver el despliegue completo. Sin obra, sin gremios, sin meses de espera.
          </p>
        </div>

        {!listo && (
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-dmsans text-[10px] tracking-[0.3em] text-white/50">CARGANDO…</span>
          </div>
        )}
      </div>
    </section>
  );
}
