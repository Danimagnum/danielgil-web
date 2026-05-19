import { Code2, Share2, Sparkles, Workflow, Palette, AppWindow, Layers, Database } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Code2,
    title: "Diseño y desarrollo web",
    desc: "Webs rápidas, accesibles y con estética premium. Optimizadas para conversión.",
  },
  {
    icon: AppWindow,
    title: "Desarrollo de aplicaciones",
    desc: "Aplicaciones web a medida, escalables y centradas en la experiencia de usuario.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    desc: "Frontend, backend e infraestructura. Producto completo, de la idea al deploy.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    desc: "Flujos que conectan herramientas y eliminan trabajo manual repetitivo.",
  },
  {
    icon: Sparkles,
    title: "Inteligencia Artificial",
    desc: "Agentes, contenido generativo e integraciones IA aplicadas a negocio.",
  },
  {
    icon: Palette,
    title: "Branding digital",
    desc: "Identidad visual, sistema de marca y comunicación con personalidad.",
  },
  {
    icon: Share2,
    title: "Redes sociales",
    desc: "Estrategia, contenido y comunidad. Presencia coherente en cada plataforma.",
  },
  {
    icon: Database,
    title: "Bases de datos SQL",
    desc: "Modelado, consultas y arquitectura de datos robusta para tu producto.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          04 — Servicios
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl mb-16">
          Todo lo que necesitas para llevar tu marca al <span className="text-gradient">siguiente nivel</span>.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 60}
              className="group relative rounded-3xl bg-surface-elevated border border-border p-8 hover:shadow-elevated hover:-translate-y-1 transition-all duration-500"
            >
              <div className="size-12 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-glow">
                <s.icon className="size-5" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Conoce más</span>
                <span className="text-foreground transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
