import { useLanguage } from "@/lib/i18n";
import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Laboratory } from "@/components/Laboratory";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Studies } from "@/components/Studies";

import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  loaderDeps: ({ search }) => ({ lang: search.lang ?? "es" }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) => ({
    meta: [
      {
        title:
          loaderData?.lang === "en"
            ? "Daniel Gil — Full Stack Development & Automation"
            : "Daniel Gil — Desarrollo Full Stack y Automatización",
      },
      {
        name: "description",
        content:
          loaderData?.lang === "en"
            ? "Platforms, websites, automation, AI and integrations. Complete solutions and technical collaboration to build connected digital systems."
            : "Plataformas, webs, automatizaciones, IA e integraciones. Soluciones completas y colaboración con equipos técnicos para construir sistemas digitales conectados.",
      },
      { property: "og:title", content: "Daniel Gil · Impulso Digital" },
      {
        property: "og:description",
        content:
          loaderData?.lang === "en"
            ? "Full stack · Automation · APIs · Data"
            : "Full stack · Automatización · APIs · Datos",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLanguage();
  useEffect(() => {
    document.title = t(
      "Daniel Gil — Desarrollo Full Stack y Automatización",
      "Daniel Gil — Full Stack Development & Automation",
    );
  }, [t]);
  return (
    <div className="portfolio">
      <Nav />
      <main id="contenido">
        <Hero />
        <div className="discipline-strip" aria-label={t("Disciplinas")}>
          <span>{t("PLATAFORMAS FULL STACK")}</span>
          <b>✳</b>
          <span>{t("AUTOMATIZACIÓN")}</span>
          <b>✳</b>
          <span>{t("IA APLICADA")}</span>
          <b>✳</b>
          <span>{t("DATOS & OPERACIONES")}</span>
        </div>
        <Laboratory />
        <About />
        <Experience />
        <Studies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
