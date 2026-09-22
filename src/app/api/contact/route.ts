import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, email, projectType, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof projectType !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return NextResponse.json({ error: "Email is not configured." }, { status: 500 });
  }

  const from = process.env.RESEND_FROM_EMAIL?.trim() || "onboarding@resend.dev";
  const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
  if (!emailPattern.test(from) || !emailPattern.test(to)) {
    console.error(
      `Contact form: invalid from/to email format. from="${from}" to="${to}". Check RESEND_FROM_EMAIL and CONTACT_TO_EMAIL in .env.local for stray quotes or spaces.`
    );
    return NextResponse.json({ error: "Email is not configured correctly." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Portfolio inquiry <${from}>`,
    to,
    replyTo: email,
    subject: `New project inquiry — ${projectType}`,
    text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
