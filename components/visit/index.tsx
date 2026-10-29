"use client";

import { useEffect, useRef, useState } from "react";

import { useSwipeGesture } from "@/hooks/use-swipe-gesture";

import { VisitStep } from "./visit-step";
import { visitSteps } from "./visit-steps";
import { VisitTrack } from "./visit-track";
import styles from "./visit.module.css";

export const Visit = () => {
  const [activeStep, setActiveStep] = useState(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const previousActiveStepRef = useRef(activeStep);

  useEffect(() => {
    if (previousActiveStepRef.current !== activeStep) {
      const activeSlide = carouselTrackRef.current?.children[activeStep];
      const nextStepButton = activeSlide?.querySelector("button");

      if (nextStepButton instanceof HTMLElement) {
        nextStepButton.focus({ preventScroll: true });
      }

      previousActiveStepRef.current = activeStep;
    }
  }, [activeStep]);

  const moveToStep = (direction: "next" | "previous") => {
    setActiveStep((currentStep) => {
      if (direction === "next") {
        return currentStep === visitSteps.length - 1 ? 0 : currentStep + 1;
      }

      return currentStep === 0 ? visitSteps.length - 1 : currentStep - 1;
    });
  };

  const { onPointerDown, onPointerUp, onPointerCancel } = useSwipeGesture({
    onSwipe: moveToStep,
    capturePointer: true,
    ignoreInteractiveElements: true,
  });

  return (
    <div className={styles.visitTimeline}>
      <VisitTrack activeStep={activeStep} onSelectStep={setActiveStep} />
      <div
        className={styles.carouselViewport}
        onPointerCancel={onPointerCancel}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div
          className={styles.carouselTrack}
          ref={carouselTrackRef}
          style={{ transform: `translateX(-${activeStep * 100}%)` }}
        >
          {visitSteps.map((step, index) => (
            <VisitStep
              isLastStep={activeStep === visitSteps.length - 1}
              isActive={index === activeStep}
              key={step.number}
              onNext={() => moveToStep("next")}
              step={step}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
