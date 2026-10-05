import { useCallback, useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { JsonLd } from "./components/JsonLd";
import { Seo } from "./components/Seo";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { NAV, type PageId } from "./data";
import { About } from "./pages/About";
import { Areas } from "./pages/Areas";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";

function pathToPage(hash: string): PageId {
  const clean = hash.replace(/^#\/?/, "").split("?")[0].replace(/\/$/, "");
  const found = NAV.find((n) => n.path.replace(/^#\/?/, "") === clean);
  if (found) return found.id;
  if (clean === "" || clean === "home") return "home";
  return "home";
}

export default function App() {
  const [page, setPage] = useState<PageId>(() =>
    typeof window === "undefined" ? "home" : pathToPage(window.location.hash)
  );

  const onNavigate = useCallback((id: PageId) => {
    const item = NAV.find((n) => n.id === id);
    if (item) window.location.hash = item.path.replace(/^#/, "");
    setPage(id);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onHash = () => setPage(pathToPage(window.location.hash));
    window.addEventListener("hashchange", onHash);
    if (!window.location.hash) window.location.hash = "/";
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <JsonLd />
      <Seo page={page} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-cream focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header page={page} onNavigate={onNavigate} />
      <main id="main" className="page-enter pb-14 md:pb-0" key={page}>
        {page === "home" && <Home onNavigate={onNavigate} />}
        {page === "services" && <Services />}
        {page === "about" && <About />}
        {page === "areas" && <Areas />}
        {page === "contact" && <Contact />}
      </main>
      <Footer onNavigate={onNavigate} />
      <WhatsAppButton />
    </>
  );
}
