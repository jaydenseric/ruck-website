// @ts-check

import Heading from "device-agnostic-ui/Heading.mjs";
import { createElement as h } from "react";

/** @type {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set([
  "https://unpkg.com/device-agnostic-ui@10.0.0/Heading.css",
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
