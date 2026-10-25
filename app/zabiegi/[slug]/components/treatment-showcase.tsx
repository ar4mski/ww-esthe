import Link from "next/link";

import type { TreatmentShowcase as TreatmentShowcaseData } from "@/data/treatment-showcase";
import { TreatmentShowcaseGallery } from "./treatment-showcase-gallery";
import styles from "./treatment-showcase.module.css";

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
      <Link className={styles.galleryLink} href={galleryHref}>
        Zobacz więcej
      </Link>
    ) : null}
  </>
);
