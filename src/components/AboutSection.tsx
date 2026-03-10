import { useLang } from "@/contexts/LangContext";

export function AboutSection() {
  const { t } = useLang();

  return (
    <section id="apropos" className="py-24 bg-background text-foreground">
      <div className="mx-auto max-w-[1100px] px-6 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-14">
        <div>
          <p className="text-[0.72rem] tracking-[0.3em] uppercase text-accent mb-2">
            {t("A nossa história", "Our story")}
          </p>
          <h2 className="font-title text-[2rem] mb-5 tracking-[-0.01em]">
            {t("Sobre", "About")}
          </h2>
          <p className="text-foreground-muted text-[0.93rem] leading-relaxed mb-4">
            {t(
              "O Flor de Sal é um restaurante com esplanada e bar em Mirandela, junto ao rio Tua, onde recebe famílias, amigos e quem quer simplesmente desfrutar a cidade com boa comida e um copo.",
              "Flor de Sal is a restaurant with terrace and bar in Mirandela, by the Tua river, welcoming families, friends and anyone wishing to enjoy the town with good food and a drink."
            )}
          </p>
          <p className="text-foreground-muted text-[0.93rem] leading-relaxed">
            {t(
              "A cozinha valoriza os produtos de Trás-os-Montes, do Douro e de todo o país, com pratos simples e cuidados, pensados tanto para uma refeição completa como para petiscar na esplanada ou no bar.",
              "The cuisine highlights products from Trás-os-Montes, the Douro and the whole country, with simple, well-made dishes, whether for a full meal or for sharing snacks on the terrace or at the bar."
            )}
          </p>
        </div>

        <div className="border-l border-white/[0.06] pl-10">
          <h3 className="text-[0.72rem] tracking-[0.3em] uppercase text-accent mt-0 mb-5">
            {t("Informações práticas", "Practical information")}
          </h3>
          <ul className="list-none p-0 m-0 space-y-4">
            <li className="text-[0.9rem]">
              <span className="block text-[0.72rem] tracking-[0.18em] uppercase text-foreground-muted mb-1">
                {t("Morada", "Address")}
              </span>
              <span className="text-foreground">Flor de Sal, 5370-210 Mirandela</span>
            </li>
            <li className="text-[0.9rem]">
              <span className="block text-[0.72rem] tracking-[0.18em] uppercase text-foreground-muted mb-1">
                {t("Horário", "Opening hours")}
              </span>
              <span className="text-foreground">
                {t("Todos os dias · 12h30 – 02h00", "Every day · 12:30 pm – 2:00 am")}
              </span>
            </li>
            <li className="text-[0.9rem]">
              <span className="block text-[0.72rem] tracking-[0.18em] uppercase text-foreground-muted mb-1">
                {t("Telefone", "Phone")}
              </span>
              <a href="tel:+351938627619" className="text-accent hover:underline">
                {t("938 627 619", "+351 938 627 619")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
