import { Reveal } from "./Reveal";

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
            <span className="text-gradient">soluciones digitales</span> para empresas y negocios.
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
              <span className="text-foreground font-medium">apoyo técnico</span> para desarrollar
              aplicaciones y sistemas, como con negocios que desean mejorar su presencia digital y
              optimizar procesos.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
