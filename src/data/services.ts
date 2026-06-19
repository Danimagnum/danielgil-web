export type ServiceDef = {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  long: string;
  tech?: string[];
  features: string[];
  examples?: string[];
  process?: { title: string; desc: string }[];
};

const defaultProcess = [
  { title: "Descubrimiento", desc: "Entendemos tu negocio, objetivos y contexto técnico." },
  { title: "Estrategia", desc: "Definimos alcance, arquitectura y prioridades." },
  { title: "Ejecución", desc: "Desarrollo iterativo con entregas continuas y feedback." },
  { title: "Lanzamiento", desc: "Puesta en producción, medición y mejora continua." },
];

export const services: ServiceDef[] = [
  {
    slug: "diseno-web",
    icon: "Code2",
    title: "Diseño y Desarrollo Web",
    desc: "Webs rápidas, accesibles y con estética premium. Optimizadas para conversión.",
    long: "Diseño y desarrollo de webs corporativas, landing pages y ecommerce con foco en rendimiento, SEO técnico y experiencia premium en todos los dispositivos.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Diseño UI/UX a medida",
      "Rendimiento y SEO técnico",
      "Responsive y accesible",
      "Integración con CMS y APIs",
    ],
    examples: [
      "Webs corporativas premium",
      "Landing pages de alto rendimiento",
      "Tiendas online y ecommerce",
      "Portfolios y sitios de marca",
    ],
    process: defaultProcess,
  },
  {
    slug: "aplicaciones",
    icon: "AppWindow",
    title: "Desarrollo de Aplicaciones",
    desc: "Aplicaciones web a medida, escalables y centradas en la experiencia de usuario.",
    long: "Aplicaciones web modernas y escalables, construidas con tecnologías actuales y arquitecturas pensadas para crecer con tu negocio.",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
    features: [
      "Aplicaciones SaaS",
      "Paneles internos y dashboards",
      "Arquitectura escalable",
      "Despliegue continuo",
    ],
    examples: [
      "Plataformas SaaS",
      "Dashboards de gestión",
      "Paneles internos",
      "Apps a medida para empresas",
    ],
    process: defaultProcess,
  },
  {
    slug: "full-stack",
    icon: "Layers",
    title: "Full Stack",
    desc: "Frontend, backend e infraestructura. Producto completo, de la idea al deploy.",
    long: "Desarrollo integral del producto digital: interfaz, lógica de negocio, base de datos y despliegue. Un único interlocutor de la idea al producto en producción.",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    features: [
      "Frontend moderno",
      "Backend y APIs",
      "Base de datos y autenticación",
      "Infraestructura y deploy",
    ],
    examples: [
      "MVPs de producto digital",
      "Plataformas end-to-end",
      "Integraciones con servicios externos",
      "Sistemas internos completos",
    ],
    process: defaultProcess,
  },
  {
    slug: "automatizacion",
    icon: "Workflow",
    title: "Automatización Digital",
    desc: "Flujos que conectan herramientas y eliminan trabajo manual repetitivo.",
    long: "Automatización de procesos internos y conexión entre herramientas para eliminar tareas repetitivas, reducir errores y liberar tiempo del equipo.",
    tech: ["n8n", "Python", "APIs REST"],
    features: [
      "Integración entre plataformas",
      "Flujos automáticos end-to-end",
      "Notificaciones y alertas",
      "Procesos sin intervención manual",
    ],
    examples: [
      "Sincronización entre CRMs y ERPs",
      "Automatización de reporting",
      "Flujos de onboarding y notificaciones",
      "Conexión de herramientas SaaS",
    ],
    process: defaultProcess,
  },
  {
    slug: "inteligencia-artificial",
    icon: "Sparkles",
    title: "Inteligencia Artificial",
    desc: "Agentes, contenido generativo e integraciones IA aplicadas a negocio.",
    long: "Integración de inteligencia artificial en productos y procesos: agentes conversacionales, generación de contenido y automatizaciones inteligentes.",
    tech: ["OpenAI", "Claude", "Python", "LangChain", "APIs REST"],
    features: [
      "Agentes y asistentes IA",
      "Generación de contenido",
      "Integración con tus datos",
      "Automatización inteligente",
    ],
    examples: [
      "Chatbots y agentes corporativos",
      "Asistentes internos con tus datos",
      "Generación automática de contenido",
      "Procesos cognitivos automatizados",
    ],
    process: defaultProcess,
  },
  {
    slug: "branding",
    icon: "Palette",
    title: "Branding Digital",
    desc: "Identidad visual, sistema de marca y comunicación con personalidad.",
    long: "Construcción de marcas digitales con identidad sólida, sistema visual coherente y guías claras de aplicación en todos los puntos de contacto.",
    features: [
      "Identidad visual",
      "Sistema de marca",
      "Guías de uso",
      "Aplicación digital",
    ],
    examples: [
      "Identidades de marca completas",
      "Rediseños de imagen corporativa",
      "Sistemas visuales escalables",
      "Branding para productos digitales",
    ],
    process: defaultProcess,
  },
  {
    slug: "marketing",
    icon: "Megaphone",
    title: "Marketing Digital",
    desc: "Estrategia, posicionamiento y campañas con foco en crecimiento medible.",
    long: "Estrategia de marketing digital orientada a resultados: posicionamiento, captación y fidelización con métricas claras y mejora continua.",
    features: [
      "Estrategia y posicionamiento",
      "Campañas de adquisición",
      "Analítica y medición",
      "Optimización continua",
    ],
    examples: [
      "Estrategias de posicionamiento",
      "Campañas de captación",
      "Embudos de conversión",
      "Analítica y optimización",
    ],
    process: defaultProcess,
  },
  {
    slug: "redes-sociales",
    icon: "Share2",
    title: "Redes Sociales",
    desc: "Contenido y comunidad. Presencia coherente y profesional en cada plataforma.",
    long: "Gestión profesional de redes sociales con estrategia de contenido, calendario editorial y dinamización de comunidad alineada con la marca.",
    features: [
      "Estrategia de contenido",
      "Calendario editorial",
      "Diseño y copy",
      "Gestión de comunidad",
    ],
    examples: [
      "Gestión integral de perfiles",
      "Estrategias de contenido",
      "Campañas creativas",
      "Crecimiento de comunidad",
    ],
    process: defaultProcess,
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
    examples: [
      "Data warehouses en Snowflake",
      "Modelado de datos con dbt",
      "Pipelines ETL/ELT",
      "Dashboards ejecutivos en Power BI",
    ],
    process: defaultProcess,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
