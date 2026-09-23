"use client";

import { modelo } from "@/lib/modelos";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useRevealTexts } from "@/hooks/useRevealTexts";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";

export default function Modelos({
  openModal,
  openExtensiones,
}: {
  openModal: () => void;
  openExtensiones: () => void;
}) {
  const containerRef = useRevealTexts<HTMLDivElement>("h2");
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const dragStartX = useRef<number | null>(null);

  const models = [
    {
      name: "01. Canary",
      hasExtensions: true,
      // Sesion fotografica profesional de la casa piloto de A Coruna.
      // Es el unico modelo del que tenemos fotos reales propias: el resto
      // sigue con las de catalogo hasta que haya unidades instaladas.
      images: modelo("canary")!.imagenes,
      accordion: [
        {
          title: "Descripción",
          content: modelo("canary")!.descripcion,
        },
        {
          title: "Fichas técnicas",
          fichas: [
            {
              name: "Canary Luxury 37m²",
              url: "/pdf/canary-luxury/ft-canary-37.pdf",
            },
            {
              name: "Canary Luxury 56m²",
              url: "/pdf/canary-luxury/ft-canary-56.pdf",
            },
            {
              name: "Canary Luxury 72m²",
              url: "/pdf/canary-luxury/ft-canary-72.pdf",
            },
          ],
        },
      ],
    },
    {
      name: "02. Family",
      hasExtensions: false,
      images: modelo("family")!.imagenes,
      accordion: [
        {
          title: "Descripción",
          content: modelo("family")!.descripcion,
        },
        {
          title: "Fichas técnicas",
          fichas: [
            {
              name: "Family",
              url: "/pdf/family/ft-family.pdf",
            }
          ],
        },
      ],
    },
    {
      name: "03. Apple",
      hasExtensions: false,
      images: modelo("apple")!.imagenes,
      accordion: [
        {
          title: "Descripción",
          content: modelo("apple")!.descripcion,
        },
        {
          title: "Características",
          content: (
            <ul className="list-disc pl-5 space-y-1">
              <li>10.000 × 5.500 × 3.200 mm (cabina + terraza)</li>
              <li>Cabina: 10.000 × 3.500 × 3.200 mm</li>
              <li>Terraza: 10.000 × 2.000 × 3.200 mm</li>
              <li>55 m2</li>
              <li>4–8 personas</li>
            </ul>
          ),
        },
        {
          title: "Plano de la casa",
          content: <img src="/img/Apple/apple1.jpeg" alt="" className="w-80" />,
        },
      ],
    },

    {
      name: "04. Nordic",
      hasExtensions: false,
      images: modelo("nordic")!.imagenes,
      accordion: [
        {
          title: "Descripción",
          content: modelo("nordic")!.descripcion,
        },
        {
          title: "Fichas técnicas",
          fichas: [
            {
              name: "Nordic",
              url: "/pdf/nordic/ft-nordic.pdf",
            }
          ],
        },
      ],
    },
    {
      name: "05. Capsule",
      hasExtensions: false,
      images: modelo("capsule")!.imagenes,
      accordion: [
        {
          title: "Descripción",
          content: modelo("capsule")!.descripcion,
        },
        {
          title: "Fichas técnicas",
          fichas: [
            {
              name: "Capsule",
              url: "/pdf/capsule/ft-capsule.pdf",
            }
          ],
        },
      ],
    },
  ];

  const activeModel = models[activeModelIndex];
  const totalImages = activeModel.images.length;

  const prevImage = () =>
    setSelectedImageIndex((i) => (i === 0 ? totalImages - 1 : i - 1));

  const nextImage = () =>
    setSelectedImageIndex((i) => (i === totalImages - 1 ? 0 : i + 1));

  /* 👉 Drag / Swipe */
  const onPointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const delta = dragStartX.current - e.clientX;
    if (delta > 50) nextImage();
    if (delta < -50) prevImage();
    dragStartX.current = null;
  };

  return (
    <div className="max-w-[1500px] py-20 mx-auto px-4 md:px-20 font-dmsans">
      <div
        ref={containerRef}
        className="flex lg:flex-row flex-col justify-between gap-10"
      >
        <h2 className="text-4xl font-lexend font-light tracking-tight lg:text-5xl text-tipo opacity-0">
          Encuentra tu
          <br />
          <span className="font-playfair font-semibold italic text-secundario">
            modelo ideal
          </span>
        </h2>
        <p className="text-md text-tipo font-medium w-full lg:w-[600px]">
          Explora nuestra colección de casas modulares y elige el diseño que
          mejor se adapta a tu estilo de vida. Cada modelo está pensado para
          ofrecerte confort, funcionalidad y una estética moderna, con la
          posibilidad de personalizar cada detalle.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-10">
        {/* Botones modelos */}
        <div className="flex gap-4 overflow-x-auto scrollbar-none pr-8 bg-[#F6F6F3] rounded-md lg:w-fit p-2">
          {models.map((model, idx) => (
            <Button
              key={model.name}
              variant={activeModelIndex === idx ? "default" : "link"}
              className="shrink-0 text-md cursor-pointer"
              onClick={() => {
                setActiveModelIndex(idx);
                setSelectedImageIndex(0);
              }}
            >
              {model.name}
            </Button>
          ))}
        </div>

        {/* Galería + Acordeón */}
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-16">
          {/* Galería */}
          <div className="flex flex-col-reverse xl:flex-row gap-4">
            {/* Miniaturas */}
            <div className="flex xl:flex-col gap-2 overflow-x-auto scrollbar-none">
              {activeModel.images.map((img, idx) => (
                <div
                  key={img}
                  className={`w-20 h-20 shrink-0 rounded overflow-hidden cursor-pointer border-2 ${
                    selectedImageIndex === idx
                      ? "border-brand"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Imagen principal */}
            <div
              className="relative w-full lg:w-full xl:w-[600px] h-[300px] md:h-[480px] rounded-md overflow-hidden select-none"
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
            >
              <img
                src={activeModel.images[selectedImageIndex]}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />

              {/* Flechas */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Acordeón */}
          <div className="flex-1">
            <Accordion type="multiple" defaultValue={["item-0", "item-1"]}>
              {activeModel.accordion.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-lg font-bold">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-tipoclara">
                    {/* Si tiene fichas técnicas */}
                    {"fichas" in item && item.fichas ? (
                      <div className="flex flex-col gap-4">
                        {item.fichas.map((ficha, i) => (
                          <div
                            key={i}
                            className="flex flex-wrap gap-5 p-4 rounded-lg items-center justify-between bg-[#F6F6F3]"
                          >
                            <h4 className="text-sm font-semibold text-tipo">
                              Ficha técnica · {ficha.name}
                            </h4>

                            <a
                              href={ficha.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-fit"
                            >
                              <Button variant="default" className="text-sm">
                                <FileText className="w-4 h-4 mr-2" />
                                Ver PDF
                              </Button>
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      item.content
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="flex flex-col lg:flex-row gap-4 mt-10">
              <Button className="text-md" onClick={openModal}>
                Solicita información
              </Button>
              {activeModel.hasExtensions && (
                <Button
                  onClick={openExtensiones}
                  variant="secondary"
                  className="bg-[#f0f0f0] text-sm md:text-md"
                >
                  Ver extensiones opcionales
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
