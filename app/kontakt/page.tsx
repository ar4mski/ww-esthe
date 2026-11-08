import type { Metadata } from "next";

import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { contactFaqs } from "@/data/faq";
import { createPageMetadata } from "@/data/page-metadata";
import { siteConfig } from "@/data/site-config";
import { getLocalBusinessJsonLd } from "@/data/structured-data";

import { AboutTeaser } from "./components/about-teaser";
import { AddressSection } from "./components/address-section";
import { GallerySection } from "./components/gallery-section";

export const metadata: Metadata = createPageMetadata({
  title: `Kontakt – ${siteConfig.address.lines[0]}, Szczecin`,
  description: `Umów wizytę w gabinecie ${siteConfig.businessName} w Szczecinie (${siteConfig.address.lines[0]}): mapa dojazdu, godziny otwarcia, telefon ${siteConfig.phone.display} i komunikatory.`,
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getLocalBusinessJsonLd()} />
      <AddressSection />
      <GallerySection />
      <FaqSection
        faqs={contactFaqs}
        id="contact-faq"
        title="Najczęstsze pytania"
        className="section-tinted"
      />
      <AboutTeaser />
    </>
  );
}
