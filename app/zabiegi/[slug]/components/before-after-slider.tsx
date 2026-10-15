"use client";

import { ArrowLeftRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type PointerEvent, type TouchEvent } from "react";

import styles from "./before-after-slider.module.css";

type BeforeAfterSliderProps = {
  afterAlt: string;
  afterSrc: string;
  beforeAlt: string;
  beforeSrc: string;
  composite?: boolean;
};

export const BeforeAfterSlider = ({
  afterAlt,
  afterSrc,
  beforeAlt,
  beforeSrc,
  composite = false,
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const [hiddenLabels, setHiddenLabels] = useState({
    before: false,
    after: false,
  });
  const isDragging = useRef(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const beforeLabelRef = useRef<HTMLSpanElement>(null);
  const afterLabelRef = useRef<HTMLSpanElement>(null);

  const setPositionFromPercent = (percent: number, frame: HTMLDivElement) => {
    const nextPosition = Math.min(100, Math.max(0, percent));
    const { left, width } = frame.getBoundingClientRect();
    const dividerX = left + (width * nextPosition) / 100;
    const beforeBounds = beforeLabelRef.current?.getBoundingClientRect();
    const afterBounds = afterLabelRef.current?.getBoundingClientRect();

    setPosition(nextPosition);
    setHiddenLabels({
      before: beforeBounds ? dividerX <= beforeBounds.right : false,
      after: afterBounds ? dividerX >= afterBounds.left : false,
    });
  };

  const updatePosition = (clientX: number, frame: HTMLDivElement) => {
    const { left, width } = frame.getBoundingClientRect();
    setPositionFromPercent(((clientX - left) / width) * 100, frame);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX, event.currentTarget);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updatePosition(event.clientX, event.currentTarget);
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    updatePosition(event.touches[0].clientX, event.currentTarget);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updatePosition(event.touches[0].clientX, event.currentTarget);
    }
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <figure className={styles.root}>
      <div
        ref={frameRef}
        className={`${styles.frame} ${composite ? styles.compositeFrame : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
        onTouchCancel={stopDragging}
      >
        <Image
          className={`${styles.image} ${composite ? styles.compositeBefore : ""}`}
          src={beforeSrc}
          alt={beforeAlt}
          fill={!composite}
          width={composite ? 2000 : undefined}
          height={composite ? 1000 : undefined}
          draggable={false}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div
          className={styles.afterLayer}
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <Image
            className={`${styles.image} ${composite ? styles.compositeAfter : ""}`}
            src={afterSrc}
            alt={afterAlt}
            fill={!composite}
            width={composite ? 2000 : undefined}
            height={composite ? 1000 : undefined}
            draggable={false}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <span
          ref={beforeLabelRef}
          className={`${styles.label} ${styles.labelBefore} ${hiddenLabels.before ? styles.labelHidden : ""}`}
          aria-hidden
        >
          Przed
        </span>
        <span
          ref={afterLabelRef}
          className={`${styles.label} ${styles.labelAfter} ${hiddenLabels.after ? styles.labelHidden : ""}`}
          aria-hidden
        >
          Po
        </span>

        <input
          className={styles.range}
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={position}
          onChange={(event) => {
            if (frameRef.current) {
              setPositionFromPercent(
                Number(event.target.value),
                frameRef.current,
              );
            }
          }}
          aria-label="Porównaj zdjęcia przed i po zabiegu"
        />
        <div className={styles.divider} style={{ left: `${position}%` }}>
          <span className={styles.handle}>
            <ArrowLeftRight size={16} aria-hidden />
          </span>
        </div>
      </div>
      <figcaption className={styles.caption}>
        Przesuń suwak, aby zobaczyć różnicę
      </figcaption>
    </figure>
  );
};
