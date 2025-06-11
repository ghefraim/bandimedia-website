import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, message } = body;

  try {
    const data = await resend.emails.send({
      from: "Formular Contact <noreply@domeniul-tau.com>",
      to: ["emailul-clientului@exemplu.com"],
      subject: "Mesaj nou de pe site",
      replyTo: email,
      html: `
        <h2>Mesaj de la ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}