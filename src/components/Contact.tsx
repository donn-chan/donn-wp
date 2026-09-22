"use client";

import { useState, type FormEvent } from "react";
import { projectTypes } from "@/lib/content";

const CONTACT_EMAIL = "donn.regalado@gmail.com";
const CONTACT_PHONE = "+66620169745";
const WHATSAPP_NUMBER = "66620169745";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState<string>(projectTypes[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, projectType, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle at center, var(--rust-soft), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-rust">
              Get in touch
            </p>
            <h2 className="font-display mt-4 max-w-md text-4xl tracking-tight sm:text-5xl">
              Let&rsquo;s scope your project.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Tell me what&rsquo;s slow, what you&rsquo;re building, or what
              needs to ship. I reply within one business day, usually
              faster.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 font-mono text-sm text-ink-soft transition-colors hover:text-rust"
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-line">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                {CONTACT_EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-mono text-sm text-ink-soft transition-colors hover:text-rust"
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-line">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20 12a8 8 0 1 1-3.6-6.7" />
                    <path d="M20 4v5h-5" />
                  </svg>
                </span>
                WhatsApp — {CONTACT_PHONE}
              </a>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center gap-3 font-mono text-sm text-ink-soft transition-colors hover:text-rust"
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-line">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1.2-5.5A8.38 8.38 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5Z" />
                  </svg>
                </span>
                Line / Call — {CONTACT_PHONE}
              </a>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            {status === "sent" ? (
              <div className="rise flex h-full flex-col justify-center rounded-2xl border border-line bg-paper-raised p-10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-rust">
                  <path d="M5 12l4 4L19 6" />
                </svg>
                <h3 className="font-display mt-4 text-2xl tracking-tight">
                  Message sent.
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Thanks — I reply within one business day, usually faster.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-line bg-paper-raised p-8 md:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-rust"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-rust"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                    Project type
                  </label>
                  <select
                    id="projectType"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-rust"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 w-full resize-none rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-rust"
                    placeholder="What are you trying to build or fix?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-rust">
                    Something went wrong sending that — try again, or email{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                      {CONTACT_EMAIL}
                    </a>{" "}
                    directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-ink px-6 py-3.5 font-mono text-[13px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-rust disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
