import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { companyName, phone, email, services, description } = body;

    // Validate required fields
    if (!companyName || !phone || !email || !description) {
      return NextResponse.json(
        { error: 'Toate câmpurile obligatorii trebuie completate.' },
        { status: 400 }
      );
    }

    // Create services list for email
    const servicesList = services && services.length > 0 
      ? services.join(', ') 
      : 'Nu au fost selectate servicii';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'contact@bandimedia.ro', // Replace with your verified domain
      to: ['contact@bandimedia.ro'], // Replace with your email
      subject: `Nouă cerere de contact de la ${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #facc15; padding-bottom: 10px;">
            Nouă cerere de contact
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Detaliile companiei:</h3>
            <p><strong>Numele companiei:</strong> ${companyName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
          </div>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Servicii de interes:</h3>
            <p>${servicesList}</p>
          </div>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Detalii proiect:</h3>
            <p style="white-space: pre-wrap;">${description}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Acest email a fost trimis prin formularul de contact de pe website-ul Bandi Media.</p>
            <p>Data: ${new Date().toLocaleString('ro-RO')}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Eroare la trimiterea email-ului. Te rugăm să încerci din nou.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email-ul a fost trimis cu succes!', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Eroare internă. Te rugăm să încerci din nou mai târziu.' },
      { status: 500 }
    );
  }
}
