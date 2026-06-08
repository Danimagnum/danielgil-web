const studies = [
  { year: "Grado", title: "Ingeniería de Telecomunicaciones", place: "Formación universitaria técnica y tecnológica" },
  { year: "Ciencia", title: "Física", place: "Fundamentos analíticos y resolución de problemas complejos" },
  { year: "Web", title: "Desarrollo web Full Stack", place: "Aplicaciones modernas y arquitectura web" },
  { year: "Ops", title: "Automatización digital", place: "Flujos, APIs e integraciones" },
  { year: "IA", title: "Inteligencia Artificial", place: "Modelos generativos y automatización IA" },
  { year: "Growth", title: "Marketing Digital", place: "Estrategia digital y posicionamiento online" },
  { year: "Marca", title: "Branding Digital", place: "Identidad visual y comunicación" },
  { year: "Datos", title: "Bases de datos SQL", place: "Modelado, consultas y arquitectura de datos" },
  {
    year: "Cloud",
    title: "CIVICA",
    place: "Especialización en ecosistemas de datos y arquitectura cloud.",
    techs: ["Snowflake", "DBT", "AWS", "SQL"],
  },
];

export function Studies() {
  return (
    <section id="estudios" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          03 — Estudios
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl mb-16">
          Formación que combina <span className="text-gradient">ingeniería y diseño</span>.
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-6 right-0 h-px bg-border hidden md:block" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {studies.map((s, i) => (
              <div key={s.title} className="relative animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="hidden md:block relative mb-8">
                  <div className="size-3 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                </div>
                <div className="rounded-2xl bg-surface-elevated border border-border p-6 hover:border-foreground/20 transition-colors h-full">
                  <div className="text-xs font-medium text-primary mb-3 uppercase tracking-wider">
                    {s.year}
                  </div>
                  <h3 className="font-semibold text-base leading-tight mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.place}</p>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
