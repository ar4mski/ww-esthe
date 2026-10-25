import Link from "next/link";

import type { TreatmentShowcase as TreatmentShowcaseData } from "@/data/treatment-showcase";
import { TreatmentShowcaseGallery } from "./treatment-showcase-gallery";

type TreatmentShowcaseProps = {
  showcase: TreatmentShowcaseData;
  galleryHref?: string;
};

export const TreatmentShowcase = ({
  showcase: { photos },
  galleryHref,
}: TreatmentShowcaseProps) => (
  <>
    <TreatmentShowcaseGallery photos={photos} />
    {galleryHref ? (
      <Link className="text-link" href={galleryHref}>
        Zobacz więcej
      </Link>
    ) : null}
  </>
);
