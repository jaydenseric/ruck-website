// @ts-check

import LinkNav, { css as cssLinkNav } from "device-agnostic-ui/LinkNav.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import Nav, { css as cssNav } from "device-agnostic-ui/Nav.mjs";
import { createElement as h, Fragment, useMemo } from "react";
import useCss from "ruck/useCss.mjs";
import useHead from "ruck/useHead.mjs";
import useRoute from "ruck/useRoute.mjs";

import IconDeno, { css as cssIconDeno } from "./IconDeno.mjs";
import IconGitHub, { css as cssIconGitHub } from "./IconGitHub.mjs";
import IconRuck, { css as cssIconRuck } from "./IconRuck.mjs";
import LinkNavRoute, { css as cssLinkNavRoute } from "./LinkNavRoute.mjs";
import NavigationIndicator, {
  css as cssNavigationIndicator,
} from "./NavigationIndicator.mjs";
import TextIcon from "./TextIcon.mjs";

const css = new Set([
  "https://unpkg.com/device-agnostic-ui@10.1.0/theme.css",
  "https://unpkg.com/device-agnostic-ui@10.1.0/global.css",
  ...cssLinkNav,
  ...cssLinkText,
  ...cssNav,
  ...cssIconDeno,
  ...cssIconGitHub,
  ...cssIconRuck,
  ...cssLinkNavRoute,
  ...cssNavigationIndicator,
  "/components/App.css",
]);

/**
 * React component for the Ruck app.
 * @type {import("ruck/serve.mjs").AppComponent}
 */
export default function App() {
  const route = useRoute();

  useHead(
    "1-1-meta",
    useMemo(() =>
      h(
        Fragment,
        null,
        h("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        }),
        h("meta", { name: "theme-color", content: "white" }),
        h("meta", {
          name: "og:image",
          content: `${route.url.origin}/social-preview.png`,
        }),
        h("meta", { name: "twitter:card", content: "summary" }),
        h("link", { rel: "icon", href: "/favicon.ico" }),
        h("link", {
          rel: "icon",
          type: "image/svg+xml",
          sizes: "any",
          href: "/logos/ruck.svg",
        }),
        h("link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }),
        h("link", { rel: "manifest", href: "/manifest.webmanifest" }),
      ), [route.url.origin]),
  );

  for (const href of css) useCss(href);

  return h(
    Fragment,
    null,
    h(
      Nav,
      null,
      h(
        LinkNavRoute,
        { href: "/" },
        h(TextIcon, { icon: IconRuck }, "Ruck"),
      ),
      h(
        LinkNav,
        { href: "https://github.com/jaydenseric/ruck" },
        h(TextIcon, { icon: IconGitHub }, "GitHub"),
      ),
      h(
        LinkNav,
        { href: "https://deno.land/x/ruck" },
        h(TextIcon, { icon: IconDeno }, "Deno"),
      ),
      h(LinkNavRoute, { href: "/releases" }, "Releases"),
    ),
    route.content,
    h(
      "footer",
      { className: "App__footer" },
      h(
        "strong",
        null,
        h(
          LinkText,
          { href: "https://github.com/jaydenseric/ruck-website" },
          h(TextIcon, { icon: IconGitHub }, "View source"),
        ),
      ),
      " ",
      h(
        "small",
        null,
        "© ",
        h(LinkText, { href: "https://jaydenseric.com" }, "Jayden Seric"),
      ),
    ),
    h(NavigationIndicator),
  );
}
