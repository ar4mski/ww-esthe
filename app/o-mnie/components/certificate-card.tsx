import { Maximize2 } from "lucide-react";
import Image from "next/image";

import type { Certificate } from "@/data/certificates";

import styles from "./certificate-list.module.css";

type CertificateCardProps = {
  certificate: Certificate;
  categoryLabel: string;
  onOpen: (id: string) => void;
};

export const CertificateCard = ({
  certificate: { id, title, alt, organizer, year, image },
  categoryLabel,
  onOpen,
}: CertificateCardProps) => {
  const meta = [organizer, year].filter(Boolean).join(" · ");

  return (
    <li className={styles.card}>
      {image ? (
        <button
          className={styles.tile}
          type="button"
          aria-label={`Powiększ certyfikat: ${title}`}
          onClick={() => onOpen(id)}
        >
          <span className={styles.photo}>
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 128px"
            />
          </span>
          <span className={styles.zoomBadge} aria-hidden="true">
            <Maximize2 className="icon" />
          </span>
        </button>
      ) : (
        // PLACEHOLDER until the client sends the certificate photo.
        <div className={styles.tile} aria-hidden="true">
          <span className={styles.placeholderSheet} />
        </div>
      )}
      <div className={styles.details}>
        <span className={styles.category}>{categoryLabel}</span>
        <h3>{title}</h3>
        {meta ? <p className={styles.meta}>{meta}</p> : null}
      </div>
    </li>
  );
};
