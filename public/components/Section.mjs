// @ts-check

import { createElement as h } from "react";

/** @type {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set(["/components/Section.css"]);

/**
 * React component for a page section.
 * @param {object} props Props.
 * @param {import("react").ReactNode} props.headerChildren Header children.
 * @param {import("react").ReactNode} [props.children] Children.
 */
export default function Section({ headerChildren, children }) {
  return h(
    "section",
    { className: "Section__section" },
    headerChildren &&
      h("header", { className: "Section__header" }, headerChildren),
    children,
  );
}
