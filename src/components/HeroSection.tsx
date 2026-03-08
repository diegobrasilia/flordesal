import heroBg from "@/assets/hero-bg.jpg";
import { useLang } from "@/contexts/LangContext";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section
      id="accueil"
      className="relative flex items-center text-foreground overflow-hidden hero-full-height"
      style={{ paddingTop: "90px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay — preserve readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, hsl(0 0% 3% / 0.88) 0%, hsl(0 0% 3% / 0.65) 55%, hsl(0 0% 3% / 0.45) 100%)",
        }}
      />

      {/* Subtle gold glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 15% 60%, hsl(38 38% 54% / 0.07), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1100px] px-6 py-14 md:py-20 max-w-2xl">
        <p className="text-accent text-[0.72rem] tracking-[0.35em] uppercase mb-5 animate-fade-in-up">
          {t("Restaurante · Esplanada · Bar", "Restaurant · Terrace · Bar")}
        </p>
        <h1 className="font-title text-[clamp(2.6rem,4.5vw,3.8rem)] leading-[1.08] mb-6 animate-fade-in-up [animation-delay:0.1s] [animation-fill-mode:both] tracking-[-0.01em]">
          {t("Um lugar para desfrutar Mirandela", "A place to enjoy Mirandela")}
        </h1>
        <p className="text-foreground-muted max-w-[34rem] mb-10 text-[0.95rem] leading-relaxed animate-fade-in-up [animation-delay:0.2s] [animation-fill-mode:both]">
          {t(
            "Produtos sazonais, inspirações de Trás-os-Montes e da costa portuguesa, num ambiente acolhedor com vista sobre Mirandela. Boa comida. Bom vinho. Boas pessoas.",
            "Seasonal produce, inspirations from Trás-os-Montes and the Portuguese coast, in a warm setting overlooking Mirandela. Good food. Good wine. Good people."
          )}
        </p>
        <div className="flex flex-wrap gap-3 animate-fade-in-up [animation-delay:0.3s] [animation-fill-mode:both]">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-accent text-accent-foreground text-[0.8rem] tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5"
          >
            {t("Reservar mesa", "Book a table")}
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/25 text-foreground text-[0.8rem] tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            Menu
          </a>
        </div>
      </div>
    </section>
  );
}
