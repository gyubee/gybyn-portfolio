"use client";

import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { siteContact } from "@/config/site";
import { withBasePath } from "@/config/paths";

function buildMailto(name: string, email: string, message: string) {
  const subject = encodeURIComponent(`[Portfolio] Message from ${name}`);
  const body = encodeURIComponent(
    `From: ${name} <${email}>\n\n${message}`,
  );
  return `mailto:${siteContact.email}?subject=${subject}&body=${body}`;
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch(withBasePath("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        hint?: string;
      };

      if (res.ok && data.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      if (res.status === 503 && data.error === "NOT_CONFIGURED") {
        window.location.href = buildMailto(name, email, message);
        setStatus("idle");
        return;
      }

      setStatus("error");
      setErrorMessage(data.error ?? "Something went wrong. Try email below.");
    } catch {
      window.location.href = buildMailto(name, email, message);
      setStatus("idle");
    }
  }

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      {/* Form */}
      <div className="p-0 md:pr-4">
        <h4 className="mb-6 flex items-center gap-2 text-lg font-bold text-neutral-900 dark:text-neutral-50">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            <HiOutlineEnvelope className="h-5 w-5" aria-hidden />
          </span>
          Send a message
        </h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message…"
              className="w-full resize-y rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 w-full rounded-lg bg-indigo-600 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>
          <p className="sr-only" role="status" aria-live="polite">
            {status === "success" && "Message sent."}
            {status === "error" && errorMessage}
          </p>
          {status === "success" ? (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thanks — your message was sent.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errorMessage}
            </p>
          ) : null}
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            If email delivery is not configured, your mail app will open with a
            draft to {siteContact.email}.
          </p>
        </form>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-12 md:gap-14">
        <div className="p-0">
          <h4 className="mb-6 text-lg font-bold text-neutral-900 dark:text-neutral-50">
            Contact info
          </h4>
          <ul className="flex flex-col gap-8">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                <HiOutlineEnvelope className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Email
                </p>
                <a
                  href={`mailto:${siteContact.email}`}
                  className="mt-1 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  {siteContact.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                <HiOutlineMapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Location
                </p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  {siteContact.location}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-0">
          <p className="mb-4 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            Connect
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={siteContact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-600 transition hover:bg-neutral-100 hover:text-indigo-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-indigo-400"
              aria-label="GitHub profile"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            {siteContact.linkedin ? (
              <a
                href={siteContact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-neutral-600 transition hover:bg-neutral-100 hover:text-indigo-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-indigo-400"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            ) : null}
          </div>
          {!siteContact.linkedin ? (
            <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
              Add{" "}
              <code className="rounded bg-neutral-100 px-1 py-0.5 text-[0.7rem] dark:bg-neutral-800">
                NEXT_PUBLIC_LINKEDIN_URL
              </code>{" "}
              in <code className="rounded bg-neutral-100 px-1 py-0.5 text-[0.7rem] dark:bg-neutral-800">.env.local</code>{" "}
              to show LinkedIn.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
