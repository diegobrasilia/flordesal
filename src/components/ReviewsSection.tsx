import { useLang } from "@/contexts/LangContext";

const reviews = [
  {
    name: "Cliente Google",
    stars: 5,
    textPt: "Cozinha de grande qualidade, que junta tradição e modernidade, com especial atenção aos produtos da região de Trás-os-Montes e do Douro.",
    textEn: "High-quality cuisine combining tradition and modernity, with special focus on products from Trás-os-Montes and the Douro region.",
    sourcePt: "Resumo de um comentário no Google Maps",
    sourceEn: "Summary of a Google Maps review",
  },
  {
    name: "Visitante",
    stars: 5,
    textPt: "Serviço muito profissional e atencioso, com excelentes sugestões de vinho que acompanham na perfeição cada prato.",
    textEn: "Very professional and attentive service, with excellent wine suggestions that perfectly match each dish.",
    sourcePt: "Baseado em opiniões em guias gastronómicos",
    sourceEn: "Based on comments in restaurant guides",
  },
  {
    name: "Casal à beira rio",
    stars: 5,
    textPt: "Localização fantástica junto ao rio Tua, sala luminosa e esplanada muito agradável para desfrutar da vista.",
    textEn: "Fantastic location by the Tua river, bright dining room and a very pleasant terrace to enjoy the view.",
    sourcePt: "Resumo de várias opiniões de clientes",
    sourceEn: "Summary of several guest reviews",
  },
];

export function ReviewsSection() {
  const { lang, t } = useLang();

  return (
    <section id="reviews" className="py-24 bg-background-light">
      <div className="mx-auto max-w-[1100px] px-6">
        <p className="text-[0.72rem] tracking-[0.3em] uppercase text-accent mb-2">
          {t("Opiniões", "Reviews")}
        </p>
        <h2 className="font-title text-[2rem] text-foreground-dark mb-2">
          {t("Avaliações", "Guest reviews")}
        </h2>
        <p className="text-foreground-dark-muted max-w-[36rem] text-[0.9rem]">
          {t(
            "Os clientes destacam a cozinha de autor, o ambiente acolhedor e o serviço atento no Flor de Sal, em Mirandela.",
            "Guests highlight the signature cuisine, cosy atmosphere and attentive service at Flor de Sal in Mirandela."
          )}
        </p>

        {/* Score badge */}
        <div className="mt-8 mb-8 inline-flex items-center gap-4 px-5 py-3.5 rounded-xl bg-foreground-dark/[0.03] border border-foreground-dark/[0.07]">
          <span className="font-title text-[1.8rem] text-foreground-dark leading-none">4,1</span>
          <div>
            <div className="text-[0.85rem] text-accent tracking-wider">★★★★☆</div>
            <div className="text-[0.75rem] text-foreground-dark-muted mt-0.5">
              {t("Google Maps*", "Google Maps*")}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-white rounded-xl p-6 border border-foreground-dark/[0.06] text-[0.88rem]"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="font-semibold text-[0.85rem] tracking-wide text-foreground-dark">{r.name}</span>
                <span className="text-[0.78rem] text-accent tracking-wider">{"★".repeat(r.stars)}</span>
              </div>
              <p className="text-foreground-dark-muted m-0 mb-4 leading-relaxed">
                {lang === "pt" ? r.textPt : r.textEn}
              </p>
              <span className="block text-[0.75rem] text-foreground-dark/30 uppercase tracking-[0.12em]">
                {lang === "pt" ? r.sourcePt : r.sourceEn}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-6 text-[0.78rem] text-foreground-dark-muted border-t border-foreground-dark/[0.07] pt-5">
          {t(
            "*Os comentários acima são um resumo das opiniões públicas disponíveis online. Para ler todos os comentários em detalhe, consulte diretamente a página do Flor de Sal no Google Maps.",
            "*The comments above summarise public opinions available online. To read all reviews in detail, please visit the Flor de Sal page on Google Maps."
          )}
        </p>
      </div>
    </section>
  );
}
