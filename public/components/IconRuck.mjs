// @ts-check

import Icon, { css as cssIcon } from "device-agnostic-ui/Icon.mjs";
import { createElement as h } from "react";

/** @type {import("ruck/routePlanForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssIcon,
]);

/**
 * React component for a Ruck icon.
 * @param {Omit<React.ComponentPropsWithoutRef<typeof Icon>, "title">} props
 *   Props.
 */
export default function IconRuck(props) {
  return h(
    Icon,
    { ...props, title: "Ruck" },
    h(
      "g",
      {
        fill: "none",
        strokeWidth: "1.75",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      h("path", {
        d: "M9.146 3.5C7.254 3.5 5.75 5.077 5.75 7.021v7.59H4.302c-1.893 0-3.427 1.576-3.427 3.521v5.707c0 1.945 1.534 3.522 3.427 3.522H5.75c0 1.944 1.504 3.764 3.396 3.764h13.707c1.893 0 3.397-1.82 3.397-3.764h1.448c1.893 0 3.427-1.577 3.427-3.522v-5.707c0-1.945-1.534-3.521-3.427-3.521H26.25V7.02c0-1.944-1.504-3.521-3.396-3.521H9.146Z",
      }),
      h("path", {
        d: "M5.75 14.625v6.125c-2.5 1-4.875 0-4.875-2.75M26.25 14.625v6.125c2.5 1 4.875 0 4.875-2.75M9.25 18.771c0-1.944 1.539-3.521 3.437-3.521h6.626c1.898 0 3.437 1.577 3.437 3.521v5.083c0 1.944-1.539 3.521-3.437 3.521h-6.626c-1.898 0-3.437-1.577-3.437-3.521V18.77Z",
      }),
      h("path", {
        d: "M9.25 18.625c0 1.726 1.504 3.125 3.358 3.125h6.784c1.855 0 3.358-1.4 3.358-3.125M5.75 6.875V7c0 2.002 1.653 3.625 3.693 3.625h13.115c2.039 0 3.692-1.623 3.692-3.625v-.125M12.375 5V3.821c0-1.627 1.083-2.946 2.375-2.946h2.5c1.292 0 2.375 1.32 2.375 2.946V5M12.375 8.875v3.5M19.625 12.375v-3.5",
      }),
    ),
  );
}
