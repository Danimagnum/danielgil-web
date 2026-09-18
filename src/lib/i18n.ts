import { useCallback, useEffect, useSyncExternalStore } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { english } from "@/data/english";

export type Language = "es" | "en";
export type Bilingual = { es: string; en: string };
export const bi = (es: string, en: string): Bilingual => ({ es, en });
const listeners = new Set<() => void>();
function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}
function savedLanguage(): Language {
  try {
    return localStorage.getItem("portfolio-language") === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}
export function translate(text: string, language: Language, alternative?: string) {
  return language === "en"
    ? (alternative ?? english[text.replace(/\s+/g, " ").trim()] ?? text)
    : text;
}
export function translateData<T>(value: T, language: Language): T {
  if (typeof value === "string") return translate(value, language) as T;
  if (Array.isArray(value)) return value.map((item) => translateData(item, language)) as T;
  if (value && typeof value === "object")
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, translateData(item, language)]),
    ) as T;
  return value;
}
export function useLanguage() {
  const searchLanguage = useRouterState({ select: (state) => state.location.search.lang });
  const saved = useSyncExternalStore(subscribe, savedLanguage, () => "es" as Language);
  const language = searchLanguage ?? saved;
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.lang = language;
    // During hydration the server snapshot is Spanish. Only an explicit URL
    // preference may overwrite a previously saved choice.
    if (!searchLanguage) return;
    try {
      localStorage.setItem("portfolio-language", searchLanguage);
    } catch {
      /* Storage is optional. */
    }
  }, [language, searchLanguage]);
  const setLanguage = (next: Language) => {
    try {
      localStorage.setItem("portfolio-language", next);
    } catch {
      /* Storage is optional. */
    }
    listeners.forEach((listener) => listener());
    void navigate({
      to: ".",
      search: (previous) => ({ ...previous, lang: next }),
      replace: true,
      resetScroll: false,
    });
  };
  const t = useCallback((text: string, en?: string) => translate(text, language, en), [language]);
  const l = (text: Bilingual) => text[language];
  const href = (path: string) => {
    const [base, hash] = path.split("#");
    return `${base || "/"}?lang=${language}${hash ? "#" + hash : ""}`;
  };
  return { language, setLanguage, t, l, href };
}
