import { Banknote, Clock, HeartPulse, Layers } from "lucide-react";

type TreatmentFactsProps = {
  className: string;
  duration: string;
  id?: string;
  price: string;
  recoveryTime: string;
  sessionCount: string;
};

export const TreatmentFacts = ({
  className,
  duration,
  id,
  price,
  recoveryTime,
  sessionCount,
}: TreatmentFactsProps) => (
  <dl
    id={id}
    className={className}
    aria-label="Podstawowe informacje o zabiegu"
  >
    <div>
      <dt>
        <Banknote aria-hidden="true" />
        Cena
      </dt>
      <dd>{price}</dd>
    </div>
    <div>
      <dt>
        <Clock aria-hidden="true" />
        Czas trwania
      </dt>
      <dd>{duration}</dd>
    </div>
    <div>
      <dt>
        <HeartPulse aria-hidden="true" />
        Rekonwalescencja
      </dt>
      <dd>{recoveryTime}</dd>
    </div>
    <div>
      <dt>
        <Layers aria-hidden="true" />
        Liczba zabiegów
      </dt>
      <dd>{sessionCount}</dd>
    </div>
  </dl>
);
