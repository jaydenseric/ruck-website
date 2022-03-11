// @ts-check

import { createElement as h } from "react";

/** @type {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set(["/components/Logos.css"]);

/**
 * React component for displaying logos.
 * @param {object} props Props.
 * @param {Array<import("react").ReactNode>} props.logos Logos.
 */
export default function Logos({ logos }) {
  return h(
    "figure",
    { className: "Logos__figure" },
    logos.map((logo, index) => h("div", { key: index }, logo)),
  );
}
