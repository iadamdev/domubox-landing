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

      {/* Meta Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '894013069888151');
            fbq('track', 'PageView');
          `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=894013069888151&ev=PageView&noscript=1"
        />
      </noscript>

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
