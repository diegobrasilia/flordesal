import { useState, FormEvent } from "react";
import { useLang } from "@/contexts/LangContext";

export function ReservationSection() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background text-foreground">
      <div className="mx-auto max-w-[1100px] px-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10">
        {/* Form */}
        <div>
          <h2 className="font-title text-[2rem] mb-2">
            {t("Reservas", "Reservations")}
          </h2>
          <p className="text-foreground-muted mb-6">
            {t(
              "Para qualquer reserva ou pedido de evento privado no Flor de Sal, preencha o formulário abaixo. Entraremos em contacto o mais rapidamente possível.",
              "For any booking or private event request at Flor de Sal, please fill in the form below. We will get back to you as soon as possible."
            )}
          </p>

          {submitted ? (
            <div className="bg-white/5 border border-white/10 rounded-[18px] p-6 text-center">
              <p className="text-[1.1rem] font-title text-foreground mb-1">
                {t("Pedido enviado!", "Request sent!")}
              </p>
              <p className="text-foreground-muted text-[0.9rem]">
                {t("Entraremos em contacto brevemente.", "We will get back to you shortly.")}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-accent-foreground text-[0.85rem] tracking-[0.12em] uppercase cursor-pointer border-0 transition-all hover:bg-accent-hover hover:-translate-y-0.5"
              >
                {t("Nova reserva", "New reservation")}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.04] border border-white/10 rounded-[18px] p-6 space-y-3.5"
            >
              {/* Name */}
              <div>
                <label className="block text-[0.8rem] tracking-[0.15em] uppercase text-foreground-muted mb-1">
                  {t("Nome completo", "Full name")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("O seu nome", "Your name")}
                  className="w-full px-3 py-2.5 rounded-full border border-white/10 bg-white/5 text-foreground text-[0.9rem] outline-none transition-all placeholder:text-foreground-muted/50 focus:border-accent focus:shadow-[0_0_0_1px_rgba(201,166,107,0.4)] font-body"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[0.8rem] tracking-[0.15em] uppercase text-foreground-muted mb-1">
                  {t("Endereço de e-mail", "Email address")}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t("voce@example.com", "you@example.com")}
                  className="w-full px-3 py-2.5 rounded-full border border-white/10 bg-white/5 text-foreground text-[0.9rem] outline-none transition-all placeholder:text-foreground-muted/50 focus:border-accent focus:shadow-[0_0_0_1px_rgba(201,166,107,0.4)] font-body"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-[0.8rem] tracking-[0.15em] uppercase text-foreground-muted mb-1">
                  {t("Data pretendida", "Desired date")}
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-3 py-2.5 rounded-full border border-white/10 bg-white/5 text-foreground text-[0.9rem] outline-none transition-all focus:border-accent focus:shadow-[0_0_0_1px_rgba(201,166,107,0.4)] font-body"
                />
              </div>

              {/* Time & Guests */}
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[0.8rem] tracking-[0.15em] uppercase text-foreground-muted mb-1">
                    {t("Hora", "Time")}
                  </label>
                  <input
                    type="time"
                    required
                    className="w-full px-3 py-2.5 rounded-full border border-white/10 bg-white/5 text-foreground text-[0.9rem] outline-none transition-all focus:border-accent focus:shadow-[0_0_0_1px_rgba(201,166,107,0.4)] font-body"
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] tracking-[0.15em] uppercase text-foreground-muted mb-1">
                    {t("Nº de pessoas", "Guests")}
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    defaultValue={2}
                    required
                    className="w-full px-3 py-2.5 rounded-full border border-white/10 bg-white/5 text-foreground text-[0.9rem] outline-none transition-all focus:border-accent focus:shadow-[0_0_0_1px_rgba(201,166,107,0.4)] font-body"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[0.8rem] tracking-[0.15em] uppercase text-foreground-muted mb-1">
                  {t("Mensagem (alergias, pedidos especiais…)", "Message (allergies, special requests…)")}
                </label>
                <textarea
                  rows={4}
                  placeholder={t("A sua mensagem", "Your message")}
                  className="w-full px-3 py-2.5 rounded-[14px] border border-white/10 bg-white/5 text-foreground text-[0.9rem] outline-none transition-all placeholder:text-foreground-muted/50 focus:border-accent focus:shadow-[0_0_0_1px_rgba(201,166,107,0.4)] resize-y font-body"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-accent text-accent-foreground text-[0.9rem] tracking-[0.15em] uppercase font-medium transition-all duration-200 hover:bg-accent-hover hover:-translate-y-0.5 cursor-pointer border-0 w-full"
              >
                {t("Enviar pedido", "Send request")}
              </button>

              <p className="text-[0.8rem] text-foreground-muted/60 mt-2">
                {t(
                  "Este formulário é um exemplo. Posteriormente poderá ser ligado a um sistema de reservas.",
                  "This form is an example. It can later be connected to a booking system."
                )}
              </p>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-[0.95rem] tracking-[0.18em] uppercase text-accent font-semibold mt-0 mb-2">
            {t("Onde estamos", "Find us")}
          </h3>
          <p className="text-[0.9rem] text-foreground-muted mb-3">
            Flor de Sal, 5370-210 Mirandela
          </p>

          <div className="rounded-[14px] border border-white/10 p-3.5 mb-5 text-center bg-white/[0.03]">
            <iframe
              src="https://www.google.com/maps?q=41.48622215845754,-7.186533015605368&z=19&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-[230px] border-0 rounded-[10px] block"
              title="Flor de Sal map"
            />
            <p className="mt-2 text-[0.8rem] text-foreground-muted">
              {t("Vista aproximada da localização do Flor de Sal.", "Approximate map view of Flor de Sal.")}
            </p>
          </div>

          <h3 className="text-[0.95rem] tracking-[0.18em] uppercase text-accent font-semibold mb-2">
            {t("Contacto direto", "Direct contact")}
          </h3>
          <p className="text-[0.9rem] mt-0 mb-2.5 text-foreground-muted">
            <strong className="text-foreground">{t("Telefone", "Phone")} :</strong>{" "}
            <a href="tel:+351938627619" className="text-accent hover:underline">
              {t("938 627 619", "+351 938 627 619")}
            </a>
          </p>
          <p className="text-[0.9rem] mt-0 mb-2.5 text-foreground-muted">
            <strong className="text-foreground">E-mail :</strong>{" "}
            <a href="mailto:flordesalrestaurante2024@gmail.com" className="text-accent hover:underline break-all">
              flordesalrestaurante2024@gmail.com
            </a>
          </p>
          <p className="text-[0.9rem] mt-0 text-foreground-muted">
            <strong className="text-foreground">{t("Redes sociais", "Social media")} :</strong>{" "}
            <a href="https://www.instagram.com/restaurante.flordesal" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Instagram
            </a>
            {" · "}
            <a href="https://www.facebook.com/flordesalrestaurante" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Facebook
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
