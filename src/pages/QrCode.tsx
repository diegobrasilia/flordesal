import { QRCodeSVG } from "qrcode.react";

const MENU_URL = "https://flordesal.lovable.app/#menu";

export default function QrCode() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="flex flex-col items-center gap-6 p-12 rounded-2xl"
        style={{
          background: "#111",
          border: "1px solid rgba(184,150,96,0.2)",
          boxShadow: "0 0 60px rgba(184,150,96,0.08)",
        }}
      >
        {/* Logo text */}
        <p
          className="tracking-[0.35em] uppercase text-[0.75rem]"
          style={{ color: "#b89660", fontFamily: "Inter, sans-serif" }}
        >
          Flor de Sal
        </p>

        {/* Title */}
        <h1
          className="text-[1.5rem] font-normal mt-0 mb-0"
          style={{ color: "#e8dcc8", fontFamily: "'Playfair Display', serif" }}
        >
          Menu
        </h1>

        {/* QR Code */}
        <div className="p-4 rounded-xl" style={{ background: "#0a0a0a" }}>
          <QRCodeSVG
            value={MENU_URL}
            size={220}
            level="H"
            fgColor="#ffffff"
            bgColor="#0a0a0a"
          />
        </div>

        {/* Subtitle */}
        <p
          className="text-[0.78rem] tracking-widest uppercase mt-1"
          style={{ color: "rgba(184,150,96,0.6)", fontFamily: "Inter, sans-serif" }}
        >
          Consulte o nosso menu
        </p>

        {/* Print button */}
        <button
          onClick={() => window.print()}
          className="mt-2 px-6 py-2.5 text-[0.78rem] tracking-[0.15em] uppercase rounded"
          style={{
            background: "transparent",
            border: "1px solid rgba(184,150,96,0.4)",
            color: "#b89660",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Imprimir
        </button>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          button { display: none !important; }
          body { background: #0a0a0a !important; }
        }
      `}</style>
    </div>
  );
}
