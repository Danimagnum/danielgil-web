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
            Ayudo a negocios reales a{" "}
            <span className="text-gradient">digitalizar, automatizar</span> y crecer mediante
            tecnología, diseño e inteligencia artificial.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-4xl">
          <Reveal delay={120}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un perfil <span className="text-foreground font-medium">full stack</span> con
              formación en Ingeniería de Telecomunicaciones y experiencia en desarrollo web,
              automatización, branding digital, redes sociales, inteligencia artificial y bases
              de datos. Combino ingeniería, creatividad y estrategia para crear experiencias
              digitales modernas, funcionales y orientadas a resultados reales.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde presencia online y diseño de marca hasta automatización de procesos,
              desarrollo de aplicaciones e integración de IA. Cada proyecto se diseña con
              intención, se desarrolla con precisión y se enfoca en aportar valor real a
              empresas que quieren evolucionar y diferenciarse digitalmente.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
