import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { Footer } from "@/components/Contact";
import { usePageMeta } from "@/hooks/use-page-meta";

export function PrivacyPolicyPage() {
  usePageMeta({
    title: "Política de Privacidad · Daniel Gil — Impulso Digital",
    description:
      "Política de privacidad y protección de datos de Agrogarpe S.L. y Daniel Gil · Impulso Digital.",
    ogTitle: "Política de Privacidad · Daniel Gil",
    ogDescription:
      "Información sobre el tratamiento y protección de datos personales.",
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </Link>

          {/* CABECERA */}
          <div className="mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Información legal
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tighter leading-[1.05] mb-6">
              Política de
              <br />
              <span className="text-gradient">Privacidad</span>
            </h1>

            <p className="text-muted-foreground">
              Última actualización: 14 de agosto de 2026
            </p>
          </div>

          <div className="space-y-12 text-muted-foreground leading-relaxed">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Responsable del tratamiento
              </h2>

              <p className="mb-5">
                El responsable del tratamiento de los datos personales
                tratados a través de este sitio web y de los servicios
                propios de Daniel Gil · Impulso Digital es:
              </p>

              <div className="rounded-2xl border border-border bg-surface-elevated p-6 space-y-3">
                <p>
                  <strong className="text-foreground">
                    Responsable del tratamiento:
                  </strong>{" "}
                  Agrogarpe S.L.
                </p>

                <p>
                  <strong className="text-foreground">NIF:</strong>{" "}
                  B05362884
                </p>

                <p>
                  <strong className="text-foreground">
                    Nombre comercial del servicio:
                  </strong>{" "}
                  Daniel Gil · Impulso Digital
                </p>

                <p>
                  <strong className="text-foreground">
                    Persona de contacto:
                  </strong>{" "}
                  Daniel Gil
                </p>

                <p>
                  <strong className="text-foreground">
                    Domicilio:
                  </strong>{" "}
                  Carretera GR3406, s/n, Huerta Cura 6, Sierra Elvira,
                  18240 Pinos Puente (Granada), España.
                </p>

                <p>
                  <strong className="text-foreground">
                    Correo electrónico:
                  </strong>{" "}
                  <a
                    href="mailto:danielgil@agrogarpe.es"
                    className="text-foreground underline underline-offset-4"
                  >
                    danielgil@agrogarpe.es
                  </a>
                </p>

                <p>
                  <strong className="text-foreground">
                    Teléfono / WhatsApp:
                  </strong>{" "}
                  <a
                    href="tel:+34613139017"
                    className="text-foreground underline underline-offset-4"
                  >
                    +34 613 13 90 17
                  </a>
                </p>

                <p>
                  <strong className="text-foreground">
                    Sitio web:
                  </strong>{" "}
                  digital.agrogarpe.es
                </p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Ámbito de aplicación
              </h2>

              <p className="mb-4">
                Esta Política de Privacidad regula el tratamiento de datos
                personales realizado por Agrogarpe S.L. a través del sitio
                web digital.agrogarpe.es, así como mediante los canales de
                contacto, servicios digitales, automatizaciones y sistemas
                de atención asociados a Daniel Gil · Impulso Digital.
              </p>

              <p>
                Cuando Agrogarpe S.L. presta servicios de automatización,
                inteligencia artificial, gestión de comunicaciones u otros
                servicios tecnológicos a una empresa cliente y trata datos
                siguiendo las instrucciones de dicha empresa, Agrogarpe
                S.L. podrá actuar como encargado del tratamiento, siendo la
                empresa cliente la responsable del tratamiento de los datos
                de sus propios usuarios o clientes. Estas relaciones se
                regularán mediante los correspondientes acuerdos de
                tratamiento de datos cuando resulte necesario.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Datos personales que podemos tratar
              </h2>

              <p className="mb-4">
                Dependiendo de la forma en la que el usuario utilice nuestros
                servicios o se comunique con nosotros, podremos tratar las
                siguientes categorías de datos:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre y apellidos, cuando sean facilitados.</li>

                <li>Número de teléfono.</li>

                <li>Dirección de correo electrónico.</li>

                <li>
                  Nombre, identificador o información de perfil disponible
                  a través de servicios de mensajería como WhatsApp.
                </li>

                <li>
                  Contenido de mensajes, preguntas, solicitudes y
                  conversaciones.
                </li>

                <li>
                  Imágenes, documentos, audios u otros archivos que el
                  usuario facilite voluntariamente.
                </li>

                <li>
                  Información necesaria para elaborar presupuestos o
                  gestionar una relación comercial o contractual.
                </li>

                <li>
                  Datos de facturación y administrativos cuando exista una
                  relación comercial.
                </li>

                <li>
                  Datos técnicos asociados al acceso al sitio web o a los
                  sistemas, como dirección IP, navegador, dispositivo,
                  fecha y hora de acceso o registros técnicos de seguridad,
                  cuando sean tratados.
                </li>

                <li>
                  Metadatos asociados a las comunicaciones necesarios para
                  su gestión técnica.
                </li>
              </ul>

              <p className="mt-5">
                El usuario debe evitar facilitar datos especialmente
                sensibles o pertenecientes a categorías especiales salvo
                que sean estrictamente necesarios y exista una base jurídica
                adecuada para su tratamiento.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Procedencia de los datos
              </h2>

              <p className="mb-4">
                Con carácter general, los datos personales son obtenidos
                directamente del propio usuario cuando:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Contacta mediante WhatsApp.</li>
                <li>Envía un correo electrónico.</li>
                <li>Solicita información o un presupuesto.</li>
                <li>Contrata alguno de nuestros servicios.</li>
                <li>Utiliza las funcionalidades disponibles en el sitio web.</li>
              </ul>

              <p className="mt-5">
                Determinados datos también pueden ser recibidos a través de
                plataformas utilizadas por el propio usuario, como WhatsApp
                o Meta, o ser facilitados por una empresa cliente cuando
                Agrogarpe S.L. actúe como encargado del tratamiento.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Finalidades del tratamiento
              </h2>

              <p className="mb-4">
                Los datos personales podrán tratarse para las siguientes
                finalidades:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Atender consultas y solicitudes de información.
                </li>

                <li>
                  Gestionar solicitudes de presupuestos y propuestas
                  comerciales.
                </li>

                <li>
                  Gestionar conversaciones recibidas mediante WhatsApp,
                  correo electrónico u otros canales de comunicación.
                </li>

                <li>
                  Gestionar relaciones profesionales, comerciales y
                  contractuales.
                </li>

                <li>
                  Prestar, mantener y mejorar los servicios contratados.
                </li>

                <li>
                  Automatizar tareas de atención, clasificación,
                  procesamiento y gestión de comunicaciones.
                </li>

                <li>
                  Utilizar herramientas de inteligencia artificial para
                  analizar consultas, clasificar información, resumir
                  contenidos o generar propuestas o respuestas.
                </li>

                <li>
                  Mantener la seguridad y disponibilidad de nuestros
                  sistemas y prevenir usos abusivos, fraudulentos o
                  no autorizados.
                </li>

                <li>
                  Gestionar incidencias técnicas.
                </li>

                <li>
                  Cumplir obligaciones legales, fiscales, contables,
                  administrativas y contractuales.
                </li>

                <li>
                  Gestionar y acreditar solicitudes relacionadas con el
                  ejercicio de derechos de protección de datos.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Base jurídica del tratamiento
              </h2>

              <p className="mb-4">
                La base jurídica aplicable dependerá de la finalidad concreta
                del tratamiento:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Consultas y solicitudes de presupuestos
                  </h3>
                  <p>
                    Aplicación de medidas precontractuales solicitadas por el
                    interesado y, cuando corresponda, consentimiento del
                    interesado.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Prestación de servicios
                  </h3>
                  <p>
                    Ejecución de un contrato o aplicación de medidas
                    precontractuales.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Gestión administrativa, fiscal y contable
                  </h3>
                  <p>
                    Cumplimiento de obligaciones legales aplicables a
                    Agrogarpe S.L.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Seguridad y prevención de usos indebidos
                  </h3>
                  <p>
                    Interés legítimo de Agrogarpe S.L. en proteger sus
                    sistemas, servicios, usuarios y actividad empresarial,
                    siempre que dicho interés no prevalezca sobre los
                    derechos y libertades de los interesados.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Comunicaciones comerciales
                  </h3>
                  <p>
                    Se realizarán únicamente cuando exista una base jurídica
                    que lo permita, como el consentimiento del interesado o,
                    cuando resulte legalmente aplicable, una relación
                    contractual previa. El usuario podrá oponerse o darse de
                    baja en cualquier momento.
                  </p>
                </div>
              </div>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Uso de WhatsApp y Meta
              </h2>

              <p className="mb-4">
                Agrogarpe S.L. puede utilizar WhatsApp Business y la
                WhatsApp Business Platform, incluida su Cloud API, como
                canal de comunicación y como parte de determinados servicios
                de automatización.
              </p>

              <p className="mb-4">
                Cuando un usuario se comunica mediante WhatsApp, podrán
                tratarse datos como el número de teléfono, nombre o
                información de perfil disponible, contenido de los mensajes,
                archivos enviados y metadatos necesarios para gestionar la
                conversación.
              </p>

              <p>
                WhatsApp y Meta Platforms pueden tratar determinados datos
                conforme a sus propias condiciones, políticas de privacidad
                y obligaciones legales. Agrogarpe S.L. únicamente utilizará
                la información recibida mediante estos servicios para las
                finalidades informadas y conforme a la normativa aplicable.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Uso de inteligencia artificial
              </h2>

              <p className="mb-4">
                Algunos servicios ofrecidos por Daniel Gil · Impulso Digital
                utilizan sistemas de inteligencia artificial para facilitar
                o automatizar determinadas tareas.
              </p>

              <p className="mb-4">
                Estos sistemas pueden utilizarse, entre otras funciones, para
                interpretar consultas, clasificar mensajes, resumir
                información, buscar información relevante dentro de los
                recursos habilitados para el servicio o generar propuestas
                de respuesta.
              </p>

              <p className="mb-4">
                Para realizar estas funciones, el contenido estrictamente
                necesario de determinadas comunicaciones podrá ser
                transmitido a proveedores especializados en inteligencia
                artificial, actualmente incluyendo servicios de Anthropic
                mediante su API.
              </p>

              <p className="mb-4">
                Siempre que resulte posible y adecuado, se aplicarán medidas
                destinadas a reducir la cantidad de información personal
                transmitida a los sistemas de inteligencia artificial.
              </p>

              <p className="mb-4">
                Cuando una persona interactúe directamente con un sistema
                automatizado basado en inteligencia artificial, se le
                informará de esta circunstancia de manera adecuada en la
                propia interacción, salvo en aquellos casos en los que
                resulte evidente por el contexto.
              </p>

              <p>
                No se adoptan, con carácter general, decisiones basadas
                exclusivamente en tratamientos automatizados que produzcan
                efectos jurídicos sobre el usuario o le afecten
                significativamente de modo similar. Si en el futuro se
                implantase un tratamiento de estas características, se
                facilitaría previamente la información y garantías exigidas
                por la normativa aplicable.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Proveedores tecnológicos y destinatarios
              </h2>

              <p className="mb-4">
                Para poder prestar y mantener nuestros servicios puede ser
                necesario que determinados proveedores tecnológicos tengan
                acceso a datos personales.
              </p>

              <p className="mb-4">
                Entre las categorías de proveedores actualmente utilizadas
                pueden encontrarse:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">
                    Meta Platforms / WhatsApp:
                  </strong>{" "}
                  servicios de mensajería y WhatsApp Business Platform.
                </li>

                <li>
                  <strong className="text-foreground">
                    Google Cloud:
                  </strong>{" "}
                  infraestructura informática, alojamiento y ejecución de
                  determinados servicios y automatizaciones.
                </li>

                <li>
                  <strong className="text-foreground">
                    Anthropic:
                  </strong>{" "}
                  procesamiento mediante sistemas de inteligencia artificial
                  a través de API.
                </li>

                <li>
                  <strong className="text-foreground">
                    Vercel:
                  </strong>{" "}
                  alojamiento, despliegue y distribución del sitio web.
                </li>
              </ul>

              <p className="mt-5">
                Dependiendo del servicio y del tratamiento concreto, estos
                proveedores podrán actuar como encargados, subencargados o
                responsables independientes respecto de determinados
                tratamientos realizados para sus propios fines.
              </p>

              <p className="mt-4">
                También podrán comunicarse datos a administraciones públicas,
                autoridades, jueces, tribunales u otros organismos cuando
                exista una obligación legal o un requerimiento legítimo.
              </p>

              <p className="mt-4">
                Agrogarpe S.L. no vende datos personales a terceros.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Transferencias internacionales de datos
              </h2>

              <p className="mb-4">
                Algunos de los proveedores tecnológicos utilizados pueden
                encontrarse o disponer de infraestructura fuera del Espacio
                Económico Europeo, por lo que determinados tratamientos
                pueden implicar transferencias internacionales de datos.
              </p>

              <p className="mb-4">
                Cuando dichas transferencias se produzcan, se utilizarán los
                mecanismos previstos por la normativa europea de protección
                de datos que resulten aplicables, como decisiones de
                adecuación de la Comisión Europea, cláusulas contractuales
                tipo aprobadas por la Comisión Europea u otras garantías
                legalmente reconocidas.
              </p>

              <p>
                El interesado puede solicitar información adicional sobre
                las garantías aplicables a una transferencia internacional
                concreta escribiendo a{" "}
                <a
                  href="mailto:danielgil@agrogarpe.es"
                  className="text-foreground underline underline-offset-4"
                >
                  danielgil@agrogarpe.es
                </a>
                .
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Conservación de los datos
              </h2>

              <p className="mb-4">
                Los datos personales se conservarán durante el tiempo
                necesario para cumplir la finalidad para la que fueron
                recopilados.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Consultas y contactos sin contratación
                  </h3>
                  <p>
                    Se conservarán durante el tiempo necesario para atender
                    la consulta y, con carácter general, durante un máximo de
                    12 meses desde la última interacción, salvo que sea
                    necesario conservarlos durante más tiempo para atender
                    posibles responsabilidades o exista otra base jurídica.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Clientes y relaciones contractuales
                  </h3>
                  <p>
                    Los datos se conservarán mientras se mantenga la relación
                    contractual y posteriormente durante los plazos
                    legalmente necesarios para atender obligaciones y
                    posibles responsabilidades contractuales, fiscales,
                    contables o administrativas.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Comunicaciones comerciales
                  </h3>
                  <p>
                    Los datos utilizados para esta finalidad se conservarán
                    mientras exista una base jurídica válida y hasta que el
                    interesado retire su consentimiento o ejerza su derecho
                    de oposición, cuando proceda.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Registros técnicos y de seguridad
                  </h3>
                  <p>
                    Se conservarán únicamente durante el tiempo necesario
                    para garantizar la seguridad y funcionamiento del
                    servicio y, con carácter general, no más de 12 meses,
                    salvo que exista un incidente de seguridad,
                    investigación o obligación legal que justifique una
                    conservación superior.
                  </p>
                </div>
              </div>

              <p className="mt-5">
                Una vez finalizados los periodos correspondientes, los datos
                serán eliminados o permanecerán debidamente bloqueados
                cuando sea necesario conservarlos para atender obligaciones
                o responsabilidades legales.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Carácter obligatorio de los datos
              </h2>

              <p>
                El usuario no está obligado a facilitar datos personales
                salvo cuando sean necesarios para atender una solicitud,
                formalizar o ejecutar una relación contractual o cumplir una
                obligación legal. La negativa a proporcionar información
                necesaria puede impedir que podamos atender correctamente
                la solicitud o prestar el servicio solicitado.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                13. Seguridad de la información
              </h2>

              <p>
                Agrogarpe S.L. aplica medidas técnicas y organizativas
                razonables y proporcionadas destinadas a proteger los datos
                personales frente a la destrucción, pérdida, alteración,
                divulgación o acceso no autorizado, teniendo en cuenta la
                naturaleza de los datos, el contexto del tratamiento y los
                riesgos existentes.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                14. Derechos de los interesados
              </h2>

              <p className="mb-4">
                Las personas interesadas pueden ejercer, cuando corresponda,
                los siguientes derechos:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Acceso:</strong>{" "}
                  conocer qué datos personales tratamos.
                </li>

                <li>
                  <strong className="text-foreground">
                    Rectificación:
                  </strong>{" "}
                  solicitar la modificación de datos inexactos o
                  incompletos.
                </li>

                <li>
                  <strong className="text-foreground">Supresión:</strong>{" "}
                  solicitar la eliminación de los datos cuando proceda.
                </li>

                <li>
                  <strong className="text-foreground">Oposición:</strong>{" "}
                  oponerse a determinados tratamientos basados en interés
                  legítimo u otras bases que lo permitan.
                </li>

                <li>
                  <strong className="text-foreground">
                    Limitación:
                  </strong>{" "}
                  solicitar que se limite el tratamiento en los supuestos
                  previstos legalmente.
                </li>

                <li>
                  <strong className="text-foreground">
                    Portabilidad:
                  </strong>{" "}
                  recibir determinados datos personales en un formato
                  estructurado y transmitirlos a otro responsable cuando
                  resulte aplicable.
                </li>

                <li>
                  <strong className="text-foreground">
                    Retirada del consentimiento:
                  </strong>{" "}
                  cuando el tratamiento se base en el consentimiento, este
                  podrá retirarse en cualquier momento sin afectar a la
                  licitud del tratamiento realizado previamente.
                </li>

                <li>
                  <strong className="text-foreground">
                    Decisiones automatizadas:
                  </strong>{" "}
                  ejercer los derechos reconocidos por la normativa frente
                  a decisiones basadas exclusivamente en tratamientos
                  automatizados cuando resulten aplicables.
                </li>
              </ul>

              <p className="mt-5">
                Los derechos pueden ejercerse enviando una solicitud a:
              </p>

              <p className="mt-2">
                <a
                  href="mailto:danielgil@agrogarpe.es"
                  className="text-foreground underline underline-offset-4"
                >
                  danielgil@agrogarpe.es
                </a>
              </p>

              <p className="mt-4">
                La solicitud deberá indicar qué derecho desea ejercer y
                aportar únicamente la información necesaria para poder
                identificar al solicitante y tramitar la petición. Cuando
                existan dudas razonables sobre su identidad, podrá
                solicitarse información adicional proporcionada para
                verificarla.
              </p>
            </section>

            {/* 15 */}
            <section id="eliminacion-datos">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                15. Eliminación de datos y solicitudes relacionadas con Meta
                y WhatsApp
              </h2>

              <p className="mb-4">
                Cualquier usuario puede solicitar la eliminación de los
                datos personales que Agrogarpe S.L. conserve relacionados
                con sus comunicaciones, su interacción mediante WhatsApp o
                el uso de nuestros servicios.
              </p>

              <p className="mb-4">
                Para solicitar la eliminación de datos deberá enviar un
                correo electrónico a{" "}
                <a
                  href="mailto:danielgil@agrogarpe.es"
                  className="text-foreground underline underline-offset-4"
                >
                  danielgil@agrogarpe.es
                </a>{" "}
                con el asunto:
              </p>

              <div className="rounded-2xl border border-border bg-surface-elevated p-6 my-5">
                <strong className="text-foreground">
                  Solicitud de eliminación de datos
                </strong>
              </div>

              <p className="mb-4">
                La solicitud deberá identificar suficientemente la cuenta,
                número de teléfono, correo electrónico o servicio al que
                estén asociados los datos cuya eliminación se solicita.
              </p>

              <p className="mb-4">
                Agrogarpe S.L. podrá solicitar información adicional cuando
                sea razonablemente necesaria para verificar la identidad
                del solicitante y evitar la eliminación de información de
                otra persona.
              </p>

              <p className="mb-4">
                Una vez verificada la solicitud, los datos serán eliminados,
                anonimizados o bloqueados según corresponda, salvo aquellos
                que deban conservarse durante un periodo determinado para
                cumplir una obligación legal o atender posibles
                responsabilidades.
              </p>

              <p>
                Cuando Agrogarpe S.L. esté tratando los datos por cuenta de
                una empresa cliente, la solicitud será gestionada en
                coordinación con dicha empresa como responsable del
                tratamiento.
              </p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                16. Reclamaciones ante la autoridad de control
              </h2>

              <p>
                Si una persona considera que el tratamiento de sus datos
                personales no se ajusta a la normativa o que sus derechos
                no han sido atendidos adecuadamente, puede presentar una
                reclamación ante la Agencia Española de Protección de Datos
                (AEPD).
              </p>

              <p className="mt-4">
                Puede obtener más información en{" "}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground underline underline-offset-4"
                >
                  www.aepd.es
                </a>
                .
              </p>
            </section>

            {/* 17 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                17. Menores de edad
              </h2>

              <p>
                Los servicios de Daniel Gil · Impulso Digital están
                orientados principalmente a empresas y profesionales y no
                están específicamente dirigidos a menores de edad. Si se
                detectase que se han tratado datos de un menor sin la
                autorización o base jurídica necesaria, se adoptarán las
                medidas correspondientes para su eliminación.
              </p>
            </section>

            {/* 18 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                18. Comunicaciones comerciales
              </h2>

              <p>
                No se enviarán comunicaciones comerciales electrónicas sin
                una base jurídica válida. Cuando el envío se base en el
                consentimiento, el usuario podrá retirarlo en cualquier
                momento. Cuando resulte aplicable una excepción legal
                derivada de una relación contractual previa, las
                comunicaciones se limitarán a productos o servicios
                relacionados y siempre se ofrecerá un mecanismo sencillo
                para oponerse a futuros envíos.
              </p>
            </section>

            {/* 19 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                19. Cambios en la Política de Privacidad
              </h2>

              <p className="mb-4">
                Agrogarpe S.L. podrá actualizar esta Política de Privacidad
                cuando resulte necesario debido a cambios legislativos,
                tecnológicos, en los proveedores utilizados o en los
                servicios ofrecidos.
              </p>

              <p>
                Cuando los cambios sean relevantes para el tratamiento de
                datos personales, se adoptarán las medidas necesarias para
                informar a los interesados cuando así lo exija la normativa.
                La versión vigente será la publicada en esta página.
              </p>
            </section>

            {/* 20 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                20. Normativa aplicable
              </h2>

              <p className="mb-4">
                El tratamiento de datos personales se realizará de acuerdo
                con la normativa aplicable, incluyendo especialmente:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Reglamento (UE) 2016/679 General de Protección de Datos
                  (RGPD).
                </li>

                <li>
                  Ley Orgánica 3/2018, de 5 de diciembre, de Protección de
                  Datos Personales y garantía de los derechos digitales
                  (LOPDGDD).
                </li>

                <li>
                  Ley 34/2002, de 11 de julio, de servicios de la sociedad
                  de la información y de comercio electrónico (LSSI-CE),
                  cuando resulte aplicable.
                </li>

                <li>
                  Reglamento (UE) 2024/1689 de Inteligencia Artificial
                  (AI Act), en aquellos tratamientos y sistemas a los que
                  resulte aplicable.
                </li>
              </ul>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
