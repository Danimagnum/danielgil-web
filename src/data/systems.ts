export type SystemNode = { name: string; tag: string; detail: string };
export type SystemMode = {
  name: string;
  title: string;
  description: string;
  problem: string;
  value: string;
  services: string[];
  before: string;
  after: string;
  nodes: SystemNode[];
};
export const systemModes: SystemMode[] = [
  {
    name: "Comercial",
    title: "Sistema comercial",
    description: "Automatización de captación, conversación y seguimiento comercial.",
    problem: "Consultas repartidas entre canales y oportunidades sin seguimiento.",
    value: "Un historial compartido para que cada oportunidad tenga un siguiente paso.",
    services: ["ia-automatizacion", "marketing", "desarrollo-web"],
    before: "Conversaciones dispersas",
    after: "Historial y seguimiento",
    nodes: [
      {
        name: "Web / Redes",
        tag: "Captación",
        detail: "Una consulta desde la web o las redes inicia el recorrido comercial.",
      },
      {
        name: "WhatsApp",
        tag: "API · Permisos",
        detail:
          "La conversación entra en un canal conectado, con los permisos de Meta que requiera la integración.",
      },
      {
        name: "CRM",
        tag: "DB",
        detail: "El contacto y el contexto quedan disponibles para el equipo comercial.",
      },
      {
        name: "Llamada",
        tag: "API",
        detail: "Una llamada permite continuar la conversación en el momento adecuado.",
      },
      {
        name: "Seguimiento",
        tag: "Webhook",
        detail: "El estado de la oportunidad activa recordatorios y acciones posteriores.",
      },
      {
        name: "Dashboard",
        tag: "Reporting",
        detail: "El panel reúne actividad y estados para revisar el proceso comercial.",
      },
    ],
  },
  {
    name: "Operativo",
    title: "Sistema operativo",
    description:
      "Plataformas internas para saber qué ocurre, quién lo hace y qué falta por resolver.",
    problem: "Tareas, equipos e incidencias repartidos entre mensajes y hojas de cálculo.",
    value: "Responsables y estados visibles para coordinar el trabajo y anticipar pendientes.",
    services: ["desarrollo-web", "cloud-data-engineering"],
    before: "Tareas sin contexto",
    after: "Responsables y trazabilidad",
    nodes: [
      {
        name: "Empleado",
        tag: "Roles",
        detail: "Cada persona accede al trabajo que le corresponde según su rol.",
      },
      {
        name: "Tarea",
        tag: "Estado",
        detail: "Una tarea reúne las instrucciones, el estado y la persona asignada.",
      },
      {
        name: "Equipo",
        tag: "DB",
        detail: "El equipo de trabajo se vincula con su información operativa.",
      },
      {
        name: "Mantenimiento",
        tag: "Planificación",
        detail: "Las intervenciones se relacionan con el equipo y sus tareas pendientes.",
      },
      {
        name: "Incidencia",
        tag: "Logs",
        detail: "Una incidencia conserva el contexto necesario para atenderla.",
      },
      {
        name: "Responsable",
        tag: "Alerta",
        detail: "La persona responsable recibe la información para decidir la siguiente acción.",
      },
      {
        name: "Informe",
        tag: "Dashboard",
        detail: "El informe permite revisar lo realizado y lo que falta por resolver.",
      },
    ],
  },
  {
    name: "Administrativo",
    title: "Sistema administrativo",
    description: "Gestión interna con datos ordenados, roles claros y procesos trazables.",
    problem: "Documentos duplicados, validaciones por mensajes y estados difíciles de consultar.",
    value: "Un recorrido verificable del documento, desde su entrada hasta el reporte.",
    services: ["desarrollo-web", "cloud-data-engineering"],
    before: "Excel y archivos dispersos",
    after: "Estados e historial",
    nodes: [
      {
        name: "Cliente",
        tag: "DB",
        detail: "Los datos del cliente dan contexto al proceso administrativo.",
      },
      {
        name: "Factura",
        tag: "Documento",
        detail: "La factura entra en el circuito de gestión con sus datos asociados.",
      },
      {
        name: "Estado",
        tag: "Workflow",
        detail: "El estado permite saber qué documentos requieren atención.",
      },
      {
        name: "Validación",
        tag: "Roles",
        detail: "Una persona autorizada revisa el documento antes de continuar.",
      },
      {
        name: "Archivo",
        tag: "Logs",
        detail: "El documento queda vinculado con su historial para futuras consultas.",
      },
      {
        name: "Reporte",
        tag: "Reporting",
        detail: "El reporte resume los estados y las validaciones pendientes.",
      },
    ],
  },
  {
    name: "Inteligente",
    title: "Sistema inteligente",
    description:
      "IA aplicada a procesos reales: atención, seguridad, clasificación y asistencia operativa.",
    problem: "Un volumen de eventos que exige clasificación y revisión constante.",
    value: "Priorizar la información y asistir a las personas que toman las decisiones.",
    services: ["ia-automatizacion", "ingenieria"],
    before: "Revisión manual de cada evento",
    after: "Clasificación y revisión humana",
    nodes: [
      {
        name: "Evento",
        tag: "Webhook",
        detail: "Una consulta, un documento o un evento de seguridad inicia el flujo.",
      },
      {
        name: "IA analiza",
        tag: "IA",
        detail: "El modelo analiza la entrada dentro del contexto y los límites definidos.",
      },
      {
        name: "Clasifica",
        tag: "Reglas",
        detail:
          "La clasificación orienta el siguiente paso; los casos inciertos requieren revisión.",
      },
      {
        name: "Alerta",
        tag: "API",
        detail: "Los eventos relevantes se comunican al equipo correspondiente.",
      },
      {
        name: "Registra",
        tag: "DB · Logs",
        detail: "El registro conserva el contexto del evento y las acciones realizadas.",
      },
      {
        name: "Humano",
        tag: "Supervisión",
        detail: "Una persona revisa el resultado y mantiene el control de la decisión.",
      },
    ],
  },
  {
    name: "Empresa completa",
    title: "Una empresa conectada",
    description: "Canales, personas, datos y decisiones trabajando dentro del mismo sistema.",
    problem: "Herramientas que funcionan por separado y equipos que pierden contexto al colaborar.",
    value: "Conectar la operación de extremo a extremo con información compartida y control.",
    services: ["desarrollo-web", "ia-automatizacion", "cloud-data-engineering", "ingenieria"],
    before: "Información perdida entre herramientas",
    after: "Panel único, métricas y trazabilidad",
    nodes: [
      {
        name: "Captación",
        tag: "Web · Redes",
        detail: "La web y los canales digitales abren la puerta a nuevas solicitudes.",
      },
      {
        name: "Comunicación",
        tag: "API",
        detail: "WhatsApp, llamadas y otros canales conservan el contexto de cada conversación.",
      },
      {
        name: "Gestión",
        tag: "Roles · DB",
        detail: "Clientes, documentos y estados se reúnen en herramientas internas.",
      },
      {
        name: "Operaciones",
        tag: "Workflow",
        detail: "Personas, tareas y equipos se coordinan con responsabilidades visibles.",
      },
      {
        name: "Datos",
        tag: "DB · Logs",
        detail: "Los datos se consolidan para evitar versiones contradictorias de la información.",
      },
      {
        name: "Reporting",
        tag: "Dashboard",
        detail: "Los paneles convierten la actividad en información para decidir.",
      },
      {
        name: "Seguridad",
        tag: "Permisos",
        detail:
          "Los permisos y los eventos de seguridad forman parte del sistema operativo de la empresa.",
      },
      {
        name: "IA",
        tag: "Asistencia",
        detail:
          "La IA conecta comunicación, operaciones y datos para asistir en clasificación y análisis.",
      },
    ],
  },
];
