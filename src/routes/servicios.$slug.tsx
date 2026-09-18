import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { useEffect } from "react";
import { getService, services } from "@/data/services";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Contact";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { useLanguage, translate, bi } from "@/lib/i18n";
import { projectCatalog } from "@/data/projectCatalog";

const purposes = {
  "ia-automatizacion": bi(
    "Menos tareas repetitivas y más contexto en cada conversación, documento y decisión.",
    "Less repetitive work and more context in every conversation, document and decision.",
  ),
  "desarrollo-web": bi(
    "Convertir procesos dispersos en webs y aplicaciones que tus clientes y tu equipo puedan usar.",
    "Turn fragmented processes into websites and applications your customers and team can use.",
  ),
  "cloud-data-engineering": bi(
    "Reunir datos dispersos y convertirlos en información útil para tomar decisiones.",
    "Bring scattered data together and turn it into useful information for decisions.",
  ),
  ingenieria: bi(
    "Conectar dispositivos, detectar eventos y llevar cada alerta a la persona adecuada.",
    "Connect devices, detect events and route each alert to the right person.",
  ),
  marketing: bi(
    "Dar continuidad a la captación: desde el primer contenido hasta el seguimiento comercial.",
    "Connect the customer journey, from the first piece of content to sales follow-up.",
  ),
  "edicion-digital": bi(
    "Transformar una identidad en piezas coherentes para cada formato y canal.",
    "Turn a visual identity into consistent assets for every format and channel.",
  ),
};

export const Route = createFileRoute("/servicios/$slug")({
  loaderDeps: ({ search }) => ({ lang: search.lang ?? "es" }),
  loader: ({ params, deps }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service, language: deps.lang };
  },
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    const language = loaderData?.language ?? "es";
    const title = service ? translate(service.title, language) + " — Daniel Gil" : "Daniel Gil";
    const description = translate(service?.desc ?? "", language);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const { t, l, language } = useLanguage();
  useEffect(() => {
    document.title = t(service.title) + " — Daniel Gil";
  }, [service.title, t]);
  return (
    <div className="portfolio specialization-page">
      <Nav />
      <main id="contenido" className="section-shell">
        <header className="specialization-hero" id="top">
          <Link to="/" hash="estudios" search={{ lang: language }} className="text-link">
            <ArrowLeft size={16} />
            {t("Todas las especializaciones", "All areas of expertise")}
          </Link>
          <div className="specialization-label">
            <span className="eyebrow">
              {t("Especialización", "Expertise")} / {t(service.tag)}
            </span>
          </div>
          <h1>{t(service.title)}</h1>
          <p>{t(service.long)}</p>
          <ul className="specialization-features">
            {service.features.map((feature) => (
              <li key={feature}>
                <Check size={16} />
                {t(feature)}
              </li>
            ))}
          </ul>
          <div
            className="specialization-stack"
            aria-label={t("Tecnologías relacionadas", "Related technologies")}
          >
            {(service.tech ?? projectCatalog[service.slug].tags).map((tech) => (
              <span key={tech}>{t(tech)}</span>
            ))}
          </div>
          <p className="specialization-purpose">
            {l(purposes[service.slug as keyof typeof purposes])}
          </p>
          <a className="text-link" href="#proyectos">
            {t("Explorar proyectos", "Explore projects")} ↓
          </a>
        </header>
        <ProjectExplorer service={service} />
        <section className="specialization-section">
          <span className="eyebrow">
            {t("06 / Cómo puedo colaborar", "06 / How I can contribute")}
          </span>
          <h2>
            {t("De principio a fin. O junto a tu equipo.", "End to end. Or alongside your team.")}
          </h2>
          <div className="collaboration-grid">
            <article className="specialization-card">
              <h3>{t("Solución completa", "Complete solution")}</h3>
              <p>
                {t(
                  "Entender el proceso, definir el alcance y construir una solución que encaje en la operación de tu empresa.",
                  "Understand the process, define the scope and build a solution that fits your company's operations.",
                )}
              </p>
            </article>
            <article className="specialization-card">
              <h3>{t("Perfil técnico integrado", "Embedded technical contributor")}</h3>
              <p>
                {t(
                  "Desarrollar módulos, automatizaciones e integraciones, coordinándome con tu equipo y su forma de trabajar.",
                  "Build modules, automations and integrations, working with your team and its established workflow.",
                )}
              </p>
            </article>
          </div>
        </section>
        <section className="specialization-cta">
          <span className="eyebrow">{t("El siguiente paso", "The next step")}</span>
          <h2>{t("Conectemos tu próximo proyecto.", "Let's connect your next project.")}</h2>
          <p>
            {t(
              "Cuéntame el contexto, las herramientas actuales y qué necesitas resolver.",
              "Tell me about the context, your current tools and what you need to solve.",
            )}
          </p>
          <a
            className="pill-button primary-button"
            href={"mailto:danielgil@agrogarpe.es?subject=" + encodeURIComponent(t(service.title))}
          >
            {t("Hablemos del proyecto", "Let's discuss your project")} ↗
          </a>
          <Link to="/" hash="contacto" search={{ lang: language }} className="text-link">
            {t("Otras formas de contacto", "Other ways to get in touch")}
          </Link>
        </section>
        <nav
          className="related-services"
          aria-label={t("Otras especializaciones", "Other areas of expertise")}
        >
          <span className="eyebrow">{t("Otras puertas de entrada", "More to explore")}</span>
          <div>
            {services
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  to="/servicios/$slug"
                  params={{ slug: item.slug }}
                  search={{ lang: language }}
                >
                  {t(item.title)} ↗
                </Link>
              ))}
          </div>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
