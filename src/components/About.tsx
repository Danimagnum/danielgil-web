import { Reveal } from "./Reveal";

export function About() {
  return (
    <Reveal as="section" className="contents">
      <></>
    </Reveal>
  );
}

function _About() {
  return (
    <section id="sobre-mi" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          01 — Sobre mí
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight max-w-4xl">
          Ayudo a negocios reales a{" "}
          <span className="text-gradient">digitalizar, automatizar</span> y crecer con
          inteligencia artificial.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Combino ingeniería, diseño y tecnología para crear experiencias digitales que
            funcionan. Trabajo con empresas que quieren dar el salto: presencia online
            cuidada, procesos automatizados y una marca que comunica con claridad.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde branding y redes sociales hasta integración de IA y desarrollo web a
            medida. Cada proyecto se diseña con intención, ejecuta con precisión y se
            mide por resultados reales.
          </p>
        </div>
      </div>
    </section>
  );
}
