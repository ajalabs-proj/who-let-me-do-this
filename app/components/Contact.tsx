"use client";

import { useState, type FormEvent } from "react";
import { Arrow } from "./Arrow";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [sentWithMessage, setSentWithMessage] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };
    const hasMessage = payload.message.trim().length > 0;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? `Request failed (${res.status})`);
      }
      setSentWithMessage(hasMessage);
      setStatus("sent");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setError(msg);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="pt-[100px] pb-[60px] border-t border-rule"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="sec-num mb-6">§ 07</div>
            <h2 className="font-head h-section">Contact</h2>
            <p className="mt-6 text-ink/80 max-w-[40ch]">
              Drop your email to follow Nourie&rsquo;s progress in The Nourie
              Files. Add a note for partnership inquiries, diligence requests,
              and press — one channel.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-7 md:pl-10 md:border-l border-rule"
            noValidate
          >
            {status !== "sent" ? (
              <>
                <div className="space-y-8">
                  <div>
                    <label htmlFor="contact-name" className="eyebrow block mb-1">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      className="field"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="eyebrow block mb-1">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="field"
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="eyebrow block mb-1">
                      Message <span className="text-ink/50">(optional)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      className="field resize-none"
                      placeholder="Optional — a few sentences about what you're working on."
                    />
                  </div>
                  {/* Honeypot — hidden from humans, only bots fill it */}
                  <div
                    aria-hidden
                    className="absolute left-[-9999px] w-px h-px overflow-hidden"
                  >
                    <label htmlFor="contact-company">
                      Company (leave blank)
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="btn"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Sign up"} <Arrow />
                  </button>
                </div>
                {status === "error" && error && (
                  <p
                    role="alert"
                    className="mt-6 font-mono text-[11px] tracking-[0.08em] text-accent"
                  >
                    {error}
                  </p>
                )}
              </>
            ) : (
              <div className="py-10" role="status" aria-live="polite">
                <div className="eyebrow mb-3">
                  {sentWithMessage ? "Received" : "You're in"}
                </div>
                <p className="font-head text-[28px] leading-tight max-w-[28ch]">
                  {sentWithMessage
                    ? "Thank you. You're on the list, and we'll respond from a named inbox within two business days."
                    : "You're on the list. Look out for The Nourie Files in your inbox."}
                </p>
              </div>
            )}
          </form>
        </div>

        <div className="mt-24 pt-8 border-t border-rule flex flex-col md:flex-row md:justify-between gap-3 text-[13px] text-ink/70">
          <div>Aja Labs, Inc.</div>
          <div>
            © {new Date().getFullYear()} Aja Labs, Inc. Nourie™ is a
            trademark of Aja Labs, Inc.
          </div>
        </div>
      </div>
    </section>
  );
}
