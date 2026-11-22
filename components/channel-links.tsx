import { CalendarDays } from "lucide-react";

import { InstagramIcon, MessengerIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";

import styles from "./channel-links.module.css";

const channels = [
  { name: "Instagram", href: siteConfig.messageUrl, icon: InstagramIcon },
  { name: "WhatsApp", href: siteConfig.social.whatsapp, icon: WhatsAppIcon },
  { name: "Messenger", href: siteConfig.social.messenger, icon: MessengerIcon },
];

interface ChannelLinksProps {
  className?: string;
  layout?: "row" | "column";
}

export const ChannelLinks = ({
  className = "",
  layout = "row",
}: ChannelLinksProps) => (
  <ul
    className={`${styles.channelList} ${layout === "column" ? styles.column : ""} ${className}`}
  >
    {channels.map(({ name, href, icon: Icon }) => (
      <li key={name}>
        <a
          className={styles.channelLink}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="icon" />
          {name}
        </a>
      </li>
    ))}
  </ul>
);

export const BookingLink = () => (
  <a
    className={styles.channelLink}
    href={siteConfig.bookingUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Zarezerwuj wizytę w Booksy"
  >
    <CalendarDays className="icon" />
    Booksy
  </a>
);
