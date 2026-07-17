/** @format */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://silviaskinstudio.co.uk";

const upsertMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Per-route head tags. index.html only carries the home page's canonical and
 * og:url, so without this every sub-route would canonicalise to the homepage
 * and drop out of the index.
 */
const SEO = ({ title, description, noindex = false }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonical =
      SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));

    if (title) {
      document.title = title;
      upsertMeta("property", "og:title", title);
      upsertMeta("name", "twitter:title", title);
    }

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }

    upsertLink("canonical", canonical);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("name", "twitter:url", canonical);
    upsertMeta(
      "name",
      "robots",
      noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
  }, [title, description, noindex, pathname]);

  return null;
};

export default SEO;
