import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { legalLastUpdated, termsSections } from "@/data/legal-content";
import { createPageMetadata } from "@/data/page-metadata";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Regulamin",
  description: `Zasady umawiania i realizacji zabiegów w ${siteConfig.businessName}.`,
  path: siteConfig.legal.termsPath,
});

export default function TermsPage() {
  return (
    <LegalDocument
      title="Regulamin"
      lastUpdated={legalLastUpdated}
      sections={termsSections}
    />
  );
}
