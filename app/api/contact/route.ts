// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const DESTINO = "info@domuboximport.com";

// El cliente se crea DENTRO del handler, no al cargar el modulo.
// Si se instancia arriba y falta RESEND_API_KEY, revienta el build entero
// y se cae la web, no solo el formulario.
function cliente() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

type Cuerpo = { name?: string; email?: string; phone?: string; message?: string };

function validar(b: Cuerpo) {
  const nombre = b.name?.trim() ?? "";
  const email = b.email?.trim() ?? "";
  const telefono = b.phone?.trim() ?? "";
  const mensaje = b.message?.trim() ?? "";

  if (nombre.length < 2) return { error: "Indica tu nombre." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return { error: "Revisa el email." };
  if (telefono && telefono.replace(/\D/g, "").length < 7) return { error: "Revisa el teléfono." };
  if (nombre.length > 120 || email.length > 160 || mensaje.length > 4000) {
    return { error: "El mensaje es demasiado largo." };
  }
  return { datos: { nombre, email, telefono, mensaje } };
}

// Limite por IP en memoria: frena el spam automatizado sin dependencias.
// ponytail: se reinicia en cada arranque de instancia. Si el volumen crece,
// migrar a Upstash Redis o al rate limiting de Vercel.
const VENTANA_MS = 60_000;
const MAX_POR_VENTANA = 3;
const visitas = new Map<string, number[]>();

function pasaLimite(ip: string) {
  const ahora = Date.now();
  const previas = (visitas.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS);
  if (previas.length >= MAX_POR_VENTANA) return false;
  previas.push(ahora);
  visitas.set(ip, previas);
  return true;
}

function escapar(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "desconocida";

  if (!pasaLimite(ip)) {
    return NextResponse.json(
      { success: false, message: "Demasiados envíos. Espera un momento." },
      { status: 429 }
    );
  }

  let cuerpo: Cuerpo;
  try {
    cuerpo = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Petición inválida." }, { status: 400 });
  }

  const v = validar(cuerpo);
  if (v.error) {
    return NextResponse.json({ success: false, message: v.error }, { status: 400 });
  }
  const { nombre, email, telefono, mensaje } = v.datos!;

  const resend = cliente();
  if (!resend) {
    console.error("RESEND_API_KEY no configurada: el formulario no puede enviar.");
    return NextResponse.json(
      { success: false, message: "No se pudo enviar. Escríbenos por WhatsApp mientras lo resolvemos." },
      { status: 503 }
    );
  }

  const { data, error } = await resend.emails.send({
    from: `DOMUBOX <${DESTINO}>`,
    to: DESTINO,
    replyTo: email,
    subject: `Consulta de ${nombre}`,
    html: `
      <h2>Nuevo mensaje desde la web</h2>
      <p><b>Nombre:</b> ${escapar(nombre)}</p>
      <p><b>Teléfono:</b> ${escapar(telefono || "—")}</p>
      <p><b>Email:</b> ${escapar(email)}</p>
      <p><b>Mensaje:</b> ${escapar(mensaje || "—")}</p>
    `,
  });

  // Clave: si Resend falla, se devuelve error de verdad.
  // Antes se respondia success:true igualmente y el lead se perdia en silencio.
  if (error) {
    console.error("Resend rechazo el envio:", error);
    return NextResponse.json(
      { success: false, message: "No se pudo enviar. Inténtalo o escríbenos por WhatsApp." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, message: "Correo enviado", id: data?.id }, { status: 200 });
}
