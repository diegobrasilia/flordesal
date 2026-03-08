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
        <p className="text-[0.72rem] tracking-[0.3em] uppercase text-accent mb-2">
          {t("Menu sazonal", "Seasonal menu")}
        </p>
        <h2 className="font-title text-[2rem] text-foreground-dark mb-2">
          Menu
        </h2>
        <p className="text-foreground-dark-muted max-w-[36rem] mt-0 mb-0 text-[0.9rem]">
          {t(
            "Menu curto e sazonal, inspirado no terroir português e nos sabores mediterrânicos.",
            "A short, seasonal menu inspired by Portuguese terroir and Mediterranean flavours."
          )}
...
        <p className="mt-8 text-[0.82rem] text-foreground-dark-muted border-t border-foreground-dark/[0.07] pt-5">
          {t(
            "Menu apresentado a título de exemplo. Contacte-nos para conhecer os pratos e sugestões do momento.",
            "Menu shown as an example only. Please contact us to know the current dishes and specials."
          )}
        </p>
      </div>
    </section>
  );
}
