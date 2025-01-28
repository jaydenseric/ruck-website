// @ts-check

/**
 * @import { ReactNode } from "react"
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import LinkNav, { css as cssLinkNav } from "device-agnostic-ui/LinkNav.mjs";
import { createElement as h } from "react";
import useOnClickRouteLink from "ruck/useOnClickRouteLink.mjs";
import useRoute from "ruck/useRoute.mjs";

/** @satisfies {RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssLinkNav,
]);

/**
 * React component for a Ruck app route {@link LinkNav navigation link}.
 * @param {object} props Props.
 * @param {string} props.href Link HREF.
 * @param {ReactNode} [props.children] Children.
 */
export default function LinkNavRoute({ href, children }) {
  const route = useRoute();
  const onClick = useOnClickRouteLink();

  return h(
    LinkNav,
    {
      href,
      onClick,
      active: href === route.url.pathname,
    },
    children,
  );
}
