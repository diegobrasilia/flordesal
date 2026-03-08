import { useState, FormEvent } from "react";
import { useLang } from "@/contexts/LangContext";

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/10 text-foreground text-[0.9rem] outline-none transition-all placeholder:text-foreground-muted focus:border-accent focus:bg-white/15 focus:shadow-[0_0_0_2px_hsl(38_38%_54%_/_0.25)] font-body";

const labelClass =
  "block text-[0.75rem] tracking-[0.18em] uppercase text-foreground/70 mb-1.5 font-medium";

export function ReservationSection() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background text-foreground border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1100px] px-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-14">

        {/* Form */}
        <div>
          <p className="text-[0.72rem] tracking-[0.3em] uppercase text-accent mb-2">
            {t("Reservar mesa", "Book a table")}
          </p>
          <h2 className="font-title text-[2rem] mb-3 tracking-[-0.01em]">
            {t("Reservas", "Reservations")}
          </h2>
          <p className="text-foreground/60 text-[0.9rem] mb-7 leading-relaxed">
            {t(
              "Para qualquer reserva ou pedido de evento privado no Flor de Sal, preencha o formulário abaixo. Entraremos em contacto o mais rapidamente possível.",
              "For any booking or private event request at Flor de Sal, please fill in the form below. We will get back to you as soon as possible."
            )}
          </p>

          {submitted ? (
            <div className="bg-white/[0.07] border border-white/20 rounded-2xl p-8 text-center">
              <p className="text-[1.2rem] font-title text-foreground mb-2">
                {t("Pedido enviado!", "Request sent!")}
              </p>
              <p className="text-foreground/60 text-[0.9rem] mb-5">
                {t("Entraremos em contacto brevemente.", "We will get back to you shortly.")}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-accent text-accent-foreground text-[0.82rem] tracking-[0.15em] uppercase font-medium cursor-pointer border-0 transition-all hover:bg-accent-hover hover:-translate-y-0.5"
              >
                {t("Nova reserva", "New reservation")}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Name */}
              <div>
                <label className={labelClass}>{t("Nome completo", "Full name")}</label>
                <input
                  type="text"
                  required
                  placeholder={t("O seu nome", "Your name")}
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>{t("Endereço de e-mail", "Email address")}</label>
                <input
                  type="email"
                  required
                  placeholder={t("voce@example.com", "you@example.com")}
                  className={inputClass}
                />
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>{t("Data", "Date")}</label>
                  <input
                    type="date"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t("Hora", "Time")}</label>
                  <input
                    type="time"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className={labelClass}>{t("Nº de pessoas", "Number of guests")}</label>
                <input
                  type="number"
                  min={1}
                  placeholder={t("Nº de pessoas", "Number of guests")}
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>
                  {t("Mensagem (alergias, pedidos especiais…)", "Message (allergies, special requests…)")}
                </label>
                <textarea
                  rows={4}
                  placeholder={t("A sua mensagem", "Your message")}
                  className={`${inputClass} rounded-xl resize-y`}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-accent text-accent-foreground text-[0.85rem] tracking-[0.18em] uppercase font-medium transition-all duration-200 hover:bg-accent-hover hover:-translate-y-0.5 cursor-pointer border-0 mt-1"
              >
                {t("Enviar pedido", "Send request")}
              </button>

              <p className="text-[0.78rem] text-foreground/35 pt-1">
                {t(
                  "Este formulário é um exemplo. Posteriormente poderá ser ligado a um sistema de reservas.",
                  "This form is an example. It can later be connected to a booking system."
                )}
              </p>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div className="border-l border-white/[0.06] pl-10">
          <p className="text-[0.72rem] tracking-[0.3em] uppercase text-accent mb-5">
            {t("Onde estamos", "Find us")}
          </p>

          <div className="rounded-xl overflow-hidden border border-white/15 mb-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d603.6!2d-7.1863967!3d41.4861859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3b0ece25fb40a7%3A0x40ac1712a19297c8!2sFlor%20de%20Sal!5e0!3m2!1spt!2spt!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full h-[200px] border-0 block"
              title="Flor de Sal map"
            />
          </div>

          <ul className="space-y-4 text-[0.9rem] mt-5">
            <li>
              <span className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                {t("Morada", "Address")}
              </span>
              <span className="text-foreground/80">Flor de Sal, 5370-210 Mirandela</span>
            </li>
            <li>
              <span className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                {t("Telefone", "Phone")}
              </span>
              <a href="tel:+351938627619" className="text-accent hover:underline">
                {t("938 627 619", "+351 938 627 619")}
              </a>
            </li>
            <li>
              <span className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                E-mail
              </span>
              <a href="mailto:flordesalrestaurante2024@gmail.com" className="text-accent hover:underline break-all">
                flordesalrestaurante2024@gmail.com
              </a>
            </li>
            <li>
              <span className="block text-[0.7rem] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                {t("Redes sociais", "Social media")}
              </span>
              <a href="https://www.instagram.com/restaurante.flordesal" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Instagram
              </a>
              <span className="text-foreground/30 mx-2">·</span>
              <a href="https://www.facebook.com/flordesalrestaurante" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
