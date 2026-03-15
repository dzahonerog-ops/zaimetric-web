import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, empresa, servicios, reto } = body;

    if (!nombre || !email || !reto) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    await resend.emails.send({
      from: "ZAIMETRIC Web <onboarding@resend.dev>",
      to: "info@zaimetric.com",
      replyTo: email,
      subject: `Nuevo contacto de ${nombre}${empresa ? ` (${empresa})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0f172a; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo mensaje desde ZAIMETRIC.com</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; width: 130px;">Nombre</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px; font-weight: 600;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #2563eb; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
            </tr>
            ${empresa ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Empresa</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${empresa}</td>
            </tr>` : ""}
            ${servicios && servicios.length > 0 ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Servicios</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-size: 14px;">${servicios.join(", ")}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #64748b; font-size: 14px; margin-bottom: 8px;">Mensaje:</p>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #0f172a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${reto}</div>
          </div>

          <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border: 1px solid #bfdbfe;">
            <p style="margin: 0; color: #1e40af; font-size: 13px;">Responde directamente a este email para contactar con ${nombre}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}
