import { useLang } from "@/contexts/LangContext";

const menuData = {
  starters: {
    title: { pt: "Entradas", en: "Starters" },
    items: [
      {
        name: { pt: "Tábua de enchidos de Trás-os-Montes", en: "Cured meats platter from Trás-os-Montes" },
        desc: { pt: "Seleção de produtos locais, pão rústico morno e azeite da região.", en: "Selection of local products, warm country bread and regional olive oil." },
        price: "18 €",
      },
      {
        name: { pt: "Tempura de bacalhau", en: "Cod tempura" },
        desc: { pt: "Pedaços de bacalhau crocantes, molho de alho e limão, salada de ervas frescas.", en: "Crispy cod pieces, lemon-garlic sauce and fresh herb salad." },
        price: "16 €",
      },
    ],
  },
  mains: {
    title: { pt: "Pratos", en: "Mains" },
    items: [
      {
        name: { pt: "Bacalhau Flor de Sal", en: "Flor de Sal cod" },
        desc: { pt: "Bacalhau confitado, creme de grão-de-bico, legumes grelhados e azeite aromático.", en: "Confit cod, chickpea cream, grilled vegetables and aromatic olive oil." },
        price: "24 €",
      },
      {
        name: { pt: "Porco preto grelhado", en: "Grilled porco preto" },
        desc: { pt: "Cachaço de porco preto, batatas assadas e molho de vinho tinto do Douro.", en: "Black pork neck, roasted potatoes and Douro red wine sauce." },
        price: "26 €",
      },
    ],
  },
  desserts: {
    title: { pt: "Sobremesas", en: "Desserts" },
    items: [
      {
        name: { pt: "Pastel de nata reinventado", en: "Reinvented pastel de nata" },
        desc: { pt: "Creme leve de baunilha, telha crocante e raspas de laranja.", en: "Light vanilla cream, crispy tuile and orange zest." },
        price: "8 €",
      },
      {
        name: { pt: "Domo de chocolate & flor de sal", en: "Chocolate & fleur de sel dome" },
        desc: { pt: "Ganache intensa, biscuit de amêndoa e toque de flor de sal do Algarve.", en: "Rich ganache, almond biscuit and a touch of Algarve fleur de sel." },
        price: "9 €",
      },
    ],
  },
};

export function MenuSection() {
  const { lang, t } = useLang();

  return (
    <section id="menu" className="py-24 bg-background-light">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="font-title text-[2rem] text-foreground-dark mb-2">
          {t("Ementa", "Menu")}
        </h2>
        <p className="text-muted-foreground max-w-[36rem] mt-0 mb-0">
          {t(
            "Ementa curta e sazonal, inspirada no terroir português e nos sabores mediterrânicos.",
            "A short, seasonal menu inspired by Portuguese terroir and Mediterranean flavours."
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {Object.values(menuData).map((col) => (
            <div key={col.title.pt}>
              <h3 className="font-title text-[1.1rem] tracking-[0.18em] uppercase text-foreground-dark mt-0 mb-3.5">
                {lang === "pt" ? col.title.pt : col.title.en}
              </h3>
              {col.items.map((item) => (
                <div
                  key={item.name.pt}
                  className="py-3.5 border-b border-foreground-dark/10"
                >
                  <div className="flex justify-between text-[0.95rem] font-medium text-foreground-dark">
                    <span>{lang === "pt" ? item.name.pt : item.name.en}</span>
                    <span className="text-[#42372a] ml-4 shrink-0">{item.price}</span>
                  </div>
                  <p className="text-[0.9rem] mt-1 mb-0 text-[#666057]">
                    {lang === "pt" ? item.desc.pt : item.desc.en}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-7 text-[0.9rem] text-muted-foreground">
          {t(
            "Ementa apresentada a título de exemplo. Contacte-nos para conhecer os pratos e sugestões do momento.",
            "Menu shown as an example only. Please contact us to know the current dishes and specials."
          )}
        </p>
      </div>
    </section>
  );
}
