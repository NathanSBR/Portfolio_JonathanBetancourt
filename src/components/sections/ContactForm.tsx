"use client";

import { FormEvent, useId, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

type FormStatus = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const { copy } = useLanguage();
  const formId = useId();
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState("");
  const isLoading = status === "loading";

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: FieldErrors = {};
    if (name.length < 2) nextErrors.name = copy.nameError;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = copy.emailError;
    if (message.length < 10) nextErrors.message = copy.messageError;
    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setSubmitError(copy.validationError);
      return;
    }
    if (!accessKey) {
      setStatus("error");
      setSubmitError(copy.formConfigPending);
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          botcheck: String(formData.get("botcheck") ?? ""),
          subject: `Nuevo mensaje del portafolio de ${name}`,
          from_name: "Portafolio de Jonathan Betancourt",
        }),
      });
      const result = await response.json() as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setSubmitError(copy.sendError);
    }
  }

  return <form className="contact-form" onSubmit={submit} noValidate aria-busy={isLoading}>
    <label className="honeypot" aria-hidden="true">No completar este campo<input name="botcheck" tabIndex={-1} autoComplete="off" /></label>
    <div className="form-row"><label htmlFor={`${formId}-name`}>{copy.name}<input id={`${formId}-name`} name="name" required minLength={2} autoComplete="name" placeholder={copy.namePlaceholder} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${formId}-name-error` : undefined} onChange={() => status !== "idle" && setStatus("idle")} />{errors.name && <span className="field-error" id={`${formId}-name-error`}>{errors.name}</span>}</label><label htmlFor={`${formId}-email`}>{copy.email}<input id={`${formId}-email`} name="email" type="email" required autoComplete="email" placeholder={copy.emailPlaceholder} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${formId}-email-error` : undefined} onChange={() => status !== "idle" && setStatus("idle")} />{errors.email && <span className="field-error" id={`${formId}-email-error`}>{errors.email}</span>}</label></div>
    <label htmlFor={`${formId}-message`}>{copy.message}<textarea id={`${formId}-message`} name="message" required minLength={10} rows={5} placeholder={copy.messagePlaceholder} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${formId}-message-error` : undefined} onChange={() => status !== "idle" && setStatus("idle")} />{errors.message && <span className="field-error" id={`${formId}-message-error`}>{errors.message}</span>}</label>
    <div className="form-footer"><button className="button button-primary" type="submit" disabled={isLoading}>{isLoading ? copy.validating : copy.validateForm} <span aria-hidden="true">↗</span></button>{status === "success" && <p className="form-status success" role="status">{copy.validationSuccess}</p>}{status === "error" && <p className="form-status error" role="alert">{submitError}</p>}</div>
  </form>;
}
