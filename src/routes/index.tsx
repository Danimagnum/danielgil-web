import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Studies } from "@/components/Studies";

import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daniel Gil · Impulso Digital — Web, IA y Automatización" },
      {
        name: "description",
        content:
          "Daniel Gil — Impulso Digital. Diseño web premium, inteligencia artificial, automatización y branding digital para negocios reales.",
      },
      { property: "og:title", content: "Daniel Gil · Impulso Digital" },
      {
        property: "og:description",
        content: "Diseño web · IA · Automatización · Redes Sociales",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Studies />
      <Contact />
      <Footer />
    </main>
  );
}

