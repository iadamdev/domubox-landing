"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

// Sesion fotografica profesional de la casa piloto de A Coruna.
// Sustituye a las fotos genericas de catalogo que habia antes.
const images = [
  "/real/_DSC6998.jpg", // exterior con pergola
  "/real/_DSC7009.jpg", // salon
  "/real/_DSC6893.jpg", // cocina
  "/real/_DSC6853.jpg", // dormitorio principal
  "/real/_DSC6975.jpg", // terraza
  "/real/_DSC6885.jpg", // bano con mampara
  "/real/_DSC6956.jpg", // exterior lateral
  "/real/_DSC6939.jpg", // comedor
];

export default function SimpleGaleria() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null); // guardamos la animación
  const [isMobile, setIsMobile] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile || !trackRef.current) return undefined;

    const track = trackRef.current;
    const items = Array.from(track.children) as HTMLDivElement[];

    items.forEach((el) => el.classList.add("flex-none"));

    const totalWidth = track.scrollWidth;

    const tl = gsap.to(track, {
      x: `-${totalWidth / 2}`,
      duration: 30,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const px = parseFloat(x);
          const mod = px % (totalWidth / 2);
          return `${mod}px`;
        },
      },
    });

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <div className="relative w-full overflow-hidden py-0 md:py-10">
      {/* Gradientes laterales */}
      {!isMobile && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </>
      )}

      {/* Desktop: loop automático */}
      {!isMobile && (
        <div ref={trackRef} className="flex w-max gap-6">
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="w-[350px] h-[260px] relative overflow-hidden rounded-sm transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              onMouseEnter={() => tlRef.current?.pause()}
              onMouseLeave={() => tlRef.current?.resume()}
              onClick={() => setModalImg(src)}
            >
              <Image
                src={src}
                alt={`foto-${idx}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Mobile: scroll manual */}
      {isMobile && (
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[220px] h-[180px] relative snap-center overflow-hidden rounded-sm cursor-pointer"
              onClick={() => setModalImg(src)}
            >
              <Image
                src={src}
                alt={`foto-mobile-${idx}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setModalImg(null)}
        >
          <div className="relative w-[90%] max-w-4xl h-[80%] flex items-center justify-center">
            <Image
              src={modalImg}
              alt="imagen ampliada"
              fill
              className="object-contain rounded-md"
            />
          </div>
          {/* Botón de cerrar */}
          <div className="absolute top-0 right-0 px-5 py-5">
            <button
              className="
      bg-white rounded-full w-8 h-8 flex items-center justify-center
      text-black shadow-md hover:bg-gray-200 transition cursor-pointer
    "
              onClick={() => setModalImg(null)}
            >
              ✕
            </button>
            </div>
        </div>
      )}
    </div>
  );
}
