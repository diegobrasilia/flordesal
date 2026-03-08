import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { useLang } from "@/contexts/LangContext";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [lightbox, setLightbox] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
  { href: "#accueil", label: t("Início", "Home") },
  { href: "#menu", label: "Menu" },
  { href: "#vinhos", label: t("Vinhos", "Wines") },
  { href: "#apropos", label: t("Sobre", "About") },
  { href: "#reviews", label: t("Avaliações", "Reviews") },
  { href: "#contact", label: t("Reservas", "Reservations") }];

  return (
    <>
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05]"
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        background: "hsl(0 0% 4% / 0.88)"
      }}>
      
      <div className="mx-auto max-w-[1100px] px-6 flex items-center justify-between gap-4 py-5 text-primary-foreground">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Flor de Sal"
            className="h-9 w-9 rounded-full object-cover cursor-pointer"
            onClick={() => atTop ? setLightbox(true) : document.getElementById("accueil")?.scrollIntoView({ behavior: "smooth" })}
          />
          <a href="#accueil" className="font-title text-[1.1rem] tracking-[0.15em] text-foreground">
            Flor de Sal
          </a>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="ml-7 text-[0.72rem] tracking-[0.18em] uppercase text-foreground-muted pb-0.5 border-b border-transparent transition-all duration-200 hover:border-accent text-secondary">
              {link.label}
            </a>
          )}
        </nav>

        {/* Lang switcher */}
        <div className="flex items-center gap-1">
          {(["pt", "en"] as const).map((l) =>
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1.5 rounded text-[0.65rem] tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer
                ${lang === l ?
            "bg-accent text-accent-foreground" :
            "bg-transparent text-foreground-muted hover:text-foreground"}`
            }>
              {l.toUpperCase()}
            </button>
          )}
        </div>
      </div>
    </header>

    {/* Lightbox */}
    {lightbox && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={() => setLightbox(false)}
      >
        <img
          src={logo}
          alt="Flor de Sal"
          className="max-h-[80vh] max-w-[80vw] rounded-2xl shadow-2xl object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={() => setLightbox(false)}
          className="absolute top-6 right-8 text-white/70 hover:text-white text-3xl font-light leading-none cursor-pointer bg-transparent border-0"
        >
          ×
        </button>
      </div>
    )}
    </>);
}
