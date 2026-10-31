import { siteConfig } from "./site-config";
import { getTreatmentImage, type Treatment } from "./treatments";

type BreadcrumbItem = {
  label: string;
  href: string;
};

const toAbsoluteUrl = (path: string) =>
  new URL(path, siteConfig.siteUrl).toString();

const businessId = toAbsoluteUrl("/#business");

export const getBreadcrumbJsonLd = (
  trail: readonly BreadcrumbItem[],
  currentPage: string,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    ...trail.map(({ label, href }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      item: toAbsoluteUrl(href),
    })),
    {
      "@type": "ListItem",
      position: trail.length + 1,
      name: currentPage,
    },
  ],
});

export const getLocalBusinessJsonLd = () => {
  const [streetAddress, postalCodeAndCity] = siteConfig.address.lines;
  const [postalCode, ...cityParts] = postalCodeAndCity.split(" ");

  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": businessId,
    name: siteConfig.businessName,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    image: toAbsoluteUrl(siteConfig.defaultOgImage.url),
    telephone: siteConfig.phone.href.replace("tel:", ""),
    email: siteConfig.email.display,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      postalCode,
      addressLocality: cityParts.join(" "),
      addressCountry: "PL",
    },
    openingHours: siteConfig.openingHours.map(
      ({ schemaDays, hours }) => `${schemaDays} ${hours.replaceAll(" ", "")}`,
    ),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
};

export const getTreatmentJsonLd = (treatment: Treatment) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: treatment.title,
  description: treatment.shortDescription,
  url: toAbsoluteUrl(`/zabiegi/${treatment.slug}`),
  image: toAbsoluteUrl(getTreatmentImage(treatment.slug)),
  provider: { "@id": businessId },
  areaServed: { "@type": "City", name: "Szczecin" },
});
