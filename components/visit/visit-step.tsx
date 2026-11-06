import { ArrowRight, RotateCcw } from "lucide-react";

import type { VisitStepData } from "./visit-steps";
import styles from "./visit.module.css";

interface VisitStepProps {
  isActive: boolean;
  isLastStep: boolean;
  onNext: () => void;
  step: VisitStepData;
}

export const VisitStep = ({
  isActive,
  isLastStep,
  onNext,
  step,
}: VisitStepProps) => {
  const Icon = step.icon;

  return (
    <article
      className={styles.visitSlide}
      aria-hidden={!isActive}
      inert={!isActive}
    >
      <div className={styles.visitSlideContent}>
        <div className={styles.stepIcon} aria-hidden="true">
          <Icon className="icon" />
        </div>
        <p className={styles.stepSubtitle}>{step.subtitle}</p>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
      <div className={styles.visitNavigation}>
        <button
          className={styles.nextStepButton}
          type="button"
          onClick={onNext}
        >
          {isLastStep ? "Wróć do początku" : "Kolejny krok"}
          {isLastStep ? (
            <RotateCcw className="icon" aria-hidden="true" />
          ) : (
            <ArrowRight className="icon" aria-hidden="true" />
          )}
        </button>
      </div>
    </article>
  );
};
