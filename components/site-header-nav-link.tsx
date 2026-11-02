"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteHeaderNavLinkProps = {
  href: string;
  label: string;
};

export const SiteHeaderNavLink = ({
  href,
  label,
}: SiteHeaderNavLinkProps) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === href;
  const isActiveSection =
    isCurrentPage || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      data-active={isActiveSection ? "true" : undefined}
      aria-current={isCurrentPage ? "page" : undefined}
    >
      {label}
    </Link>
  );
};
