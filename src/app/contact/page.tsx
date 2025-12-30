"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Container from "@/components/Container";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    // Placeholder for now
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  }

  return (
    <Section
      title="Contact"
      subtitle="Have a project in mind or want to work together? Let’s talk."
    >
      <Container>
        <div className="max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-border bg-card p-6"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder="Your name"
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="you@email.com"
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about your project…"
                className="resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-card transition disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>

            {/* Feedback */}
            {status === "success" && (
              <p className="text-sm text-green-600">
                Message sent. I’ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </Container>
    </Section>
  );
}
