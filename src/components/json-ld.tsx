interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Component for rendering JSON-LD structured data
 * Place this in the <head> of your pages via Next.js metadata or directly in layouts
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Combines multiple JSON-LD schemas into a single script tag
 */
export function JsonLdMultiple({ schemas }: { schemas: Record<string, unknown>[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
