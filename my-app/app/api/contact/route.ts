import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill all required fields' });
  }

  try {
    await resend.emails.send({
      from: 'noreply@domeniultau.com', // adresa validă, verificată în Resend
      to: 'contact@domeniultau.com',   // adresa unde vrei să primești mailurile
      subject: `Mesaj nou de la ${name}`,
      html: `
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });
    return res.status(200).json({ message: 'Email trimis cu succes!' });
  } catch (error) {
    console.error('Eroare trimitere email:', error);
    return res.status(500).json({ message: 'Eroare la trimiterea emailului' });
  }
}