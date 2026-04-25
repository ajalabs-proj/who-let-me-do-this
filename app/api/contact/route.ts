import { Resend } from "resend";

const TO_EMAIL = "hello@nouriehair.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Nourie Site <onboarding@resend.dev>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function bad(error: string, status = 400) {
  return Response.json({ error }, { status });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return bad("Invalid JSON.");
  }

  if (!body || typeof body !== "object") return bad("Invalid payload.");
  const { name, email, message, company } = body as Record<string, unknown>;

  // Honeypot: real users can't see/fill the hidden "company" field.
  if (typeof company === "string" && company.trim() !== "") {
    // Pretend success so bots don't learn anything.
    return Response.json({ ok: true });
  }

  if (typeof name !== "string" || name.trim().length < 1) {
    return bad("Please enter your name.");
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return bad("Please enter a valid email address.");
  }
  if (typeof message !== "string" || message.trim().length < 1) {
    return bad("Please include a message.");
  }
  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return bad("Submission too long.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return bad("Email service is not configured.", 500);
  }

  const resend = new Resend(apiKey);
  const safeName = name.trim();
  const safeEmail = email.trim();
  const safeMessage = message.trim();

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: safeEmail,
      subject: `New contact from ${safeName} — nouriehair.com`,
      text: [
        `From: ${safeName} <${safeEmail}>`,
        "",
        safeMessage,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return bad("Could not send right now. Please try again shortly.", 502);
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return bad("Could not send right now. Please try again shortly.", 502);
  }
}
