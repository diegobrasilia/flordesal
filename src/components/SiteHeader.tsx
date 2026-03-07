import { useLang } from "@/contexts/LangContext";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { href: "#accueil", label: t("Início", "Home") },
    { href: "#menu", label: t("Ementa", "Menu") },
    { href: "#apropos", label: t("Sobre", "About") },
    { href: "#reviews", label: t("Avaliações", "Reviews") },
    { href: "#contact", label: t("Reservas", "Reservations") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08]"
      style={{
        backdropFilter: "blur(14px)",
        background: "linear-gradient(to bottom, rgba(5,6,8,0.95), rgba(5,6,8,0.75), transparent)",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-6 flex items-center justify-between gap-4 py-[18px]">
        {/* Logo */}
        <span className="font-title text-[1.4rem] tracking-[0.15em] uppercase text-foreground">
          Flor de Sal
        </span>

        {/* Nav */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="ml-6 text-[0.9rem] tracking-[0.12em] uppercase text-foreground-muted pb-1 border-b border-transparent transition-colors duration-200 hover:text-accent hover:border-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Lang switcher */}
        <div className="flex items-center gap-1.5">
          {(["pt", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2.5 py-1.5 rounded-full border text-[0.7rem] tracking-[0.12em] uppercase transition-all duration-200 cursor-pointer
                ${lang === l
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-transparent text-foreground-muted border-white/[0.08] hover:bg-accent hover:text-accent-foreground hover:border-accent"
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
