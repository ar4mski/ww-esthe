import type { Metadata } from "next";

import { FaqItem } from "@/components/faq-item";
import { PageSection } from "@/components/page-section";
import { contactFaqs } from "@/data/faq";
import { createPageMetadata } from "@/data/page-metadata";

import { AddressSection } from "./components/address-section";
import { BusinessInfo } from "./components/business-info";
import { ContactSection } from "./components/contact-section";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt | WW - ESTHE",
  description:
    "Skontaktuj się z gabinetem WW-Esthe w Szczecinie – adres, mapa dojazdu, godziny otwarcia i komunikatory.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <AddressSection />
      <ContactSection />
      <PageSection
        className="section-tinted"
        id="contact-faq"
        title="Najczęstsze pytania"
      >
        {contactFaqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </PageSection>
      <BusinessInfo />
    </>
  );
}
