import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { LOCALES, type Locale, type T } from "@/content/types";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (text: T) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const HTML_LANG: Record<Locale, string> = { pt: "pt-BR", en: "en", es: "es" };

const TITLE: Record<Locale, string> = {
  pt: "Yuri Freitas — Engenheiro de Software Sênior e IA Aplicada",
  en: "Yuri Freitas — Senior Software Engineer & Applied AI",
  es: "Yuri Freitas — Ingeniero de Software Sénior e IA Aplicada",
};

const isLocale = (value: string | null): value is Locale => LOCALES.includes(value as Locale);

function detectLocale(): Locale {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLocale(fromUrl)) return fromUrl;
  try {
    const stored = localStorage.getItem("lang");
    if (isLocale(stored)) return stored;
  } catch {
    /* storage indisponível */
  }
  const browser = navigator.language.slice(0, 2);
  return isLocale(browser) ? browser : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      /* storage indisponível */
    }
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
    document.title = TITLE[locale];
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t: (text: T) => text[locale] }), [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale precisa de <LocaleProvider>");
  return ctx;
}
