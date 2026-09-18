import { useLanguage } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Pause, Play, RotateCcw, Network } from "lucide-react";
import { systemModes } from "@/data/systems";
import { getService } from "@/data/services";

type RunState = "idle" | "running" | "paused" | "done";
const positions = [
  [110, 80],
  [360, 80],
  [610, 80],
  [610, 240],
  [360, 240],
  [110, 240],
  [110, 400],
  [360, 400],
];

export function SystemsMap() {
  const { t, language } = useLanguage();
  const [mode, setMode] = useState(4);
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(-1);
  const [state, setState] = useState<RunState>("idle");
  const system = systemModes[mode];
  const node = system.nodes[selected];
  useEffect(() => {
    if (state !== "running") return;
    const timer = window.setTimeout(() => {
      if (step >= system.nodes.length - 1) setState("done");
      else {
        setStep(step + 1);
        setSelected(step + 1);
      }
    }, 900);
    return () => window.clearTimeout(timer);
  }, [state, step, system]);
  useEffect(() => {
    const pause = () => {
      if (document.hidden) setState((s) => (s === "running" ? "paused" : s));
    };
    document.addEventListener("visibilitychange", pause);
    return () => document.removeEventListener("visibilitychange", pause);
  }, []);
  const edges = system.nodes.slice(1).map((_, i) => [i, i + 1]);
  if (mode === 4) edges.push([7, 1], [7, 3], [7, 4], [6, 3]);
  const height = system.nodes.length > 6 ? 480 : 320;
  return (
    <div className="systems-lab">
      <div className="systems-intro">
        <div>
          <span className="eyebrow">{t("Arquitectura en acción / 01")}</span>
          <h3>{t("Un sistema, no piezas sueltas.")}</h3>
        </div>
        <p>
          {t(
            "Cada proyecto puede empezar en una web, un panel, una API o una automatización. El valor aparece cuando todo queda conectado.",
          )}
        </p>
      </div>
      <div className="systems-modes" aria-label={t("Modos del sistema")}>
        {systemModes.map((item, i) => (
          <button
            key={t(item.name)}
            aria-pressed={mode === i}
            onClick={() => {
              setState("idle");
              setStep(-1);
              setSelected(0);
              setMode(i);
            }}
          >
            {t(item.name)}
          </button>
        ))}
      </div>
      <div className="systems-layout">
        <div className="systems-visual">
          <div className="map-topline">
            <span>
              <Network size={14} /> {t(system.title)}
            </span>
            <span>{t("SIMULACIÓN INTERACTIVA")}</span>
          </div>
          <div className="system-map" style={{ aspectRatio: `720 / ${height}` }}>
            <svg className="system-connections" viewBox={`0 0 720 ${height}`} aria-hidden="true">
              {edges.map(([from, to], i) => {
                const [x1, y1] = positions[from];
                const [x2, y2] = positions[to];
                const branch = i >= system.nodes.length - 1;
                const path = `M ${x1} ${y1} L ${x2} ${y2}`;
                const active =
                  state === "done" ||
                  selected === from ||
                  selected === to ||
                  (!branch && step >= to);
                return (
                  <g
                    key={`${from}-${to}`}
                    className={`map-edge ${active ? "is-lit" : ""} ${branch ? "is-branch" : ""}`}
                  >
                    <path d={path} />
                    {state === "running" &&
                      ((!branch && step === from) || (branch && step === from)) && (
                        <circle className="map-pulse" r="4">
                          <animateMotion dur="0.9s" repeatCount="indefinite" path={path} />
                        </circle>
                      )}
                  </g>
                );
              })}
            </svg>
            {system.nodes.map((item, i) => (
              <button
                key={t(item.name)}
                className={`system-node ${selected === i ? "is-selected" : ""} ${step >= i ? "is-visited" : ""}`}
                style={{
                  left: `${positions[i][0] / 7.2}%`,
                  top: `${(positions[i][1] / height) * 100}%`,
                }}
                aria-pressed={selected === i}
                aria-label={`${t(item.name)}: ${t(item.tag)}`}
                onClick={() => {
                  setSelected(i);
                  if (state === "running") setState("paused");
                }}
              >
                <span className="node-index">
                  {step >= i ? <Check size={12} /> : String(i + 1).padStart(2, "0")}
                </span>
                <strong>{t(item.name)}</strong>
                <small>{t(item.tag)}</small>
              </button>
            ))}
          </div>
          <div className="map-controls">
            <button
              className="pill-button primary-button"
              onClick={() => {
                if (state === "running") {
                  setState("paused");
                  return;
                }
                if (state !== "paused") {
                  setStep(0);
                  setSelected(0);
                }
                setState("running");
              }}
            >
              {state === "running" ? (
                <Pause size={16} />
              ) : state === "done" ? (
                <RotateCcw size={16} />
              ) : (
                <Play size={16} />
              )}
              {t(
                state === "running"
                  ? "Pausar flujo"
                  : state === "paused"
                    ? "Continuar flujo"
                    : state === "done"
                      ? "Repetir flujo"
                      : "Ejecutar flujo",
              )}
            </button>
            <p role="status" aria-live="polite">
              {state === "done"
                ? t("Flujo completado")
                : state === "running"
                  ? `${t("Paso")} ${step + 1} ${t("de")} ${system.nodes.length}: ${t(system.nodes[step].name)}`
                  : state === "paused"
                    ? t("Flujo en pausa")
                    : t("Selecciona un nodo para explorar")}
            </p>
          </div>
          <p className="map-disclaimer">
            {t(
              "Recorrido conceptual con datos de ejemplo. No ejecuta acciones en servicios externos.",
            )}
          </p>
        </div>
        <aside className="system-context" aria-label={t("Detalle del sistema")}>
          <span className="eyebrow">
            {t("El sistema /")}
            {String(mode + 1).padStart(2, "0")}
          </span>
          <h4>{t(system.title)}</h4>
          <p>{t(system.description)}</p>
          <dl>
            <dt>{t("Las piezas")}</dt>
            <dd>{system.nodes.map((item) => t(item.name)).join(" · ")}</dd>
            <dt>{t("El problema")}</dt>
            <dd>{t(system.problem)}</dd>
            <dt>{t("El valor")}</dt>
            <dd>{t(system.value)}</dd>
          </dl>
          <div className="node-context">
            <span className="eyebrow">
              {t("Pieza seleccionada ·")}
              {t(node.tag)}
            </span>
            <h5>{t(node.name)}</h5>
            <p>{t(node.detail)}</p>
          </div>
          <div className="system-comparison">
            <p>
              <span>{t("Antes")}</span>
              {t(system.before)}
            </p>
            <p>
              <span>{t("Después")}</span>
              {t(system.after)}
            </p>
          </div>
          <div className="system-links">
            <span className="eyebrow">{t("Explorar especializaciones")}</span>
            {system.services.map((slug) => (
              <Link key={slug} to="/servicios/$slug" params={{ slug }} search={{ lang: language }}>
                {t(getService(slug)?.title ?? "")}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
