// @ts-check

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import { createElement as h } from "react";

/** @type {import("ruck/routePlanForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssHeading,
  "/components/PageHeader.css",
]);

/**
 * React component for a page header.
 * @param {object} props Props.
 * @param {import("react").ReactNode} props.headingChildren Heading children.
 * @param {import("react").ReactNode} [props.children] Children.
 */
export default function PageHeader({ headingChildren, children }) {
  return h(
    "header",
    { className: "PageHeader__header" },
    h(Heading, { size: 1 }, headingChildren),
    children,
  );
}
