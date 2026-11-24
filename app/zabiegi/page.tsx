import type { Metadata } from "next";

import { BookingButton } from "@/components/cta-buttons";
import { PageHero } from "@/components/page-hero";
import { TreatmentCard } from "@/components/treatment-card";
import { createPageMetadata } from "@/data/page-metadata";
import { treatments } from "@/data/treatments";
import treatmentsVideoPoster from "@/public/images/heroes/treatments/video-poster.jpg";

export const metadata: Metadata = createPageMetadata({
  title: "Zabiegi: brwi, usta, laser, medycyna estetyczna – Szczecin",
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
        desktopImage="/images/heroes/treatments/desktop.jpg"
        video="/video/hero-treatments.mp4"
        videoPoster={treatmentsVideoPoster}
        blendVideoOnDesktop
        imageAlt="Portret klientki związany z naturalną estetyką zabiegów"
        actions={
          <>
            <BookingButton />
          </>
        }
      />
      <div className="section-shell">
        {treatments.map((treatment) => (
          <TreatmentCard key={treatment.slug} treatment={treatment} />
        ))}
      </div>
    </>
  );
}
