"use client";

// Franja de confianza bajo el hero.
//
// Por que existe: en una compra de decenas de miles de euros, lo primero que
// busca el visitante es motivo para creerte. La auditoria de conversion detecto
// que la web no daba ninguna senal de confianza por encima del pliegue.
//
// Todos los datos son verificables hoy. Cuando el cliente pase testimonios y
// numero de proyectos entregados, esto se sustituye por prueba social real,
// que convierte mucho mas que una lista de atributos.

import Link from "next/link";

const SENALES = [
  {
    titulo: "Casa piloto visitable",
    texto: "Montada en A Coruña. Puedes entrar antes de decidir.",
  },
  {
    titulo: "Importación directa",
    texto: "Sin intermediarios entre fábrica y tu parcela.",
  },
  {
    titulo: "Acabados de serie",
    texto: "Cocina, baño y suelos incluidos. Nada de partidas abiertas.",
  },
  {
    titulo: "Montaje en días",
    texto: "Llega plegada en camión y se despliega en el terreno.",
  },
];

export default function Confianza() {
  return (
    <section
      aria-label="Motivos para confiar en Domubox Import"
      className="border-b border-[#e2ded2] bg-[#f7f5f0] px-5 py-10 md:px-16 md:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {SENALES.map((s) => (
            <li key={s.titulo} className="border-l-2 border-[#94A11A] pl-4">
              <p className="font-dmsans text-[15px] font-semibold leading-tight text-[#12130e]">
                {s.titulo}
              </p>
              <p className="mt-1.5 font-dmsans text-[13px] leading-relaxed text-[#717171]">{s.texto}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-dmsans text-[13px] text-[#717171]">
          ¿Prefieres verlo con tus ojos?{" "}
          <Link
            href="/casa-piloto"
            className="font-semibold text-[#4f5516] underline underline-offset-4 hover:no-underline"
          >
            Conoce la casa piloto de A Coruña
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
