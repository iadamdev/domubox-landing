"use client";

// Atribucion de los clics a WhatsApp.
//
// El origen NO viaja en el texto del mensaje: el prospecto no debe leer
// etiquetas internas. Viaja al Pixel de Meta y al dataLayer, que es donde
// sirve para optimizar campanas y saber que seccion convierte.
//
// Un unico listener delegado en document cubre todos los enlaces, incluidos
// los renderizados en servidor, sin convertir media pagina en client component.

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export default function TrackWA() {
  useEffect(() => {
    const alClic = (e: MouseEvent) => {
      const enlace = (e.target as HTMLElement)?.closest?.('a[href*="wa.me"]');
      if (!enlace) return;

      const origen = enlace.getAttribute("data-origen") ?? "sin origen";

      // Lead para la optimizacion de campanas.
      window.fbq?.("track", "Lead", {
        content_name: "Casa piloto A Coruña",
        content_category: origen,
      });
      // Evento propio para desglosar por seccion en los informes.
      window.fbq?.("trackCustom", "ClickWhatsApp", { origen });
      window.dataLayer?.push({ event: "click_whatsapp", origen });
    };

    document.addEventListener("click", alClic);
    return () => document.removeEventListener("click", alClic);
  }, []);

  return null;
}
