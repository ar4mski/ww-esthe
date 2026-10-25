import type { LucideIcon } from "lucide-react";

type TreatmentFact = {
  icon: LucideIcon;
  label: string;
  value: string;
};

type TreatmentFactsProps = {
  className: string;
  facts: TreatmentFact[];
  id?: string;
  label?: string;
};

export const TreatmentFacts = ({
  className,
  facts,
  id,
  label = "Informacje o zabiegu",
}: TreatmentFactsProps) => (
  <dl id={id} className={className} aria-label={label}>
    {facts.map(({ icon: Icon, label: factLabel, value }) => (
      <div key={factLabel}>
        <dt>
          <Icon aria-hidden="true" />
          {factLabel}
        </dt>
        <dd>{value}</dd>
      </div>
    ))}
  </dl>
);
