import { useLanguage } from "@/lib/i18n";
import { Instagram, Linkedin, Mail, ArrowUpRight, ArrowUp, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
export function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("danielgil@agrogarpe.es");
      setCopied(true);
      setError(false);
    } catch {
      setError(true);
    }
  }
  return (
    <section id="contacto" className="contact-section section-shell">
      <div className="section-topline">
        <span className="eyebrow">{t("04 / El siguiente paso")}</span>
        <span>
          <i className="status-dot" />
          {t("Abierto a nuevas ideas")}
        </span>
      </div>
      <h2>
        {t("Tu próximo")}
        <br />
        <span className="serif-word">{t("proceso resuelto.")}</span>
        <ArrowUpRight className="contact-arrow" aria-hidden="true" />
      </h2>
      <div className="contact-paths">
        <a
          href={
            "mailto:danielgil@agrogarpe.es?subject=" +
            encodeURIComponent(t("Quiero digitalizar mi empresa"))
          }
        >
          <span className="eyebrow">{t("01 / Solución completa")}</span>
          <strong>
            {t("Quiero digitalizar mi empresa")}
            <ArrowUpRight size={20} />
          </strong>
          <span>
            {t("Conectar herramientas, ordenar procesos y construir una solución a medida.")}
          </span>
        </a>
        <a
          href={
            "mailto:danielgil@agrogarpe.es?subject=" +
            encodeURIComponent(t("Busco apoyo técnico para un proyecto"))
          }
        >
          <span className="eyebrow">{t("02 / Colaboración técnica")}</span>
          <strong>
            {t("Busco apoyo técnico para un proyecto")}
            <ArrowUpRight size={20} />
          </strong>
          <span>
            {t(
              "Sumar un perfil full stack para desarrollar módulos e integraciones junto a tu equipo.",
            )}
          </span>
        </a>
      </div>
      <div className="contact-bottom">
        <div>
          <p>
            {t("¿Un sistema completo o un proyecto en marcha?")}
            <br />
            {t("Cuéntame cómo trabajas y qué necesitas conectar.")}
          </p>
          <div className="email-row">
            <a href="mailto:danielgil@agrogarpe.es">{t("danielgil@agrogarpe.es")}</a>
            <button className="icon-button" aria-label={t("Copiar email")} onClick={copyEmail}>
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
          <span className="copy-status" role="status">
            {t(
              error ? "Puedes seleccionar el email para copiarlo." : copied ? "Email copiado." : "",
            )}
          </span>
        </div>
        <a
          className="pill-button primary-button"
          href="https://wa.me/34613139017"
          target="_blank"
          rel="noreferrer"
        >
          {t("Hablemos por WhatsApp")}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="portfolio-footer">
      <a className="wordmark" href="#top" aria-label={t("Daniel Gil, inicio")}>
        <Logo />
      </a>
      <span>
        © {new Date().getFullYear()} {t("Daniel Gil · Impulso Digital")}
      </span>
      <div>
        <a
          href="https://instagram.com/danielgil.io"
          aria-label={t("Instagram")}
          target="_blank"
          rel="noreferrer"
        >
          <Instagram size={19} />
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-garcia-gil-b37212175/"
          aria-label={t("LinkedIn")}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={19} />
        </a>
        <a href="mailto:danielgil@agrogarpe.es" aria-label={t("Email")}>
          <Mail size={19} />
        </a>
        <a href="#top" aria-label={t("Volver arriba")}>
          <ArrowUp size={19} />
        </a>
      </div>
    </footer>
  );
}
