import { siteConfig } from "@/data/site-config";

export type LinkClickEvent = {
  name: string;
  params: Record<string, string>;
};

const { bookingUrl, phone, email, social, address } = siteConfig;

// Order matters: the booking link points to Instagram (ig.me), so it must be
// matched before the generic social links.
const rules: { matches: (href: string) => boolean; event: LinkClickEvent }[] = [
  {
    matches: (href) => href.startsWith(bookingUrl),
    event: { name: "booking_click", params: { method: "instagram_dm" } },
  },
  {
    matches: (href) => href.startsWith("tel:") || href === phone.href,
    event: { name: "phone_click", params: {} },
  },
  {
    matches: (href) => href.startsWith("mailto:") || href === email.href,
    event: { name: "contact_click", params: { method: "email" } },
  },
  {
    matches: (href) => href.startsWith(social.whatsapp),
    event: { name: "contact_click", params: { method: "whatsapp" } },
  },
  {
    matches: (href) => href.startsWith(social.messenger),
    event: { name: "contact_click", params: { method: "messenger" } },
  },
  {
    matches: (href) => href.startsWith(social.instagram),
    event: { name: "social_click", params: { network: "instagram" } },
  },
  {
    matches: (href) => href.startsWith(social.facebook),
    event: { name: "social_click", params: { network: "facebook" } },
  },
  {
    matches: (href) => href.startsWith(address.mapsUrl),
    event: { name: "directions_click", params: {} },
  },
];

// Where on the page the link was clicked. A `data-analytics-location`
// attribute on any ancestor wins over the generic header/footer/content split.
const getLinkLocation = (anchor: HTMLAnchorElement) => {
  const tagged = anchor.closest<HTMLElement>("[data-analytics-location]");
  if (tagged?.dataset.analyticsLocation) return tagged.dataset.analyticsLocation;
  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";
  return "content";
};

export const getLinkClickEvent = (
  anchor: HTMLAnchorElement,
): LinkClickEvent | null => {
  const href = anchor.getAttribute("href");
  if (!href) return null;

  const rule = rules.find(({ matches }) => matches(href));
  if (!rule) return null;

  return {
    name: rule.event.name,
    params: {
      ...rule.event.params,
      link_location: getLinkLocation(anchor),
      link_text: (anchor.textContent ?? "").trim().slice(0, 100),
    },
  };
};
