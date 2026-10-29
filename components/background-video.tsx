"use client";

import { useEffect, useState } from "react";

type BackgroundVideoProps = {
  className: string;
  mobileOnly?: boolean;
  poster?: string;
  src: string;
};

export const BackgroundVideo = ({
  className,
  mobileOnly = false,
  poster,
  src,
}: BackgroundVideoProps) => {
  const [shouldAutoplay, setShouldAutoplay] = useState<boolean | null>(null);

  useEffect(() => {
    const viewportQuery = window.matchMedia("(max-width: 639px)");
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );
    const updateAutoplay = () =>
      setShouldAutoplay(
        motionQuery.matches && (!mobileOnly || viewportQuery.matches),
      );

    updateAutoplay();
    viewportQuery.addEventListener("change", updateAutoplay);
    motionQuery.addEventListener("change", updateAutoplay);

    return () => {
      viewportQuery.removeEventListener("change", updateAutoplay);
      motionQuery.removeEventListener("change", updateAutoplay);
    };
  }, [mobileOnly]);

  if (!shouldAutoplay) {
    return null;
  }

  return (
    <video
      aria-hidden="true"
      autoPlay
      className={className}
      loop
      muted
      playsInline
      poster={poster}
      preload="none"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
