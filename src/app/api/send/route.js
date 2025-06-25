import nodemailer from 'nodemailer';

const USER = process.env.EMAIL_USER;
const PASS = process.env.EMAIL_PASS;
const TO_EMAIL = 'shandeepsanju@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: USER, pass: PASS },
});

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();

    await transporter.sendMail({
      from: email,
      to: TO_EMAIL,
      subject: `[Portfolio Contact] ${subject}`,
      text: message,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email send error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
