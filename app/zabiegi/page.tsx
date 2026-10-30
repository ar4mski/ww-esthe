import { PageHero } from "@/components/page-hero";
import { TreatmentList } from "@/components/treatment-list";
import { siteConfig } from "@/data/site-config";

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferta"
        title="Zabiegi stworzone z myślą o Tobie."
        description="Poznaj przebieg zabiegów, przygotowanie, przeciwwskazania oraz zalecenia pozabiegowe."
        image="/images/heroes/treatments/mobile.jpg"
        desktopImage="/images/heroes/treatments/desktop.jpg"
        video="/video/IMG_4309.MP4"
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
