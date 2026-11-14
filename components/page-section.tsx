import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  id: string;
  title: string;
  action?: ReactNode;
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
  action,
  className = "",
  description,
  eyebrow,
  headingClassName = "",
  headingLevel: Heading = "h2",
}: PageSectionProps) => {
  const titleId = `${id}-title`;
  const header = (
    <header className={`section-heading ${headingClassName}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading id={titleId}>{title}</Heading>
      {description && <p>{description}</p>}
    </header>
  );

  return (
    <section
      className={`section-shell ${className}`}
      id={id}
      aria-labelledby={titleId}
    >
      {action ? (
        <div className="section-heading-row">
          {header}
          {action}
        </div>
      ) : (
        header
      )}
      {children}
    </section>
  );
};
