import { getBlogPostPath, type BlogPost } from "./blog";
import { siteConfig } from "./site-config";
import {
  getTreatmentImage,
  treatments,
  type Treatment,
} from "./treatments";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

const toAbsoluteUrl = (path: string) =>
  new URL(path, siteConfig.siteUrl).toString();

const businessId = toAbsoluteUrl("/#business");
const logoUrl = toAbsoluteUrl("/images/branding/icon-512.png");

// Treatment prices are display strings: "800 zł", "350-600 zł", "od 200 zł".
const parsePrices = (price: string) => (price.match(/\d+/g) ?? []).map(Number);

const getPriceRange = () => {
  const prices = treatments.flatMap(({ price }) => parsePrices(price));

  return `${Math.min(...prices)}-${Math.max(...prices)} zł`;
};

const getPriceSpecification = (price: string) => {
  const [first, second] = parsePrices(price);
  const isOpenEnded = price.startsWith("od ");

  return {
    "@type": "PriceSpecification",
    priceCurrency: "PLN",
    ...(second === undefined && !isOpenEnded
      ? { price: first }
      : { minPrice: first, maxPrice: second }),
  };
};

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

// Tells Google the site name to show above the title in search results.
export const getWebSiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.businessName,
  url: siteConfig.siteUrl,
  inLanguage: siteConfig.locale,
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
    logo: logoUrl,
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
    geo: {
      "@type": "GeoCoordinates",
      ...siteConfig.address.geo,
    },
    priceRange: getPriceRange(),
    hasMap: siteConfig.address.mapsUrl,
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
};

export const getBlogPostingJsonLd = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.seoDescription ?? post.description,
  image: toAbsoluteUrl(post.coverImage),
  datePublished: post.date,
  dateModified: post.updatedDate ?? post.date,
  inLanguage: siteConfig.locale,
  articleSection: post.category.label,
  keywords: post.tags.length > 0 ? post.tags.join(", ") : undefined,
  mainEntityOfPage: toAbsoluteUrl(getBlogPostPath(post.slug)),
  author: post.author
    ? { "@type": "Person", name: post.author }
    : { "@type": "Organization", name: siteConfig.businessName },
  publisher: {
    "@type": "Organization",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    logo: { "@type": "ImageObject", url: logoUrl },
  },
});

export const getTreatmentJsonLd = (treatment: Treatment) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: treatment.title,
  description: treatment.shortDescription,
  url: toAbsoluteUrl(`/zabiegi/${treatment.slug}`),
  image: toAbsoluteUrl(getTreatmentImage(treatment.slug)),
  provider: { "@id": businessId },
  areaServed: { "@type": "City", name: "Szczecin" },
  offers: {
    "@type": "Offer",
    priceCurrency: "PLN",
    priceSpecification: getPriceSpecification(treatment.price),
  },
});
