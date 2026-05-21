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
            Ayudo a negocios reales a{" "}
            <span text-gradient="true" className="text-gradient">digitalizar, automatizar</span> y
            crecer mediante tecnología, ingeniería e inteligencia artificial.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl">
          <Reveal delay={120}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un perfil <span className="text-foreground font-medium">full stack</span> con
              formación en Ingeniería de Telecomunicaciones y experiencia en desarrollo web,
              aplicaciones, automatización, branding digital, marketing digital, redes sociales,
              inteligencia artificial y bases de datos SQL.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Combino <span className="text-foreground font-medium">ingeniería, creatividad y
              estrategia</span> para crear soluciones digitales modernas, funcionales y orientadas
              a resultados reales: presencia online, diseño de marca, infraestructura digital e
              integración de IA.
            </p>
          </Reveal>
          <Reveal delay={280} className="md:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Cada proyecto se diseña con intención, se desarrolla con precisión y se enfoca en
              aportar valor real a empresas que quieren{" "}
              <span className="text-foreground font-medium">evolucionar y diferenciarse digitalmente</span>.
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
