"use client";

import Link from "next/link";

import { StatusPage } from "@/components/status-page";

type ErrorPageProps = {
  retry: () => void;
};

export default function ErrorPage({ retry }: ErrorPageProps) {
  return (
    <StatusPage
      eyebrow="Błąd"
      title="Coś poszło nie tak."
      description="Spróbuj ponownie za chwilę. Jeśli problem się powtarza, skontaktuj się z nami."
    >
      <button
        className="button button-outline button-outline-beige"
        type="button"
        onClick={() => retry()}
      >
        Spróbuj ponownie
      </button>
      <Link
        className="button button-outline button-outline-secondary"
        href="/kontakt"
      >
        Kontakt
      </Link>
    </StatusPage>
  );
}
