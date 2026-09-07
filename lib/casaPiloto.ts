// Contenido y utilidades de la landing /casa-piloto.
// Todo el copy nace de la matriz de 30 hooks (deseos de Reiss x nivel de consciencia).
// Regla de negocio: NO se publica precio ni direccion. Ambos son el gancho para
// que el usuario escriba por WhatsApp y se agende la visita.

export const WA = "34603894725";

/**
 * Enlace de WhatsApp con mensaje prerrellenado.
 * El mensaje va limpio: el prospecto no debe ver etiquetas internas de
 * atribucion. El origen viaja por el Pixel (ver TrackWA), que es donde sirve
 * para optimizar campanas.
 */
export function wa(mensaje: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(mensaje)}`;
}

export const CTA = {
  precio: "Hola, me gustaría saber el precio de la Canary Luxury de 37 m².",
  visita: "Hola, quiero agendar una visita a la casa piloto de A Coruña.",
  ubicacion: "Hola, ¿dónde puedo ver la casa piloto y qué días se puede visitar?",
  ficha: "Hola, ¿me podéis enviar la ficha técnica de la Canary?",
  vivienda: "Hola, busco una casa modular para vivir. Tengo (o estoy buscando) parcela.",
  inversor: "Hola, me interesa una casa modular para alojamiento turístico. ¿Podemos hablar?",
  parcela: "Hola, quiero saber si mi parcela es apta antes de dar ningún paso.",
};

/** Dos caminos desde la landing: la matriz identifico perfil A (familia) y B (inversor). */
export const PERFILES = [
  {
    id: "vivienda",
    kicker: "PARA VIVIR",
    titulo: "Es para mí y para los míos",
    texto:
      "Tienes parcela o estás a punto de comprarla y quieres una casa terminada sin meterte en años de obra.",
    cta: "Quiero una para vivir",
    mensaje: "vivienda" as const,
  },
  {
    id: "inversor",
    kicker: "PARA RENTABILIZAR",
    titulo: "Es para alquilarla",
    texto:
      "Turismo rural, glamping o alquiler de temporada. Una unidad o varias, con el mismo plazo de montaje.",
    cta: "Quiero información para invertir",
    mensaje: "inversor" as const,
  },
];

export const FICHA = [
  { k: "Superficie", v: "37 m²" },
  { k: "Dormitorios", v: "2" },
  { k: "Baño", v: "Completo con mampara" },
  { k: "Aislamiento", v: "Grafeno + fibra de bambú" },
  { k: "Estructura", v: "Acero galvanizado" },
  { k: "También en", v: "56 m² y 72 m²" },
];

/** Comparativa: ataca el deseo Tranquilidad (miedo a la obra eterna). */
export const COMPARATIVA = [
  { punto: "Montaje en tu parcela", tradicional: "Meses de obra", domubox: "1 o 2 días" },
  { punto: "Gremios que coordinar", tradicional: "Albañil, fontanero, electricista…", domubox: "Un solo equipo" },
  { punto: "Acabados", tradicional: "Se deciden sobre la marcha", domubox: "De serie, cerrados" },
  { punto: "Residuos de obra", tradicional: "Escombro y contenedores", domubox: "Obra limpia" },
  { punto: "¿Puedes verla antes?", tradicional: "Solo planos", domubox: "Casa piloto visitable" },
];

/** FAQ: objeciones reales del avatar (35-60, propietario de parcela). */
export const FAQS = [
  {
    q: "¿Es una casa prefabricada o una casa modular?",
    a: "Las dos cosas, y la diferencia es menos importante de lo que parece. Se fabrica en taller y llega terminada, que es lo que define a una casa prefabricada; y se construye por módulos que se despliegan en tu parcela, que es lo que la hace modular. Mucha gente busca «casa prefabricada» y otra mucha «casa modular» pensando en lo mismo: una vivienda de verdad, hecha fuera de obra y montada en días. Eso es exactamente lo que puedes venir a ver a A Coruña.",
  },
  {
    q: "¿Es una casa de verdad o un contenedor?",
    a: "Es una casa prefabricada de verdad, no un contenedor marítimo adaptado: una vivienda modular desplegable con dos dormitorios, baño completo, cocina y salón. Estructura de acero galvanizado y paneles de grafeno con fibra de bambú. La forma más rápida de resolver la duda es entrar en ella: por eso tenemos una casa piloto montada en A Coruña que puedes visitar.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "El precio depende del modelo, del tamaño y de las extensiones que elijas. Te pasamos el presupuesto cerrado por WhatsApp en cuanto nos cuentes qué necesitas: sin sorpresas ni partidas abiertas.",
  },
  {
    q: "¿Dónde está la casa piloto?",
    a: "Está montada y visitable en A Coruña. Las visitas son con cita previa para poder atenderte con tiempo y resolver todas tus dudas en persona. Escríbenos y te damos la dirección y la hora.",
  },
  {
    q: "¿Cómo llega hasta mi parcela?",
    a: "Llega plegada en camión y se despliega en el terreno. Ese es el sistema que ves en el vídeo de esta página: la vivienda se abre y queda lista, sin la obra tradicional.",
  },
  {
    q: "¿Necesito licencia de obra?",
    a: "Sí. Corre por ahí que una casa modular no la necesita, y no es cierto: al fijarse al terreno es un bien inmueble y se rige por la normativa urbanística igual que una casa convencional. Preferimos decírtelo claro desde el principio. Cuéntanos dónde está tu parcela y te decimos si es apta antes de que gastes un euro.",
  },
  {
    q: "¿Qué me llevo de la visita?",
    a: "Recorres la casa entera con nosotros, abres armarios, tocas los materiales y compruebas el espacio real. Resolvemos tus dudas sobre tu parcela concreta y sales con un presupuesto cerrado para el modelo que te encaje. Sin compromiso y sin insistencia posterior.",
  },
  {
    q: "¿Sirve para alojamiento turístico?",
    a: "Sí. Es una de las aplicaciones más habituales: turismo rural, glamping y alojamientos de temporada. Se pueden instalar una o varias unidades.",
  },
];
