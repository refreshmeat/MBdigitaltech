"use client";

import { ReactNode } from "react";

export const WHATSAPP_NUMBER = "5521985773165";
const DEFAULT_MESSAGE = "Olá! Encontrei a MB Digital Tech pelo site e gostaria de conversar sobre um projeto.";

type Props = {
  source: "header" | "hero" | "services" | "projects" | "footer" | "floating" | "mobile" | "quote";
  className?: string;
  children: ReactNode;
  message?: string;
  title?: string;
  label?: string;
};

export default function WhatsAppLink({
  source,
  className,
  children,
  message = DEFAULT_MESSAGE,
  title,
  label,
}: Props) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const recordClick = () => {
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          "/api/cta",
          new Blob([JSON.stringify({ source })], { type: "application/json" }),
        );
      }
    } catch {
      // O contato nunca depende da telemetria.
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={recordClick}
      title={title}
      aria-label={label}
    >
      {children}
    </a>
  );
}
