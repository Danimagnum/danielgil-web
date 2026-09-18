import { useLanguage } from "@/lib/i18n";
import { useState, type CSSProperties } from "react";
import { ArrowUpRight, Check, Layers, MousePointer2, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SystemsMap } from "./SystemsMap";

const modes = ["Interfaces", "Movimiento", "Sistemas"] as const;
export function Laboratory() {
  const { t } = useLanguage();
  const [mode, setMode] = useState<(typeof modes)[number]>("Sistemas");
  const [accent, setAccent] = useState(0);
  const [radius, setRadius] = useState(18);
  const colors = ["#c1f66c", "#b9a4ff", "#ffad83"];
  return (
    <section id="laboratorio" className="section-shell lab-section">
      <Reveal>
        <div className="section-topline">
          <span className="eyebrow">{t("01 / Laboratorio digital")}</span>
          <span className="small-note">{t("MENOS CONTAR. MÁS DEMOSTRAR.")}</span>
        </div>
        <div className="section-heading">
          <h2>
            {t("No solo lo imagino.")}
            <br />
            <span className="muted-heading">{t("Lo hago funcionar.")}</span>
          </h2>
          <p>
            {t("Un pequeño espacio para experimentar.")}
            <br />
            {t("Toca, cambia y descubre lo que sucede.")}
          </p>
        </div>
      </Reveal>
      <div className="lab-tabs" aria-label={t("Seleccionar demostración")}>
        {modes.map((m, i) => (
          <button
            key={t(m)}
            aria-pressed={mode === m}
            onClick={() => {
              setMode(m);
            }}
          >
            <span>0{i + 1}</span>
            {t(m)}
            {mode === m && <ArrowUpRight size={17} />}
          </button>
        ))}
      </div>
      {mode === "Sistemas" ? (
        <SystemsMap />
      ) : (
        <div
          className="lab-stage"
          style={
            { "--demo-accent": colors[accent], "--demo-radius": `${radius}px` } as CSSProperties
          }
        >
          <div className="lab-explanation">
            <span className="demo-icon">
              {mode === "Interfaces" ? <Layers /> : <MousePointer2 />}
            </span>
            <span className="eyebrow">
              {t(
                mode === "Interfaces"
                  ? "Diseño de producto"
                  : mode === "Movimiento"
                    ? "Microinteracciones"
                    : "Automatización",
              )}
            </span>
            <h3>
              {t(
                mode === "Interfaces"
                  ? "Tu estilo. Tus reglas."
                  : mode === "Movimiento"
                    ? "Cada gesto cuenta."
                    : "Conecta. Ejecuta. Listo.",
              )}
            </h3>
            <p>
              {t(
                mode === "Interfaces"
                  ? "Un sistema visual que responde al instante. Cambia la paleta y las formas para darle tu personalidad."
                  : mode === "Movimiento"
                    ? "El movimiento también comunica. Pasa el cursor o enfoca las piezas para descubrir sus diferentes respuestas."
                    : "Una simulación visual de un flujo automatizado: del evento inicial al resultado, paso a paso.",
              )}
            </p>
            {mode === "Interfaces" && (
              <div className="demo-controls">
                <span className="control-label">{t("COLOR DE ACENTO")}</span>
                <div className="swatches">
                  {colors.map((c, i) => (
                    <button
                      key={c}
                      style={{ background: c }}
                      aria-label={t(["Verde lima", "Lavanda", "Melocotón"][i])}
                      aria-pressed={i === accent}
                      onClick={() => setAccent(i)}
                    >
                      {i === accent && <Check size={18} />}
                    </button>
                  ))}
                </div>
                <label htmlFor="radius">
                  {t("CURVATURA")}
                  <span>
                    {radius}
                    {t("px")}
                  </span>
                </label>
                <input
                  id="radius"
                  type="range"
                  min="0"
                  max="32"
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                />
              </div>
            )}
            <span className="demo-footnote">
              <span className="status-dot" />
              {t("Demo interactiva · Hecha con código")}
            </span>
          </div>
          <div className="demo-canvas">
            {mode === "Interfaces" && (
              <div className="product-preview">
                <div className="preview-top">
                  <span>
                    <Sparkles size={20} />
                    {t("forma.")}
                  </span>
                  <span className="preview-avatar">{t("DG")}</span>
                </div>
                <div className="preview-greeting">{t("TU ESPACIO CREATIVO")}</div>
                <h4>
                  {t("Todo empieza")}
                  <br />
                  {t("con una idea.")}
                </h4>
                <div className="preview-chart" aria-label={t("Gráfico decorativo de ejemplo")}>
                  {[32, 56, 42, 72, 61, 86, 100, 77, 91].map((h, i) => (
                    <span key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="preview-bottom">
                  <span>
                    <strong>{t("Diseña tu próximo paso")}</strong>
                    <small>{t("Un sistema. Infinitas posibilidades.")}</small>
                  </span>
                  <span className="preview-arrow">
                    <ArrowUpRight />
                  </span>
                </div>
              </div>
            )}
            {mode === "Movimiento" && (
              <div className="motion-samples">
                <button className="motion-sample sample-lift">
                  <ArrowUpRight size={42} />
                  <span>{t("01 / Elevación")}</span>
                </button>
                <button className="motion-sample sample-spin">
                  <Sparkles size={42} />
                  <span>{t("02 / Rotación")}</span>
                </button>
                <button className="motion-sample sample-depth">
                  <Layers size={42} />
                  <span>{t("03 / Profundidad")}</span>
                </button>
                <p>{t("Pasa el cursor · Navega con Tab · Pulsa")}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
