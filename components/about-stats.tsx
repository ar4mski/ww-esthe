import { aboutStats } from "@/data/about";

import styles from "./about-stats.module.css";

type AboutStatsProps = {
  className?: string;
};

export const AboutStats = ({ className = "" }: AboutStatsProps) => (
  <dl className={`${styles.stats} ${className}`}>
    {aboutStats.map(({ value, label }) => (
      <div key={value}>
        <dt>{value}</dt>
        <dd>{label}</dd>
      </div>
    ))}
  </dl>
);
