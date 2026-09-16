"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "error" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const first = String(data.get("firstName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const note = String(data.get("message") || "").trim();

    if (!first || !email) {
      setStatus("error");
      setMessage("Please add your first name and email so we can reply.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (note.length > 2000) {
      setStatus("error");
      setMessage("Please keep your message under 2000 characters.");
      return;
    }

    setStatus("success");
    setMessage("Thanks. A teammate from UuuPayUuu will get back to you shortly.");
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[320px] flex-col justify-center rounded-3xl bg-white px-8 py-10 shadow-[0_16px_40px_rgba(28,18,12,0.08)]">
        <h2 className="font-display text-[28px] font-semibold text-ink">Message sent</h2>
        <p className="mt-4 max-w-sm text-sm leading-6 text-heading">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl bg-white px-8 py-10 shadow-[0_16px_40px_rgba(28,18,12,0.08)]"
      aria-label="Contact Form"
    >
      <h2 className="font-display text-[28px] font-semibold text-ink">Contact us</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <Field label="First name" name="firstName" required autoComplete="given-name" />
        <Field label="Last name" name="lastName" autoComplete="family-name" />
      </div>
      <div className="mt-8">
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="mt-8">
        <label className="block text-sm text-heading" htmlFor="message">
          Write a message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full resize-y border-0 border-b border-ink/30 bg-transparent py-2 text-ink outline-none focus:border-accent"
        />
      </div>
      {status === "error" ? (
        <p className="mt-4 text-sm text-[#a12628]" role="alert">
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-8 inline-flex h-11 w-full max-w-[160px] items-center justify-center rounded-full bg-accent text-sm font-semibold text-white transition-colors duration-300 hover:bg-ink active:scale-[0.98]"
      >
        Submit
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-heading" htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full border-0 border-b border-ink/30 bg-transparent py-2 text-ink outline-none focus:border-accent"
      />
    </div>
  );
}
