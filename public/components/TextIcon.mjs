// @ts-check

import { createElement as h } from "react";

/** @typedef {typeof import("device-agnostic-ui/Icon.mjs").default} Icon */

/**
 * React component for an inline text icon.
 * @param {object} props Props.
 * @param {(props: Omit<React.ComponentPropsWithoutRef<Icon>, "title">) =>
 *   import("react").ReactElement} props.icon Icon React component.
 * @param {import("react").ReactNode} [props.children] Children.
 */
export default function TextIcon({ icon, children }) {
  return h(
    "span",
    null,
    h(icon, {
      style: {
        verticalAlign: "bottom",
        fontSize: "1.25em",
        marginRight: "0.15em",
      },
    }),
    " ",
    children,
  );
}
