import { GalleryPreview } from "@/components/gallery-grid/gallery-preview";
import { PageSection } from "@/components/page-section";
import { officeGallery, officeGalleryContent } from "@/data/contact";

import styles from "./gallery-section.module.css";

export const GallerySection = () => (
  <PageSection
    className={styles.gallerySection}
    headingClassName={styles.galleryHeading}
    title={officeGalleryContent.title}
    description={officeGalleryContent.description}
    id="gabinet"
  >
    <GalleryPreview photos={officeGallery} />
  </PageSection>
);
