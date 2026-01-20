"use client";

import { useState } from "react";

type Field = "reason" | "name" | "email" | "message";
type Status = "idle" | "success" | "error";

const initialValues = {
  reason: "recruiter",
  name: "",
  email: "",
  message: "",
  honey: "", // honeypot
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [focused, setFocused] = useState<Partial<Record<Field, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const hasValue = (field: Field) => values[field].trim().length > 0;
  const isActive = (field: Field) => Boolean(focused[field]) || hasValue(field);

  const baseField =
    "w-full rounded-xl border-[4px] bg-white px-4 py-3 text-base outline-none transition-colors placeholder:text-neutral-400";

  const fieldClass = (field: Field) =>
    [
      baseField,
      isActive(field) ? "border-black" : "border-neutral-300",
      "focus:border-black",
    ].join(" ");

  function update<K extends keyof typeof initialValues>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    // If they start editing after a send, clear the status so UI feels natural
    if (status !== "idle") setStatus("idle");
    if (errorMsg) setErrorMsg("");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();
    const reason = values.reason;

    // Honeypot: if filled, pretend success (bots will fill it)
    if (values.honey.trim()) {
      setStatus("success");
      setValues(initialValues);
      return;
    }

    // Client-side validation (server still validates too)
    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill out name, email, and message.");
      return;
    }

    // Light email sanity check (don’t overdo it)
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (message.length > 5000) {
      setStatus("error");
      setErrorMsg("Message is too long (max 5000 characters).");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reason,
          name,
          email,
          message,
          honey: "", // always send empty honeypot from real users
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setValues(initialValues);
      setFocused({});
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full">
      <div className="mx-auto max-w-2xl rounded-3xl border-[4px] border-black bg-white p-8">
        <form className="space-y-6" onSubmit={onSubmit}>
          {/* Honeypot (hidden from users, bots may fill it) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honey">
              Leave this field empty
              <input
                id="honey"
                type="text"
                name="honey"
                value={values.honey}
                onChange={(e) => update("honey", e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          {/* Reason */}
          <div className="space-y-2">
            <label htmlFor="reason" className="text-sm font-medium text-black">
              Reason for reaching out
            </label>
            <select
              id="reason"
              value={values.reason}
              onChange={(e) => update("reason", e.target.value)}
              onFocus={() => setFocused((f) => ({ ...f, reason: true }))}
              onBlur={() => setFocused((f) => ({ ...f, reason: false }))}
              name="reason"
              required
              className={fieldClass("reason") + " appearance-none"}
              aria-label="Reason for reaching out"
              disabled={loading}
            >
              <option value="recruiter">
                Full-time / Contract role (Recruiter)
              </option>
              <option value="freelance">Freelance project</option>
              <option value="collab">Collaboration</option>
              <option value="other">Other</option>
            </select>

            <p className="text-sm text-neutral-600">
              Recruiters: a job link, location/time zone, and timeline help a lot.
            </p>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-black">
              Name
            </label>
            <input
              id="name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              onFocus={() => setFocused((f) => ({ ...f, name: true }))}
              onBlur={() => setFocused((f) => ({ ...f, name: false }))}
              type="text"
              name="name"
              placeholder="Your name"
              className={fieldClass("name")}
              required
              disabled={loading}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </label>
            <input
              id="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              onFocus={() => setFocused((f) => ({ ...f, email: true }))}
              onBlur={() => setFocused((f) => ({ ...f, email: false }))}
              type="email"
              name="email"
              placeholder="you@email.com"
              className={fieldClass("email")}
              required
              disabled={loading}
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-black">
              Message
            </label>
            <textarea
              id="message"
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              onFocus={() => setFocused((f) => ({ ...f, message: true }))}
              onBlur={() => setFocused((f) => ({ ...f, message: false }))}
              name="message"
              placeholder="Tell me a bit about the role, project, or idea you have in mind…"
              rows={5}
              className={fieldClass("message") + " resize-none"}
              required
              disabled={loading}
            />
          </div>

          {/* Button + status */}
          <div className="space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Get in touch"}
            </button>

            {status === "success" && (
              <p className="text-sm text-neutral-700">
                Sent! I’ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-600">
                {errorMsg || "Something went wrong."}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
