import {
  Code2,
  Share2,
  Sparkles,
  Workflow,
  Palette,
  AppWindow,
  Layers,
  Database,
  Megaphone,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { services } from "@/data/services";

const iconMap = {
  Code2,
  Share2,
  Sparkles,
  Workflow,
  Palette,
  AppWindow,
  Layers,
  Database,
  Megaphone,
} as const;

export function Services() {
  return (
    <section id="servicios" className="relative py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          04 — Soluciones digitales
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl mb-16">
          Tecnología, diseño y estrategia para llevar tu empresa al{" "}
          <span className="text-gradient">siguiente nivel</span>.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  to="/servicios/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block rounded-3xl bg-surface-elevated border border-border p-8 hover:shadow-elevated hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="size-12 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-glow">
                    <Icon className="size-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Conoce más</span>
                    <span className="text-foreground transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
