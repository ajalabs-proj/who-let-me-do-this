import { Resend } from "resend";

const TO_EMAIL = "hello@nouriehair.com";
const FROM_EMAIL = "Nourie™ <hello@nouriehair.com>";

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
    return Response.json({ ok: true, subscribed: true });
  }

  if (typeof name !== "string" || name.trim().length < 1) {
    return bad("Please enter your name.");
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return bad("Please enter a valid email address.");
  }

  const hasMessage = typeof message === "string" && message.trim().length > 0;
  if (name.length > 200 || email.length > 320) {
    return bad("Submission too long.");
  }
  if (hasMessage && (message as string).length > 5000) {
    return bad("Submission too long.");
  }

  const safeName = name.trim();
  const safeEmail = email.trim();
  const safeMessage = hasMessage ? (message as string).trim() : "";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return bad("Could not complete your request right now. Please try again shortly.", 500);
  }

  const resend = new Resend(apiKey);

  // Every submission joins the newsletter list (a Resend Audience). A scheduled
  // job exports this audience to CSV and imports it into Substack — Substack has
  // no API, so this is the reliable path. Substack dedupes on import.
  let addedToList = false;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (audienceId) {
    try {
      const { error } = await resend.contacts.create({
        email: safeEmail,
        firstName: safeName,
        unsubscribed: false,
        audienceId,
      });
      if (error) {
        console.error("[contact] Resend contact error:", error);
      } else {
        addedToList = true;
      }
    } catch (err) {
      console.error("[contact] Resend contact unexpected error:", err);
    }
  } else {
    console.error("[contact] RESEND_AUDIENCE_ID is not set");
  }

  // Email the team when there's a message to read, or as a fallback so a signup
  // is never lost if it couldn't be added to the audience.
  const needsEmail = hasMessage || !addedToList;
  if (needsEmail) {
    const subject = hasMessage
      ? `New contact from ${safeName} — nouriehair.com`
      : `New signup (not added to list) — nouriehair.com`;

    const lines = [`From: ${safeName} <${safeEmail}>`];
    if (!addedToList) {
      lines.push("", "Note: could not add to the newsletter list — add this email manually.");
    }
    if (hasMessage) {
      lines.push("", safeMessage);
    }

    try {
      const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        replyTo: safeEmail,
        subject,
        text: lines.join("\n"),
      });

      if (error) {
        console.error("[contact] Resend error:", error);
        return bad("Could not send right now. Please try again shortly.", 502);
      }
    } catch (err) {
      console.error("[contact] Unexpected error:", err);
      return bad("Could not send right now. Please try again shortly.", 502);
    }
  }

  return Response.json({ ok: true, subscribed: addedToList });
}
