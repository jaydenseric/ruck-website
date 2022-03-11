// @ts-check

import Heading from "device-agnostic-ui/Heading.mjs";
import LinkText from "device-agnostic-ui/LinkText.mjs";
import Margin from "device-agnostic-ui/Margin.mjs";
import Para from "device-agnostic-ui/Para.mjs";
import Picture from "device-agnostic-ui/Picture.mjs";
import { createElement as h, Fragment } from "react";

import useDescription from "../hooks/useDescription.mjs";
import useTitle from "../hooks/useTitle.mjs";
import IconGitHub, { css as cssIconGitHub } from "./IconGitHub.mjs";
import Logos, { css as cssLogos } from "./Logos.mjs";
import PageHeader, { css as cssPageHeader } from "./PageHeader.mjs";
import Section, { css as cssSection } from "./Section.mjs";
import TextIcon from "./TextIcon.mjs";

/** @type {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set([
  "https://unpkg.com/device-agnostic-ui@10.0.0/Heading.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/LinkText.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/Margin.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/Para.css",
  "https://unpkg.com/device-agnostic-ui@10.0.0/Picture.css",
  ...cssIconGitHub,
  ...cssLogos,
  ...cssPageHeader,
  ...cssSection,
]);

/** React component for the home page. */
export default function PageHome() {
  useTitle("Home");
  useDescription(
    "Ruck is an open source buildless React web application framework for Deno.",
  );

  return h(
    Fragment,
    null,
    h(
      PageHeader,
      {
        headingChildren: "Ruck",
      },
      h(
        Para,
        {
          style: {
            fontSize: "1.75rem",
          },
        },
        "An open source buildless ",
        h(LinkText, { href: "https://reactjs.org" }, "React"),
        " web application framework for ",
        h(LinkText, { href: "https://deno.land" }, "Deno"),
        ".",
      ),
      h(
        Para,
        null,
        h(
          "strong",
          null,
          h(
            LinkText,
            { href: "https://github.com/jaydenseric/ruck#installation" },
            h(TextIcon, { icon: IconGitHub }, "Get started"),
          ),
        ),
      ),
    ),
    h(
      Logos,
      {
        logos: [
          h(
            Picture,
            { width: 1, height: 1 },
            h("img", {
              src: "/logos/ruck.svg",
              alt: "Ruck logo",
            }),
          ),
          h(
            Picture,
            { width: 1, height: 1 },
            h("img", {
              src: "/logos/deno.svg",
              alt: "Deno logo",
            }),
          ),
          h(
            Picture,
            { width: 1, height: 1 },
            h("img", {
              src: "/logos/react.svg",
              alt: "React logo",
            }),
          ),
          h(
            Picture,
            { width: 1, height: 1 },
            h("img", {
              src: "/logos/graphql.svg",
              alt: "GraphQL logo",
            }),
          ),
        ],
      },
    ),
    h(
      Section,
      {
        headerChildren: h(
          Heading,
          { level: 2, size: 2 },
          "Create basic sites or powerful apps",
        ),
      },
      h(
        Margin,
        null,
        h(
          Para,
          null,
          "Work with cutting edge standard technologies such as ",
          h(LinkText, {
            href:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
          }, "ESM"),
          ", ",
          h(LinkText, {
            href:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading",
          }, "dynamic imports"),
          ", ",
          h(LinkText, {
            href: "https://deno.land/manual/linking_to_external_code",
          }, "HTTP imports"),
          ", and ",
          h(LinkText, {
            href: "https://github.com/WICG/import-maps",
          }, "import maps"),
          " to avoid build steps like transpilation or bundling. Deno and browsers directly run the source code. Ruck is ",
          h("em", null, "extremely"),
          " lean with few dependencies. Modules are focused with default exports that are only deep imported when needed.",
        ),
        h(
          Para,
          null,
          "Some things that are complicated or impossible with traditional frameworks like ",
          h(LinkText, { href: "https://nextjs.org" }, "Next.js"),
          " are easy with Ruck.",
        ),
        h(
          Para,
          null,
          h(
            "strong",
            null,
            h(
              LinkText,
              { href: "https://github.com/jaydenseric/ruck" },
              h(TextIcon, { icon: IconGitHub }, "Lean more"),
            ),
          ),
        ),
      ),
    ),
  );
}
