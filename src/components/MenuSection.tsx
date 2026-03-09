import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import alheiraImg from "@/assets/alheira-grelhada.jpg";

const menuData = {
  entradas: {
    title: { pt: "Entradas", en: "Starters" },
    items: [
      {
        name: { pt: "Alheira grelhada com chouriço salgadas", en: "Grilled alheira with chouriço" },
        desc: { pt: "", en: "" },
        price: "7,00 €",
      },
      {
        name: { pt: "Tábua de frios", en: "Charcuterie board" },
        desc: { pt: "", en: "" },
        price: "6,00 €",
      },
      {
        name: { pt: "Bolinhos crocantes de pimento ao coco e molho de alho e salsinha", en: "Crispy pepper & coconut balls with garlic-parsley sauce" },
        desc: { pt: "", en: "" },
        price: "7,00 €",
      },
      {
        name: { pt: "Salada mista", en: "Mixed salad" },
        desc: { pt: "", en: "" },
        price: "3,20 €",
      },
      {
        name: { pt: "Salada de grão de carne com cebola caramelizada e vinagrete de mel", en: "Chickpea salad with caramelised onion and honey vinaigrette" },
        desc: { pt: "", en: "" },
        price: "4,30 €",
      },
      {
        name: { pt: "Queijo cheese assado", en: "Baked cheese" },
        desc: { pt: "", en: "" },
        price: "3,50 €",
      },
    ],
  },
  tradicoes: {
    title: { pt: "Tradições de Mirandela", en: "Mirandela Traditions" },
    items: [
      {
        name: { pt: "Alheira tradicional", en: "Traditional alheira" },
        desc: { pt: "", en: "" },
        price: "10,00 €",
      },
      {
        name: { pt: "Alheira com presunto", en: "Alheira with ham" },
        desc: { pt: "", en: "" },
        price: "12,00 €",
      },
      {
        name: { pt: "Almôndegas de aves", en: "Poultry meatballs" },
        desc: { pt: "", en: "" },
        price: "12,00 €",
      },
      {
        name: { pt: "Alheira regular de caça", en: "Game alheira" },
        desc: { pt: "", en: "" },
        price: "12,00 €",
      },
      {
        name: { pt: "Alheira reserva de caça", en: "Reserve game alheira" },
        desc: { pt: "", en: "" },
        price: "12,00 €",
      },
    ],
  },
  principal: {
    title: { pt: "Prato Principal", en: "Main Course" },
    items: [
      {
        name: { pt: "Secretos de porco preto à cebolada e ambarilhoa", en: "Black pork secreto with onion confit" },
        desc: { pt: "", en: "" },
        price: "26,00 €",
      },
      {
        name: { pt: "Costeleta de vitela grelhada", en: "Grilled veal chop" },
        desc: { pt: "", en: "" },
        price: "27,00 €",
      },
      {
        name: { pt: "Pasta fresca com camarinho a meio e ervas do jardim", en: "Fresh pasta with prawns and garden herbs" },
        desc: { pt: "", en: "" },
        price: "15,00 €",
      },
      {
        name: { pt: "Risoto de tomate e cogumelo", en: "Tomato and mushroom risotto" },
        desc: { pt: "", en: "" },
        price: "13,00 €",
      },
      {
        name: { pt: "Risoto de tomate e camarão", en: "Tomato and prawn risotto" },
        desc: { pt: "", en: "" },
        price: "13,00 €",
      },
      {
        name: { pt: "Lombo de bacalhau à lagareiro de Braga", en: "Cod loin à lagareiro Braga style" },
        desc: { pt: "", en: "" },
        price: "28,00 €",
      },
      {
        name: { pt: "Polvo assado em azeite com arroz de perno", en: "Roasted octopus in olive oil with rice" },
        desc: { pt: "", en: "" },
        price: "30,00 €",
      },
      {
        name: { pt: "Posta tradicional c/batatinha a muro e grelos salteados", en: "Traditional posta with oven potatoes and sautéed greens" },
        desc: { pt: "(1 pessoa)", en: "(1 person)" },
        price: "16,00 €",
      },
      {
        name: { pt: "Polvo afogado em azeite com arroz de forno", en: "Octopus in olive oil with oven rice" },
        desc: { pt: "(2 pessoas)", en: "(2 persons)" },
        price: "—",
      },
      {
        name: { pt: "Panado grelhado", en: "Grilled breaded fillet" },
        desc: { pt: "", en: "" },
        price: "14,99 €",
      },
      {
        name: { pt: "Frites", en: "Frites" },
        desc: { pt: "", en: "" },
        price: "3,50 €",
      },
    ],
  },
  sobremesas: {
    title: { pt: "Sobremesas", en: "Desserts" },
    items: [
      {
        name: { pt: "Rabanada transmontana", en: "Transmontana French toast" },
        desc: { pt: "", en: "" },
        price: "5,00 €",
      },
      {
        name: { pt: "Petit gâteau de chocolate", en: "Chocolate lava cake" },
        desc: { pt: "", en: "" },
        price: "5,00 €",
      },
      {
        name: { pt: "Panacotta", en: "Panna cotta" },
        desc: { pt: "", en: "" },
        price: "5,00 €",
      },
      {
        name: { pt: "Corte de frutas da época", en: "Seasonal fruit platter" },
        desc: { pt: "", en: "" },
        price: "2,50 €",
      },
      {
        name: { pt: "Pêra bêbada", en: "Drunken pear" },
        desc: { pt: "", en: "" },
        price: "5,00 €",
      },
      {
        name: { pt: "Sobremesa do dia", en: "Dessert of the day" },
        desc: { pt: "Pergunte ao seu servidor", en: "Ask your server" },
        price: "6,00 €",
      },
    ],
  },
};

