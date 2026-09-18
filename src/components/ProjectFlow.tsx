import { useEffect, useId, useRef, useState } from "react";
import { Pause, Play, RotateCcw, ArrowRight } from "lucide-react";
import { useLanguage, type Bilingual } from "@/lib/i18n";

export function ProjectFlow({
  nodes,
  tags,
  variant,
  title,
  onSelect,
  autoStart = false,
}: {
  nodes: Bilingual[];
  tags: string[];
  variant: string;
  title: string;
  onSelect?: (index: number) => void;
  autoStart?: boolean;
}) {
  const { t, l } = useLanguage();
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const id = useId();
  useEffect(() => {
    if (!autoStart || !ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setRunning(true);
        }
        if (!entries[0].isIntersecting) setRunning(false);
      },
      { threshold: 0.35 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [autoStart]);
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      if (active === nodes.length - 1) {
        setDone(true);
        setRunning(false);
      } else setActive((index) => index + 1);
    }, 850);
    return () => window.clearTimeout(timer);
  }, [active, running, nodes.length]);
  useEffect(() => {
    const pause = () => {
      if (document.hidden) setRunning(false);
    };
    document.addEventListener("visibilitychange", pause);
    return () => document.removeEventListener("visibilitychange", pause);
  }, []);
  return (
    <div className="project-flow" ref={ref} data-variant={variant}>
      <div className="flow-caption">
        <span className="eyebrow">{title}</span>
        <span>{t("Simulación conceptual", "Conceptual simulation")}</span>
      </div>
      <div
        className="flow-network"
        style={{ gridTemplateColumns: `repeat(${nodes.length}, minmax(0, 1fr))` }}
      >
        {nodes.map((node, index) => (
          <button
            key={node.es}
            className={`flow-module ${active === index ? "active" : ""} ${index < active || done ? "complete" : ""}`}
            aria-pressed={active === index}
            aria-describedby={id}
            onClick={() => {
              setActive(index);
              setRunning(false);
              setDone(false);
              onSelect?.(index);
            }}
          >
            <span className="flow-number">{String(index + 1).padStart(2, "0")}</span>
            <strong>{l(node)}</strong>
            <small>{t(tags[index % tags.length])}</small>
            {index < nodes.length - 1 && (
              <span
                aria-hidden="true"
                className={`flow-wire ${running && active === index ? "sending" : ""}`}
              >
                <i />
                <ArrowRight size={12} />
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="flow-bottom">
        <p id={id} role="status">
          {done
            ? t("Flujo completado")
            : `${t("Paso")} ${active + 1} / ${nodes.length} — ${l(nodes[active])}`}
        </p>
        <button
          className="text-link"
          onClick={() => {
            if (running) {
              setRunning(false);
              return;
            }
            if (done) {
              setDone(false);
              setActive(0);
            }
            setRunning(true);
          }}
        >
          {running ? <Pause size={15} /> : done ? <RotateCcw size={15} /> : <Play size={15} />}
          {running ? t("Pausar flujo") : done ? t("Repetir flujo") : t("Ejecutar flujo")}
        </button>
      </div>
    </div>
  );
}
