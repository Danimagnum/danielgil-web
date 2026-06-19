const studies = [
  {
    tag: "Grado",
    title: "Ingeniería de Telecomunicaciones",
    desc: "Formación universitaria en tecnologías de la información, comunicaciones y sistemas.",
  },
  {
    tag: "Web",
    title: "Desarrollo Web Full Stack",
    desc: "Aplicaciones modernas, arquitectura web, frontend y backend.",
    techs: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    tag: "Ops",
    title: "Automatización Digital",
    desc: "Integración de herramientas y optimización de procesos.",
    techs: ["n8n", "Python", "APIs REST"],
  },
  {
    tag: "IA",
    title: "Inteligencia Artificial",
    desc: "Asistentes virtuales, agentes IA y soluciones basadas en inteligencia artificial.",
    techs: ["OpenAI", "Claude", "Python", "LangChain", "APIs REST"],
  },
  {
    tag: "Marca",
    title: "Marketing Digital",
    desc: "Estrategia digital, posicionamiento y crecimiento de marca.",
  },
  {
    tag: "Media",
    title: "Edición Digital",
    desc: "Diseño visual, contenido multimedia y creación de recursos digitales.",
    techs: ["Photoshop", "Premiere Pro", "Fusion 360"],
  },
  {
    tag: "Cloud",
    title: "Cloud & Data Engineering",
    desc: "Arquitectura cloud, analítica avanzada y ecosistemas de datos.",
    techs: ["Snowflake", "dbt", "AWS", "SQL", "Power BI"],
  },
];

export function Studies() {
  return (
    <section id="estudios" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          03 — Formación y especialización
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl mb-16">
          Formación técnica orientada al{" "}
          <span className="text-gradient">desarrollo y la innovación digital</span>.
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {studies.map((s, i) => (
            <div
              key={s.title}
              className="relative animate-fade-up rounded-2xl bg-surface-elevated border border-border p-6 hover:border-foreground/20 transition-colors h-full"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-xs font-medium text-primary mb-3 uppercase tracking-wider">
                {s.tag}
              </div>
              <h3 className="font-semibold text-base leading-tight mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              {s.techs && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.techs.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
