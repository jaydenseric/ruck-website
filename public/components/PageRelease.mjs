// @ts-check

import Html from "device-agnostic-ui/Html.mjs";
import LinkText from "device-agnostic-ui/LinkText.mjs";
import ListUnordered from "device-agnostic-ui/ListUnordered.mjs";
import Margin from "device-agnostic-ui/Margin.mjs";
import Para from "device-agnostic-ui/Para.mjs";
import useAutoLoad from "graphql-react/useAutoLoad.mjs";
import useCacheEntry from "graphql-react/useCacheEntry.mjs";
import useWaterfallLoad from "graphql-react/useWaterfallLoad.mjs";
import { createElement as h, Fragment, useCallback } from "react";

import useDescription from "../hooks/useDescription.mjs";
import useLoadGithubApi from "../hooks/useLoadGithubApi.mjs";
import useTitle from "../hooks/useTitle.mjs";
import ErrorMessageMissing, {
  css as cssErrorMessageMissing,
} from "./ErrorMessageMissing.mjs";
import FormattedDate from "./FormattedDate.mjs";
import PageCache, { css as cssPageCache } from "./PageCache.mjs";
import PageHeader, { css as cssPageHeader } from "./PageHeader.mjs";

/** @type {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set([
  "https://unpkg.com/device-agnostic-ui@10.0.0/Blockquote.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/Code.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/Heading.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/Html.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/LinkText.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/ListOrdered.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/ListUnordered.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/Margin.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/Para.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/Pre.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/Table.css",
  ...cssErrorMessageMissing,
  ...cssPageCache,
  ...cssPageHeader,
]);

const cacheKey = "PageRelease_github_repo_release";
const query =
  /* GraphQL */ `query ($repoOwner: String!, $repoName: String!, $releaseTagName: String!) {
  repository(owner: $repoOwner, name: $repoName) {
    release(tagName: $releaseTagName) {
      url
      publishedAt
      tagName
      descriptionHTML
    }
  }
}`;

/**
 * @typedef {{
 *   repository: {
 *     release: {
 *       url: string,
 *       publishedAt: string,
 *       tagName: string,
 *       descriptionHTML: string
 *     }
 *   }
 * }} GithubQueryData
 */

/**
 * React component for a release page.
 * @param {object} props Props.
 * @param {string} props.releaseTagName GitHub release tag name.
 */
export default function PageRelease({ releaseTagName }) {
  useTitle(`Release ${releaseTagName}`);
  useDescription(`Changelog entry for Ruck release ${releaseTagName}.`);

  const cacheValue =
    /**
     * @type {{
     *   errors?: Array<object>,
     *   data?: GithubQueryData
     * } | undefined}
     */
    (useCacheEntry(cacheKey));

  const loadGithubApi = useLoadGithubApi();
  const load = useCallback(
    () =>
      loadGithubApi(cacheKey, {
        query,
        variables: {
          repoOwner: "jaydenseric",
          repoName: "ruck",
          releaseTagName,
        },
      }),
    [cacheKey, loadGithubApi],
  );

  useAutoLoad(cacheKey, load);

  const isWaterfallLoading = useWaterfallLoad(cacheKey, load);

  return isWaterfallLoading ? null : h(PageCache, {
    cacheValue: cacheValue,
    renderData(/** @type {GithubQueryData} */ data) {
      return !data.repository.release ? h(ErrorMessageMissing) : h(
        Fragment,
        null,
        h(
          PageHeader,
          {
            headingChildren: `Ruck release ${data.repository.release.tagName}`,
          },
          h(
            Para,
            {
              style: {
                fontSize: "1.75rem",
              },
            },
            "Published ",
            h(FormattedDate, { datetime: data.repository.release.publishedAt }),
            ".",
          ),
        ),
        h(
          Margin,
          null,
          h(
            ListUnordered,
            null,
            h(
              "li",
              null,
              h(
                LinkText,
                { href: data.repository.release.url },
                "GitHub release",
              ),
            ),
            h(
              "li",
              null,
              h(LinkText, {
                href:
                  `https://deno.land/x/ruck@${data.repository.release.tagName}`,
              }, "Deno CDN"),
            ),
          ),
          h(Html, {
            dangerouslySetInnerHTML: {
              __html: data.repository.release.descriptionHTML,
            },
          }),
        ),
      );
    },
  });
}
