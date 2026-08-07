"use client";

// Galeria de interiores.
//  · Escritorio: seccion fijada (pin) y las fotos se desplazan lateralmente al bajar.
//  · Movil: rejilla vertical. El scroll horizontal en movil esconde informacion y
//    muchos usuarios no descubren que hay que deslizar. Se prioriza que TODO se vea.

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FOTOS = [
  { src: "/real/_DSC7009.jpg", n: "01", t: "Salón", alto: true },
  { src: "/real/_DSC6893.jpg", n: "02", t: "Cocina" },
  { src: "/real/_DSC6853.jpg", n: "03", t: "Dormitorio principal" },
  { src: "/real/_DSC6885.jpg", n: "04", t: "Baño con mampara" },
  { src: "/real/_DSC6939.jpg", n: "05", t: "Comedor", alto: true },
  { src: "/real/_DSC6975.jpg", n: "06", t: "Terraza" },
];

export default function GaleriaH() {
  const sec = useRef<HTMLDivElement>(null);
  const pista = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const s = sec.current;
    const p = pista.current;
    if (!s || !p) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const recorrido = () => Math.max(0, p.scrollWidth - window.innerWidth + 120);
      const tw = gsap.to(p, {
        x: () => -recorrido(),
        ease: "none",
        scrollTrigger: {
          trigger: s,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      return () => tw.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={sec} className="relative bg-[#12130e] py-16 md:h-[280vh] md:py-0">
      <div className="md:sticky md:top-0 md:h-screen md:overflow-hidden">
      <div className="px-5 pb-8 md:absolute md:left-16 md:top-16 md:z-10 md:px-0 md:pb-0">
        <p className="font-dmsans text-[11px] tracking-[0.3em] text-[#c9d67e]">ASÍ SE VIVE DENTRO</p>
        <h2 className="mt-3 max-w-md font-playfair text-[clamp(2rem,7vw,3.5rem)] leading-[1.04] text-white">
          Por dentro, nada
          <br />
          que <span className="italic text-[#c9d67e]">envidiar</span>.
        </h2>
      </div>

      {/* MÓVIL: rejilla vertical, todo visible sin gestos ocultos */}
      <div className="grid grid-cols-2 gap-2.5 px-5 md:hidden">
        {FOTOS.map((f) => (
          <figure
            key={f.src}
            className={`relative overflow-hidden rounded-sm ${
              f.alto ? "col-span-2 h-64" : "h-44"
            }`}
          >
            <Image src={f.src} alt={f.t} fill sizes="50vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent" />
            <figcaption className="absolute bottom-3 left-3 flex items-baseline gap-2">
              <span className="font-dmsans text-[9px] tracking-[0.2em] text-[#c9d67e]">{f.n}</span>
              <span className="font-playfair text-base leading-tight text-white">{f.t}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* ESCRITORIO: pista horizontal con pin */}
      <div
        ref={pista}
        className="hidden gap-5 md:flex md:h-screen md:items-center md:pl-16 md:pr-40 md:pt-40"
      >
        {FOTOS.map((f) => (
          <figure
            key={f.src}
            className="group relative h-[62vh] w-[34vw] shrink-0 overflow-hidden rounded-sm"
          >
            <Image
              src={f.src}
              alt={f.t}
              fill
              sizes="34vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
            <figcaption className="absolute bottom-5 left-5 flex items-baseline gap-3">
              <span className="font-dmsans text-[10px] tracking-[0.24em] text-[#c9d67e]">{f.n}</span>
              <span className="font-playfair text-2xl text-white">{f.t}</span>
            </figcaption>
          </figure>
        ))}
        </div>
      </div>
    </section>
  );
}
