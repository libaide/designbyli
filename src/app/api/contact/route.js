import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, honey } = await req.json();

    // Honeypot (spam trap). If it's filled, silently succeed.
    if (honey) return Response.json({ ok: true });

    // Basic validation
    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    if (typeof message !== "string" || message.length > 5000) {
      return Response.json({ ok: false, error: "Message too long" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.ZOHO_SMTP_USER;
    const subjectPrefix = process.env.CONTACT_SUBJECT_PREFIX || "Website Contact";

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
      "",
      `Received: ${new Date().toISOString()}`,
    ].join("\n");

    await transporter.sendMail({
      from: `"${subjectPrefix}" <${process.env.ZOHO_SMTP_USER}>`,
      to: toEmail,
      replyTo: email, // so you can reply directly to the visitor
      subject: `${subjectPrefix}: ${name}`,
      text,
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
