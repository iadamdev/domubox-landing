"use client";
import FormPresupuesto from "@/components/formpresupuesto/FormPresupuesto";
import Galeria from "@/components/galeria/Galeria";
import Header from "@/components/header/Header";
import ModalPresupuesto from "@/components/modalpresupuesto/ModalPresupuesto";
import ModalExtensiones from "@/components/modalextensiones/ModalExtensiones"; // 👈 importar
import Modelos from "@/components/modelos/Modelos";
import Whyus from "@/components/whyus/Whyus";
import { useState } from "react";
import Autopromo from "@/components/autopromo/Autopromo";
import WhatsappButton from "@/components/whatsappbutton/WhatsappButton";
import Materiales from "@/components/materiales/Materiales";
import CasaPilotoHome from "@/components/casapilotohome/CasaPilotoHome";
import TrackWA from "@/components/casapiloto/TrackWA";
import { useEffect } from "react"


export default function Home() {
  const [modalPresupuestoOpen, setModalPresupuestoOpen] = useState(false);
  const [modalExtensionesOpen, setModalExtensionesOpen] = useState(false); // 👈 nuevo estado

    useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 200)
    }
  }, [])

  return (
    <main>
      <header id="header">
        <Header/>
      </header>

      <section id="modelos">
        <Modelos
          openModal={() => setModalPresupuestoOpen(true)}
          openExtensiones={() => setModalExtensionesOpen(true)}
        />
      </section>

      <section id="galeria">
        <Galeria />

        <CasaPilotoHome />
      </section>
      <section id="materiales">
        <Materiales/>
      </section>
      <section id="whyus">
        <Whyus />
      </section>
      <section >
        <Autopromo />
      </section>
      <section id="formpresupuesto">
        <FormPresupuesto />
      </section>

      {/* Whatsapp */}
      <WhatsappButton />
      <TrackWA />
      {/* Modales */}
      <ModalPresupuesto
        isOpen={modalPresupuestoOpen}
        onClose={() => setModalPresupuestoOpen(false)}
      />

      <ModalExtensiones
        isOpen={modalExtensionesOpen}
        onClose={() => setModalExtensionesOpen(false)}
      />
    </main>
  );
}
