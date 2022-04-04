// @ts-check

import Loading, { css as cssLoading } from "device-agnostic-ui/Loading.mjs";
import Margin, { css as cssMargin } from "device-agnostic-ui/Margin.mjs";
import { createElement as h } from "react";

import PageErrorLoading, {
  css as cssPageErrorLoading,
} from "./PageErrorLoading.mjs";

/** @type {import("ruck/routePlanForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssLoading,
  ...cssMargin,
  ...cssPageErrorLoading,
]);

/**
 * React component for rendering page cache with loading, error, or data state.
 * @param {object} props Props.
 * @param {{
 *   errors?: Array<object>,
 *   data?: any
 * }} [props.cacheValue] Cache value.
 * @param {function} props.renderData Renders the data.
 */
export default function PageCache({
  cacheValue: { errors, data } = {},
  renderData,
}) {
  return errors
    ? h(PageErrorLoading, null)
    : data
    ? renderData(data)
    : h(Margin, null, h(Loading, { size: "2em" }));
}
