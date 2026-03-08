import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { name, email, date, time, guests, message } = await req.json();

    const html = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #faf9f7; border: 1px solid #e5e0d8;">
        <h1 style="font-size: 1.6rem; color: #1f1d1a; margin-bottom: 4px;">Nouvelle réservation — Flor de Sal</h1>
        <p style="color: #b89660; font-size: 0.85rem; margin-top: 0; margin-bottom: 24px;">Reçue via le site internet</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e0d8; color: #6b6760; width: 140px;">Nom</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e0d8; color: #1f1d1a; font-weight: 600;">${name}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e0d8; color: #6b6760;">E-mail</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e0d8; color: #1f1d1a;">${email}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e0d8; color: #6b6760;">Date</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e0d8; color: #1f1d1a;">${date}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e0d8; color: #6b6760;">Heure</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e0d8; color: #1f1d1a;">${time}</td></tr>
          ${guests ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e0d8; color: #6b6760;">Nb personnes</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e0d8; color: #1f1d1a;">${guests}</td></tr>` : ""}
          ${message ? `<tr><td style="padding: 10px 0; color: #6b6760; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #1f1d1a;">${message}</td></tr>` : ""}
        </table>
        <p style="margin-top: 32px; font-size: 0.78rem; color: #b89660; border-top: 1px solid #e5e0d8; padding-top: 16px;">Flor de Sal · 5370-210 Mirandela</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Flor de Sal <onboarding@resend.dev>",
        to: ["diegobessoudo@gmail.com"],
        subject: `Réservation — ${name} · ${date} à ${time}`,
        html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Resend error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
