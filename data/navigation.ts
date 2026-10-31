export const navigationItems = {
  home: { href: "/", label: "Strona główna" },
  treatments: { href: "/zabiegi", label: "Zabiegi" },
  about: { href: "/o-mnie", label: "O mnie" },
  gallery: { href: "/galeria", label: "Galeria" },
  blog: { href: "/blog", label: "Blog" },
  pricing: { href: "/cennik", label: "Cennik" },
  contact: { href: "/kontakt", label: "Kontakt" },
} as const;

export const headerNavigation = [
  navigationItems.treatments,
  navigationItems.about,
  navigationItems.gallery,
  navigationItems.blog,
  navigationItems.pricing,
  navigationItems.contact,
];

export const footerNavigation = [
  navigationItems.home,
  navigationItems.treatments,
  navigationItems.about,
  navigationItems.blog,
  navigationItems.pricing,
  navigationItems.contact,
];
