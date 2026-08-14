import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MessageCircle, QrCode } from "lucide-react";
import { Reveal } from "./Reveal";
import { Instagram, Linkedin, Mail, MessageCircle, QrCode } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+34 613 13 90 17",
    href: "https://wa.me/34613139017",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@danielgil.io",
    href: "https://instagram.com/danielgil.io",
  },
  {
    icon: Mail,
    label: "Email",
    value: "danielgil@agrogarpe.es",
    href: "mailto:danielgil@agrogarpe.es",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Daniel Gil",
    href: "https://www.linkedin.com/in/daniel-garcia-gil-b37212175/?skipRedirect=true",
  },
  {
    icon: QrCode,
    label: "Portfolio",
    value: "digital.agrogarpe.es",
    href: "https://digital.agrogarpe.es",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="relative py-32 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          06 — Contacto
        </div>
        <h2 className="text-4xl sm:text-6xl font-semibold tracking-tighter leading-[1.05] max-w-3xl mb-16">
          ¿Tienes un proyecto en mente?
          <br />
          <span className="text-gradient">Hablemos.</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 80}>
              <a
                href={it.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-2xl bg-surface-elevated border border-border p-6 hover:shadow-elevated hover:-translate-y-0.5 transition-all"
              >
                <div className="size-12 rounded-xl bg-accent flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                  <it.icon className="size-5" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {it.label}
                  </div>
                  <div className="font-medium truncate">{it.value}</div>
                </div>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-gradient-primary" />
          <span className="text-sm font-semibold">
            Daniel Gil · Impulso Digital
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-sm text-muted-foreground">
          <Link
            to="/politica-de-privacidad"
            className="hover:text-foreground transition-colors"
          >
            Política de privacidad
          </Link>

          <span className="hidden sm:inline">·</span>

          <span>
            digital.agrogarpe.es · © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
}
