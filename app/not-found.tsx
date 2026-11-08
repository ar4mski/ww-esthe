import type { Metadata } from "next";
import Link from "next/link";

import { StatusPage } from "@/components/status-page";

export const metadata: Metadata = {
  title: "Nie znaleziono strony",
};

export default function NotFound() {
  return (
    <StatusPage
      eyebrow="404"
      title="Nie znaleźliśmy tej strony."
      description="Adres mógł się zmienić albo strona już nie istnieje. Wróć na stronę główną lub zobacz nasze zabiegi."
    >
      <Link className="button button-outline button-outline-beige" href="/">
        Strona główna
      </Link>
      <Link
        className="button button-outline button-outline-secondary"
        href="/zabiegi"
      >
        Zobacz zabiegi
      </Link>
    </StatusPage>
  );
}
