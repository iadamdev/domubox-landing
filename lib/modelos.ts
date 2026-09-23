// Datos de los modelos, compartidos por la home (componente Modelos) y por
// las paginas /modelos/[modelo]. Una sola fuente: si cambia una foto o una
// descripcion, cambia en los dos sitios.
//
// Regla: solo se publican datos que el cliente ha dado (catalogo, fichas y
// posts). Family y Capsule no tienen superficie confirmada, asi que no se
// inventa: la pagina remite a la ficha tecnica.

export type Modelo = {
  slug: string;
  nombre: string;
  resumen: string;
  descripcion: string;
  datos: string[];
  imagenes: string[];
  fichas: { name: string; url: string }[];
  uso: string;
};

export const MODELOS: Modelo[] = [
  {
    slug: "canary",
    nombre: "Canary Luxury",
    resumen: "La casa de la casa piloto: 37 m² montados y visitables en A Coruña.",
    descripcion:
      "La Canary es una vivienda modular desplegable que combina diseño contemporáneo, confort y facilidad de instalación. Su sistema plegable permite un transporte eficiente y un rápido montaje, transformándose en un espacio habitable completo en muy poco tiempo. Destaca por su distribución funcional, su alto nivel de aislamiento y sus acabados de calidad, con amplias zonas acristaladas que aportan luminosidad y sensación de amplitud. Es una solución versátil, ideal tanto para uso residencial como para proyectos turísticos, oficinas o alojamientos temporales en cualquier entorno.",
    datos: [
      "Versiones de 37, 56 y 72 m²",
      "37 m²: dos dormitorios, baño completo, salón y cocina",
      "Para 2 a 4 personas en la versión de 37 m²",
      "Estructura de acero galvanizado",
      "Paneles de grafeno con fibra de bambú",
      "Llega plegada en camión y se despliega en la parcela",
    ],
    imagenes: [
      "/real/_DSC6998.jpg",
      "/real/_DSC7009.jpg",
      "/real/_DSC6893.jpg",
      "/real/_DSC6853.jpg",
      "/real/_DSC6885.jpg",
      "/real/_DSC6975.jpg",
      "/real/_DSC6990.jpg",
      "/real/_DSC7015.jpg",
    ],
    fichas: [
      { name: "Canary Luxury 37m²", url: "/pdf/canary-luxury/ft-canary-37.pdf" },
      { name: "Canary Luxury 56m²", url: "/pdf/canary-luxury/ft-canary-56.pdf" },
      { name: "Canary Luxury 72m²", url: "/pdf/canary-luxury/ft-canary-72.pdf" },
    ],
    uso: "Vivienda habitual, segunda residencia y alojamiento turístico.",
  },
  {
    slug: "family",
    nombre: "Family",
    resumen: "Tejado a dos aguas y aspecto de casa de siempre, con la rapidez de lo modular.",
    descripcion:
      "Esta casa modular adaptable ofrece un diseño tradicional y acogedor. El modelo destaca por su tejado a dos aguas y su gran puerta corrediza de cristal central, que facilita la conexión con el entorno. Incluye un espacio exterior cubierto (pérgola o porche), perfecto para el esparcimiento al aire libre. Es la opción ideal para quienes buscan la rapidez de la construcción modular con el aspecto atemporal de una vivienda familiar permanente.",
    datos: [
      "Tejado a dos aguas",
      "Gran puerta corredera de cristal central",
      "Porche o pérgola cubierta",
      "Superficie y distribución en la ficha técnica",
    ],
    imagenes: [
      "/img/Family/family1.png",
      "/img/Family/family6.png",
      "/img/Family/family2.png",
      "/img/Family/family3.png",
      "/img/Family/family5.png",
    ],
    fichas: [{ name: "Family", url: "/pdf/family/ft-family.pdf" }],
    uso: "Vivienda familiar permanente.",
  },
  {
    slug: "apple",
    nombre: "Apple",
    resumen: "55 m² con terraza cubierta y azotea: pensada para glamping de lujo.",
    descripcion:
      "Este módulo ofrece un diseño futurista y vanguardista, caracterizado por sus líneas curvas suaves y su estética limpia en color blanco. Destaca su amplia terraza frontal cubierta, enmarcada por lamas de madera clara, y una escalera exterior flotante que lleva a una terraza superior (rooftop). La gran fachada de cristal asegura máxima luminosidad. Ideal para proyectos de glamping de lujo o alojamientos vacacionales que buscan un impacto visual único y moderno.",
    datos: [
      "55 m² entre cabina y terraza",
      "Para 4 a 8 personas",
      "Cabina de 10 × 3,5 m y terraza de 10 × 2 m",
      "Escalera exterior a terraza superior",
    ],
    imagenes: [
      "/img/Apple/apple5.jpeg",
      "/img/Apple/apple6.jpeg",
      "/img/Apple/apple2.jpeg",
      "/img/Apple/apple3.jpeg",
      "/img/Apple/apple4.jpeg",
    ],
    fichas: [],
    uso: "Glamping y alojamiento vacacional.",
  },
  {
    slug: "nordic",
    nombre: "Nordic",
    resumen: "49,5 m² con fachada de cristal a doble altura y estética escandinava.",
    descripcion:
      "El modelo Nordic presenta un diseño modular minimalista con un imponente tejado a dos aguas que se integra en una fachada de cristal de doble altura, garantizando vistas espectaculares. Su revestimiento en chapa metálica oscura aporta una estética moderna, industrial y escandinava.",
    datos: [
      "49,5 m²",
      "Salón-cocina de 23,5 m²",
      "Pensada para 2 personas",
      "Fachada de cristal a doble altura",
    ],
    imagenes: [
      "/img/Nordic/nordic5.jpeg",
      "/img/Nordic/nordic6.jpeg",
      "/img/Nordic/nordic2.jpeg",
      "/img/Nordic/nordic3.jpeg",
      "/img/Nordic/nordic4.jpeg",
    ],
    fichas: [{ name: "Nordic", url: "/pdf/nordic/ft-nordic.pdf" }],
    uso: "Vivienda para pareja, refugio y alojamiento rural.",
  },
  {
    slug: "capsule",
    nombre: "Capsule",
    resumen: "Diseño futurista con ventanales panorámicos para alojamientos que se recuerdan.",
    descripcion:
      "Capsule es una casa modular de diseño futurista con líneas suaves y aerodinámicas. Se caracteriza por sus enormes ventanales panorámicos en los extremos y una llamativa iluminación LED integrada que resalta su aspecto de alta tecnología. Ideal para glamping de lujo o alojamientos que buscan un impacto visual vanguardista y memorable.",
    datos: [
      "Ventanales panorámicos en los extremos",
      "Iluminación LED integrada",
      "Superficie y distribución en la ficha técnica",
    ],
    imagenes: [
      "/img/Capsule/capsule2.png",
      "/img/Capsule/capsule1.jpeg",
      "/img/Capsule/capsule6.jpeg",
      "/img/Capsule/capsule5.png",
      "/img/Capsule/capsule3.png",
    ],
    fichas: [{ name: "Capsule", url: "/pdf/capsule/ft-capsule.pdf" }],
    uso: "Glamping de lujo y alojamiento singular.",
  },
];

export const modelo = (slug: string) => MODELOS.find((m) => m.slug === slug);
