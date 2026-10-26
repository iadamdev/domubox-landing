// Articulos del blog. Captan a quien todavia esta investigando y lo llevan a
// la casa piloto. Regla del cliente: sin cifras de precio ni direccion.

import type { Pagina } from "./tipos";

const FECHA = "2026-09-23";

export const ARTICULOS: Pagina[] = [
  // ~680 impresiones en busquedas de precio: la intencion de compra mas alta
  {
    ruta: "/blog/cuanto-cuesta-casa-prefabricada-galicia",
    tipo: "articulo",
    fecha: FECHA,
    title: "¿Cuánto cuesta una casa prefabricada en Galicia? Qué entra en el precio",
    description:
      "Qué determina el precio de una casa prefabricada en Galicia: modelo, metros, parcela, transporte, licencia y acometidas. Y qué preguntar para comparar presupuestos.",
    kicker: "GUÍA DE PRECIOS",
    h1: "¿Cuánto cuesta una casa prefabricada",
    h1Acento: "en Galicia?",
    entradilla:
      "El precio que ves en un anuncio casi nunca es el precio final. Te explicamos qué partidas componen de verdad el coste de una casa prefabricada y cómo comparar presupuestos sin llevarte sorpresas.",
    imagen: "/real/_DSC6995.jpg",
    origen: "seo blog precio",
    secciones: [
      {
        h2: "La respuesta corta: depende de cinco cosas",
        p: [
          "No hay un precio único porque no hay dos parcelas iguales. El coste de una casa prefabricada en Galicia se forma con la vivienda en sí y con todo lo necesario para que quede habitable en tu terreno. Estas son las cinco partidas que lo explican casi todo.",
        ],
      },
      {
        h2: "1. El modelo y los metros",
        p: [
          "Es la partida más evidente. No cuesta lo mismo una casa de 37 m² que una de 72 m², ni un diseño sencillo que uno con terraza superior o fachada de cristal a doble altura. Pregunta siempre qué acabados vienen de serie: cocina, baño, carpintería y suelos cambian mucho el precio real.",
        ],
      },
      {
        h2: "2. La preparación de la parcela",
        p: [
          "La casa tiene que apoyarse sobre una base nivelada. Según el terreno, puede bastar una solución sencilla o hacer falta más trabajo. Es una de las partidas que más varía y la que más se omite en los precios de anuncio.",
        ],
      },
      {
        h2: "3. Las acometidas",
        p: [
          "Agua, luz y saneamiento. Si tu parcela ya los tiene a pie de terreno, el coste es contenido. Si hay que traerlos desde lejos o instalar una depuradora, sube. Conviene saberlo antes de elegir modelo.",
        ],
      },
      {
        h2: "4. Transporte y montaje",
        p: [
          "La casa viaja plegada en camión y una grúa la coloca en su sitio. El coste depende de la distancia y, sobre todo, del acceso: un camino estrecho o una pendiente complican la maniobra.",
        ],
        imagen: "/real/poster-grua.jpg",
        pie: "Colocación de la casa con grúa en la parcela.",
      },
      {
        h2: "5. Proyecto, licencia y tasas",
        p: [
          "Una casa fijada al terreno es una vivienda y necesita licencia municipal, normalmente con un proyecto técnico firmado por un arquitecto. A eso se suman las tasas e impuestos del concello. Es un coste que existe siempre, lo mencione el anuncio o no.",
        ],
      },
      {
        h2: "Cómo comparar presupuestos sin llevarte sorpresas",
        p: ["Antes de firmar, pide que te respondan por escrito a estas preguntas:"],
        lista: [
          "¿Qué acabados incluye exactamente el precio?",
          "¿Está incluido el transporte hasta mi parcela y la grúa?",
          "¿Quién prepara la base y cuánto cuesta?",
          "¿Las acometidas están incluidas o van aparte?",
          "¿El proyecto técnico y la gestión de la licencia están incluidos?",
          "¿El precio es cerrado o puede cambiar durante el proceso?",
        ],
      },
      {
        h2: "Por qué nosotros damos presupuesto cerrado",
        p: [
          "Preferimos no publicar un precio de escaparate que luego no se cumple. En su lugar, te damos un presupuesto cerrado para tu caso concreto, con cada partida clara. Y si quieres ver lo que estás comprando, tienes la casa montada en A Coruña.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Por qué no publicáis el precio en la web?",
        a: "Porque el precio real depende de tu parcela, y un precio de escaparate sin transporte, base ni licencia confunde más de lo que ayuda. Te damos uno cerrado para tu caso por WhatsApp.",
      },
      {
        q: "¿Una casa prefabricada sale más barata que una de obra?",
        a: "Suele salir más barata y, sobre todo, más previsible: menos meses de obra y menos partidas que cambian por el camino. Lo importante es comparar presupuestos completos, con todas las partidas.",
      },
    ],
    relacionados: [
      "/blog/casas-prefabricadas-llave-en-mano",
      "/blog/licencia-casa-prefabricada-galicia",
      "/casas-prefabricadas-galicia",
    ],
    cta: {
      titulo: "Pide tu presupuesto cerrado",
      texto: "Cuéntanos qué modelo te interesa y dónde está tu parcela. Te respondemos con todas las partidas claras.",
      mensaje: "Hola, quiero un presupuesto cerrado para una casa prefabricada. Os cuento mi caso.",
    },
  },

  // "vivienda prefabricada" 564 impresiones con 1% de clic: pura investigacion
  {
    ruta: "/blog/casa-prefabricada-modular-o-contenedor",
    tipo: "articulo",
    fecha: FECHA,
    title: "Casa prefabricada, modular o contenedor: diferencias reales",
    description:
      "Qué diferencia hay entre una casa prefabricada, una casa modular y una casa contenedor. Explicado sin tecnicismos, para que sepas qué estás comparando.",
    kicker: "DIFERENCIAS",
    h1: "Prefabricada, modular o contenedor:",
    h1Acento: "qué las diferencia.",
    entradilla:
      "Se usan como si fueran lo mismo y no siempre lo son. Te explicamos qué significa cada término para que compares con criterio.",
    imagen: "/real/hf-paisaje.jpg",
    origen: "seo blog diferencias",
    secciones: [
      {
        h2: "Casa prefabricada: fabricada fuera de la obra",
        p: [
          "Es el término más amplio. Una casa prefabricada es la que se fabrica total o parcialmente en taller y se monta después en la parcela. Dentro caben sistemas muy distintos: paneles, módulos, estructuras de madera o de acero.",
          "Es también la palabra que más usa la gente al buscar en Google, aunque luego se refiera a cosas diferentes.",
        ],
      },
      {
        h2: "Casa modular: construida por módulos",
        p: [
          "Una casa modular es un tipo de casa prefabricada que se construye por módulos, volúmenes que se fabrican terminados y se unen en el terreno. Por eso llega casi lista para vivir y el montaje es muy rápido.",
          "Nuestras casas son modulares y desplegables: el módulo viaja plegado y se abre en la parcela.",
        ],
      },
      {
        h2: "Casa contenedor: un contenedor marítimo adaptado",
        p: [
          "La casa contenedor parte de un contenedor de carga reutilizado. Es rápida y tiene una estética muy reconocible, pero arrastra las limitaciones de una estructura pensada para mercancía: ancho interior reducido y aislamiento que resta espacio.",
        ],
        imagen: "/real/_DSC7015.jpg",
        pie: "Nuestra casa también viaja con forma de contenedor, pero se despliega como vivienda.",
      },
      {
        h2: "Entonces, ¿qué es una casa Domubox?",
        p: [
          "Es una casa prefabricada, porque se fabrica fuera de la obra, y modular, porque se construye por módulos. Se transporta plegada, con las medidas de un contenedor, y al desplegarse se convierte en una vivienda con dos dormitorios, baño completo, cocina y salón.",
          "Por eso aparece en búsquedas de los tres tipos: tiene la rapidez de un contenedor y la calidad de una vivienda modular.",
        ],
      },
      {
        h2: "Lo que no cambia en ninguno de los tres casos",
        p: [
          "Da igual cómo se llame: si la casa se fija al terreno para vivir, es una vivienda y necesita licencia municipal. Es la duda más frecuente y conviene tenerla clara desde el principio.",
        ],
      },
    ],
    relacionados: [
      "/casa-contenedor",
      "/blog/licencia-casa-prefabricada-galicia",
      "/casas-prefabricadas-galicia",
    ],
    cta: {
      titulo: "Mejor que leerlo, verlo",
      texto: "Ven a la casa piloto de A Coruña y compruébalo en persona.",
      mensaje: "Hola, estoy comparando casas prefabricadas, modulares y contenedor. ¿Me dais información?",
    },
  },

  // La duda que mas frena la compra
  {
    ruta: "/blog/licencia-casa-prefabricada-galicia",
    tipo: "articulo",
    fecha: FECHA,
    title: "Licencia para una casa prefabricada en Galicia: lo que necesitas saber",
    description:
      "¿Necesita licencia una casa prefabricada en Galicia? Sí. Te explicamos por qué, qué suelo lo permite y qué pasos seguir antes de comprar.",
    kicker: "LICENCIAS",
    h1: "Licencia para una casa prefabricada",
    h1Acento: "en Galicia.",
    entradilla:
      "Corre por ahí que una casa prefabricada o modular no necesita licencia. No es cierto. Te lo explicamos claro, porque es lo primero que hay que resolver antes de comprar.",
    imagen: "/real/hf-terreno.jpg",
    origen: "seo blog licencia",
    secciones: [
      {
        h2: "Sí, una casa prefabricada necesita licencia",
        p: [
          "Cuando una casa se fija al terreno para vivir en ella, es un bien inmueble y se rige por la normativa urbanística igual que una casa construida de forma tradicional. Que se fabrique en taller o llegue en camión no cambia eso.",
          "Quien te diga que puedes ponerla sin licencia te está exponiendo a una sanción e incluso a tener que retirarla.",
        ],
      },
      {
        h2: "Lo primero: qué dice tu parcela",
        p: [
          "La clave no es la casa, es el suelo. En Galicia cada concello tiene su plan general de ordenación, y es el que determina qué se puede construir en cada parcela.",
        ],
        lista: [
          "Suelo urbano: lo habitual es que se pueda construir vivienda, cumpliendo las condiciones del plan",
          "Núcleo rural: suele ser viable, con condiciones de tamaño de parcela y distancias",
          "Suelo rústico: la vivienda nueva está muy limitada",
        ],
      },
      {
        h2: "Los pasos habituales",
        p: ["Aunque cada concello tiene su procedimiento, el camino suele ser este:"],
        lista: [
          "Consultar la clasificación de la parcela en el concello o en su plan general",
          "Encargar el proyecto técnico, normalmente firmado por un arquitecto",
          "Solicitar la licencia municipal y pagar las tasas e impuestos correspondientes",
          "Preparar la parcela: base y acometidas",
          "Instalar la casa y tramitar lo necesario para poder habitarla",
        ],
      },
      {
        h2: "Cómo te ayudamos",
        p: [
          "Antes de hablar de modelos revisamos contigo la parcela, para que sepas si es viable antes de gastar un euro. Es la pregunta más importante y preferimos resolverla al principio.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Y si la casa no lleva cimentación?",
        a: "Si se instala de forma permanente para vivir, la normativa la trata como vivienda aunque se apoye sobre una base sencilla. Lo que cuenta es el uso y la permanencia.",
      },
      {
        q: "¿Cuánto tarda la licencia?",
        a: "Depende de cada concello y de su carga de trabajo. Por eso conviene iniciar el trámite cuanto antes: el montaje de la casa se hace en días, la licencia suele ser lo que marca el calendario.",
      },
    ],
    relacionados: [
      "/blog/cuanto-cuesta-casa-prefabricada-galicia",
      "/blog/hipoteca-casa-prefabricada",
      "/casas-prefabricadas-a-coruna",
    ],
    cta: {
      titulo: "¿Tu parcela es apta?",
      texto: "Cuéntanos dónde está y te decimos si es viable antes de que gastes un euro.",
      mensaje: "Hola, quiero saber si mi parcela es apta para una casa prefabricada antes de dar ningún paso.",
    },
  },

  // ~250 impresiones: "llave en mano" y "todo incluido"
  {
    ruta: "/blog/casas-prefabricadas-llave-en-mano",
    tipo: "articulo",
    fecha: FECHA,
    title: "Casas prefabricadas llave en mano: qué incluye y qué no",
    description:
      "Qué significa de verdad una casa prefabricada llave en mano o con todo incluido. Qué partidas suelen quedar fuera y cómo comprobarlo antes de firmar.",
    kicker: "LLAVE EN MANO",
    h1: "Casas prefabricadas llave en mano:",
    h1Acento: "qué incluye y qué no.",
    entradilla:
      "«Llave en mano» y «todo incluido» son de las expresiones más buscadas y menos definidas del sector. Te explicamos qué debería incluir y qué preguntar para no llevarte sorpresas.",
    imagen: "/real/_DSC6893.jpg",
    origen: "seo blog llave en mano",
    secciones: [
      {
        h2: "Qué debería significar llave en mano",
        p: [
          "En teoría, una casa llave en mano es la que recibes lista para entrar a vivir: con cocina, baño, carpintería, instalaciones y acabados terminados. Tú giras la llave y ya está.",
          "En la práctica, cada empresa lo interpreta a su manera. Por eso la expresión sola no garantiza nada: lo que cuenta es la lista de lo que incluye.",
        ],
      },
      {
        h2: "Lo que casi siempre incluye",
        lista: [
          "La vivienda con su estructura, cerramientos y aislamiento",
          "Carpintería exterior y ventanas",
          "Cocina y baño equipados",
          "Instalaciones interiores de agua y electricidad",
        ],
        p: [],
        imagen: "/real/_DSC6885.jpg",
        pie: "Baño completo de serie en la casa piloto.",
      },
      {
        h2: "Lo que a menudo queda fuera",
        p: ["Estas son las partidas que conviene confirmar por escrito, porque son las que suelen aparecer después:"],
        lista: [
          "Transporte hasta la parcela y grúa",
          "Preparación del terreno y base de apoyo",
          "Acometidas de agua, luz y saneamiento",
          "Proyecto técnico, licencia y tasas",
          "Mobiliario y electrodomésticos",
        ],
      },
      {
        h2: "Cómo lo hacemos nosotros",
        p: [
          "Nuestras casas llegan con acabados de serie: cocina, baño y carpintería incluidos. Y el presupuesto te lo damos cerrado, con cada partida clara, para que sepas exactamente qué está incluido y qué no antes de decidir.",
          "Si quieres ver cómo queda una casa terminada, puedes recorrer la casa piloto en A Coruña.",
        ],
      },
    ],
    relacionados: [
      "/blog/cuanto-cuesta-casa-prefabricada-galicia",
      "/casas-prefabricadas-galicia",
      "/modelos/canary",
    ],
    cta: {
      titulo: "Ve cómo queda terminada",
      texto: "Recorre la casa piloto con sus acabados de serie y pide tu presupuesto cerrado.",
      mensaje: "Hola, me interesa una casa prefabricada llave en mano. ¿Qué incluye exactamente vuestro precio?",
    },
  },

  // Perfil inversor: mas ticket, varias unidades
  {
    ruta: "/blog/casas-prefabricadas-turismo-rural-galicia",
    tipo: "articulo",
    fecha: FECHA,
    title: "Casas prefabricadas para turismo rural y glamping en Galicia",
    description:
      "Casas modulares para alojamiento turístico, turismo rural y glamping en Galicia. Qué modelos encajan, por qué se montan en días y qué revisar antes de invertir.",
    kicker: "TURISMO RURAL",
    h1: "Casas prefabricadas para turismo rural",
    h1Acento: "y glamping en Galicia.",
    entradilla:
      "Galicia atrae cada vez más turismo de naturaleza, y los alojamientos singulares se llenan antes. Una casa modular permite abrir un alojamiento en semanas, no en años de obra.",
    imagen: "/real/hf-bluehour.jpg",
    origen: "seo blog turismo",
    secciones: [
      {
        h2: "Por qué encajan en un proyecto turístico",
        p: [
          "En turismo, cada mes de obra es un mes sin ingresos. Una casa modular se fabrica en taller y se instala en días, así que el alojamiento puede empezar a funcionar mucho antes que con una construcción tradicional.",
          "Además, se pueden instalar una o varias unidades y ampliar el proyecto por fases, según vaya funcionando.",
        ],
      },
      {
        h2: "Qué modelos funcionan mejor",
        p: [
          "Para glamping y alojamientos singulares, los modelos con más carácter visual son los que más llaman la atención en las plataformas de reservas. Para alojamiento rural más clásico, pesan más los metros y la distribución.",
        ],
        lista: [
          "Apple: 55 m², terraza cubierta y azotea, para 4 a 8 personas",
          "Capsule: ventanales panorámicos e iluminación integrada",
          "Nordic: fachada de cristal a doble altura, ideal para parejas",
          "Canary: dos dormitorios, la más versátil",
        ],
      },
      {
        h2: "Qué revisar antes de invertir",
        p: [
          "Antes de elegir modelos, confirma que el terreno permite el uso turístico y qué número de unidades admite. Esto depende del planeamiento municipal y de la normativa turística autonómica. También cuentan los accesos para el camión y la grúa, y las acometidas disponibles.",
        ],
      },
    ],
    relacionados: [
      "/modelos/apple",
      "/modelos/capsule",
      "/mobil-home-galicia",
    ],
    cta: {
      titulo: "Hablemos de tu proyecto",
      texto: "Cuéntanos el terreno y cuántas unidades tienes en mente. Te orientamos sin compromiso.",
      mensaje: "Hola, me interesa una casa modular para alojamiento turístico. ¿Podemos hablar de mi proyecto?",
    },
  },

  // Pregunta clasica del sector (hipotesis: no sale de los datos de Ads)
  {
    ruta: "/blog/hipoteca-casa-prefabricada",
    tipo: "articulo",
    fecha: FECHA,
    title: "¿Se puede hipotecar una casa prefabricada? Lo que piden los bancos",
    description:
      "¿Se puede pedir una hipoteca para una casa prefabricada o modular? Sí, si cumple ciertas condiciones. Te explicamos cuáles y cómo preparar la documentación.",
    kicker: "FINANCIACIÓN",
    h1: "¿Se puede hipotecar",
    h1Acento: "una casa prefabricada?",
    entradilla:
      "Es una de las dudas más frecuentes. La respuesta corta es sí, siempre que la casa sea una vivienda en regla. Te explicamos qué suele pedir el banco.",
    imagen: "/real/_DSC6853.jpg",
    origen: "seo blog hipoteca",
    secciones: [
      {
        h2: "La condición clave: que sea un bien inmueble",
        p: [
          "Para un banco, lo importante es la garantía. Una casa prefabricada fijada al terreno, con licencia y registrada, es un bien inmueble como cualquier vivienda, y eso es lo que permite hipotecarla.",
          "Por eso las casas móviles o las instalaciones sin licencia no suelen poder financiarse con hipoteca: no ofrecen esa garantía.",
        ],
      },
      {
        h2: "Qué suele pedir el banco",
        p: ["Cada entidad tiene sus criterios, pero la documentación habitual es esta:"],
        lista: [
          "Escritura de la parcela a tu nombre",
          "Licencia municipal y proyecto técnico",
          "Presupuesto cerrado de la vivienda",
          "Tasación, que valora suelo y vivienda en conjunto",
        ],
      },
      {
        h2: "Hipoteca de autopromoción",
        p: [
          "Cuando la casa todavía no existe, muchas entidades trabajan con la fórmula de autopromoción: el dinero se entrega por fases, según avanza el proyecto. Tener un presupuesto cerrado y un calendario claro facilita mucho la negociación.",
          "Te recomendamos consultarlo con tu entidad desde el principio: cada banco tiene su política con este tipo de viviendas.",
        ],
      },
    ],
    relacionados: [
      "/blog/licencia-casa-prefabricada-galicia",
      "/blog/cuanto-cuesta-casa-prefabricada-galicia",
      "/casas-prefabricadas-galicia",
    ],
    cta: {
      titulo: "Te damos el presupuesto que pide el banco",
      texto: "Un presupuesto cerrado y detallado es la base de cualquier financiación. Pídelo sin compromiso.",
      mensaje: "Hola, estoy mirando financiar una casa prefabricada y necesito un presupuesto cerrado.",
    },
  },
  // "casas prefabricadas cte" 18 impresiones y 2 conversiones (23 sep - 25 oct).
  // No afirmamos que los modelos tengan certificacion CTE: no esta confirmado.
  {
    ruta: "/blog/casas-prefabricadas-cte",
    tipo: "articulo",
    fecha: "2026-10-26",
    title: "Casas prefabricadas y el CTE: qué exige la normativa y qué pedir",
    description:
      "Qué es el Código Técnico de la Edificación, por qué también se aplica a las casas prefabricadas y modulares, y qué documentación pedir antes de comprar.",
    kicker: "NORMATIVA",
    h1: "Casas prefabricadas y el CTE:",
    h1Acento: "qué exige y qué pedir.",
    entradilla:
      "Si una casa prefabricada va a ser tu vivienda, tiene que cumplir las mismas reglas técnicas que cualquier casa. Te explicamos qué es el CTE y qué preguntar antes de firmar.",
    imagen: "/real/hf-materiales.jpg",
    origen: "seo blog cte",
    secciones: [
      {
        h2: "Qué es el CTE",
        p: [
          "El Código Técnico de la Edificación es la norma que fija en España los requisitos básicos que debe cumplir un edificio de viviendas: que sea seguro, habitable y eficiente. No distingue cómo se construye la casa, sino qué prestaciones tiene que ofrecer.",
          "Por eso afecta igual a una casa de obra que a una prefabricada o modular que se vaya a usar como vivienda.",
        ],
      },
      {
        h2: "Los apartados que más importan en una casa prefabricada",
        p: ["El CTE se organiza en documentos básicos. En una vivienda prefabricada, los que más conviene revisar son estos:"],
        lista: [
          "Seguridad estructural: que la estructura y la cimentación soporten las cargas, también viento y nieve según la zona",
          "Ahorro de energía: aislamiento y consumo, muy importante en el clima gallego",
          "Salubridad: humedad, ventilación y agua, otro punto clave en Galicia",
          "Seguridad en caso de incendio",
          "Protección frente al ruido",
          "Seguridad de utilización y accesibilidad",
        ],
      },
      {
        h2: "Quién lo comprueba",
        p: [
          "Para obtener la licencia de una vivienda, el concello pide normalmente un proyecto técnico firmado por un arquitecto. En ese proyecto se justifica que la vivienda, incluida la casa prefabricada y su cimentación, cumple el CTE. Es decir, el cumplimiento se valida para tu casa en tu parcela, no solo en un catálogo.",
        ],
      },
      {
        h2: "Qué pedir antes de comprar",
        p: ["Antes de firmar, pide al fabricante o al importador:"],
        lista: [
          "La ficha técnica de cada modelo, con materiales, aislamiento y estructura",
          "Los datos de transmitancia térmica de cerramientos y ventanas",
          "La documentación técnica que necesitará el arquitecto para redactar el proyecto",
          "Qué parte del proyecto y de la tramitación está incluida en el precio",
        ],
      },
      {
        h2: "Cómo lo trabajamos",
        p: [
          "Tenemos fichas técnicas de cada modelo y te pasamos la documentación que necesite tu arquitecto. Y si quieres comprobar materiales y aislamiento en persona, la casa piloto de A Coruña está montada para eso.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Una casa prefabricada tiene que cumplir el CTE?",
        a: "Sí, si se va a usar como vivienda. La norma fija prestaciones, no un sistema constructivo, así que se aplica igual a una casa prefabricada o modular.",
      },
      {
        q: "¿Quién certifica que se cumple?",
        a: "Se justifica en el proyecto técnico que acompaña a la licencia, firmado por un técnico competente, para la casa concreta en su parcela.",
      },
    ],
    relacionados: [
      "/blog/licencia-casa-prefabricada-galicia",
      "/blog/cuanto-cuesta-casa-prefabricada-galicia",
      "/casas-prefabricadas-galicia",
    ],
    cta: {
      titulo: "Pide la documentación técnica",
      texto: "Te enviamos las fichas de los modelos para que las revise tu arquitecto.",
      mensaje: "Hola, quiero la documentación técnica de vuestras casas para revisar el CTE con mi arquitecto.",
    },
  },
];
