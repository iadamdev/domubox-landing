// Datos estructurados de la landing.
//
// Por que: Google puntua la "experiencia en la pagina de destino" y hoy la
// marca como baja en todas las palabras clave. El schema no es un truco de
// posicionamiento: le dice explicitamente que esto es un negocio local de
// A Coruna que vende casas prefabricadas, y que la pagina responde preguntas
// concretas. Sin esto tiene que adivinarlo del texto.
//
// Las FAQ salen del mismo array que pinta la pagina, asi no pueden
// desincronizarse: si cambia una respuesta, cambia en los dos sitios.
import { FAQS } from "@/lib/casaPiloto";

const SITIO = "https://www.domuboximport.com";

export default function DatosEstructurados() {
  const grafo = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITIO}/#negocio`,
        name: "Domubox Import",
        description:
          "Casas prefabricadas y modulares llave en mano en A Coruña y Galicia. Casa piloto visitable.",
        url: SITIO,
        telephone: "+34603894725",
        areaServed: [
          { "@type": "AdministrativeArea", name: "A Coruña" },
          { "@type": "AdministrativeArea", name: "Galicia" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "A Coruña",
          addressRegion: "Galicia",
          addressCountry: "ES",
        },
      },
      {
        "@type": "Product",
        "@id": `${SITIO}/casa-piloto#producto`,
        name: "Canary Luxury · casa prefabricada modular de 37 m²",
        description:
          "Casa prefabricada modular de 37 m² con dos dormitorios, baño completo y acabados de serie. Llega plegada en camión y se despliega en la parcela.",
        brand: { "@type": "Brand", name: "Domubox Import" },
        category: "Casas prefabricadas y modulares",
        // Sin precio a proposito: es una regla de negocio del cliente.
      },
      {
        "@type": "FAQPage",
        "@id": `${SITIO}/casa-piloto#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }}
    />
  );
}
