import { useLang } from "@/contexts/LangContext";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer
      className="py-[18px] text-[0.8rem] text-foreground-muted border-t border-white/[0.08]"
      style={{ background: "#020203" }}
    >
      <div className="mx-auto max-w-[1100px] px-6 flex flex-col md:flex-row justify-between items-center gap-1.5 text-center">
        <span>© Flor de Sal – Mirandela</span>
        <span>
          {t("Siga-nos", "Follow us")}:{" "}
          <a
            href="https://www.instagram.com/restaurante.flordesal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Instagram
          </a>
          {" · "}
          <a
            href="https://www.facebook.com/flordesalrestaurante"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Facebook
          </a>
        </span>
      </div>
    </footer>
  );
}