const kidsMenu = [
  { name: { pt: "Brindão d'fela", en: "Veal fillet kids" }, price: "8,50 €" },
  { name: { pt: "Brindão frango", en: "Chicken fillet kids" }, price: "8,00 €" },
];

export function MenuSection() {
  const { lang, t } = useLang();
  const [imgOpen, setImgOpen] = useState(false);

  return (
    <section id="menu" className="py-24 bg-background-light">
      <div className="mx-auto max-w-[1100px] px-6">
        <p className="text-[0.72rem] tracking-[0.3em] uppercase text-accent mb-2">
          {t("Menu sazonal", "Seasonal menu")}
        </p>
        <h2 className="font-title text-[2rem] text-foreground-dark mb-2">
          Menu
        </h2>
        <p className="text-foreground-dark-muted max-w-[36rem] mt-0 mb-10 text-[0.9rem]">
          {t(
            "Menu sazonal inspirado no terroir português e nas tradições de Trás-os-Montes.",
            "Seasonal menu inspired by Portuguese terroir and Trás-os-Montes traditions."
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {Object.values(menuData).map((col) => (
            <div key={col.title.pt}>
              <h3 className="font-title text-[1.4rem] tracking-[-0.01em] text-foreground-dark mt-0 mb-4 pb-2 border-b border-foreground-dark/10">
                {lang === "pt" ? col.title.pt : col.title.en}
              </h3>
              {col.items.map((item) => {
                const isAlheira = item.name.pt === "Alheira grelhada com chouriço salgadas";
                return (
                  <div
                    key={item.name.pt}
                    className={`py-3 border-b border-foreground-dark/[0.06] last:border-0 ${isAlheira ? "cursor-pointer group" : ""}`}
                    onClick={isAlheira ? () => setImgOpen(true) : undefined}
                  >
                    <div className="flex justify-between items-start text-[0.9rem] font-medium text-foreground-dark mb-0.5">
                      <span className={`pr-4 lowercase first-letter:uppercase ${isAlheira ? "group-hover:text-accent transition-colors" : ""}`}>
                        {lang === "pt" ? item.name.pt : item.name.en}
                        {isAlheira && <span className="ml-2 text-[0.7rem] text-accent opacity-70">📷</span>}
                      </span>
                      <span className="text-accent shrink-0 font-normal">{item.price}</span>
                    </div>
                    {(lang === "pt" ? item.desc.pt : item.desc.en) && (
                      <p className="text-[0.82rem] mt-0 mb-0 text-foreground-dark-muted leading-relaxed">
                        {lang === "pt" ? item.desc.pt : item.desc.en}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Kids */}
        <div className="mt-10 pt-8 border-t border-foreground-dark/10">
          <h3 className="font-title text-[1.4rem] tracking-[-0.01em] text-foreground-dark mt-0 mb-4">
            Kids
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {kidsMenu.map((item) => (
              <div key={item.name.pt} className="flex justify-between py-2.5 border-b border-foreground-dark/[0.06] text-[0.9rem]">
                <span className="text-foreground-dark lowercase first-letter:uppercase">{lang === "pt" ? item.name.pt : item.name.en}</span>
                <span className="text-accent font-normal">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-[0.78rem] text-foreground-dark-muted border-t border-foreground-dark/[0.07] pt-5">
          {t(
            "Os preços incluem IVA à taxa legal em vigor. Menu sujeito a alterações sazonais.",
            "Prices include VAT at the legal rate. Menu subject to seasonal changes."
          )}
        </p>
      </div>

      <Dialog open={imgOpen} onOpenChange={setImgOpen}>
        <DialogContent className="max-w-lg p-0 overflow-hidden bg-background-light border-foreground-dark/10">
          <img src={alheiraImg} alt="Alheira grelhada com chouriço" className="w-full h-auto object-cover" />
          <p className="px-5 py-4 text-[0.9rem] font-medium text-foreground-dark lowercase first-letter:uppercase">
            {lang === "pt" ? "Alheira grelhada com chouriço salgadas" : "Grilled alheira with chouriço"}
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
