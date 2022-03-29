// @ts-check

import { createElement as h } from "react";
import routePlanForContentWithCss from "ruck/routePlanForContentWithCss.mjs";

import ErrorMessageLoading, {
  css as cssErrorMessageLoading,
} from "./components/ErrorMessageLoading.mjs";

/**
 * Gets the Ruck app route plan for a URL.
 * @type {import("ruck/serve.mjs").Router}
 */
export default function router(url, headManager, isInitialRoute) {
  if (url.pathname === "/") {
    return routePlanForContentWithCss(
      import("./components/PageHome.mjs").then(
        ({ default: PageHome, css }) => ({
          content: h(PageHome),
          css,
        }),
        catchImportContentWithCss,
      ),
      headManager,
      isInitialRoute,
    );
  }

  if (url.pathname === "/releases") {
    return routePlanForContentWithCss(
      import("./components/PageReleases.mjs").then(
        ({ default: PageReleases, css }) => ({
          content: h(PageReleases),
          css,
        }),
        catchImportContentWithCss,
      ),
      headManager,
      isInitialRoute,
    );
  }

  const matchPageRelease = url.pathname.match(
    // This adapts the official recommended RegEx to match a SemVer string, see:
    // https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
    /^\/releases\/(?<releaseTagName>v(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)$/u,
  );

  if (matchPageRelease?.groups) {
    const { releaseTagName } = matchPageRelease.groups;

    return routePlanForContentWithCss(
      import("./components/PageRelease.mjs").then(
        ({ default: PageRelease, css }) => ({
          content: h(PageRelease, { releaseTagName }),
          css,
        }),
      ),
      headManager,
      isInitialRoute,
    );
  }

  return routePlanForContentWithCss(
    import("./components/ErrorMessageMissing.mjs").then(
      ({ default: ErrorMessageMissing, css }) => ({
        content: h(ErrorMessageMissing),
        css,
      }),
      catchImportContentWithCss,
    ),
    headManager,
    isInitialRoute,
  );
}

/**
 * Catches a dynamic import error for route content with CSS.
 * @param {Error} cause Import error.
 * @returns {import("ruck/routePlanForContentWithCss.mjs").RouteContentWithCss}
 */
function catchImportContentWithCss(cause) {
  console.error(new Error("Import rejection for route with CSS.", { cause }));

  return {
    content: h(ErrorMessageLoading),
    css: cssErrorMessageLoading,
  };
}
