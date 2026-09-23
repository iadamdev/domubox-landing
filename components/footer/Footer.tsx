import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { MODELOS } from "@/lib/modelos";
import { ARTICULOS } from "@/lib/seo/blog";

export default function Footer() {
  return (
    <footer className="bg-brand text-white py-20 text-center w-full px-4">
      <nav aria-label="Casas prefabricadas" className="mx-auto mb-14 grid max-w-[1300px] gap-8 text-left font-dmsans text-[14px] sm:grid-cols-3">
        <div>
          <p className="mb-3 text-[11px] tracking-[0.25em] text-white/50">CASAS PREFABRICADAS</p>
          <ul className="space-y-2 text-white/85">
            <li><Link href="/casas-prefabricadas-galicia">Casas prefabricadas en Galicia</Link></li>
            <li><Link href="/casas-prefabricadas-a-coruna">Casas prefabricadas en A Coruña</Link></li>
            <li><Link href="/casa-contenedor">Casa contenedor</Link></li>
            <li><Link href="/mobil-home-galicia">Mobil home en Galicia</Link></li>
            <li><Link href="/casa-piloto">Casa piloto visitable</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-[11px] tracking-[0.25em] text-white/50">MODELOS</p>
          <ul className="space-y-2 text-white/85">
            {MODELOS.map((m) => (
              <li key={m.slug}><Link href={`/modelos/${m.slug}`}>{m.nombre}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-[11px] tracking-[0.25em] text-white/50">GUÍAS</p>
          <ul className="space-y-2 text-white/85">
            {ARTICULOS.map((a) => (
              <li key={a.ruta}><Link href={a.ruta}>{a.h1} {a.h1Acento}</Link></li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex flex-col-reverse md:flex-col justify-center items-center text-sm max-w-[1300px] mx-auto">
        <div className="font-dmsans text-[14px] text-gray-300 flex flex-col-reverse md:flex-row justify-between items-center md:items-end pt-5 mt-10 border-t-1 md:border-b-1 md:border-t-0 md:mb-5 md:pb-2 gap-5 border-separator w-full">
          <div className="flex flex-col md:flex-row gap-4 pt-6 items-center">
            <p>&copy; {new Date().getFullYear()} DOMUBOX IMPORT.</p>
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/domubox/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61585426063415"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-5 tracking-widest">
            <Link href="/politica-privacidad">Política de privacidad</Link>
            <Link href="/cookies">Política de cookies</Link>
            <Link href="/aviso-legal">Aviso legal</Link>
          </div>
        </div>
        <img src="/img/logo-footer.svg" alt="logo domubox" className="w-full" />
      </div>
      
    </footer>
  );
}
