import { NextResponse } from 'next/server';
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.CONTACT_EMAIL!;

if (!contactEmail) {
  throw new Error('CONTACT_EMAIL environment variable is not set');
}


export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Your Portfolio <onboarding@resend.dev>',
      to: contactEmail,
      subject: `Regarding: ${subject}`,
      replyTo: email,
      html: `
        <h2>Message from: ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}