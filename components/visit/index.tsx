import { visitSteps } from "@/data/visit-steps";

import { VisitStep } from "./visit-step";
import styles from "./visit.module.css";

export const Visit = () => (
  <ol className={styles.visitSteps}>
    {visitSteps.map((step) => (
      <VisitStep key={step.number} step={step} />
    ))}
  </ol>
);
