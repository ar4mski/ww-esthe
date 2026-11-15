"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

import styles from "./address-section.module.css";

type MapEmbedProps = {
  src: string;
  title: string;
  mapsUrl: string;
};

// The Google Maps embed pulls over 1 MB of scripts and sets Google cookies, so
// it loads only after the visitor asks for it.
export const MapEmbed = ({ src, title, mapsUrl }: MapEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return (
      <iframe
        ref={(node) => node?.focus()}
        src={src}
        title={title}
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className={styles.mapFacade}>
      <span className={styles.mapBadge}>
        <MapPin className="icon" aria-hidden="true" />
      </span>
      <p>Mapa wczyta się z Google Maps dopiero po kliknięciu.</p>
      <div className={styles.mapActions}>
        <button
          className="button button-outline button-outline-beige"
          type="button"
          onClick={() => setIsLoaded(true)}
        >
          Pokaż mapę
        </button>
        <a
          className="button button-outline-secondary"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Otwórz w Google Maps
        </a>
      </div>
    </div>
  );
};
