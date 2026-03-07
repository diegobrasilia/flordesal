import heroBg from "@/assets/hero-bg.jpg";
import { useLang } from "@/contexts/LangContext";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center text-foreground"
      style={{
        backgroundImage: `
          radial-gradient(circle at top, rgba(201,166,107,0.18), transparent 55%),
          linear-gradient(to bottom, rgba(0,0,0,0.72), rgba(5,6,8,0.97)),
          url(${heroBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "90px",
      }}
    >
      <div className="mx-auto max-w-[1100px] px-6 py-14 md:py-20 max-w-2xl">
        <p className="text-accent text-[0.8rem] tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          {t("Restaurante · Esplanada · Bar", "Restaurant · Terrace · Bar")}
        </p>
        <h1 className="font-title text-[clamp(2.4rem,4vw,3.4rem)] leading-[1.1] mb-5 animate-fade-in-up [animation-delay:0.1s] [animation-fill-mode:both]">
          {t("Um lugar para desfrutar Mirandela", "A place to enjoy Mirandela")}
        </h1>
        <p className="text-foreground-muted max-w-[34rem] mb-8 animate-fade-in-up [animation-delay:0.2s] [animation-fill-mode:both]">
          {t(
            "Produtos sazonais, inspirações de Trás-os-Montes e da costa portuguesa, num ambiente acolhedor com vista sobre Mirandela. Boa comida. Bom vinho. Boas pessoas.",
            "Seasonal produce, inspirations from Trás-os-Montes and the Portuguese coast, in a warm setting overlooking Mirandela. Good food. Good wine. Good people."
          )}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-accent text-accent-foreground text-[0.9rem] tracking-[0.15em] uppercase font-medium transition-all duration-200 hover:bg-accent-hover hover:-translate-y-0.5 animate-fade-in-up [animation-delay:0.3s] [animation-fill-mode:both]"
        >
          {t("Reservar mesa", "Book a table")}
        </a>
      </div>
    </section>
  );
}
