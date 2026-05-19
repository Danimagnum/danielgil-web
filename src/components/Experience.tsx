const items = [
  {
    tag: "Cliente principal",
    title: "AGROGARPE",
    desc: "Transformación digital integral: web, branding, IA y presencia en redes para una marca del sector agro.",
  },
  {
    tag: "Social",
    title: "Gestión de redes sociales",
    desc: "Estrategia de contenido, calendario editorial y creatividades con apoyo de IA generativa.",
  },
  {
    tag: "Operaciones",
    title: "Automatización digital",
    desc: "Flujos automatizados, integraciones API y agentes IA que reducen tareas repetitivas.",
  },
  {
    tag: "Producto",
    title: "Diseño web",
    desc: "Sitios rápidos, accesibles y con estética premium. Stack moderno y enfocado a conversión.",
  },
  {
    tag: "Marca",
    title: "Branding y contenido IA",
    desc: "Identidad visual coherente y piezas generadas con IA que mantienen el tono de marca.",
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
              Proyectos en los que estoy trabajando.
            </h2>
          </div>
          <span className="text-sm text-muted-foreground">/ 2024 — Presente</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`group relative rounded-3xl bg-surface-elevated border border-border p-8 hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {it.tag}
                </span>
                <span className="size-8 rounded-full bg-accent flex items-center justify-center text-foreground/60 group-hover:bg-foreground group-hover:text-background transition-colors">
                  ↗
                </span>
              </div>
              <h3 className={`font-semibold tracking-tight mb-3 ${i === 0 ? "text-3xl" : "text-2xl"}`}>
                {it.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
