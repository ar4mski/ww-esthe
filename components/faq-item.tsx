import styles from "./faq-item.module.css";

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export function FaqItem({ question, answer, defaultOpen }: FaqItemProps) {
  return (
    <details className={styles.item} open={defaultOpen}>
      <summary>{question}</summary>
      <p className={styles.answer}>{answer}</p>
    </details>
  );
}