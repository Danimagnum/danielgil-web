import { Reveal } from "./Reveal";

const items = [
  {
    company: "AGROGARPE SL",
    period: "2022 — Actualidad",
    role: "Gestión digital integral",
    points: [
      "Presencia online",
      "Branding",
      "Automatización",
      "Infraestructura tecnológica",
      "Gestión de contenido",
      "Desarrollo digital",
    ],
    featured: true,
  },
  {
    company: "Pavimentos Generalife SL",
    period: "2022 — Actualidad",
    role: "Soporte digital",
    points: ["Soporte digital", "Automatización"],
  },
  {
    company: "Importaciones Xibanya",
    period: "2023 — 2024",
    role: "Gestión digital integral",
    points: ["Bases de datos", "Gestión digital integral"],
  },
  {
    company: "REPSOL",
    period: "2024 — 2025",
    role: "Gestión y modelado de datos",
    points: ["Gestión y modelado de datos", "Optimización de procesos"],
  },
];

const techGroups = [
  ["React", "Next.js", "Tailwind CSS", "Node.js", "Python"],
  ["SQL", "PostgreSQL", "Snowflake", "DBT", "AWS"],
  ["OpenAI", "APIs REST", "n8n"],
  ["Power BI", "GitHub", "Figma"],
];

export function Experience() {
  return (
    <section id="experiencia" className="relative py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              02 — Experiencia
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
              Experiencia técnica y soluciones digitales para empresas.
            </h2>
          </div>
          <span className="text-sm text-muted-foreground">/ 2022 — Presente</span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <Reveal
              key={it.company}
              delay={i * 80}
              as="article"
              className={`relative rounded-3xl bg-surface-elevated border border-border p-8 ${
                it.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="mb-10">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {it.period}
                </span>
              </div>
              <h3
                className={`font-semibold tracking-tight mb-2 ${
                  it.featured ? "text-3xl sm:text-4xl" : "text-2xl"
                }`}
              >
                {it.company}
              </h3>
              <p className="text-muted-foreground mb-6">{it.role}</p>
              <ul className="flex flex-wrap gap-2">
                {it.points.map((p) => (
                  <li
                    key={p}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    <span className="size-1 rounded-full bg-primary/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Tecnologías & Herramientas */}
        <Reveal delay={120}>
          <div className="mt-16 rounded-3xl bg-surface-elevated border border-border p-8 sm:p-12">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Tecnologías & Herramientas
              </div>
              <span className="text-xs text-muted-foreground">/ Stack</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
              {techGroups.map((group, gi) => (
                <div key={gi} className="flex items-center flex-wrap gap-x-3 gap-y-2">
                  {group.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-foreground/30 hover:-translate-y-0.5 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                  {gi < techGroups.length - 1 && (
                    <span className="text-2xl text-muted-foreground/40 font-light px-1">/</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
