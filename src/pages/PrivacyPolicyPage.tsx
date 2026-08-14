import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/Contact";
import { usePageMeta } from "@/hooks/use-page-meta";

export function PrivacyPolicyPage() {
  usePageMeta({
    title: "Política de Privacidad · Daniel Gil — Impulso Digital",
    description:
      "Política de privacidad y protección de datos de Daniel Gil · Impulso Digital.",
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
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Responsable del tratamiento
              </h2>

              <p className="mb-4">
                El responsable del tratamiento de los datos personales
                tratados a través de este sitio web y de los servicios
                asociados es:
              </p>

              <div className="rounded-2xl border border-border bg-surface-elevated p-6 space-y-2">
                <p>
                  <strong className="text-foreground">
                    Responsable:
                  </strong>{" "}
                  Daniel Gil · Impulso Digital
                </p>

                <p>
                  <strong className="text-foreground">
                    Sitio web:
                  </strong>{" "}
                  digital.agrogarpe.es
                </p>

                <p>
                  <strong className="text-foreground">
                    Correo electrónico:
                  </strong>{" "}
                  danielgil@agrogarpe.es
                </p>

                <p>
                  <strong className="text-foreground">
                    WhatsApp:
                  </strong>{" "}
                  +34 613 13 90 17
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Datos personales que podemos tratar
              </h2>

              <p className="mb-4">
                Dependiendo de la forma en la que el usuario se comunique o
                utilice nuestros servicios, podremos tratar las siguientes
                categorías de datos:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre y apellidos, cuando sean facilitados.</li>
                <li>Número de teléfono.</li>
                <li>Dirección de correo electrónico.</li>
                <li>
                  Nombre o información de perfil disponible mediante
                  WhatsApp.
                </li>
                <li>
                  Contenido de los mensajes, consultas y archivos que el
                  usuario envíe voluntariamente.
                </li>
                <li>
                  Información necesaria para elaborar presupuestos,
                  prestar servicios o mantener una relación comercial.
                </li>
                <li>
                  Información técnica básica relacionada con el acceso al
                  sitio web, como dirección IP, navegador, dispositivo o
                  registros técnicos de seguridad, cuando corresponda.
                </li>
              </ul>

              <p className="mt-4">
                Se recomienda no enviar mediante WhatsApp, correo electrónico
                o formularios información especialmente sensible que no sea
                necesaria para atender la consulta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Finalidades del tratamiento
              </h2>

              <p className="mb-4">
                Los datos personales podrán ser utilizados para las
                siguientes finalidades:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Responder consultas y solicitudes de información.</li>
                <li>
                  Gestionar conversaciones recibidas mediante WhatsApp,
                  correo electrónico u otros canales de contacto.
                </li>
                <li>
                  Elaborar presupuestos y gestionar solicitudes de
                  contratación.
                </li>
                <li>
                  Prestar, mantener y mejorar los servicios contratados.
                </li>
                <li>
                  Automatizar determinadas tareas de atención y asistencia.
                </li>
                <li>
                  Generar propuestas de respuesta mediante sistemas de
                  inteligencia artificial.
                </li>
                <li>
                  Mantener la seguridad, disponibilidad y correcto
                  funcionamiento de los sistemas.
                </li>
                <li>
                  Cumplir las obligaciones legales, fiscales,
                  administrativas o contractuales aplicables.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Uso de WhatsApp
              </h2>

              <p className="mb-4">
                Cuando un usuario se comunica mediante WhatsApp, se podrán
                tratar su número de teléfono, nombre de perfil, contenido de
                los mensajes y demás información que facilite
                voluntariamente durante la conversación.
              </p>

              <p>
                La comunicación se realiza utilizando los servicios de
                WhatsApp y Meta Platforms. El tratamiento de información por
                parte de dichos servicios también está sujeto a sus propias
                condiciones y políticas de privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Inteligencia artificial y respuestas automatizadas
              </h2>

              <p className="mb-4">
                Algunos servicios pueden utilizar sistemas de inteligencia
                artificial para analizar el contenido de las consultas y
                generar, clasificar, resumir o proponer respuestas.
              </p>

              <p className="mb-4">
                Para ello, el contenido estrictamente necesario de una
                conversación puede ser enviado a proveedores tecnológicos
                especializados en inteligencia artificial, actualmente
                incluyendo servicios de Anthropic mediante su API.
              </p>

              <p>
                Estos sistemas se utilizan como herramientas de asistencia y
                automatización. No se pretende adoptar mediante ellos
                decisiones que produzcan efectos jurídicos sobre el usuario
                o le afecten significativamente de forma similar sin una base
                jurídica adecuada y, cuando sea necesario, intervención
                humana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Base jurídica
              </h2>

              <p className="mb-4">
                La base jurídica del tratamiento dependerá de cada caso y
                podrá consistir en:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  La aplicación de medidas precontractuales solicitadas por
                  el interesado, por ejemplo, al solicitar información o un
                  presupuesto.
                </li>
                <li>
                  La ejecución de un contrato cuando exista una relación
                  comercial o profesional.
                </li>
                <li>
                  El consentimiento del usuario cuando sea legalmente
                  necesario.
                </li>
                <li>
                  El cumplimiento de obligaciones legales aplicables al
                  responsable.
                </li>
                <li>
                  El interés legítimo en mantener la seguridad de los
                  sistemas, prevenir abusos y gestionar adecuadamente las
                  comunicaciones profesionales, cuando resulte aplicable.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Proveedores y destinatarios de los datos
              </h2>

              <p className="mb-4">
                Para prestar los servicios pueden intervenir proveedores
                tecnológicos que actúan como proveedores de infraestructura
                o encargados del tratamiento, entre ellos:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Meta Platforms / WhatsApp, para la gestión de
                  comunicaciones mediante WhatsApp.
                </li>
                <li>
                  Google Cloud, utilizado como infraestructura tecnológica
                  para determinados servicios y automatizaciones.
                </li>
                <li>
                  Anthropic, como proveedor de servicios de inteligencia
                  artificial mediante API.
                </li>
                <li>
                  Vercel, como proveedor de alojamiento y distribución del
                  sitio web.
                </li>
              </ul>

              <p className="mt-4">
                También podrán comunicarse datos cuando exista una obligación
                legal o sean requeridos legítimamente por administraciones
                públicas, jueces, tribunales u otras autoridades
                competentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Transferencias internacionales
              </h2>

              <p>
                Algunos proveedores tecnológicos utilizados para prestar los
                servicios pueden operar o disponer de infraestructura fuera
                del Espacio Económico Europeo. Cuando se produzcan
                transferencias internacionales de datos personales, se
                aplicarán los mecanismos y garantías exigidos por la
                normativa de protección de datos que correspondan en cada
                caso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Conservación de los datos
              </h2>

              <p className="mb-4">
                Los datos personales se conservarán únicamente durante el
                tiempo necesario para atender la finalidad para la que fueron
                recopilados y, posteriormente, durante los plazos exigidos
                para atender posibles responsabilidades legales,
                contractuales, fiscales o administrativas.
              </p>

              <p>
                Cuando los datos dejen de ser necesarios, serán eliminados o,
                cuando legalmente corresponda, permanecerán bloqueados hasta
                que finalicen los plazos de responsabilidad aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Seguridad de los datos
              </h2>

              <p>
                Se aplican medidas técnicas y organizativas razonables
                destinadas a proteger los datos personales frente a pérdida,
                acceso no autorizado, alteración, divulgación o destrucción,
                teniendo en cuenta la naturaleza de la información tratada,
                el contexto del tratamiento y los riesgos existentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Derechos de los interesados
              </h2>

              <p className="mb-4">
                El usuario puede ejercer, cuando proceda, los derechos
                reconocidos por la normativa de protección de datos,
                incluyendo:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Derecho de acceso.</li>
                <li>Derecho de rectificación.</li>
                <li>Derecho de supresión.</li>
                <li>Derecho de oposición.</li>
                <li>Derecho a la limitación del tratamiento.</li>
                <li>Derecho a la portabilidad de sus datos.</li>
                <li>
                  Derecho a retirar el consentimiento cuando el tratamiento
                  esté basado en él.
                </li>
                <li>
                  Derecho a no ser objeto de determinadas decisiones
                  exclusivamente automatizadas cuando resulte aplicable.
                </li>
              </ul>

              <p className="mt-4">
                Para ejercer estos derechos puede enviarse una solicitud a:
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
                Si el usuario considera que sus derechos no han sido
                correctamente atendidos, puede presentar una reclamación ante
                la Agencia Española de Protección de Datos.
              </p>
            </section>

            <section id="eliminacion-datos">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Solicitud de eliminación de datos
              </h2>

              <p className="mb-4">
                Cualquier usuario puede solicitar la eliminación de los datos
                personales asociados a sus comunicaciones o al uso de
                nuestros servicios.
              </p>

              <p className="mb-4">
                Para solicitarlo, deberá enviar un correo electrónico a{" "}
                <a
                  href="mailto:danielgil@agrogarpe.es"
                  className="text-foreground underline underline-offset-4"
                >
                  danielgil@agrogarpe.es
                </a>{" "}
                indicando en el asunto{" "}
                <strong className="text-foreground">
                  “Solicitud de eliminación de datos”
                </strong>
                .
              </p>

              <p>
                Podremos solicitar información razonablemente necesaria para
                verificar la identidad del solicitante. Una vez verificada la
                solicitud, se eliminarán o bloquearán los datos que procedan,
                salvo aquellos que deban conservarse por una obligación
                legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                13. Menores de edad
              </h2>

              <p>
                Los servicios ofrecidos tienen carácter profesional y no
                están dirigidos específicamente a menores de edad. Si se
                detecta que se han recibido datos de un menor sin la
                autorización necesaria, se adoptarán las medidas oportunas
                para su eliminación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                14. Cambios en la Política de Privacidad
              </h2>

              <p>
                Esta Política de Privacidad podrá actualizarse cuando sea
                necesario para reflejar cambios legales, técnicos o en los
                servicios ofrecidos. La versión publicada en esta página será
                la que se encuentre vigente en cada momento.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
