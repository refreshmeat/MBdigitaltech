"use client";

import { FormEvent, useState } from "react";
import styles from "./avaliar.module.css";

type Status = "idle" | "sending" | "success" | "error" | "not-configured";

export default function ReviewForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [rating, setRating] = useState(5);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      company: String(form.get("company") || ""),
      project: String(form.get("project") || ""),
      email: String(form.get("email") || ""),
      rating,
      review: String(form.get("review") || ""),
      consent: form.get("consent") === "on",
      website: String(form.get("website") || ""),
    };

    try {
      const response = await fetch("/api/avaliacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        event.currentTarget.reset();
        setRating(5);
        return;
      }

      if (response.status === 503 && data.code === "not_configured") {
        setStatus("not-configured");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.twoColumns}>
        <label>
          Seu nome
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Empresa ou projeto
          <input name="company" autoComplete="organization" />
        </label>
        <label>
          E-mail usado no projeto
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Projeto realizado
          <input name="project" placeholder="Site, sistema, automação..." required />
        </label>
      </div>

      <fieldset className={styles.rating}>
        <legend>Sua nota</legend>
        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              type="button"
              key={value}
              className={value <= rating ? styles.activeStar : ""}
              onClick={() => setRating(value)}
              aria-label={`${value} estrela${value > 1 ? "s" : ""}`}
            >
              ★
            </button>
          ))}
        </div>
      </fieldset>

      <label>
        Conte como foi trabalhar com a MB Digital Tech
        <textarea name="review" rows={7} minLength={20} required />
      </label>

      <label className={styles.consent}>
        <input name="consent" type="checkbox" required />
        <span>Autorizo a publicação deste depoimento após verificação e revisão de dados pessoais.</span>
      </label>

      <label className={styles.honeypot} aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      {status === "success" && (
        <p className={styles.success} role="status">Avaliação enviada. Ela será verificada antes de aparecer no site.</p>
      )}
      {status === "error" && (
        <p className={styles.error} role="alert">Não foi possível enviar agora. Tente novamente mais tarde.</p>
      )}
      {status === "not-configured" && (
        <p className={styles.error} role="alert">O envio online ainda não foi configurado no ambiente de produção.</p>
      )}

      <button className={styles.submit} disabled={status === "sending"} type="submit">
        {status === "sending" ? "Enviando..." : "Enviar avaliação ↗"}
      </button>
    </form>
  );
}
