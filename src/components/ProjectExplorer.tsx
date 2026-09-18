import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage, bi } from "@/lib/i18n";
import { projectCatalog } from "@/data/projectCatalog";
import type { ServiceDef } from "@/data/services";
import { ProjectFlow } from "./ProjectFlow";
import { ProductViews } from "./ProductViews";
import { Reveal } from "./Reveal";

export function ProjectExplorer({ service }: { service: ServiceDef }) {
  const { t, l, language } = useLanguage();
  const requested = useRouterState({ select: (state) => state.location.search.project });
  const navigate = useNavigate();
  const catalog = projectCatalog[service.slug];
  const project = catalog.projects.find((item) => item.id === requested) ?? catalog.projects[0];
  const category = (kind: typeof project.kind) =>
    kind === "project"
      ? t("Proyecto descrito", "Project overview")
      : kind === "partner"
        ? t("Colaboración", "Partnership")
        : t("Concepto de solución", "Solution concept");
  const architecture =
    service.slug === "edicion-digital"
      ? [
          bi("Brief", "Brief"),
          bi("Diseño", "Design"),
          bi("Formatos", "Formats"),
          bi("Entrega", "Delivery"),
        ]
      : [
          bi("Usuario", "User"),
          bi("Interfaz", "Interface"),
          bi("API / Integración", "API / Integration"),
          service.slug === "ia-automatizacion" || service.slug === "ingenieria"
            ? bi("IA / Automatización", "AI / Automation")
            : bi("Datos / Procesamiento", "Data / Processing"),
          bi("Panel / Notificaciones", "Dashboard / Notifications"),
        ];
  return (
    <div className="project-explorer" data-specialization={service.slug}>
      <section className="specialization-map-section">
        <span className="eyebrow">{t("01 / El sistema", "01 / The system")}</span>
        <h2>{t("Cada pieza tiene un propósito.", "Every component has a purpose.")}</h2>
        <p className="section-description">
          {t(
            "Selecciona un proyecto y sigue el recorrido desde la entrada hasta el resultado.",
            "Choose a project and follow the journey from input to outcome.",
          )}
        </p>
        <div className="specialization-flow-legend">
          {catalog.flow.map((node, i) => (
            <span key={node.es}>
              {l(node)}
              {i < catalog.flow.length - 1 && <span aria-hidden="true"> → </span>}
            </span>
          ))}
        </div>
        <ProjectFlow
          key={service.slug + project.id}
          nodes={project.modules}
          tags={catalog.tags}
          variant={service.slug}
          title={l(project.name)}
        />
      </section>
      <section className="project-workspace" id="proyectos">
        <aside className="project-navigation">
          <span className="eyebrow">
            {t("02 / Proyectos", "02 / Projects")} ·{" "}
            {String(catalog.projects.length).padStart(2, "0")}
          </span>
          <label className="project-mobile-label" htmlFor="project-select">
            {t("Seleccionar proyecto", "Choose a project")}
          </label>
          <select
            id="project-select"
            value={project.id}
            onChange={(e) => {
              void navigate({
                to: "/servicios/$slug",
                params: { slug: service.slug },
                search: (previous) => ({ ...previous, project: e.target.value }),
                replace: true,
                resetScroll: false,
              });
            }}
          >
            {catalog.projects.map((item) => (
              <option key={item.id} value={item.id}>
                {l(item.name)}
              </option>
            ))}
          </select>
          <nav
            className="project-nav-list"
            aria-label={t("Proyectos de la especialización", "Specialisation projects")}
          >
            {catalog.projects.map((item, i) => (
              <Link
                key={item.id}
                to="/servicios/$slug"
                params={{ slug: service.slug }}
                search={{ lang: language, project: item.id }}
                replace
                resetScroll={false}
                aria-current={project.id === item.id ? "true" : undefined}
              >
                <span className="project-nav-number">0{i + 1}</span>
                <div>
                  <strong>{l(item.name)}</strong>
                  <p>{l(item.summary)}</p>
                  <small>
                    {category(item.kind)} · {l(catalog.type)}
                  </small>
                  <span className="project-nav-tags">
                    {catalog.tags.map((tag) => (
                      <span key={tag}>{t(tag)}</span>
                    ))}
                  </span>
                  <span className="project-open-label">
                    {t("Abrir experiencia", "Open experience")} <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </nav>
        </aside>
        <article className="project-story" key={project.id} aria-label={l(project.name)}>
          <span className="eyebrow">
            {category(project.kind)} / {l(catalog.type)}
          </span>
          <h2>{l(project.name)}</h2>
          <p className="project-lead">{l(project.summary)}</p>
          <div className="project-disclosure">
            <span className="status-dot" />
            {project.kind === "concept"
              ? t(
                  "Propuesta conceptual para mostrar cómo abordo este tipo de solución.",
                  "A conceptual proposal showing how I approach this type of solution.",
                )
              : t(
                  "Descripción basada en el proyecto. Las interfaces y diagramas siguientes son ilustrativos.",
                  "Description based on the project. The interfaces and diagrams below are illustrative.",
                )}
          </div>
          <dl className="project-narrative">
            <div>
              <dt>{t("El problema")}</dt>
              <dd>{l(project.problem)}</dd>
            </div>
            <div>
              <dt>
                {project.kind === "concept"
                  ? t("Qué se propone", "What is proposed")
                  : t("Qué se construyó", "What was built")}
              </dt>
              <dd>{l(project.summary)}</dd>
            </div>
            <div>
              <dt>{t("Cómo funciona", "How it works")}</dt>
              <dd>
                {project.modules.map(l).join(" → ")}.{" "}
                {t(
                  "Selecciona los módulos del mapa para recorrer cada etapa.",
                  "Select the map modules to explore each stage.",
                )}
              </dd>
            </div>
            <div>
              <dt>{t("Mi papel", "My role")}</dt>
              <dd>
                {project.kind === "partner"
                  ? t(
                      "Colaboración como partner en vigilancia con IA. El alcance específico se define con la empresa colaboradora.",
                      "Partnership in AI surveillance. The specific scope is defined with the partner company.",
                    )
                  : project.kind === "concept"
                    ? t(
                        "Diseño de la propuesta y del recorrido conceptual. Esta vista no acredita un despliegue real.",
                        "Design of the proposal and conceptual workflow. This view does not represent a live deployment.",
                      )
                    : t(
                        "Desarrollo de la solución y conexión de sus herramientas. Los detalles de implementación se incorporarán con la documentación del proyecto.",
                        "Solution development and connection of its tools. Implementation details will be added with the project documentation.",
                      )}
              </dd>
            </div>
            <div>
              <dt>{t("Resultado que busca", "Intended outcome")}</dt>
              <dd>{l(project.outcome)}</dd>
            </div>
          </dl>
          <div className="project-module-list">
            <h3>{t("Módulos del recorrido", "Workflow modules")}</h3>
            {project.modules.map((module) => (
              <span key={module.es}>
                <Check size={14} />
                {l(module)}
              </span>
            ))}
          </div>
          <div className="project-technologies">
            <h3>{t("Tecnologías de referencia", "Reference technologies")}</h3>
            <p>
              {t(
                "Stack de la especialización; no presupone la implementación concreta de este proyecto.",
                "Specialisation toolkit; it does not imply this project's specific implementation.",
              )}
            </p>
            <div>
              {(service.tech ?? catalog.tags).map((tech) => (
                <span key={tech}>{t(tech)}</span>
              ))}
            </div>
          </div>
          {project.url ? (
            <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
              {t("Abrir producto", "Open product")} <ArrowUpRight size={16} />
            </a>
          ) : (
            <a className="text-link" href="#vista-producto">
              {t("Explorar vista conceptual", "Explore conceptual view")} <ArrowUpRight size={16} />
            </a>
          )}
        </article>
      </section>
      <div id="vista-producto">
        <ProductViews key={project.id} project={project} specialization={service.slug} />
      </div>
      <section className="project-architecture">
        <Reveal>
          <span className="eyebrow">{t("05 / Arquitectura", "05 / Architecture")}</span>
          <h2>{t("Cómo funciona", "How it works")}</h2>
          <p className="section-description">
            {t(
              "Arquitectura de referencia: el recorrido se activa al entrar en pantalla. También puedes recorrerlo módulo a módulo.",
              "Reference architecture: the workflow starts when it enters the viewport. You can also explore it module by module.",
            )}
          </p>
        </Reveal>
        <ProjectFlow
          key={"architecture-" + project.id}
          nodes={architecture}
          tags={
            service.slug === "edicion-digital"
              ? ["Brief", "Design", "Media", "Export"]
              : [
                  "Roles",
                  "UI",
                  "API",
                  service.slug === "ia-automatizacion" || service.slug === "ingenieria"
                    ? "AI"
                    : "DB",
                  "Events",
                ]
          }
          variant={service.slug}
          title={t("De la interacción al resultado", "From interaction to outcome")}
          autoStart
        />
        <div className="architecture-principles">
          <div>
            <span>01 / {t("Acceso", "Access")}</span>
            <h3>{t("Roles y permisos", "Roles and permissions")}</h3>
            <p>
              {t(
                "Definir quién puede consultar, modificar y aprobar cada operación.",
                "Define who can view, change and approve each operation.",
              )}
            </p>
          </div>
          <div>
            <span>02 / {t("Continuidad", "Continuity")}</span>
            <h3>{t("Registro y notificaciones", "Logging and notifications")}</h3>
            <p>
              {t(
                "Conservar el contexto y hacer visibles los eventos que requieren atención.",
                "Preserve context and highlight events that require attention.",
              )}
            </p>
          </div>
          <div>
            <span>03 / {t("Criterio", "Approach")}</span>
            <h3>{t("Personas al mando", "People in control")}</h3>
            <p>
              {t(
                "La automatización acompaña a los equipos, con validación en los puntos que lo necesitan.",
                "Automation supports teams, with validation where it is needed.",
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
