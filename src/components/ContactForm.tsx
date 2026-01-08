"use client";

import { useState } from "react";

type Field = "reason" | "name" | "email" | "message";

export default function ContactForm() {
  const [values, setValues] = useState({
    reason: "recruiter",
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState<Partial<Record<Field, boolean>>>({});

  const isRecruiter = values.reason === "recruiter";

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

  return (
    <section className="w-full">
      <div className="mx-auto max-w-2xl rounded-3xl border-[4px] border-black bg-white p-8">
        <form className="space-y-6">
          {/* Reason */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">
              Reason for reaching out
            </label>
            <select
              value={values.reason}
              onChange={(e) =>
                setValues((v) => ({ ...v, reason: e.target.value }))
              }
              onFocus={() => setFocused((f) => ({ ...f, reason: true }))}
              onBlur={() => setFocused((f) => ({ ...f, reason: false }))}
              name="reason"
              required
              className={fieldClass("reason") + " appearance-none"}
              aria-label="Reason for reaching out"
            >
              <option value="recruiter">Full-time / Contract role (Recruiter)</option>
              <option value="freelance">Freelance project</option>
              <option value="collab">Collaboration</option>
              <option value="other">Other</option>
            </select>

            {/* Optional: small hint line */}
            <p className="text-sm text-neutral-600">
              Recruiters: a job link, location/time zone, and timeline help a lot.
            </p>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">Name</label>
            <input
              value={values.name}
              onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              onFocus={() => setFocused((f) => ({ ...f, name: true }))}
              onBlur={() => setFocused((f) => ({ ...f, name: false }))}
              type="text"
              name="name"
              placeholder="Your name"
              className={fieldClass("name")}
              required
            />
          </div>

          {/* Email (hidden for recruiters) */}
{!isRecruiter && (
  <div className="space-y-2">
    <label className="text-sm font-medium text-black">Email</label>
    <input
      value={values.email}
      onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
      onFocus={() => setFocused((f) => ({ ...f, email: true }))}
      onBlur={() => setFocused((f) => ({ ...f, email: false }))}
      type="email"
      name="email"
      placeholder="you@email.com"
      className={fieldClass("email")}
      required
    />
  </div>
)}


          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-black">Message</label>
            <textarea
              value={values.message}
              onChange={(e) =>
                setValues((v) => ({ ...v, message: e.target.value }))
              }
              onFocus={() => setFocused((f) => ({ ...f, message: true }))}
              onBlur={() => setFocused((f) => ({ ...f, message: false }))}
              name="message"
              placeholder="Tell me a bit about the role, project, or idea you have in mind…"
              rows={5}
              className={fieldClass("message") + " resize-none"}
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
          >
            Get in touch
          </button>
        </form>
      </div>
    </section>
  );
}
