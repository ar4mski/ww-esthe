import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { createPageMetadata } from "@/data/page-metadata";
import { getLocalBusinessJsonLd } from "@/data/structured-data";

import { AboutTeaser } from "./components/about-teaser";
import { AddressSection } from "./components/address-section";
import { ContactSection } from "./components/contact-section";
import { FaqSection } from "./components/faq-section";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt | WW - ESTHE",
  description:
    "Skontaktuj się z gabinetem WW-Esthe w Szczecinie – adres, mapa dojazdu, godziny otwarcia i komunikatory.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getLocalBusinessJsonLd()} />
      <AddressSection />
      <ContactSection />
      <FaqSection />
      <AboutTeaser />
    </>
  );
}
