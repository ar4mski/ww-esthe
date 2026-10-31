"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import styles from "./business-info.module.css";

type CopyButtonProps = {
  label: string;
  text: string;
};

export const CopyButton = ({ label, text }: CopyButtonProps) => {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <>
      <button
        className={styles.copyButton}
        onClick={copy}
        title={`Kopiuj ${label}`}
        type="button"
        aria-label={`Kopiuj ${label}`}
      >
        {status === "copied" ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <span className={styles.copyStatus} role="status" aria-live="polite">
        {status === "copied" && `Skopiowano: ${label}`}
        {status === "failed" && `Nie udało się skopiować: ${label}`}
      </span>
    </>
  );
};
