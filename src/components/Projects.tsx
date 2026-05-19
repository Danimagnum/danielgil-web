import { Reveal } from "./Reveal";
  {
    name: "AGROGARPE",
    category: "Branding · Web · Social",
    desc: "Identidad digital y presencia online completa para marca del sector agro.",
    accent: "from-emerald-400/30 to-primary/30",
  },
  {
    name: "Automatización IA",
    category: "Workflows · API",
    desc: "Pipelines automatizados con agentes IA para tareas operativas recurrentes.",
    accent: "from-primary/30 to-violet-400/30",
  },
  {
    name: "Diseño web premium",
    category: "Web · UI/UX",
    desc: "Landing pages modernas con foco en performance y conversión.",
    accent: "from-sky-400/30 to-primary/30",
  },
  {
    name: "Contenido IA",
    category: "Branding · Social",
    desc: "Sistema de contenido generativo coherente con identidad de marca.",
    accent: "from-rose-400/30 to-primary/30",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              05 — Proyectos
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
              Selección de trabajos recientes.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="group relative rounded-3xl overflow-hidden border border-border bg-surface-elevated hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.accent} overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-mesh opacity-40 mix-blend-overlay animate-shimmer" />
                <div className="absolute inset-0 flex items-end p-8">
                  <span className="text-7xl md:text-8xl font-semibold tracking-tighter text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    0{i + 1}
                  </span>
                </div>
                <div className="absolute top-6 right-6 glass rounded-full px-3 py-1 text-xs font-medium">
                  {p.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold tracking-tight mb-2 flex items-center justify-between">
                  {p.name}
                  <span className="text-base text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground">
                    ↗
                  </span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
