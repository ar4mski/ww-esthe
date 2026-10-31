import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { legalLastUpdated, privacyPolicySections } from "@/data/legal-content";
import { createPageMetadata } from "@/data/page-metadata";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Polityka prywatności | WW - ESTHE",
  description:
    "Zasady przetwarzania danych osobowych oraz plików cookie na stronie WW - ESTHE.",
  path: siteConfig.legal.privacyPolicyPath,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Polityka prywatności"
      lastUpdated={legalLastUpdated}
      sections={privacyPolicySections}
    />
  );
}
