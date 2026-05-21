import { Reveal } from "./Reveal";

const items = [
  {
    company: "AGROGARPE SL",
    period: "2022 — Actualidad",
    role: "Gestión digital integral",
    points: [
      "Presencia online y branding",
      "Automatización e infraestructura tecnológica",
      "Gestión de contenido y desarrollo digital",
    ],
    featured: true,
  },
  {
    company: "Pavimentos Generalife SL",
    period: "Colaboración",
    role: "Soporte digital",
    points: ["Soporte digital", "Automatización de procesos"],
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
    role: "Bases de datos SQL",
    points: ["Gestión y modelado de datos", "Arquitectura SQL"],
  },
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
              className={`group relative rounded-3xl bg-surface-elevated border border-border p-8 hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 ${
                it.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {it.period}
                </span>
                <span className="size-8 rounded-full bg-accent flex items-center justify-center text-foreground/60 group-hover:bg-foreground group-hover:text-background transition-colors">
                  ↗
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
      </div>
    </section>
  );
}
