import { CalendarDays } from "lucide-react";

import { InstagramIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";

interface CtaButtonProps {
  children?: string;
  className?: string;
}

export const BookingButton = ({
  children = "Zarezerwuj wizytę",
  className = "",
}: CtaButtonProps) => (
  <a
    className={`button button-primary ${className}`}
    href={siteConfig.bookingUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <CalendarDays className="icon" aria-hidden="true" />
    {children}
  </a>
);

export const MessageButton = ({
  children = "Zapytaj o zabieg",
  className = "",
}: CtaButtonProps) => (
  <a
    className={`button button-secondary ${className}`}
    href={siteConfig.messageUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <InstagramIcon className="icon" />
    {children}
  </a>
);
