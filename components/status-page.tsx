import type { ReactNode } from "react";

import styles from "./status-page.module.css";

type StatusPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export const StatusPage = ({
  eyebrow,
  title,
  description,
  children,
}: StatusPageProps) => (
  <section className="section-shell" aria-labelledby="status-title">
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="status-title">{title}</h1>
      <p>{description}</p>
    </header>
    <div className={styles.actions}>{children}</div>
  </section>
);
