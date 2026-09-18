import { useState } from "react";
import { ArrowUpRight, LayoutDashboard, List, ScanLine, Workflow } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import type { PortfolioProject } from "@/data/projectCatalog";

export function ProductViews({
  project,
  specialization,
}: {
  project: PortfolioProject;
  specialization: string;
}) {
  const { t, l } = useLanguage();
  const [view, setView] = useState(0);
  const [period, setPeriod] = useState(0);
  const [record, setRecord] = useState(0);
  const views = [
    t("Dashboard", "Dashboard"),
    t("Panel principal", "Main panel"),
    t("Vista de detalle", "Detail view"),
    t("Automatización / flujo", "Automation / flow"),
  ];
  const icons = [LayoutDashboard, List, ScanLine, Workflow];
  const bars = period === 0 ? [35, 52, 46, 69, 60, 82, 74] : [42, 38, 62, 57, 79, 70, 91];
  return (
    <section className="product-views" aria-label={t("Vistas del producto", "Product views")}>
      <div className="product-view-heading">
        <div>
          <span className="eyebrow">{t("04 / Vista visual", "04 / Product views")}</span>
          <h2>{t("Explora la experiencia.", "Explore the experience.")}</h2>
        </div>
        <p>
          {t(
            "Representaciones conceptuales, no capturas del producto real. Datos de ejemplo para explorar la interfaz.",
            "Conceptual representations, not screenshots of the actual product. Sample data to explore the interface.",
          )}
        </p>
      </div>
      <div
        className="product-view-tabs"
        role="group"
        aria-label={t("Cambiar vista", "Change view")}
      >
        {views.map((name, i) => {
          const Icon = icons[i];
          return (
            <button key={name} aria-pressed={view === i} onClick={() => setView(i)}>
              <Icon size={16} />
              {name}
            </button>
          );
        })}
      </div>
      <div className="product-window" data-specialization={specialization}>
        <div className="product-window-bar">
          <span>
            <i />
            <i />
            <i />
          </span>
          <span>
            {l(project.name)} / {views[view]}
          </span>
          <span className="demo-label">DEMO</span>
        </div>
        <div className="product-window-body">
          <aside className="product-rail">
            <span className="eyebrow">DG / {t("Concepto", "Concept")}</span>
            {project.modules.map((module, i) => (
              <button
                key={module.es}
                onClick={() => {
                  setRecord(i);
                  setView(2);
                }}
                aria-pressed={record === i && view === 2}
              >
                {String(i + 1).padStart(2, "0")} <span>{l(module)}</span>
              </button>
            ))}
          </aside>
          <div className="product-screen">
            <header>
              <div>
                <span className="eyebrow">{t("Entorno de demostración", "Demo environment")}</span>
                <h3>{views[view]}</h3>
              </div>
              <ArrowUpRight size={22} />
            </header>
            {view === 0 && (
              <>
                <div className="demo-metrics">
                  <div>
                    <small>{t("Registros", "Records")}</small>
                    <strong>{period === 0 ? "128" : "156"}</strong>
                  </div>
                  <div>
                    <small>{t("En revisión", "Under review")}</small>
                    <strong>{period === 0 ? "12" : "8"}</strong>
                  </div>
                  <div>
                    <small>{t("Completados", "Completed")}</small>
                    <strong>{period === 0 ? "116" : "148"}</strong>
                  </div>
                </div>
                <div className="demo-chart-heading">
                  <span>{t("Actividad de ejemplo", "Sample activity")}</span>
                  <div role="group" aria-label={t("Periodo", "Period")}>
                    <button aria-pressed={period === 0} onClick={() => setPeriod(0)}>
                      {t("Semana A", "Week A")}
                    </button>
                    <button aria-pressed={period === 1} onClick={() => setPeriod(1)}>
                      {t("Semana B", "Week B")}
                    </button>
                  </div>
                </div>
                {specialization === "ingenieria" ? (
                  <div className="demo-sectors">
                    {bars.slice(0, 6).map((value, i) => (
                      <button
                        key={i}
                        onClick={() => setRecord(i % project.modules.length)}
                        className={record === i % project.modules.length ? "selected" : ""}
                      >
                        <ScanLine size={23} />
                        <span>
                          {t("Zona", "Area")} {i + 1}
                        </span>
                        <small>
                          {value} {t("eventos de ejemplo", "sample events")}
                        </small>
                      </button>
                    ))}
                  </div>
                ) : specialization === "edicion-digital" ? (
                  <div className="demo-formats">
                    <div>
                      <span>DG / STUDIO</span>
                      <strong>{t("Una idea.", "One idea.")}</strong>
                      <small>01 / POSTER</small>
                    </div>
                    <div>
                      <span>DG / STUDIO</span>
                      <strong>{t("Muchos formatos.", "Many formats.")}</strong>
                      <small>02 / SOCIAL</small>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`demo-data-chart ${specialization === "marketing" ? "is-funnel" : ""}`}
                    aria-label={t("Gráfico con datos de ejemplo", "Chart with sample data")}
                  >
                    {bars.map((value, i) => (
                      <div key={i}>
                        <span style={{ transform: `scaleY(${value / 100})` }} />
                        <small>{value}</small>
                      </div>
                    ))}
                  </div>
                )}
                <p className="demo-screen-note">
                  {t(
                    "Estas cifras son ficticias y no representan resultados de clientes.",
                    "These figures are fictional and do not represent client results.",
                  )}
                </p>
              </>
            )}
            {view === 1 && (
              <div className="demo-records">
                <div className="demo-table-heading">
                  <span>{t("Módulo", "Module")}</span>
                  <span>{t("Estado")}</span>
                </div>
                {project.modules.map((module, i) => (
                  <button
                    key={module.es}
                    onClick={() => {
                      setRecord(i);
                      setView(2);
                    }}
                  >
                    <span>
                      <small>DG-{String(i + 1).padStart(3, "0")}</small>
                      {l(module)}
                    </span>
                    <span>
                      {i % 2 ? t("En revisión", "Under review") : t("Preparado", "Ready")} ↗
                    </span>
                  </button>
                ))}
              </div>
            )}
            {view === 2 && (
              <div className="demo-detail">
                <span className="eyebrow">DG-{String(record + 1).padStart(3, "0")}</span>
                <h4>{l(project.modules[record])}</h4>
                <p>{l(project.summary)}</p>
                <dl>
                  <dt>{t("Estado")}</dt>
                  <dd>{t("Listo para revisión", "Ready for review")}</dd>
                  <dt>{t("Acceso", "Access")}</dt>
                  <dd>{t("Equipo autorizado", "Authorised team")}</dd>
                  <dt>{t("Siguiente paso", "Next step")}</dt>
                  <dd>{l(project.modules[(record + 1) % project.modules.length])}</dd>
                </dl>
                <button className="text-link" onClick={() => setView(1)}>
                  {t("Volver al panel", "Back to panel")} ↗
                </button>
              </div>
            )}
            {view === 3 && (
              <div className="demo-workflow">
                {project.modules.map((module, i) => (
                  <button key={module.es} aria-pressed={record === i} onClick={() => setRecord(i)}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <strong>{l(module)}</strong>
                    <small>
                      {record === i ? t("Seleccionado", "Selected") : t("Explorar", "Explore")}
                    </small>
                  </button>
                ))}
                <p>
                  {t(
                    "Selecciona un paso para explorar el recorrido.",
                    "Select a step to explore the workflow.",
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="product-view-index">
        {views.map((name, i) => (
          <button key={name} onClick={() => setView(i)} aria-pressed={view === i}>
            <span>0{i + 1}</span>
            {name}
          </button>
        ))}
      </div>
    </section>
  );
}
