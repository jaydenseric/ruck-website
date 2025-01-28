// @ts-check

/**
 * @import { ReactNode } from "react"
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import { createElement as h } from "react";

/** @satisfies {RouteContentWithCss["css"]} */
export const css = new Set([
  "/components/Logos.css",
]);

/**
 * React component for displaying logos.
 * @param {object} props Props.
 * @param {Array<ReactNode>} props.logos Logos.
 */
export default function Logos({ logos }) {
  return h(
    "figure",
    { className: "Logos__figure" },
    logos.map((logo, index) => h("div", { key: index }, logo)),
  );
}
