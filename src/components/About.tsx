import { Reveal } from "./Reveal";

const pillars = [
  "Ingeniería de Telecomunicaciones",
  "Full Stack",
  "Inteligencia Artificial",
  "Automatización",
  "Bases de datos SQL",
  "Branding & Marketing Digital",
];

export function About() {
  return (
    <section id="sobre-mi" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
            01 — Sobre mí
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight max-w-4xl">
            Desarrollo software, automatizaciones y{" "}
            <span className="text-gradient">soluciones digitales</span> para empresas y negocios
            mediante tecnología e inteligencia artificial.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
          <Reveal delay={120}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy <span className="text-foreground font-medium">Ingeniero de Telecomunicaciones</span>{" "}
              y desarrollador <span className="text-foreground font-medium">Full Stack</span>, con
              experiencia en desarrollo web, aplicaciones, automatización de procesos, inteligencia
              artificial y bases de datos.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabajo tanto con empresas que buscan{" "}
              <span className="text-foreground font-medium">talento técnico</span> para desarrollar
              aplicaciones y sistemas a medida, como con negocios que desean mejorar su presencia
              digital, optimizar procesos e impulsar su crecimiento mediante soluciones tecnológicas.
            </p>
          </Reveal>
          <Reveal delay={280} className="md:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Combino <span className="text-foreground font-medium">ingeniería, creatividad y
              visión estratégica</span> para diseñar soluciones modernas, funcionales y orientadas
              a resultados, desde aplicaciones web y automatizaciones hasta diseño web e integración
              de inteligencia artificial.
            </p>
          </Reveal>
        </div>

        <Reveal delay={360}>
          <div className="mt-14 flex flex-wrap gap-2">
            {pillars.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2 text-xs font-medium text-muted-foreground"
              >
                <span className="size-1 rounded-full bg-primary/70" />
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
