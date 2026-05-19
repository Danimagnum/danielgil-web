import { useEffect, useState } from "react";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#estudios", label: "Estudios" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 max-w-[calc(100%-1rem)] ${
          scrolled || open ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-3 pr-4 py-1.5" onClick={() => setOpen(false)}>
          <span className="size-2 rounded-full bg-gradient-primary shadow-glow" />
          <span className="text-sm font-semibold tracking-tight">Daniel Gil</span>
        </a>
        <div className="hidden md:flex items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/34600000000"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex ml-1 items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Hablemos
          <span aria-hidden>→</span>
        </a>
        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-1 size-9 rounded-full bg-foreground text-background flex items-center justify-center"
        >
          <div className="relative size-4">
            <span
              className={`absolute left-0 right-0 h-px bg-current transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : "top-1"
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-px bg-current transition-all duration-300 ${
                open ? "top-1/2 -rotate-45" : "top-[11px]"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
        <div className="relative pt-28 px-8 pb-12 flex flex-col gap-1 h-full">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-semibold tracking-tight py-3 border-b border-border/60 animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-4 text-base font-medium shadow-glow"
          >
            Hablemos por WhatsApp →
          </a>
        </div>
      </div>
    </header>
  );
}
