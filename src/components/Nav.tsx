import { useLanguage } from "@/lib/i18n";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/#laboratorio", label: "Laboratorio" },
  { href: "/#experiencia", label: "Trayectoria" },
  { href: "/#estudios", label: "Especialización" },
];
export function Nav() {
  const { t, language, href, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">
        {t("Saltar al contenido")}
      </a>
      <nav className="main-nav" aria-label={t("Navegación principal")}>
        <a href={href("/#top")} className="wordmark" aria-label={t("Daniel Gil, inicio")}>
          <Logo />
          <small>
            {t("DANIEL GIL")}
            <br />
            {t("IMPULSO DIGITAL")}
          </small>
        </a>
        <div className="desktop-nav">
          {links.map((l) => (
            <a key={l.href} href={href(l.href)}>
              {t(l.label)}
            </a>
          ))}
        </div>
        <a className="nav-contact" href={href("/#contacto")}>
          {t("Hablemos")}
          <ArrowUpRight size={16} />
        </a>
        <div className="language-switch" role="group" aria-label={t("Idioma", "Language")}>
          {(["es", "en"] as const).map((lang) => (
            <button
              key={lang}
              lang={lang}
              aria-label={lang === "es" ? "Español" : "English"}
              aria-pressed={language === lang}
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          id="menu-toggle"
          className="mobile-toggle icon-button"
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={t(open ? "Cerrar menú" : "Abrir menú")}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div id="mobile-nav" className="mobile-nav">
          {[
            ...links,
            { href: "/#sobre-mi", label: "Sobre mí" },
            { href: "/#contacto", label: "Contacto" },
          ].map((l) => (
            <a key={l.href} href={href(l.href)} onClick={() => setOpen(false)}>
              {t(l.label)}
              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
