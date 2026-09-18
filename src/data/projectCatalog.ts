import type { Bilingual } from "@/lib/i18n";
const b = (es: string, en: string): Bilingual => ({ es, en });
export type PortfolioProject = {
  id: string;
  name: Bilingual;
  summary: Bilingual;
  problem: Bilingual;
  outcome: Bilingual;
  modules: Bilingual[];
  kind: "project" | "concept" | "partner";
  url?: string;
  screenshots?: { src: string; label: Bilingual }[];
};
type Pair = [string, string];
const p = (
  id: string,
  name: Pair,
  summary: Pair,
  problem: Pair,
  outcome: Pair,
  modules: Pair[],
  kind: PortfolioProject["kind"] = "concept",
): PortfolioProject => ({
  id,
  name: b(...name),
  summary: b(...summary),
  problem: b(...problem),
  outcome: b(...outcome),
  modules: modules.map((pair) => b(...pair)),
  kind,
});
export const projectCatalog: Record<
  string,
  { flow: Bilingual[]; type: Bilingual; tags: string[]; projects: PortfolioProject[] }
> = {
  "ia-automatizacion": {
    flow: [
      b("Entrada", "Input"),
      b("IA", "AI"),
      b("Automatización", "Automation"),
      b("Seguimiento", "Follow-up"),
      b("Panel", "Dashboard"),
    ],
    type: b("Procesos inteligentes", "Intelligent processes"),
    tags: ["API", "Webhook", "IA", "n8n"],
    projects: [
      p(
        "whatsapp",
        ["Automatización de WhatsApp", "WhatsApp automation"],
        [
          "Automatización de conversaciones con panel propio e integración con Meta.",
          "Conversation automation with a custom dashboard and Meta integration.",
        ],
        [
          "Conversaciones que necesitan contexto y seguimiento desde un lugar común.",
          "Conversations need context and follow-up in a shared workspace.",
        ],
        [
          "Centralizar la comunicación y facilitar el seguimiento del equipo.",
          "Centralise communication and support team follow-up.",
        ],
        [
          ["WhatsApp", "WhatsApp"],
          ["Permisos Meta", "Meta permissions"],
          ["Automatización", "Automation"],
          ["Seguimiento", "Follow-up"],
          ["Panel propio", "Custom dashboard"],
        ],
        "project",
      ),
      p(
        "llamadas",
        ["Automatización de llamadas", "Call automation"],
        [
          "El canal telefónico conectado a un proceso de atención y seguimiento.",
          "A phone channel connected to customer service and follow-up.",
        ],
        [
          "Llamadas aisladas del resto de la información comercial.",
          "Calls disconnected from the rest of the sales context.",
        ],
        [
          "Conectar la conversación telefónica con las siguientes acciones.",
          "Connect phone conversations to subsequent actions.",
        ],
        [
          ["Solicitud", "Request"],
          ["Llamada", "Call"],
          ["Registro", "Record"],
          ["Seguimiento", "Follow-up"],
        ],
        "project",
      ),
      p(
        "crm-ia",
        ["CRM con IA", "AI-powered CRM"],
        [
          "Un recorrido conceptual de clasificación y seguimiento comercial asistido.",
          "A conceptual walkthrough of assisted lead classification and follow-up.",
        ],
        [
          "Consultas difíciles de priorizar y asignar.",
          "Enquiries that are hard to prioritise and assign.",
        ],
        [
          "Ayudar a priorizar oportunidades con revisión humana.",
          "Help prioritise opportunities with human review.",
        ],
        [
          ["Lead", "Lead"],
          ["Contexto", "Context"],
          ["IA", "AI"],
          ["Responsable", "Owner"],
          ["CRM", "CRM"],
        ],
      ),
      p(
        "documentos-ia",
        ["Gestor documental con IA", "AI document manager"],
        [
          "Organización de documentos mediante extracción y clasificación asistida.",
          "Organise documents with assisted extraction and classification.",
        ],
        [
          "Documentos que requieren lectura y organización manual.",
          "Documents that require manual reading and organisation.",
        ],
        [
          "Preparar información estructurada para su validación.",
          "Prepare structured information for validation.",
        ],
        [
          ["Documento", "Document"],
          ["Extracción", "Extraction"],
          ["Clasificación", "Classification"],
          ["Validación", "Approval"],
          ["Archivo", "Archive"],
        ],
      ),
    ],
  },
  "desarrollo-web": {
    flow: [
      b("Interfaz", "Interface"),
      b("API", "API"),
      b("Base de datos", "Database"),
      b("Usuario", "User"),
    ],
    type: b("Producto full stack", "Full stack product"),
    tags: ["UI", "API", "DB", "Roles"],
    projects: [
      p(
        "reservas",
        ["Programa de reservas", "Booking platform"],
        [
          "Plataforma web para gestionar las reservas de un negocio.",
          "A web platform for managing business bookings.",
        ],
        [
          "Reservas repartidas entre canales y consultas manuales.",
          "Bookings scattered across channels and manual enquiries.",
        ],
        [
          "Reunir el proceso de reserva en una herramienta accesible.",
          "Bring the booking process into one accessible tool.",
        ],
        [
          ["Interfaz", "Interface"],
          ["Disponibilidad", "Availability"],
          ["Reserva", "Booking"],
          ["Confirmación", "Confirmation"],
        ],
        "project",
      ),
      p(
        "gestion",
        ["Sistema de gestión empresarial", "Business management system"],
        [
          "Plataforma de gestión de facturas y redes sociales.",
          "A platform for managing invoices and social media.",
        ],
        [
          "Tareas administrativas y digitales repartidas entre herramientas.",
          "Administrative and digital tasks scattered across tools.",
        ],
        [
          "Reunir herramientas de gestión en una misma plataforma.",
          "Bring management tools together in one platform.",
        ],
        [
          ["Panel", "Dashboard"],
          ["Facturación", "Invoicing"],
          ["Redes sociales", "Social media"],
          ["Gestión", "Management"],
        ],
        "project",
      ),
      p(
        "webs",
        ["Páginas web corporativas", "Corporate websites"],
        [
          "Webs para presentar empresas, servicios y vías de contacto.",
          "Websites presenting companies, services and contact channels.",
        ],
        [
          "Una presencia digital que no explica bien la propuesta del negocio.",
          "An online presence that does not clearly explain the business offering.",
        ],
        [
          "Dar una entrada clara al negocio desde cualquier dispositivo.",
          "Provide a clear entry point to the business on any device.",
        ],
        [
          ["Contenido", "Content"],
          ["Diseño web", "Web design"],
          ["Servicios", "Services"],
          ["Contacto", "Contact"],
        ],
        "project",
      ),
      p(
        "portal",
        ["Portal de cliente empresarial", "Business customer portal"],
        [
          "Un espacio conceptual para consultar documentos y solicitudes.",
          "A conceptual workspace for documents and requests.",
        ],
        [
          "Clientes que dependen de mensajes para consultar el estado de sus gestiones.",
          "Customers relying on messages to check the status of their requests.",
        ],
        [
          "Facilitar el acceso al contexto y estado de cada solicitud.",
          "Provide access to the context and status of each request.",
        ],
        [
          ["Acceso", "Access"],
          ["Roles", "Roles"],
          ["Solicitudes", "Requests"],
          ["Documentos", "Documents"],
          ["Estado", "Status"],
        ],
      ),
    ],
  },
  "cloud-data-engineering": {
    flow: [
      b("Fuentes", "Sources"),
      b("Procesamiento", "Processing"),
      b("Métricas", "Metrics"),
      b("Decisiones", "Decisions"),
    ],
    type: b("Datos y operaciones", "Data and operations"),
    tags: ["SQL", "ETL", "Logs", "Dashboard"],
    projects: [
      p(
        "dashboard",
        ["Dashboard ejecutivo", "Executive dashboard"],
        [
          "Una visión conceptual de métricas y estados del negocio.",
          "A conceptual overview of business metrics and statuses.",
        ],
        [
          "Información dispersa que dificulta comparar y decidir.",
          "Scattered information makes comparison and decision-making difficult.",
        ],
        [
          "Unificar indicadores con sus fuentes y contexto.",
          "Unify indicators with their sources and context.",
        ],
        [
          ["Fuentes", "Sources"],
          ["Modelo", "Model"],
          ["Métricas", "Metrics"],
          ["Dashboard", "Dashboard"],
        ],
      ),
      p(
        "trackflow",
        ["Trackflow", "Trackflow"],
        [
          "Control del trabajo de empleados y mantenimientos de equipos.",
          "Employee work tracking and equipment maintenance management.",
        ],
        [
          "Trabajo y mantenimiento que necesitan un seguimiento compartido.",
          "Work and maintenance need shared tracking.",
        ],
        [
          "Hacer visible el trabajo y los equipos que requieren atención.",
          "Make work and equipment requiring attention visible.",
        ],
        [
          ["Empleado", "Employee"],
          ["Trabajo", "Work"],
          ["Equipo", "Equipment"],
          ["Mantenimiento", "Maintenance"],
          ["Informe", "Report"],
        ],
        "project",
      ),
      p(
        "control-horario",
        ["Control horario", "Time tracking"],
        [
          "Plataforma para registrar y consultar información de jornada.",
          "A platform to record and review working-time information.",
        ],
        [
          "Información de jornada difícil de reunir y consultar.",
          "Working-time information is difficult to gather and review.",
        ],
        ["Centralizar los registros horarios del equipo.", "Centralise the team's time records."],
        [
          ["Empleado", "Employee"],
          ["Registro", "Record"],
          ["Jornada", "Working day"],
          ["Consulta", "Review"],
        ],
        "project",
      ),
      p(
        "mantenimiento",
        ["Plataforma de mantenimiento", "Maintenance platform"],
        [
          "Una vista de la capacidad de mantenimiento incluida en Trackflow.",
          "A view of the maintenance capability included in Trackflow.",
        ],
        [
          "Equipos e intervenciones que necesitan contexto común.",
          "Equipment and interventions need shared context.",
        ],
        [
          "Relacionar cada equipo con el trabajo de mantenimiento.",
          "Connect each asset with its maintenance work.",
        ],
        [
          ["Equipo", "Equipment"],
          ["Planificación", "Planning"],
          ["Intervención", "Intervention"],
          ["Historial", "History"],
        ],
        "project",
      ),
      p(
        "integracion-datos",
        ["Integración de datos empresariales", "Business data integration"],
        [
          "Conexión conceptual de fuentes y transformaciones de datos.",
          "A conceptual connection between data sources and transformations.",
        ],
        [
          "Versiones diferentes de la información entre herramientas.",
          "Different versions of information across tools.",
        ],
        [
          "Preparar una base coherente para los análisis.",
          "Prepare a consistent foundation for analysis.",
        ],
        [
          ["API", "API"],
          ["Ingesta", "Ingestion"],
          ["Validación", "Validation"],
          ["Modelo", "Model"],
          ["Datos", "Data"],
        ],
      ),
    ],
  },
  ingenieria: {
    flow: [
      b("Cámara / Sensor", "Camera / Sensor"),
      b("Detección", "Detection"),
      b("Evento", "Event"),
      b("Alerta", "Alert"),
      b("Responsable", "Owner"),
    ],
    type: b("Seguridad y sistemas", "Security and systems"),
    tags: ["Eventos", "IA", "API", "Permisos"],
    projects: [
      p(
        "vigilancia",
        ["Videovigilancia con IA", "AI video surveillance"],
        [
          "Colaboración como partner con una empresa de vigilancia y cámaras con IA.",
          "Partnership with a company specialising in surveillance and AI cameras.",
        ],
        [
          "Señales de vigilancia que requieren interpretación y atención.",
          "Surveillance signals require interpretation and attention.",
        ],
        [
          "Relacionar la detección con una respuesta operativa.",
          "Connect detection with an operational response.",
        ],
        [
          ["Cámara", "Camera"],
          ["Detección", "Detection"],
          ["Evento", "Event"],
          ["Supervisión", "Oversight"],
        ],
        "partner",
      ),
      p(
        "centro-seguridad",
        ["Centro de operaciones de seguridad", "Security operations centre"],
        [
          "Una vista conceptual del seguimiento de eventos de seguridad.",
          "A conceptual view of security event monitoring.",
        ],
        [
          "Alertas distribuidas entre puntos de supervisión.",
          "Alerts distributed across monitoring points.",
        ],
        [
          "Reunir el contexto necesario para priorizar y responder.",
          "Bring together the context needed to prioritise and respond.",
        ],
        [
          ["Sensores", "Sensors"],
          ["Eventos", "Events"],
          ["Prioridad", "Priority"],
          ["Operador", "Operator"],
          ["Registro", "Record"],
        ],
      ),
      p(
        "camaras",
        ["Integración de cámaras", "Camera integration"],
        [
          "Conexión conceptual entre dispositivos y herramientas operativas.",
          "A conceptual connection between devices and operational tools.",
        ],
        [
          "Dispositivos aislados de los procesos de respuesta.",
          "Devices disconnected from response processes.",
        ],
        [
          "Conectar los eventos de los dispositivos con su gestión.",
          "Connect device events with their management.",
        ],
        [
          ["Cámara", "Camera"],
          ["Conexión", "Connection"],
          ["Permisos", "Permissions"],
          ["Panel", "Dashboard"],
        ],
      ),
      p(
        "conectados",
        ["Sistemas conectados", "Connected systems"],
        [
          "Arquitectura conceptual de equipos, datos y acciones.",
          "A conceptual architecture of equipment, data and actions.",
        ],
        [
          "Componentes que intercambian información sin un recorrido definido.",
          "Components exchange information without a defined workflow.",
        ],
        [
          "Dar una estructura clara a las conexiones del sistema.",
          "Give system connections a clear structure.",
        ],
        [
          ["Sensor", "Sensor"],
          ["Gateway", "Gateway"],
          ["API", "API"],
          ["Automatización", "Automation"],
          ["Responsable", "Owner"],
        ],
      ),
      p(
        "sectores",
        ["Monitorización por sectores", "Sector monitoring"],
        [
          "Exploración conceptual de señales agrupadas por zonas.",
          "A conceptual exploration of signals grouped by area.",
        ],
        [
          "Falta de contexto espacial al revisar eventos.",
          "Missing spatial context when reviewing events.",
        ],
        ["Relacionar señales, zonas y responsables.", "Connect signals, areas and owners."],
        [
          ["Zona", "Area"],
          ["Sensor", "Sensor"],
          ["Evento", "Event"],
          ["Mapa", "Map"],
          ["Alerta", "Alert"],
        ],
      ),
    ],
  },
  marketing: {
    flow: [
      b("Contenido", "Content"),
      b("Audiencia", "Audience"),
      b("Interacción", "Engagement"),
      b("Lead", "Lead"),
      b("Conversión", "Conversion"),
    ],
    type: b("Captación y comunicación", "Acquisition and communication"),
    tags: ["Canales", "CRM", "Métricas", "Contenido"],
    projects: [
      p(
        "redes",
        ["Gestión de redes sociales", "Social media management"],
        [
          "Gestión de redes dentro de una plataforma que también reúne facturación.",
          "Social media management in a platform that also includes invoicing.",
        ],
        [
          "Actividad digital dispersa entre herramientas de trabajo.",
          "Digital activity scattered across working tools.",
        ],
        [
          "Organizar la gestión digital dentro de la operativa.",
          "Organise digital management within business operations.",
        ],
        [
          ["Contenido", "Content"],
          ["Canal", "Channel"],
          ["Publicación", "Publishing"],
          ["Gestión", "Management"],
        ],
        "project",
      ),
      p(
        "campanas",
        ["Centro de campañas multicanal", "Multichannel campaign centre"],
        [
          "Una vista conceptual de campañas y canales coordinados.",
          "A conceptual view of coordinated campaigns and channels.",
        ],
        [
          "Campañas difíciles de comparar entre canales.",
          "Campaigns that are hard to compare across channels.",
        ],
        [
          "Dar contexto común a las acciones y sus señales.",
          "Give activities and their signals a shared context.",
        ],
        [
          ["Campaña", "Campaign"],
          ["Canales", "Channels"],
          ["Audiencia", "Audience"],
          ["Métricas", "Metrics"],
        ],
      ),
      p(
        "comercial",
        ["Automatización comercial", "Sales automation"],
        [
          "Conexión conceptual de captación y seguimiento.",
          "A conceptual connection between acquisition and follow-up.",
        ],
        [
          "Oportunidades que se pierden al cambiar de canal.",
          "Opportunities lost when moving between channels.",
        ],
        [
          "Mantener el contexto hasta la siguiente acción comercial.",
          "Retain context through to the next sales action.",
        ],
        [
          ["Consulta", "Enquiry"],
          ["Lead", "Lead"],
          ["CRM", "CRM"],
          ["Seguimiento", "Follow-up"],
        ],
      ),
      p(
        "crm-marketing",
        ["CRM de marketing", "Marketing CRM"],
        [
          "Una visión conceptual de contactos, segmentos y acciones.",
          "A conceptual overview of contacts, segments and actions.",
        ],
        [
          "Contactos sin contexto sobre su origen o interés.",
          "Contacts without context about their source or interest.",
        ],
        [
          "Organizar las relaciones con una visión compartida.",
          "Organise relationships with a shared view.",
        ],
        [
          ["Contacto", "Contact"],
          ["Segmento", "Segment"],
          ["Acción", "Action"],
          ["Respuesta", "Response"],
        ],
      ),
      p(
        "contenidos",
        ["Estrategia de contenidos", "Content strategy"],
        [
          "Planificación conceptual de mensajes, formatos y distribución.",
          "Conceptual planning of messages, formats and distribution.",
        ],
        [
          "Publicaciones sin continuidad ni objetivos claros.",
          "Posts without continuity or clear objectives.",
        ],
        [
          "Alinear los contenidos con la propuesta del negocio.",
          "Align content with the business proposition.",
        ],
        [
          ["Objetivo", "Objective"],
          ["Mensaje", "Message"],
          ["Formato", "Format"],
          ["Calendario", "Calendar"],
        ],
      ),
    ],
  },
  "edicion-digital": {
    flow: [
      b("Idea", "Idea"),
      b("Diseño", "Design"),
      b("Formato", "Format"),
      b("Publicación", "Publishing"),
    ],
    type: b("Diseño y comunicación visual", "Design and visual communication"),
    tags: ["Identidad", "Vídeo", "Diseño", "Formatos"],
    projects: [
      p(
        "identidad",
        ["Identidad visual de marca", "Visual brand identity"],
        [
          "Un sistema conceptual de identidad y aplicaciones visuales.",
          "A conceptual identity system and its visual applications.",
        ],
        [
          "Recursos que no comparten una identidad reconocible.",
          "Assets that lack a recognisable shared identity.",
        ],
        [
          "Conectar tipografía, color y composición entre soportes.",
          "Connect typography, colour and composition across media.",
        ],
        [
          ["Concepto", "Concept"],
          ["Tipografía", "Typography"],
          ["Color", "Colour"],
          ["Aplicación", "Application"],
        ],
      ),
      p(
        "audiovisual",
        ["Campañas audiovisuales", "Audiovisual campaigns"],
        [
          "Recorrido conceptual de una idea hasta sus piezas audiovisuales.",
          "A conceptual journey from an idea to audiovisual assets.",
        ],
        [
          "Mensajes difíciles de trasladar a una pieza audiovisual clara.",
          "Messages that are hard to turn into a clear audiovisual piece.",
        ],
        [
          "Explicar una propuesta mediante una secuencia visual.",
          "Explain an offering through a visual sequence.",
        ],
        [
          ["Guion", "Script"],
          ["Montaje", "Editing"],
          ["Audio", "Audio"],
          ["Exportación", "Export"],
        ],
      ),
      p(
        "diseno-contenido",
        ["Diseño de contenido", "Content design"],
        [
          "Adaptación conceptual de mensajes a piezas visuales.",
          "Conceptual adaptation of messages into visual assets.",
        ],
        ["Contenido sin una jerarquía visual clara.", "Content without a clear visual hierarchy."],
        [
          "Facilitar la lectura y la comprensión del mensaje.",
          "Make the message easier to read and understand.",
        ],
        [
          ["Mensaje", "Message"],
          ["Jerarquía", "Hierarchy"],
          ["Composición", "Composition"],
          ["Pieza", "Asset"],
        ],
      ),
      p(
        "visualizacion",
        ["Visualización de productos digitales", "Digital product visualisation"],
        [
          "Composición conceptual de interfaces para explicar un producto.",
          "Conceptual interface compositions to explain a product.",
        ],
        [
          "Productos complejos que necesitan una presentación clara.",
          "Complex products that need a clear presentation.",
        ],
        [
          "Mostrar el uso y la estructura del producto de forma visual.",
          "Visually communicate product use and structure.",
        ],
        [
          ["Producto", "Product"],
          ["Interfaz", "Interface"],
          ["Escena", "Scene"],
          ["Presentación", "Presentation"],
        ],
      ),
      p(
        "recursos",
        ["Recursos para redes y publicidad", "Social and advertising assets"],
        [
          "Transformación conceptual de una identidad en varios formatos.",
          "Conceptual transformation of an identity into multiple formats.",
        ],
        [
          "Piezas que pierden coherencia al cambiar de tamaño o canal.",
          "Assets lose consistency when changing size or channel.",
        ],
        [
          "Mantener el mensaje y la identidad en cada formato.",
          "Maintain the message and identity in each format.",
        ],
        [
          ["Identidad", "Identity"],
          ["Formato", "Format"],
          ["Adaptación", "Adaptation"],
          ["Publicación", "Publishing"],
        ],
      ),
    ],
  },
};
