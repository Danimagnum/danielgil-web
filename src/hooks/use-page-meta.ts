import { useEffect } from "react";

type PageMeta = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
};

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageMeta({ title, description, ogTitle, ogDescription }: PageMeta) {
  useEffect(() => {
    document.title = title;
    if (description) setMetaTag("name", "description", description);
    if (ogTitle ?? title) setMetaTag("property", "og:title", ogTitle ?? title);
    if (ogDescription ?? description) {
      setMetaTag("property", "og:description", ogDescription ?? description!);
    }
  }, [title, description, ogTitle, ogDescription]);
}
