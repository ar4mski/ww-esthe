import type { VisitStepData } from "@/data/visit-steps";

import styles from "./visit.module.css";

interface VisitStepProps {
  step: VisitStepData;
}

export const VisitStep = ({ step }: VisitStepProps) => (
  <li className={styles.visitStep}>
    <div className={styles.stepMarker} aria-hidden="true">
      <span className={styles.stepNumber}>{step.number}</span>
      <span className={styles.stepLine} />
    </div>
    <div className={styles.stepContent}>
      <p className={styles.stepSubtitle}>{step.subtitle}</p>
      <h3>{step.title}</h3>
      {step.shortText === step.text ? (
        <p className={styles.stepText}>{step.text}</p>
      ) : (
        <>
          <p className={`${styles.stepText} ${styles.stepTextShort}`}>
            {step.shortText}
          </p>
          <p className={`${styles.stepText} ${styles.stepTextFull}`}>
            {step.text}
          </p>
        </>
      )}
    </div>
  </li>
);
