// @ts-check

/**
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import classNameProp from "class-name-prop";
import { createElement as h, useCallback, useEffect, useState } from "react";

/** @satisfies {RouteContentWithCss["css"]} */
export const css = new Set([
  "/components/NavigationIndicator.css",
]);

/** React component for a Ruck app route navigation indicator. */
export default function NavigationIndicator() {
  const [loading, setLoading] = useState(
    /** @type {boolean | null} */ (null),
  );
  const [timeoutId, setTimeoutId] = useState(
    /** @type {number | null} */ (null),
  );

  const onRuckRouteChangeStart = useCallback(() => {
    setLoading(true);
  }, []);

  const onRuckRouteChangeEnd = useCallback(() => {
    setLoading(false);
    setTimeoutId(
      setTimeout(() => {
        setTimeoutId(null);
        setLoading(null);
      }, DONE_DURATION),
    );
  }, []);

  useEffect(() => {
    const startEvent = "ruckroutechangestart";
    const endEvents = [
      "ruckroutechangeabort",
      "ruckroutechangeend",
      "ruckroutechangeerror",
    ];

    addEventListener(startEvent, onRuckRouteChangeStart);

    for (const event of endEvents) {
      addEventListener(event, onRuckRouteChangeEnd);
    }

    return () => {
      removeEventListener(startEvent, onRuckRouteChangeStart);

      for (const event of endEvents) {
        removeEventListener(event, onRuckRouteChangeEnd);
      }
    };
  }, [onRuckRouteChangeEnd, onRuckRouteChangeStart]);

  useEffect(
    () => () => {
      if (timeoutId) clearTimeout(timeoutId);
    },
    [timeoutId],
  );

  return h("div", {
    className: classNameProp(
      "NavigationIndicator__container",
      loading !== null &&
        (loading
          ? "NavigationIndicator__container--loading"
          : "NavigationIndicator__container--done"),
    ),
    style: { "--NavigationIndicator-done-duration": `${DONE_DURATION}ms` },
  });
}

const DONE_DURATION = 250;
