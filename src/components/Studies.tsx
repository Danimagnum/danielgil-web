import { useLanguage } from "@/lib/i18n";
import { Link } from "@tanstack/react-router";
import { Code2, Sparkles, Palette, Layers, Database, Megaphone } from "lucide-react";
import { services } from "@/data/services";

const iconMap = {
  Code2,
  Sparkles,
  Palette,
  Layers,
  Database,
  Megaphone,
} as const;

export function Studies() {
  const { t, language } = useLanguage();
  return (
    <section id="estudios" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          {t("03 — Cómo puedo ayudarte")}
        </div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl mb-16">
          {t("Software a medida para")}{" "}
          <span className="text-gradient">{t("conectar y simplificar tu negocio")}</span>.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "ia-automatizacion",
            "desarrollo-web",
            "cloud-data-engineering",
            "ingenieria",
            "marketing",
            "edicion-digital",
          ].map((slug, i) => {
            const s = services.find((service) => service.slug === slug)!;
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <Link
                key={s.slug}
                to="/servicios/$slug"
                search={{ lang: language }}
                params={{ slug: s.slug }}
                className="group relative flex flex-col animate-fade-up rounded-2xl bg-surface-elevated border border-border p-6 hover:border-foreground/20 hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 h-full"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="size-10 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow">
                    {Icon && <Icon className="size-4" strokeWidth={2} />}
                  </div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {t(s.tag)}
                  </span>
                </div>
                <h3 className="font-semibold text-lg leading-tight mb-2">{t(s.title)}</h3>
                <p className="text-sm text-muted-foreground">{t(s.desc)}</p>
                {s.tech && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t("Explorar especialización")}</span>
                  <span className="text-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
