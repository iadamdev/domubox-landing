// Paginas comerciales. Cada una responde a un grupo de busquedas reales de
// Google Ads (10 ago - 22 sep 2026), que es la mejor prueba de demanda que
// tenemos: son busquedas que ya se pagan clic a clic.
//
// Reglas del cliente que se respetan en todo el texto: no se publica precio
// ni direccion de la casa piloto.

import type { Pagina } from "./tipos";

export const LANDINGS: Pagina[] = [
  // ~3.200 impresiones: el nucleo de la demanda
  {
    ruta: "/casas-prefabricadas-galicia",
    tipo: "landing",
    title: "Casas prefabricadas en Galicia llave en mano | Casa piloto visitable",
    description:
      "Casas prefabricadas y modulares en Galicia, de 37 a 72 m². Llegan plegadas en camión y se montan en días. Ven a ver nuestra casa piloto en A Coruña antes de decidir.",
    kicker: "CASAS PREFABRICADAS · GALICIA",
    h1: "Casas prefabricadas en Galicia",
    h1Acento: "que puedes tocar antes de comprar.",
    entradilla:
      "En Galicia se compran casas prefabricadas mirando fotos y renders. Nosotros tenemos una montada en A Coruña para que entres, abras armarios y compruebes los metros reales antes de dar un paso.",
    imagen: "/real/hf-hero.jpg",
    origen: "seo galicia",
    mostrarModelos: true,
    secciones: [
      {
        h2: "Por qué cada vez más gente en Galicia elige una casa prefabricada",
        p: [
          "Construir una vivienda tradicional en Galicia es un proceso largo: meses de obra, lluvia que retrasa los trabajos y presupuestos que cambian por el camino. Una casa prefabricada invierte ese orden. Se fabrica en taller, bajo control, y llega a tu parcela terminada.",
          "Lo que cambia para ti es el plazo y la certeza. Sabes qué casa vas a tener, con qué acabados y cuánto va a costar antes de empezar, porque el presupuesto se cierra sobre una vivienda que ya existe.",
        ],
        lista: [
          "Montaje en días, no en meses de obra",
          "Presupuesto cerrado, sin partidas que aparecen a mitad de camino",
          "Acabados de serie incluidos: cocina, baño y carpintería",
          "Estructura de acero galvanizado y paneles de grafeno con fibra de bambú",
        ],
      },
      {
        h2: "Cómo llega una casa prefabricada a tu parcela",
        p: [
          "Nuestras casas viajan plegadas en camión, con el tamaño de un contenedor. Una vez en el terreno, una grúa la coloca sobre su base y la vivienda se despliega: salón, cocina, dormitorios y baño quedan listos sin la obra tradicional.",
          "Antes de eso, la parcela necesita estar preparada: la base donde se apoya la casa y las acometidas de agua, luz y saneamiento. Te decimos exactamente qué hace falta en tu terreno concreto antes de que gastes un euro.",
        ],
        imagen: "/real/_DSC7015.jpg",
        pie: "La Canary plegada, lista para el transporte en camión.",
      },
      {
        h2: "Lo que hay que tener en cuenta en Galicia",
        p: [
          "Una casa prefabricada fijada al terreno es una vivienda a todos los efectos, y en Galicia se rige por la misma normativa urbanística que una casa convencional. Eso significa licencia municipal y que la parcela permita el uso de vivienda.",
          "Aquí manda el planeamiento de cada concello. En suelo urbano y en núcleo rural suele ser viable; en suelo rústico la vivienda nueva está muy limitada. También cuenta el acceso: el camión y la grúa tienen que poder llegar. Por eso lo primero que revisamos contigo es la parcela.",
        ],
      },
      {
        h2: "Ven a verla a A Coruña",
        p: [
          "La forma más rápida de saber si una casa prefabricada es para ti es entrar en una. Tenemos una Canary Luxury de 37 m² montada y visitable en A Coruña, con cita previa, para que la recorras con calma y resolvamos las dudas sobre tu parcela en persona.",
        ],
        imagen: "/real/_DSC6998.jpg",
        pie: "Casa piloto Canary Luxury, montada en A Coruña.",
      },
    ],
    faqs: [
      {
        q: "¿Entregáis casas prefabricadas en toda Galicia?",
        a: "Sí. Trabajamos en las cuatro provincias gallegas y también fuera de Galicia. Lo que determina la viabilidad no es la provincia sino la parcela: su clasificación urbanística y que el camión y la grúa puedan acceder.",
      },
      {
        q: "¿Cuánto se tarda en tener la casa montada?",
        a: "El montaje en la parcela se hace en días. El plazo total depende sobre todo de la licencia municipal y de la preparación del terreno, que es lo que conviene arrancar cuanto antes.",
      },
      {
        q: "¿Una casa prefabricada aguanta el clima gallego?",
        a: "Nuestras casas llevan estructura de acero galvanizado, resistente a la corrosión, y paneles con aislamiento de alto rendimiento. La mejor manera de comprobar los materiales es tocarlos en la casa piloto.",
      },
      {
        q: "¿Cuánto cuesta una casa prefabricada en Galicia?",
        a: "Depende del modelo, de los metros y de lo que necesite tu parcela. Te damos un presupuesto cerrado por WhatsApp en cuanto nos cuentas qué buscas, sin partidas abiertas.",
      },
    ],
    relacionados: [
      "/blog/cuanto-cuesta-casa-prefabricada-galicia",
      "/blog/licencia-casa-prefabricada-galicia",
      "/casas-prefabricadas-a-coruna",
    ],
    cta: {
      titulo: "Pide tu presupuesto cerrado",
      texto: "Cuéntanos qué modelo te interesa y dónde está tu parcela. Te respondemos por WhatsApp con un presupuesto sin sorpresas.",
      mensaje: "Hola, me interesa una casa prefabricada en Galicia. ¿Me podéis dar información y presupuesto?",
    },
  },

  // ~600 impresiones: busqueda local de la provincia
  {
    ruta: "/casas-prefabricadas-a-coruna",
    tipo: "landing",
    title: "Casas prefabricadas en A Coruña | Visita nuestra casa piloto",
    description:
      "Casas prefabricadas y modulares en A Coruña, Ferrol, Santiago y toda la provincia. Visita nuestra casa piloto montada en A Coruña con cita previa.",
    kicker: "CASAS PREFABRICADAS · A CORUÑA",
    h1: "Casas prefabricadas en A Coruña,",
    h1Acento: "con una montada para visitar.",
    entradilla:
      "Si vives en la provincia de A Coruña no tienes que imaginarte la casa: está montada aquí. Ven con cita previa, recórrela y sal con un presupuesto cerrado para tu parcela.",
    imagen: "/real/_DSC6998.jpg",
    origen: "seo coruna",
    mostrarModelos: true,
    secciones: [
      {
        h2: "La única forma de decidir bien es entrar",
        p: [
          "Casi todas las empresas de casas prefabricadas enseñan renders. Y un render no te dice cómo suena la puerta al cerrarse, cuánto espacio queda de verdad junto a la cama o qué luz entra por la tarde.",
          "Por eso tenemos una Canary Luxury de 37 m² montada en A Coruña. Dos dormitorios, baño completo, cocina y salón, con los acabados de serie que llevaría tu casa.",
        ],
        imagen: "/real/_DSC7009.jpg",
        pie: "Salón de la casa piloto en A Coruña.",
      },
      {
        h2: "Dónde instalamos en la provincia",
        p: [
          "Trabajamos en toda la provincia de A Coruña: A Coruña ciudad, Oleiros, Culleredo, Arteixo, Cambre, Bergondo, Betanzos, Ferrol, Santiago de Compostela, Carballo y el resto de concellos. Al estar cerca, la visita a la parcela y el seguimiento del montaje son más ágiles.",
        ],
      },
      {
        h2: "Parcela y licencia en los concellos de A Coruña",
        p: [
          "Cada concello tiene su propio plan general, y es lo que decide si en tu parcela se puede levantar una vivienda. En suelo urbano y en núcleo rural lo habitual es que sí; en suelo rústico la vivienda nueva está muy restringida.",
          "Antes de hablar de modelos revisamos contigo la parcela: clasificación, accesos para el camión y la grúa y acometidas disponibles. Así sabes si es viable antes de invertir nada.",
        ],
      },
      {
        h2: "Qué te llevas de la visita",
        p: [
          "Recorres la casa entera, tocas los materiales y compruebas el espacio real. Hablamos de tu parcela concreta y sales con un presupuesto cerrado para el modelo que te encaje. Sin compromiso y sin insistencia posterior.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Dónde está exactamente la casa piloto?",
        a: "Está en A Coruña y se visita con cita previa, para poder atenderte con tiempo. Escríbenos por WhatsApp y te damos la dirección y un hueco que te venga bien.",
      },
      {
        q: "¿Instaláis en Ferrol y en Santiago?",
        a: "Sí, en toda la provincia de A Coruña y en el resto de Galicia.",
      },
      {
        q: "¿Puedo ir a verla sin compromiso?",
        a: "Sí. La visita es para que decidas con la casa delante. No hay compromiso de compra ni insistencia después.",
      },
    ],
    relacionados: [
      "/casas-prefabricadas-galicia",
      "/blog/licencia-casa-prefabricada-galicia",
      "/blog/cuanto-cuesta-casa-prefabricada-galicia",
    ],
    cta: {
      titulo: "Agenda tu visita en A Coruña",
      texto: "Dinos qué día te viene bien y te reservamos la casa piloto para ti.",
      mensaje: "Hola, estoy en la provincia de A Coruña y quiero agendar una visita a la casa piloto.",
    },
  },

  // ~370 impresiones y buena conversion en su grupo de anuncios
  {
    ruta: "/casa-contenedor",
    tipo: "landing",
    title: "Casa contenedor en Galicia: llega como un contenedor, se abre como una casa",
    description:
      "¿Buscas una casa contenedor? Nuestra casa modular llega plegada con el tamaño de un contenedor y se despliega en una vivienda de 37 m² con dos dormitorios. Visítala en A Coruña.",
    kicker: "CASA CONTENEDOR · GALICIA",
    h1: "Llega como un contenedor.",
    h1Acento: "Se abre como una casa.",
    entradilla:
      "Si buscas una casa contenedor es porque quieres algo rápido, transportable y sin obra. Nuestra casa cumple las tres cosas, pero sin las limitaciones de vivir dentro de un contenedor marítimo.",
    imagen: "/real/hf-plegada.jpg",
    origen: "seo contenedor",
    secciones: [
      {
        h2: "Casa contenedor y contenedor marítimo no son lo mismo",
        p: [
          "Una casa contenedor clásica parte de un contenedor marítimo de carga que se adapta para vivir. Es una idea atractiva, pero tiene límites: el ancho interior es estrecho, el aislamiento se añade por dentro y resta espacio, y la estructura se diseñó para mercancía, no para personas.",
          "Nuestra casa se transporta igual, plegada y con las medidas de un contenedor, pero está diseñada desde el principio como vivienda. Al llegar a la parcela se despliega y gana el ancho de una casa de verdad.",
        ],
        imagen: "/real/_DSC7015.jpg",
        pie: "La casa plegada, con las medidas de un contenedor, antes de desplegarse.",
      },
      {
        h2: "Lo que ganas frente a un contenedor adaptado",
        p: ["Mantienes lo bueno del contenedor, la rapidez y el transporte, y te quitas sus problemas:"],
        lista: [
          "Una vez desplegada, 37 m² con dos dormitorios, baño completo, cocina y salón",
          "Aislamiento integrado en los paneles, sin restar espacio interior",
          "Grandes zonas acristaladas, algo muy difícil de conseguir en un contenedor marítimo",
          "Estructura de acero galvanizado pensada para vivienda",
          "Acabados de serie incluidos",
        ],
      },
      {
        h2: "Compruébalo en persona",
        p: [
          "Tenemos una montada y visitable en A Coruña. Es la mejor manera de ver la diferencia: entra, recórrela y compárala con lo que tenías en mente al buscar una casa contenedor.",
        ],
        imagen: "/real/_DSC6998.jpg",
        pie: "La misma casa, ya desplegada, en A Coruña.",
      },
    ],
    faqs: [
      {
        q: "¿Una casa contenedor necesita licencia?",
        a: "Sí. Si se fija al terreno para vivir, es una vivienda y necesita licencia municipal igual que cualquier casa. Desconfía de quien te diga lo contrario. Te ayudamos a comprobar si tu parcela es apta.",
      },
      {
        q: "¿Cuánto tarda en montarse?",
        a: "El despliegue en la parcela se hace en días, una vez preparada la base y las acometidas.",
      },
      {
        q: "¿Es más barata que un contenedor marítimo adaptado?",
        a: "Depende de cómo se adapte el contenedor, pero al comparar conviene sumar el aislamiento, las ventanas y los acabados que en nuestra casa ya vienen de serie. Te pasamos presupuesto cerrado para comparar con datos.",
      },
    ],
    relacionados: [
      "/blog/casa-prefabricada-modular-o-contenedor",
      "/casas-prefabricadas-galicia",
      "/mobil-home-galicia",
    ],
    cta: {
      titulo: "¿Buscabas una casa contenedor?",
      texto: "Cuéntanos para qué la quieres y te explicamos si nuestra casa encaja mejor.",
      mensaje: "Hola, estaba buscando una casa contenedor y me interesa vuestra casa modular. ¿Me dais información?",
    },
  },

  // ~250 impresiones y 15 conversiones: poco volumen, mucha intencion
  {
    ruta: "/mobil-home-galicia",
    tipo: "landing",
    title: "Mobil home en Galicia: la alternativa con calidad de vivienda",
    description:
      "¿Buscas un mobil home en Galicia? Nuestra casa modular se transporta en camión y se instala en días, con 37 m², dos dormitorios y calidad de vivienda. Visítala en A Coruña.",
    kicker: "MOBIL HOME · GALICIA",
    h1: "Lo que buscas en un mobil home,",
    h1Acento: "con calidad de vivienda.",
    entradilla:
      "Rápido de instalar, transportable y sin obra. Eso es lo que se busca en un mobil home, y es lo que ofrece nuestra casa modular, con más metros, mejor aislamiento y acabados de casa.",
    imagen: "/real/hf-terreno.jpg",
    origen: "seo mobil home",
    secciones: [
      {
        h2: "Por qué la gente busca un mobil home",
        p: [
          "Quien busca un mobil home suele querer tres cosas: tener una vivienda o un alojamiento rápido, no meterse en una obra larga y poder moverlo o instalarlo en un terreno sin complicaciones.",
          "El problema es que muchos mobil home están pensados para campings y estancias cortas: poca altura, aislamiento justo y acabados ligeros. En un invierno gallego eso se nota.",
        ],
      },
      {
        h2: "Nuestra casa modular frente a un mobil home",
        p: ["Se transporta en camión y se instala en días, como un mobil home. La diferencia está en lo que hay dentro:"],
        lista: [
          "37 m² con dos dormitorios, baño completo, cocina y salón",
          "Estructura de acero galvanizado y paneles de grafeno con fibra de bambú",
          "Aislamiento pensado para vivir todo el año, no solo en verano",
          "Grandes ventanales y acabados de vivienda",
          "Versiones de 56 y 72 m² si necesitas más espacio",
        ],
        imagen: "/real/_DSC7009.jpg",
        pie: "Interior de la casa piloto: acabados de vivienda, no de camping.",
      },
      {
        h2: "Para vivir, para alquilar o para un camping",
        p: [
          "Sirve como vivienda habitual, como segunda residencia y para alojamiento turístico. Si tienes un camping, un terreno para turismo rural o una finca, se pueden instalar una o varias unidades.",
          "Lo que no cambia en ningún caso: si la casa se fija al terreno, necesita licencia. Te ayudamos a comprobar si tu parcela es apta.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Es un mobil home con ruedas?",
        a: "No. Se transporta plegada en camión y se coloca sobre una base en la parcela. A cambio de no llevar ruedas, tiene calidad y aislamiento de vivienda.",
      },
      {
        q: "¿Se puede poner en un camping o en un terreno turístico?",
        a: "Sí, es uno de los usos más habituales. Lo que se permita en cada terreno depende de su licencia y del planeamiento municipal.",
      },
      {
        q: "¿Puedo verla antes?",
        a: "Sí, hay una montada y visitable en A Coruña con cita previa.",
      },
    ],
    relacionados: [
      "/casa-contenedor",
      "/blog/casas-prefabricadas-turismo-rural-galicia",
      "/casas-prefabricadas-galicia",
    ],
    cta: {
      titulo: "Compárala con un mobil home en persona",
      texto: "Ven a la casa piloto de A Coruña y decide con las dos opciones claras.",
      mensaje: "Hola, estaba mirando mobil homes y me interesa vuestra casa modular. ¿Me dais información?",
    },
  },
];
