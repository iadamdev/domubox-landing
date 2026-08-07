"use client";

import React from "react";
import { useRevealTexts } from "@/hooks/useRevealTexts";

export default function Materiales() {
    const containerRef = useRevealTexts<HTMLDivElement>("h2");

  return (
    <div ref={containerRef} className="w-full px-4 py-20">
      <div className="max-w-[1300px] mx-auto">
      {/* TÍTULO */}
      <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-center font-lexend text-tipo w-full opacity-0">
        Descubre nuestros <br />{" "}
        <span className="font-playfair font-semibold text-secundario italic">materiales</span> <br />{" "}
        <span className="text-lg font-medium tracking-widest"> MODELO CANARY </span>
      </h2>

      <div className="flex flex-col gap-8 pt-10">
        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-dmsans">
          {/* CARD 1 */}
          <div className="flex flex-col items-start md:items-center md:flex-row bg-[#F6F6F3] rounded-md overflow-hidden">
            <img
              src="/img/suelo-mat.png"
              alt="Suelo"
              className="w-40 sm:w-[40%] h-auto object-contain"
            />
            <div className="w-full flex flex-col gap-4 p-6">
              <h3 className="font-dmsans text-lg md:text-2xl font-bold text-tipo">
                Suelo
              </h3>
              <ol className="list-disc text-sm space-y-1 text-tipoclara">
                <li>Base ignífuga de magnesio 20 mm</li>
                <li>Alas laterales bambú 18 mm</li>
                <li>Pavimento vinílico 2 mm</li>
                <div className="text-tipo font-medium rounded-sm flex items-center gap-2 mt-4">
                  <span>Solidez para una vivienda permanente</span>
                </div>
              </ol>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-start md:items-center md:flex-row bg-[#F6F6F3]  rounded-md overflow-hidden">
            <img
              src="/img/techo-mat.png"
              alt="Suelo"
              className="w-40 sm:w-[40%] h-auto object-contain"
            />
            <div className="w-full flex flex-col gap-4 p-6">
              <h3 className="font-dmsans text-lg md:text-2xl font-bold text-tipo">
                Techo
              </h3>
              <ol className="list-disc text-sm space-y-1 text-tipoclara">
                <li>Chapa ondulada tipo 980</li>
                <li>Panel integrado grafeno + bambú 50 mm</li>
                <li>Falso techo interior de fibra de bambú</li>
                <div className="text-tipo font-medium rounded-sm flex items-center gap-2 mt-4">
                  <span>Ideal para climas humedos y costeros</span>
                </div>
              </ol>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-start md:items-center md:flex-row bg-[#F6F6F3] rounded-md overflow-hidden">
            <img
              src="/img/murosext-mat.png"
              alt="Suelo"
              className="w-40 sm:w-[40%] h-auto object-contain"
            />
            <div className="w-full flex flex-col gap-4 p-6">
              <h3 className="font-dmsans text-lg md:text-2xl font-bold text-tipo">
                Muros exteriores
              </h3>
              <ol className="list-disc text-sm space-y-1 text-tipoclara">
                <li>Panel integrado de grafeno + bambú</li>
                <li>Espesor 65 mm</li>
                <li>Estructura totalmente galvanizada</li>
                <li>Cerramiento industrial continuo</li>
                <div className=" text-tipo font-medium rounded-sm flex items-center gap-2 mt-4">
                  <span>Tecnología, comfort y durabilidad</span>
                </div>
              </ol>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="flex flex-col items-start md:items-center md:flex-row bg-[#F6F6F3]  rounded-md overflow-hidden">
            <img
              src="/img/murosint-mat.png"
              alt="Suelo"
              className="w-40 sm:w-[40%] h-auto object-contain"
            />
            <div className="w-full flex flex-col gap-4 p-6">
              <h3 className="font-dmsans text-lg md:text-2xl font-bold text-tipo">
                Muros interiores
              </h3>
              <ol className="list-disc text-sm space-y-1 text-tipoclara">
                <li>Panel integrado de grafeno + fibra de bambú</li>
                <li>Espesor 50 mm</li>
                <li>Sistema monolítico (no multicapa OSB/lana)</li>
                <div className=" text-tipo font-medium rounded-sm flex items-center gap-2 mt-4">
                  <span>Más moderno, eficiente y con mayor comportamiento térmico real.</span>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
