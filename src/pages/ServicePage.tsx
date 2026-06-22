import { Link, useParams } from "react-router-dom";
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
  ArrowLeft,
  Check,
} from "lucide-react";

import { getService, services } from "@/data/services";
import { usePageMeta } from "@/hooks/use-page-meta";

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

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  usePageMeta({
    title: service ? `${service.title} — Daniel Gil` : "Servicio — Daniel Gil",
    description: service?.desc ?? "",
    ogTitle: service ? `${service.title} — Daniel Gil` : "Servicio — Daniel Gil",
    ogDescription: service?.desc ?? "",
  });

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Servicio no encontrado</h1>
          <Link to="/" className="text-primary underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-32">
        <div className="flex items-center justify-between mb-12">
          <Link
            to="/#estudios"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" /> Volver al portfolio
          </Link>
          <Link
            to="/#contacto"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contacto
          </Link>
        </div>

        <div className="size-16 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-8 shadow-glow">
          <Icon className="size-6" strokeWidth={2} />
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
          Servicio
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-6">
          {service.title}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-20">
          {service.long}
        </p>

        <section className="mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Qué puedo hacer por ti
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f: string) => (
              <div
                key={f}
                className="rounded-2xl border border-border bg-surface-elevated p-6 flex items-start gap-3"
              >
                <div className="size-6 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3.5" strokeWidth={3} />
                </div>
                <span className="text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {service.tech && service.tech.length > 0 && (
          <section className="mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Tecnologías utilizadas
            </div>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t: string) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-border bg-surface-elevated text-sm text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        {service.examples && service.examples.length > 0 && (
          <section className="mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Proyectos y ejemplos
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.examples.map((e: string) => (
                <div
                  key={e}
                  className="rounded-2xl border border-border bg-surface-elevated p-6 text-foreground"
                >
                  {e}
                </div>
              ))}
            </div>
          </section>
        )}

        {service.process && service.process.length > 0 && (
          <section className="mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Proceso de trabajo
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.process.map((p: { title: string; desc: string }, i: number) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-surface-elevated p-6"
                >
                  <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="rounded-3xl border border-border bg-surface-elevated p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
              Hablemos
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">Hablemos de tu proyecto</h2>
          </div>
          <Link
            to="/#contacto"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
          >
            Contactar
          </Link>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Otros servicios
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/servicios/${s.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-surface-elevated p-5 hover:shadow-elevated transition-all"
                >
                  <span className="font-medium">{s.title}</span>
                  <span className="text-muted-foreground group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
