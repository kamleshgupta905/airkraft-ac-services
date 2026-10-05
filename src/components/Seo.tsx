import { useEffect } from "react";
import { SEO, type PageId } from "../data";

export function Seo({ page }: { page: PageId }) {
  useEffect(() => {
    const meta = SEO[page];
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
    const kw = document.querySelector('meta[name="keywords"]');
    if (kw) kw.setAttribute("content", meta.keywords);
    const ogt = document.querySelector('meta[property="og:title"]');
    if (ogt) ogt.setAttribute("content", meta.title);
    const ogd = document.querySelector('meta[property="og:description"]');
    if (ogd) ogd.setAttribute("content", meta.description);
    const twt = document.querySelector('meta[name="twitter:title"]');
    if (twt) twt.setAttribute("content", meta.title);
    const twd = document.querySelector('meta[name="twitter:description"]');
    if (twd) twd.setAttribute("content", meta.description);
  }, [page]);

  return null;
}
