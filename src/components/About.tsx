import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";
import { ArrowUpRight } from "lucide-react";
export function About() {
  const { t } = useLanguage();
  return (
    <section id="sobre-mi" className="about-section section-shell">
      <Reveal className="about-grid">
        <div>
          <span className="eyebrow">{t("La persona detrás del código")}</span>
          <div className="about-monogram" aria-hidden="true">
            <Logo />
          </div>
        </div>
        <div>
          <h2>
            {t("Mente de ingeniero.")}
            <br />
            <span className="serif-word">{t("Foco en tu negocio.")}</span>
          </h2>
          <p>
            {t(
              "Soy Daniel, ingeniero de Telecomunicaciones y desarrollador full stack. Construyo aplicaciones, conecto herramientas y automatizo procesos para que la tecnología encaje en la forma de trabajar de cada empresa.",
            )}
          </p>
          <p>
            {t(
              "Puedo construir una solución completa desde cero o integrarme en equipos existentes para desarrollar módulos, automatizaciones e integraciones. Trabajo desde la interfaz hasta el backend, las APIs y los datos, entendiendo los procesos y el contexto de cada equipo.",
            )}
          </p>
          <a className="text-link" href="#experiencia">
            {t("Conoce mi trayectoria")}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
