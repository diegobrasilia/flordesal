import { useLang } from "@/contexts/LangContext";

const wineData = {
  tintos: {
    title: { pt: "Tintos", en: "Red Wines" },
    items: [
      { name: "Quinta Mealhada – Sabença", price: "15,00 €" },
      { name: "Quinta Grande Amoreira", price: "15,00 €" },
      { name: "Quinta Alcayde Pequena Reserva 2017", price: "18,00 €" },
      { name: "Papa Figos", price: "12,00 €" },
      { name: "Valle Pradinhos Reserva 2019", price: "18,00 €" },
      { name: "Abelha de Mar", price: "15,00 €" },
      { name: "Monte do Pito Reserva", price: "18,00 €" },
      { name: "Valle Ardinhas", price: "12,00 €" },
      { name: "Cardão Arcolelo – Batalha Reserva", price: "20,00 €" },
      { name: "Couço Constantino Reserva", price: "18,00 €" },
      { name: "Quinta de Pinhão Reserva", price: "18,00 €" },
      { name: "Quinta da Bufarra", price: "20,00 €" },
      { name: "Quinta da Bufarra reserva", price: "25,00 €" },
      { name: "Falcão Pereira", price: "18,00 €" },
      { name: "Arcola – Calharis", price: "15,00 €" },
      { name: "Manical", price: "12,00 €" },
      { name: "Carixus", price: "15,00 €" },
      { name: "Quinta Corriçam Colheita Selecionada", price: "20,00 €" },
    ],
  },
  tintos2: {
    title: { pt: "Tintos (cont.)", en: "Red Wines (cont.)" },
    items: [
      { name: "Quinta Alcayde – Calharis", price: "15,00 €" },
      { name: "Quinta Alcayde 14 Linhas", price: "18,00 €" },
      { name: "Casul Constante", price: "15,00 €" },
      { name: "Quinta da Rufete", price: "18,00 €" },
      { name: "Quinta do Pão Açucar | Reserva", price: "20,00 €" },
      { name: "Villela", price: "12,00 €" },
      { name: "Terras Salvanda DOP", price: "12,00 €" },
      { name: "Noroeste do Douro", price: "15,00 €" },
      { name: "Flor de Tua Reserva", price: "18,00 €" },
      { name: "Flor de Tua Superior", price: "15,00 €" },
      { name: "Palácio do Thamasa Alfrocheiro", price: "20,00 €" },
      { name: "Megudinhas", price: "15,00 €" },
      { name: "Torrim do Grife", price: "15,00 €" },
      { name: "Costa Boal Homenagem Grande Reserva", price: "30,00 €" },
    ],
  },
  brancos: {
    title: { pt: "Brancos", en: "White Wines" },
    items: [
      { name: "Aveleda Alvarinho", price: "12,00 €" },
      { name: "Terras de Bestros", price: "12,00 €" },
      { name: "Soalheiro", price: "15,00 €" },
      { name: "Aveleda Loureiro", price: "12,00 €" },
      { name: "Muralhas", price: "15,00 €" },
      { name: "Piardun", price: "15,00 €" },
      { name: "Palácio Bequinha", price: "12,00 €" },
    ],
  },
  roses: {
    title: { pt: "Rosés", en: "Rosé Wines" },
    items: [
      { name: "Casa Lureiro Rosé 2019", price: "12,00 €" },
      { name: "Somni Rosé 2019", price: "12,00 €" },
      { name: "Mateus Rosé", price: "10,00 €" },
      { name: "Velho Padrinhos", price: "10,00 €" },
    ],
  },
  espumantes: {
    title: { pt: "Espumantes / Champagne", en: "Sparkling / Champagne" },
    items: [
      { name: "Muttart Brut", price: "15,00 €" },
      { name: "Ramsony Brut", price: "18,00 €" },
      { name: "G.H. Mumm", price: "55,00 €" },
      { name: "Moët Chandon", price: "65,00 €" },
      { name: "Moët Chandon Ice", price: "70,00 €" },
      { name: "Taittinger", price: "60,00 €" },
    ],
  },
};

export function WineSection() {
  const { t } = useLang();

  return (
    <section id="vinhos" className="py-24 bg-background text-foreground border-t border-white/[0.04]">
      <div className="mx-auto max-w-[1100px] px-6">
        <p className="text-[0.72rem] tracking-[0.3em] uppercase text-accent mb-2">
          {t("Carta de vinhos", "Wine list")}
        </p>
        <h2 className="font-title text-[2rem] mb-2 tracking-[-0.01em]">
          {t("Vinhos", "Wines")}
        </h2>
        <p className="text-foreground-muted text-[0.9rem] mb-10 max-w-[36rem]">
          {t(
            "Uma seleção cuidada de vinhos portugueses, com destaque para os produtores do Douro e de Trás-os-Montes.",
            "A curated selection of Portuguese wines, with a focus on Douro and Trás-os-Montes producers."
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {Object.values(wineData).map((col) => (
            <div key={col.title.pt}>
              <h3 className="text-[0.72rem] tracking-[0.25em] uppercase text-accent mt-0 mb-4 pb-2 border-b border-white/10">
                {col.title.pt}
              </h3>
              {col.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center py-2.5 border-b border-white/[0.05] last:border-0"
                >
                  <span className="text-[0.88rem] text-foreground/80 pr-3">{item.name}</span>
                  <span className="text-[0.85rem] text-accent shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-10 text-[0.78rem] text-foreground-muted/50 border-t border-white/[0.06] pt-5">
          {t(
            "Preços incluem IVA. Carta sujeita a disponibilidade de stock.",
            "Prices include VAT. Wine list subject to stock availability."
          )}
        </p>
      </div>
    </section>
  );
}
