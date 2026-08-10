"use client";
import { useRevealTexts } from "@/hooks/useRevealTexts";

export default function Header() {
  const containerRef = useRevealTexts<HTMLDivElement>("h1");

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/montaje-web.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/img/postevideo.webp"
      />

      {/* Overlay opcional para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 pb-10 md:pb-0 h-full flex items-end max-w-[1500px] mx-auto">
        <div
          ref={containerRef}
          className="px-5 py-6 md:py-16 md:px-16 flex flex-col text-white"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-lexend font-light tracking-tighter lg:leading-[85px] mb-5 opacity-0">
            Casas <br /> <span className="font-playfair italic">modulares</span>
          </h1>
          <span className="text-lg md:text-xl font-light">
            Ecoeficientes y energéticamente sostenibles.
          </span>
        </div>
      </div>
    </section>
  );
}
