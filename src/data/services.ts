export type ServiceDef = {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  long: string;
  tech?: string[];
  features: string[];
};

export const services: ServiceDef[] = [
  {
    slug: "diseno-desarrollo-web",
    icon: "Code2",
    title: "Diseño y desarrollo web",
    desc: "Webs rápidas, accesibles y con estética premium. Optimizadas para conversión.",
    long: "Diseño y desarrollo de webs corporativas, landing pages y ecommerce con foco en rendimiento, SEO técnico y experiencia premium en todos los dispositivos.",
    features: [
      "Diseño UI/UX a medida",
      "Rendimiento y SEO técnico",
      "Responsive y accesible",
      "Integración con CMS y APIs",
    ],
  },
  {
    slug: "desarrollo-aplicaciones",
    icon: "AppWindow",
    title: "Desarrollo de aplicaciones",
    desc: "Aplicaciones web a medida, escalables y centradas en la experiencia de usuario.",
    long: "Aplicaciones web modernas y escalables, construidas con tecnologías actuales y arquitecturas pensadas para crecer con tu negocio.",
    features: [
      "Aplicaciones SaaS",
      "Paneles internos y dashboards",
      "Arquitectura escalable",
      "Despliegue continuo",
    ],
  },
  {
    slug: "full-stack",
    icon: "Layers",
    title: "Full Stack",
    desc: "Frontend, backend e infraestructura. Producto completo, de la idea al deploy.",
    long: "Desarrollo integral del producto digital: interfaz, lógica de negocio, base de datos y despliegue. Un único interlocutor de la idea al producto en producción.",
    features: [
      "Frontend moderno",
      "Backend y APIs",
      "Base de datos y autenticación",
      "Infraestructura y deploy",
    ],
  },
  {
    slug: "automatizacion-digital",
    icon: "Workflow",
    title: "Automatización digital",
    desc: "Flujos que conectan herramientas y eliminan trabajo manual repetitivo.",
    long: "Automatización de procesos internos y conexión entre herramientas para eliminar tareas repetitivas, reducir errores y liberar tiempo del equipo.",
    tech: ["APIs REST", "Python", "n8n"],
    features: [
      "Integración entre plataformas",
      "Flujos automáticos end-to-end",
      "Notificaciones y alertas",
      "Procesos sin intervención manual",
    ],
  },
  {
    slug: "inteligencia-artificial",
    icon: "Sparkles",
    title: "Inteligencia Artificial",
    desc: "Agentes, contenido generativo e integraciones IA aplicadas a negocio.",
    long: "Integración de inteligencia artificial en productos y procesos: agentes conversacionales, generación de contenido y automatizaciones inteligentes.",
    tech: ["OpenAI", "Python", "APIs REST", "n8n"],
    features: [
      "Agentes y asistentes IA",
      "Generación de contenido",
      "Integración con tus datos",
      "Automatización inteligente",
    ],
  },
  {
    slug: "branding-digital",
    icon: "Palette",
    title: "Branding digital",
    desc: "Identidad visual, sistema de marca y comunicación con personalidad.",
    long: "Construcción de marcas digitales con identidad sólida, sistema visual coherente y guías claras de aplicación en todos los puntos de contacto.",
    features: [
      "Identidad visual",
      "Sistema de marca",
      "Guías de uso",
      "Aplicación digital",
    ],
  },
  {
    slug: "marketing-digital",
    icon: "Megaphone",
    title: "Marketing digital",
    desc: "Estrategia, posicionamiento y campañas con foco en crecimiento medible.",
    long: "Estrategia de marketing digital orientada a resultados: posicionamiento, captación y fidelización con métricas claras y mejora continua.",
    features: [
      "Estrategia y posicionamiento",
      "Campañas de adquisición",
      "Analítica y medición",
      "Optimización continua",
    ],
  },
  {
    slug: "redes-sociales",
    icon: "Share2",
    title: "Redes sociales",
    desc: "Contenido y comunidad. Presencia coherente y profesional en cada plataforma.",
    long: "Gestión profesional de redes sociales con estrategia de contenido, calendario editorial y dinamización de comunidad alineada con la marca.",
    features: [
      "Estrategia de contenido",
      "Calendario editorial",
      "Diseño y copy",
      "Gestión de comunidad",
    ],
  },
  {
    slug: "cloud-data-engineering",
    icon: "Database",
    title: "Cloud & Data Engineering",
    desc: "Arquitectura de datos, modelado y analítica en cloud para decisiones de negocio.",
    long: "Diseño e implementación de infraestructuras de datos en la nube: ingesta, modelado, transformación y visualización para convertir datos en decisiones.",
    tech: ["Snowflake", "dbt", "AWS", "PostgreSQL", "SQL", "Power BI"],
    features: [
      "Arquitectura de datos",
      "Modelado y ETL/ELT",
      "Data warehouse en cloud",
      "Dashboards y reporting",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
