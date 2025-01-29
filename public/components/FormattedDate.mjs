// @ts-check

import { createElement as h } from "react";

const formatYear = new Intl.DateTimeFormat("en-US", { year: "numeric" });
const formatMonth = new Intl.DateTimeFormat("en-US", { month: "long" });
const formatDay = new Intl.DateTimeFormat("en-US", { day: "numeric" });

/**
 * React component for a formatted date.
 * @param {object} props Props.
 * @param {string} props.dateTime ISO datetime.
 */
export default function FormattedDate({ dateTime }) {
  const date = new Date(dateTime);
  return h(
    "time",
    { dateTime },
    `${formatYear.format(date)}, ${formatMonth.format(date)} ${
      formatDay.format(date)
    }`,
  );
}
