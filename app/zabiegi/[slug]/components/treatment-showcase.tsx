import Link from "next/link";

import { GalleryPreview } from "@/components/gallery-grid/gallery-preview";
import type { TreatmentShowcase as TreatmentShowcaseData } from "@/data/treatment-showcase";

type TreatmentShowcaseProps = {
  showcase: TreatmentShowcaseData;
  galleryHref?: string;
};

export const TreatmentShowcase = ({
  showcase: { photos },
  galleryHref,
}: TreatmentShowcaseProps) => (
  <>
    <GalleryPreview photos={photos} />
    {galleryHref ? (
      <Link className="text-link" href={galleryHref}>
        Zobacz więcej
      </Link>
    ) : null}
  </>
);
