"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import { person, home, about, blog, work, gallery } from "@/app/resources/content";

type TimeDisplayProps = {
  timeZone?: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone = 'Asia/Kolkata', locale = 'hi-IN' }) => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone,
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };
      const timeOptions: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      const dateString = new Intl.DateTimeFormat(locale, dateOptions).format(now);
      const timeString = new Intl.DateTimeFormat(locale, timeOptions).format(now);
      setCurrentDateTime(`${dateString}, ${timeString}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentDateTime}</>;
};

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Flex hide="s">Greater Noida, Uttar Pradesh, India</Flex>}
        </Flex>
        {/* ... rest of the component remains the same ... */}
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">{display.time && <TimeDisplay />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;