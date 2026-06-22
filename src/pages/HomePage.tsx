import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Studies } from "@/components/Studies";
import { Contact, Footer } from "@/components/Contact";
import { usePageMeta } from "@/hooks/use-page-meta";

export function HomePage() {
  usePageMeta({
    title: "Daniel Gil · Impulso Digital — Web, IA y Automatización",
    description:
      "Daniel Gil — Impulso Digital. Diseño web premium, inteligencia artificial, automatización y branding digital para negocios reales.",
    ogTitle: "Daniel Gil · Impulso Digital",
    ogDescription: "Diseño web · IA · Automatización · Redes Sociales",
  });

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
