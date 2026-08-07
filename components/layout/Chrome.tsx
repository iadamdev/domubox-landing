"use client";

// Las landings de trafico pagado van sin menu ni footer del sitio: cada enlace
// de salida es una fuga. La pagina solo debe permitir una accion, escribir por
// WhatsApp. El resto de la web mantiene su navegacion intacta.

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const SIN_NAVEGACION = ["/casa-piloto"];

export default function Chrome({ children }: { children: React.ReactNode }) {
  const ruta = usePathname() ?? "";
  const esLanding = SIN_NAVEGACION.some((p) => ruta.startsWith(p));

  if (esLanding) return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
