import { useLanguage } from "@/lib/i18n";
import { ArrowDown, ArrowUpRight, Asterisk, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  const artRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = artRef.current;
    if (!el) return;
    let visible = true;
    const update = () => {
      el.dataset.sleeping = String(!visible || document.hidden);
    };
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      update();
    });
    observer.observe(el);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <section id="top" className="portfolio-hero">
      <div className="hero-meta">
        <span>
          <i className="status-dot" />
          {t("Disponible para nuevos proyectos")}
        </span>
        <span>{t("FULL STACK × AUTOMATIZACIÓN × DATOS")}</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-enter">{t("Daniel Gil · Full stack & automatización")}</p>
          <h1 className="hero-enter">
            {t("Sistemas", "Connected")}
            <br />
            <span className="serif-word">{t("conectados.", "systems.")}</span>
          </h1>
          <p className="hero-description hero-enter">
            {t(
              "Desarrollo plataformas, automatizaciones e integraciones para convertir procesos complejos en sistemas digitales conectados.",
            )}
          </p>
          <p className="hero-support hero-enter">
            {t("Desde webs y paneles internos hasta IA, APIs, datos y automatización operativa.")}
          </p>
          <div className="hero-actions hero-enter">
            <a className="pill-button primary-button" href="#laboratorio">
              {t("Explora el laboratorio")}
              <ArrowDown size={17} />
            </a>
            <a className="text-link" href="#contacto">
              {t("Hablemos")}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div ref={artRef} className={`hero-art ${paused ? "is-paused" : ""}`}>
          <div className="art-grid" aria-hidden="true" />
          <span className="art-coordinate">{t("FIG. 01 — TODO CONECTADO")}</span>
          <div className="orbital-scene" aria-hidden="true">
            <div className="orbital-object">
              {Array.from({ length: 13 }, (_, i) => (
                <div
                  key={i}
                  className="orbital-ring"
                  style={{ transform: `rotateY(${i * 13.85}deg)` }}
                />
              ))}
              <div className="orbital-core" />
            </div>
          </div>
          <span className="floating-label label-design">
            <Asterisk size={18} />
            {t("Procesos automatizados")}
          </span>
          <span className="floating-label label-code">
            <span className="code-symbol">{"</>"}</span>
            {t("Apps + APIs + Datos")}
          </span>
          <div className="art-bottom">
            <span>{t("TECNOLOGÍA QUE TRABAJA CONTIGO")}</span>
            <button
              className="icon-button"
              onClick={() => setPaused(!paused)}
              aria-label={t(paused ? "Reanudar animación" : "Pausar animación")}
            >
              {paused ? <Play size={15} /> : <Pause size={15} />}
            </button>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          {t("INGENIERO DE TELECOMUNICACIONES")}
          <br />
          <strong>{t("Soluciones completas · Colaboración técnica.")}</strong>
        </span>
        <a href="#sobre-mi">
          {t("Un poco más abajo")}
          <ArrowDown size={16} />
        </a>
        <span className="hero-edition">{t("PORTFOLIO — VOL. 2026")}</span>
      </div>
    </section>
  );
}
