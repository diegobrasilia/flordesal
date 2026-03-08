import { useLang } from "@/contexts/LangContext";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="py-6 text-[0.8rem] text-foreground-muted border-t border-white/[0.08] bg-background-darker">
      <div className="mx-auto max-w-[1100px] px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-center tracking-[0.08em]">
        <span className="font-title text-foreground/70 text-[0.9rem] tracking-[0.2em] uppercase">Flor de Sal</span>
        <span className="text-foreground-muted">© {new Date().getFullYear()} · Mirandela</span>
        <span>
          {t("Siga-nos", "Follow us")}:{" "}
          <a
            href="https://www.instagram.com/restaurante.flordesal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            Instagram
          </a>
          {" · "}
          <a
            href="https://www.facebook.com/flordesalrestaurante"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            Facebook
          </a>
        </span>
      </div>
    </footer>
  );
}
