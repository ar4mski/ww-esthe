import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { TreatmentList } from "@/components/treatment-list";
import { createPageMetadata } from "@/data/page-metadata";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Makijaż permanentny, powiększanie ust i laser – Szczecin",
  description:
    "Makijaż permanentny, modelowanie ust i zabiegi medycyny estetycznej w Szczecinie. Poznaj przebieg zabiegów, przygotowanie i zalecenia pozabiegowe.",
  path: "/zabiegi",
});

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="Zabiegi stworzone z myślą o Tobie."
        description="Poznaj przebieg zabiegów, przygotowanie, przeciwwskazania oraz zalecenia pozabiegowe."
        image="/images/heroes/treatments/mobile.jpg"
        desktopImage="/images/heroes/treatments/desktop.jpg"
        video="/video/IMG_4309.MP4"
        videoPoster="/images/heroes/treatments/video-poster.jpg"
        blendVideoOnDesktop
        imageAlt="Portret klientki związany z naturalną estetyką zabiegów"
        cta={{ label: "Umów konsultację", href: siteConfig.bookingUrl }}
      />
      <div className="section-shell">
        <TreatmentList />
      </div>
    </>
  );
}
