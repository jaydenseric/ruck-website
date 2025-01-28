// @ts-check

/**
 * @import { ReactNode } from "react"
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import { createElement as h } from "react";

/** @type {RouteContentWithCss["css"]} */
export const css = new Set([
  "/components/Section.css",
]);

/**
 * React component for a page section.
 * @param {object} props Props.
 * @param {ReactNode} props.headerChildren Header children.
 * @param {ReactNode} [props.children] Children.
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
