"use client";

// Reveals al scroll y contador animado.
// Solo se animan transform y opacity (compositor), y todo se desactiva
// con prefers-reduced-motion via gsap.matchMedia.

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Envuelve cualquier bloque: entra desde abajo al aparecer en pantalla. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const nodo = el.current;
    if (!nodo) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tw = gsap.from(nodo, {
        y: 36,
        autoAlpha: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: nodo, start: "top 88%", once: true },
      });
      return () => tw.kill();
    });
    return () => mm.revert();
  }, [delay]);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}

/** Cuenta hasta `to` cuando entra en pantalla. Para el dato de 37 m². */
export function Contador({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const nodo = el.current;
    if (!nodo) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const obj = { n: 0 };
      const tw = gsap.to(obj, {
        n: to,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: nodo, start: "top 90%", once: true },
        onUpdate: () => {
          nodo.textContent = Math.round(obj.n) + suffix;
        },
      });
      return () => tw.kill();
    });
    mm.add("(prefers-reduced-motion: reduce)", () => {
      nodo.textContent = to + suffix;
    });
    return () => mm.revert();
  }, [to, suffix]);

  return (
    <span ref={el} className={className}>
      0{suffix}
    </span>
  );
}
