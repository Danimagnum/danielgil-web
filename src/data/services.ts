export type ServiceDef = {
  slug: string;
  icon: string;
  tag: string;
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
    slug: "ingenieria",
    icon: "Layers",
    tag: "Grado",
    title: "Ingeniería de Telecomunicaciones",
    desc: "Formación en ingeniería orientada al análisis, la resolución de problemas y el desarrollo de soluciones tecnológicas.",
    long: "Base sólida de ingeniería aplicada al desarrollo de soluciones digitales: análisis técnico, diseño de sistemas, resolución de problemas complejos y visión integral del producto.",
    features: [
      "Análisis y diseño de sistemas",
      "Resolución de problemas complejos",
      "Visión integral del producto",
      "Enfoque técnico aplicado a negocio",
    ],
    examples: [
      "Arquitectura técnica de proyectos digitales",
      "Consultoría tecnológica para empresas",
      "Definición de stack y soluciones a medida",
      "Acompañamiento técnico end-to-end",
    ],
    process: defaultProcess,
  },
  {
    slug: "desarrollo-web",
    icon: "Code2",
    tag: "Web",
    title: "Desarrollo Web & Aplicaciones",
    desc: "Desarrollo de páginas web, aplicaciones y soluciones digitales modernas.",
    long: "Diseño y desarrollo de webs, aplicaciones y plataformas digitales modernas, escalables y con foco en rendimiento, experiencia de usuario y resultados de negocio.",
    tech: ["React", "Next.js", "Node.js"],
    features: [
      "Webs corporativas y landings premium",
      "Aplicaciones web a medida",
      "Frontend, backend e infraestructura",
      "Rendimiento, SEO y accesibilidad",
    ],
    examples: [
      "Plataformas SaaS",
      "Tiendas online y ecommerce",
      "Dashboards y paneles internos",
      "Landings de alto rendimiento",
    ],
    process: defaultProcess,
  },
  {
    slug: "ia-automatizacion",
    icon: "Sparkles",
    tag: "IA",
    title: "IA & Automatización",
    desc: "Automatización de procesos, agentes IA e integración de herramientas.",
    long: "Integración de inteligencia artificial y automatización para eliminar trabajo manual, conectar herramientas y crear procesos inteligentes end-to-end.",
    tech: ["OpenAI", "Claude", "n8n", "Python"],
    features: [
      "Agentes y asistentes IA",
      "Automatización de procesos",
      "Integración entre plataformas",
      "Flujos inteligentes end-to-end",
    ],
    examples: [
      "Chatbots y agentes corporativos",
      "Asistentes internos con tus datos",
      "Sincronización entre CRMs y ERPs",
      "Automatización de reporting",
    ],
    process: defaultProcess,
  },
  {
    slug: "cloud-data-engineering",
    icon: "Database",
    tag: "Cloud",
    title: "Cloud & Data Engineering",
    desc: "Arquitectura cloud, analítica avanzada y ecosistemas de datos.",
    long: "Diseño e implementación de infraestructuras de datos en la nube: ingesta, modelado, transformación y visualización para convertir datos en decisiones.",
    tech: ["AWS", "Snowflake", "dbt", "Power BI"],
    features: [
      "Arquitectura de datos en cloud",
      "Modelado y ETL/ELT",
      "Data warehouse moderno",
      "Dashboards y reporting ejecutivo",
    ],
    examples: [
      "Data warehouses en Snowflake",
      "Modelado de datos con dbt",
      "Pipelines ETL/ELT en AWS",
      "Dashboards en Power BI",
    ],
    process: defaultProcess,
  },
  {
    slug: "marketing",
    icon: "Megaphone",
    tag: "Marca",
    title: "Marketing Digital",
    desc: "Estrategia digital, posicionamiento y crecimiento de marca.",
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
    slug: "edicion-digital",
    icon: "Palette",
    tag: "Media",
    title: "Edición Digital",
    desc: "Diseño visual, contenido multimedia y recursos digitales.",
    long: "Producción de contenido visual y multimedia: diseño gráfico, edición de vídeo y recursos digitales con calidad profesional para marca y comunicación.",
    tech: ["Photoshop", "Premiere Pro", "Fusion 360"],
    features: [
      "Diseño gráfico y visual",
      "Edición de vídeo y motion",
      "Recursos digitales para marca",
      "Modelado y diseño 3D",
    ],
    examples: [
      "Piezas gráficas para marca",
      "Edición de vídeo profesional",
      "Contenido multimedia para redes",
      "Recursos visuales 3D",
    ],
    process: defaultProcess,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
