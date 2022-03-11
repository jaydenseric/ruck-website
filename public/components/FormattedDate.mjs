// @ts-check

import { createElement as h } from "react";

const formatYear = new Intl.DateTimeFormat("en-US", { year: "numeric" });
const formatMonth = new Intl.DateTimeFormat("en-US", { month: "long" });
const formatDay = new Intl.DateTimeFormat("en-US", { day: "numeric" });

/**
 * React component for a formatted date.
 * @param {object} props Props.
 * @param {string} props.datetime ISO datetime.
 */
export default function FormattedDate({ datetime }) {
  const date = new Date(datetime);
  return h(
    "time",
    { dateTime: datetime },
    `${formatYear.format(date)}, ${formatMonth.format(date)} ${
      formatDay.format(date)
    }`,
  );
}
