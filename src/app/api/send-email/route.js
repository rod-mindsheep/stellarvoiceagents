import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: `"Mindsheep Labs" <${process.env.SMTP_USER}>`,
      to: 'david@mindsheeplabs.com',
      subject: 'New Agency Application',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), { status: 500 });
  }
}