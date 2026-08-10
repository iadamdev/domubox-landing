"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/34603894725"
      data-origen="botón flotante"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        
        {/* Aura / Pulse */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-70 animate-ping" />

        {/* Botón */}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg">
          <img src="/img/Whatsicon.svg" alt="Whatsapp icono" className="h-10 w-10" />
        </span>
      </div>
    </a>
  );
}
