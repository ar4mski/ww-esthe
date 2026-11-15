import { Cormorant_Garamond } from "next/font/google";

import { aboutStats } from "@/data/about";

import styles from "./about-stats.module.css";

// Loaded here, not in the root layout, so it is preloaded only on pages that
// render the stats. Only latin is preloaded: the values contain no Polish letters.
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "500",
});

type AboutStatsProps = {
  className?: string;
};

export const AboutStats = ({ className = "" }: AboutStatsProps) => (
  <dl className={`${styles.stats} ${cormorantGaramond.variable} ${className}`}>
    {aboutStats.map(({ value, label }) => (
      <div key={value}>
        <dt>{value}</dt>
        <dd>{label}</dd>
      </div>
    ))}
  </dl>
);
