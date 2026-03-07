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
        <h2 className="font-title text-[2rem] text-foreground-dark mb-2">
          {t("Avaliações", "Guest reviews")}
        </h2>
        <p className="text-muted-foreground max-w-[36rem]">
          {t(
            "Os clientes destacam a cozinha de autor, o ambiente acolhedor e o serviço atento no Flor de Sal, em Mirandela.",
            "Guests highlight the signature cuisine, cosy atmosphere and attentive service at Flor de Sal in Mirandela."
          )}
        </p>

        {/* Score badge */}
        <div className="mt-8 mb-6 inline-flex flex-col items-start px-4 py-3.5 rounded-2xl bg-foreground-dark/[0.04] border border-foreground-dark/[0.06]">
          <span className="text-[1.4rem] font-semibold text-foreground-dark">4,1/5</span>
          <span className="text-[0.9rem] text-yellow-500">★★★★★</span>
          <span className="text-[0.8rem] text-[#7a7469]">
            {t("Classificação global aproximada no Google Maps*", "Approximate overall rating on Google Maps*")}
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-white rounded-[18px] p-[18px_18px_16px] shadow-[0_14px_30px_rgba(0,0,0,0.08)] border border-black/[0.04] text-[0.9rem]"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-foreground-dark">{r.name}</span>
                <span className="text-[0.85rem] text-yellow-500">{"★".repeat(r.stars)}</span>
              </div>
              <p className="text-[#666057] m-0 mb-2.5">
                {lang === "pt" ? r.textPt : r.textEn}
              </p>
              <span className="block text-[0.8rem] text-[#978f83]">
                {lang === "pt" ? r.sourcePt : r.sourceEn}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-6 text-[0.8rem] text-[#7a7469]">
          {t(
            "*Os comentários acima são um resumo das opiniões públicas disponíveis online. Para ler todos os comentários em detalhe, consulte diretamente a página do Flor de Sal no Google Maps.",
            "*The comments above summarise public opinions available online. To read all reviews in detail, please visit the Flor de Sal page on Google Maps."
          )}
        </p>
      </div>
    </section>
  );
}
