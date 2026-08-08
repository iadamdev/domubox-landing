"use client";

// Atribucion de los clics a WhatsApp.
//
// El codigo SOLO empuja al dataLayer. Quien decide que se envia a Meta, a GA4
// o a cualquier otra plataforma es Google Tag Manager. Ventajas:
//   · Anadir TikTok, LinkedIn o Ads no requiere tocar codigo ni desplegar.
//   · El Consent Mode v2 se gestiona en un solo sitio, como exige la UE.
//   · No hay riesgo de duplicar eventos llamando a fbq() por los dos caminos.
//
// El origen NO viaja en el texto del mensaje de WhatsApp: el prospecto no debe
// leer etiquetas internas. Viaja aqui, que es donde sirve.
//
// El clic en enlaces tel: no necesita nada de esto: GTM lo detecta solo con un
// activador de enlaces.

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function TrackWA() {
  useEffect(() => {
    const alClic = (e: MouseEvent) => {
      const enlace = (e.target as HTMLElement)?.closest?.('a[href*="wa.me"]');
      if (!enlace) return;

      window.dataLayer?.push({
        event: "click_whatsapp",
        origen: enlace.getAttribute("data-origen") ?? "sin origen",
      });
    };

    document.addEventListener("click", alClic);
    return () => document.removeEventListener("click", alClic);
  }, []);

  return null;
}
