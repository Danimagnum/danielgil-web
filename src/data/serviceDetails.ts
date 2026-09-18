type Project = {
  title: string;
  kind: "Proyecto" | "Capacidad" | "Colaboración";
  description: string;
  scope: string;
};
type ServiceDetail = {
  problems: string[];
  projects: Project[];
  technical: { title: string; text: string }[];
  cta: string;
};
export const serviceDetails: Record<string, ServiceDetail> = {
  "ia-automatizacion": {
    problems: [
      "Consultas y acciones repetitivas que consumen tiempo del equipo.",
      "Herramientas desconectadas que obligan a copiar información.",
      "Eventos y solicitudes que necesitan clasificación y seguimiento.",
    ],
    projects: [
      {
        title: "WhatsApp, panel propio y Meta",
        kind: "Proyecto",
        description: "Automatización de WhatsApp con un panel propio e integración con Meta.",
        scope: "Comunicación, gestión desde el panel y permisos necesarios para conectar el canal.",
      },
      {
        title: "Automatización de llamadas",
        kind: "Proyecto",
        description:
          "Automatización del canal telefónico como parte de los procesos de comunicación.",
        scope: "Llamadas dentro de un recorrido que puede conectarse con atención y seguimiento.",
      },
      {
        title: "Agentes y asistentes IA",
        kind: "Capacidad",
        description: "Asistencia para atender consultas, analizar información y apoyar al equipo.",
        scope: "Definición del contexto, límites de actuación y puntos de revisión humana.",
      },
      {
        title: "Flujos n8n y webhooks",
        kind: "Capacidad",
        description:
          "Conexión de eventos y acciones entre herramientas mediante flujos automatizados.",
        scope:
          "Recepción de eventos, llamadas a APIs, tratamiento de errores y registro del recorrido.",
      },
      {
        title: "Clasificación de leads",
        kind: "Capacidad",
        description:
          "Organización de solicitudes para orientar cada oportunidad al siguiente paso.",
        scope:
          "Criterios de clasificación, contexto de la solicitud y derivación al equipo adecuado.",
      },
      {
        title: "Reporting automático",
        kind: "Capacidad",
        description: "Preparación de informes a partir de la actividad de herramientas conectadas.",
        scope: "Recogida de datos, consolidación y entrega al equipo que los necesita.",
      },
    ],
    technical: [
      {
        title: "Integraciones por contrato",
        text: "Definir entradas, salidas y permisos de cada API antes de conectar las herramientas.",
      },
      {
        title: "Flujos observables",
        text: "Diseñar registros, reintentos y avisos para localizar fallos y evitar acciones duplicadas.",
      },
      {
        title: "IA con supervisión",
        text: "Delimitar qué puede resolver el modelo y cuándo debe intervenir una persona.",
      },
    ],
    cta: "Hablemos del proceso que quieres automatizar",
  },
  "desarrollo-web": {
    problems: [
      "Operativa repartida entre aplicaciones que no se adaptan al equipo.",
      "Procesos internos que necesitan una interfaz y un estado compartido.",
      "Una presencia web que debe conectar con el resto del negocio.",
    ],
    projects: [
      {
        title: "Trackflow",
        kind: "Proyecto",
        description:
          "Plataforma para controlar el trabajo de empleados y los mantenimientos de equipos.",
        scope:
          "Trabajo de empleados, equipos y mantenimiento reunidos en una plataforma operativa.",
      },
      {
        title: "Plataforma de reservas",
        kind: "Proyecto",
        description: "Una herramienta para gestionar reservas desde una aplicación web.",
        scope: "El proceso de reserva como parte de la operativa digital del negocio.",
      },
      {
        title: "Gestión de facturas y redes sociales",
        kind: "Proyecto",
        description: "Plataforma de gestión que reúne facturas y redes sociales.",
        scope: "Herramientas de administración y gestión digital dentro de una misma plataforma.",
      },
      {
        title: "Control horario",
        kind: "Proyecto",
        description: "Plataforma dedicada al control horario de empleados.",
        scope: "Registro y consulta de la información de jornada en una herramienta interna.",
      },
      {
        title: "Webs corporativas",
        kind: "Proyecto",
        description:
          "Desarrollo de páginas web corporativas para presentar empresas y sus servicios.",
        scope: "Presencia digital, contenido e interfaz adaptados a cada negocio.",
      },
      {
        title: "Portales de cliente y paneles internos",
        kind: "Capacidad",
        description: "Espacios de trabajo a medida para clientes y equipos.",
        scope: "Interfaces, permisos y conexión con la lógica de negocio y los datos.",
      },
    ],
    technical: [
      {
        title: "De la interfaz a los datos",
        text: "Modelar el proceso y conectar frontend, backend, APIs y base de datos con responsabilidades claras.",
      },
      {
        title: "Acceso y trazabilidad",
        text: "Definir roles, validaciones y registro de las operaciones según las necesidades del proyecto.",
      },
      {
        title: "Producto mantenible",
        text: "Trabajar con módulos, pruebas de los recorridos críticos y documentación para facilitar la continuidad del equipo.",
      },
    ],
    cta: "Diseñemos tu próxima plataforma o módulo",
  },
  "cloud-data-engineering": {
    problems: [
      "Información repartida entre archivos, APIs y bases de datos.",
      "Informes manuales y métricas difíciles de contrastar.",
      "Modelos de datos que complican el análisis de la operación.",
    ],
    projects: [
      {
        title: "Modelado y gestión de datos",
        kind: "Capacidad",
        description: "Organización y transformación de datos para su uso en procesos y análisis.",
        scope:
          "Modelado, calidad y consulta de datos; una línea presente en mi experiencia profesional en REPSOL.",
      },
      {
        title: "Pipelines e integraciones",
        kind: "Capacidad",
        description: "Recorridos de ingesta y transformación entre orígenes y destinos.",
        scope: "APIs, bases de datos y procesos ETL/ELT según el entorno técnico.",
      },
      {
        title: "Dashboards operativos",
        kind: "Capacidad",
        description: "Paneles e informes para entender actividad, estados y pendientes.",
        scope: "Definición de métricas, modelado y visualización para los equipos que deciden.",
      },
    ],
    technical: [
      {
        title: "Datos con contexto",
        text: "Acordar el significado de cada métrica y documentar sus fuentes y transformaciones.",
      },
      {
        title: "Calidad y seguimiento",
        text: "Validar registros y revisar errores y actualizaciones para detectar inconsistencias.",
      },
      {
        title: "Infraestructura adecuada",
        text: "Elegir almacenamiento, procesamiento y acceso en función del volumen, el equipo y las necesidades reales.",
      },
    ],
    cta: "Conectemos tus datos con la operación",
  },
  ingenieria: {
    problems: [
      "Sistemas con componentes técnicos que necesitan una visión de conjunto.",
      "Eventos de seguridad que deben conectarse con la respuesta operativa.",
      "Decisiones de arquitectura que afectan a varias herramientas y equipos.",
    ],
    projects: [
      {
        title: "Videovigilancia e IA",
        kind: "Colaboración",
        description:
          "Colaboración como partner con una empresa de vigilancia con IA y cámaras con IA.",
        scope:
          "Seguridad e inteligencia artificial aplicadas a la vigilancia, dentro del alcance de la colaboración.",
      },
      {
        title: "Arquitectura de sistemas",
        kind: "Capacidad",
        description: "Análisis de los componentes y las conexiones que necesita una solución.",
        scope:
          "Requisitos, interfaces entre sistemas y decisiones técnicas con visión de conjunto.",
      },
      {
        title: "Integración de eventos",
        kind: "Capacidad",
        description: "Conexión entre eventos técnicos, alertas y herramientas de gestión.",
        scope: "Contexto del evento, registro y derivación a las personas responsables.",
      },
    ],
    technical: [
      {
        title: "Análisis del entorno",
        text: "Identificar requisitos, restricciones y dependencias antes de elegir la solución.",
      },
      {
        title: "Integración y permisos",
        text: "Definir cómo se comunican los componentes y qué acceso necesita cada uno.",
      },
      {
        title: "Supervisión operativa",
        text: "Conectar señales y alertas con procesos de revisión y respuesta del equipo.",
      },
    ],
    cta: "Revisemos el sistema que necesitas conectar",
  },
  marketing: {
    problems: [
      "Canales de captación sin conexión con el seguimiento comercial.",
      "Contenido y acciones digitales difíciles de coordinar.",
      "Métricas que no ayudan a entender el recorrido de las consultas.",
    ],
    projects: [
      {
        title: "Gestión de redes sociales",
        kind: "Proyecto",
        description:
          "Gestión de redes sociales dentro de una plataforma que también reúne facturación.",
        scope: "Organización de la actividad digital junto a otras herramientas de gestión.",
      },
      {
        title: "Captación conectada",
        kind: "Capacidad",
        description: "Relación entre webs, redes, consultas y seguimiento comercial.",
        scope: "Puntos de contacto y conexión con herramientas de comunicación y gestión.",
      },
      {
        title: "Estrategia y medición",
        kind: "Capacidad",
        description: "Posicionamiento, contenido y revisión de la actividad digital.",
        scope: "Objetivos, canales y métricas útiles para orientar las siguientes acciones.",
      },
    ],
    technical: [
      {
        title: "Recorrido del contacto",
        text: "Definir cómo pasa una consulta desde el canal de origen hasta el equipo que la atiende.",
      },
      {
        title: "Contenido coordinado",
        text: "Organizar piezas y mensajes coherentes con el servicio y el público al que se dirigen.",
      },
      {
        title: "Medición útil",
        text: "Seleccionar métricas que permitan revisar la captación y el seguimiento sin perder contexto.",
      },
    ],
    cta: "Conectemos tu presencia digital con la captación",
  },
  "edicion-digital": {
    problems: [
      "Recursos visuales que no mantienen una identidad coherente.",
      "Contenido que necesita adaptarse a distintos canales.",
      "Productos o procesos difíciles de explicar de forma visual.",
    ],
    projects: [
      {
        title: "Identidad y recursos de marca",
        kind: "Capacidad",
        description: "Piezas gráficas y recursos digitales para una comunicación coherente.",
        scope: "Composición, jerarquía visual y adaptación a los soportes de la marca.",
      },
      {
        title: "Vídeo y contenido multimedia",
        kind: "Capacidad",
        description: "Edición de contenido para presentar productos, servicios y procesos.",
        scope: "Montaje y adaptación de piezas para web, redes y comunicación.",
      },
      {
        title: "Modelado y recursos 3D",
        kind: "Capacidad",
        description:
          "Recursos tridimensionales como apoyo a la representación de ideas y productos.",
        scope: "Modelado y preparación visual según las necesidades del proyecto.",
      },
    ],
    technical: [
      {
        title: "Sistema visual",
        text: "Trabajar con criterios compartidos de tipografía, color y composición.",
      },
      {
        title: "Formatos y entrega",
        text: "Preparar tamaños y formatos adecuados para cada soporte, equilibrando calidad y peso.",
      },
      {
        title: "Integración en producto",
        text: "Coordinar las piezas visuales con las interfaces y el contenido del proyecto digital.",
      },
    ],
    cta: "Demos forma visual a tu próximo proyecto",
  },
};
