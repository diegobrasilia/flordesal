import React, { createContext, useContext, useState } from "react";

type Lang = "pt" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (pt: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "pt",
  setLang: () => {},
  t: (pt) => pt,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const t = (pt: string, en: string) => (lang === "pt" ? pt : en);
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
