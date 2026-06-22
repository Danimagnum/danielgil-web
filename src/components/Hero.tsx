export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-hero noise"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 size-96 rounded-full bg-primary-glow/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-24">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8 animate-fade-in">
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Disponible para nuevos proyectos · 2026
        </div>

        <h1 className="animate-fade-up text-5xl sm:text-7xl md:text-8xl font-semibold leading-[0.95] tracking-tighter">
          <span className="block text-foreground">Daniel Gil</span>
          <span className="block text-gradient mt-2">Impulso Digital</span>
        </h1>

        <p
          className="animate-fade-up mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: "0.15s" }}
        >
          Diseño web <span className="text-foreground">·</span> IA{" "}
          <span className="text-foreground">·</span> Automatización{" "}
          <span className="text-foreground">·</span> Marketing Digital
        </p>

        <div
          className="animate-fade-up mt-10 flex items-center justify-center"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-glow hover:scale-[1.02] transition-transform"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Quick access pills */}
        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            { href: "#sobre-mi", label: "Sobre mí" },
            { href: "#experiencia", label: "Experiencia" },
            { href: "#estudios", label: "Especialización" },
            { href: "#contacto", label: "Contacto" },
          ].map((q) => (
            <a
              key={q.href}
              href={q.href}
              className="group inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="size-1 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
              {q.label}
            </a>
          ))}
        </div>


      </div>
    </section>
  );
}
