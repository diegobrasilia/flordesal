import { useLang } from "@/contexts/LangContext";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { href: "#accueil", label: t("Início", "Home") },
    { href: "#menu", label: "Menu" },
    { href: "#apropos", label: t("Sobre", "About") },
    { href: "#reviews", label: t("Avaliações", "Reviews") },
    { href: "#contact", label: t("Reservas", "Reservations") },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05]"
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        background: "hsl(0 0% 4% / 0.88)",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-6 flex items-center justify-between gap-4 py-5">
        {/* Logo */}
        <span className="font-title text-[1.2rem] tracking-[0.2em] uppercase text-foreground">
          Flor de Sal
        </span>

        {/* Nav */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="ml-7 text-[0.72rem] tracking-[0.18em] uppercase text-foreground-muted pb-0.5 border-b border-transparent transition-all duration-200 hover:text-foreground hover:border-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Lang switcher */}
        <div className="flex items-center gap-1">
          {(["pt", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 rounded text-[0.65rem] tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer
                ${lang === l
                  ? "bg-accent text-accent-foreground"
                  : "bg-transparent text-foreground-muted hover:text-foreground"
                }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
