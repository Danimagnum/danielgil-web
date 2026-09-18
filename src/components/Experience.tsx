import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
const items = [
  {
    company: "AGROGARPE SL",
    period: "2022 — Actualidad",
    role: "Gestión digital integral",
    detail: "Presencia online, branding, automatización e infraestructura tecnológica.",
  },
  {
    company: "Pavimentos Generalife SL",
    period: "2022 — Actualidad",
    role: "Soporte digital",
    detail: "Soporte tecnológico y automatización de procesos de negocio.",
  },
  {
    company: "REPSOL",
    period: "2024 — 2025",
    role: "Gestión y modelado de datos",
    detail: "Modelado de datos y optimización de procesos.",
  },
  {
    company: "Importaciones Xibanya",
    period: "2023 — 2024",
    role: "Gestión digital integral",
    detail: "Bases de datos y gestión de herramientas digitales.",
  },
];
export function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experiencia" className="section-shell experience-section">
      <Reveal>
        <div className="section-topline">
          <span className="eyebrow">{t("02 / Trayectoria")}</span>
          <span className="small-note">{t("2022 — PRESENTE")}</span>
        </div>
        <div className="section-heading">
          <h2>
            {t("Tecnología aplicada.")}
            <br />
            <span className="muted-heading">{t("Experiencia real.")}</span>
          </h2>
          <p>
            {t("De la operativa de una pyme a los datos en un entorno empresarial.")}
            <br />
            {t("Entender procesos, colaborar con equipos y construir producto.")}
          </p>
        </div>
      </Reveal>
      <div className="experience-list">
        {items.map((it, i) => (
          <Reveal key={it.company} delay={i * 50} as="article" className="experience-row">
            <span className="experience-number">0{i + 1}</span>
            <div>
              <h3>{it.company}</h3>
              <p>{t(it.detail)}</p>
            </div>
            <span className="experience-role">{t(it.role)}</span>
            <span className="experience-period">{t(it.period)}</span>
          </Reveal>
        ))}
      </div>
      <div className="stack-strip">
        <span className="eyebrow">{t("Mi caja de herramientas")}</span>
        <div>
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Python",
            "Node.js",
            "SQL",
            "PostgreSQL",
            "Snowflake",
            "DBT",
            "AWS",
            "n8n",
            "OpenAI",
            "APIs REST",
            "Power BI",
            "GitHub",
            "Figma",
          ].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
