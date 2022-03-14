// @ts-check

import Icon, { css as cssIcon } from "device-agnostic-ui/Icon.mjs";
import { createElement as h } from "react";

/** @type {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssIcon,
]);

/**
 * React component for a Deno icon.
 * @param {Omit<React.ComponentPropsWithoutRef<typeof Icon>, "title">} props
 *   Props.
 */
export default function IconDeno(props) {
  return h(
    Icon,
    { ...props, title: "Deno" },
    h("path", {
      stroke: "none",
      d: "M17.703 31.91c-.56.06-1.128.09-1.703.09-8.837 0-16-7.163-16-16S7.163 0 16 0s16 7.163 16 16c0 3.941-1.425 7.55-3.788 10.338-1.967-7.37-3.021-11.283-3.175-11.777a9.385 9.385 0 0 0-3.166-4.613c-1.73-1.353-3.945-2.093-6.567-2.093-5.427 0-9.624 3.454-9.624 7.731 0 4.165 4.03 6.746 10.057 6.565l.002.003c.066.111.145.297.23.554.182.545.386 1.376.612 2.49.33 1.637.705 3.875 1.122 6.712Z",
    }),
    h("circle", { stroke: "none", cx: "16.4", cy: "13", r: "1.25" }),
  );
}
