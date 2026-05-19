const studies = [
  { year: "Grado", title: "Ingeniería de Telecomunicaciones", place: "Formación universitaria" },
  { year: "Web", title: "Cursos de desarrollo web", place: "Stack full-stack moderno" },
  { year: "Ops", title: "Cursos de automatización", place: "Flujos, APIs e integraciones" },
  { year: "IA", title: "Formación en inteligencia artificial", place: "Modelos generativos y agentes" },
  { year: "Marca", title: "Branding digital", place: "Identidad y comunicación" },
  { year: "Datos", title: "Bases de datos SQL", place: "Modelado y consultas" },
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
