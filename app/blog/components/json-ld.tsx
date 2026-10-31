type JsonLdProps = {
  data: Record<string, unknown>;
};

// Replacing "<" prevents a string inside the data from closing the script tag.
export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    }}
  />
);
