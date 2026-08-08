import type { Metadata } from "next";
import "./globals.css";
import Chrome from "@/components/layout/Chrome";
import MaintenancePage from "./maintenance/page";
import { Playfair_Display, DM_Sans, Lexend } from "next/font/google";
import Script from "next/script";

// Contenedor de Google Tag Manager. Desde aqui se gestionan GA4, las
// conversiones de Google Ads y los eventos del Pixel sin volver a tocar codigo.
const GTM_ID = "GTM-P2NLSB7F";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DOMUBOX IMPORT",
  description:
    "Descubre nuestras casas modulares de diseño moderno y eficiente. Soluciones habitacionales rápidas, sostenibles y personalizables que se adaptan a tu estilo de vida y presupuesto. Calidad, confort y rapidez en cada proyecto.",
  verification: {
    google: "VMBDKNiK4nHs5yNxzHQ2E0AN_4QSOr1o9Le5Ut3-cPg",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png", // opcional, si quieres icono Apple
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const maintenance = false; // 👈 activar para mostrar el mensaje de mantenimiento

  return (
    <html lang="es"
      className={`${playfair.variable} ${dmSans.variable} ${lexend.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />

      </head>
      <body className="bg-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {maintenance ? (
          <MaintenancePage />
        ) : (
          <Chrome>{children}</Chrome>
        )}
      </body>
    </html>
  );
}
