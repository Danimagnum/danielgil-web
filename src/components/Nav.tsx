import { useEffect, useState } from "react";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-3 pr-4 py-1.5">
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
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-1.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Hablemos
          <span aria-hidden>→</span>
        </a>
      </nav>
    </header>
  );
}
