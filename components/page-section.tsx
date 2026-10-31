import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  id: string;
  title: string;
  className?: string;
  description?: string;
  eyebrow?: string;
  headingClassName?: string;
  headingLevel?: "h1" | "h2";
};

export const PageSection = ({
  children,
  id,
  title,
  className = "",
  description,
  eyebrow,
  headingClassName = "",
  headingLevel: Heading = "h2",
}: PageSectionProps) => {
  const titleId = `${id}-title`;

  return (
    <section
      className={`section-shell ${className}`}
      id={id}
      aria-labelledby={titleId}
    >
      <header className={`section-heading ${headingClassName}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Heading id={titleId}>{title}</Heading>
        {description && <p>{description}</p>}
      </header>
      {children}
    </section>
  );
};
