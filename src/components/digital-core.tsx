"use client";
import { useEffect, useRef, useState, Component, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { portfolio } from "@/data/portfolio";
import { Pause, Play } from "lucide-react";
const Scene = dynamic(() => import("./core-scene"), {
  ssr: false,
  loading: () => null,
});

class SceneBoundary extends Component<
  { children: ReactNode; onFailure: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onFailure();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
export function DigitalCore() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [lowPower, setLowPower] = useState(false);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let cancelled = false;
    const initialize = () => {
      if (cancelled) return;
      setLowPower(
        matchMedia("(max-width: 767px)").matches ||
          (navigator.hardwareConcurrency || 4) <= 4 ||
          ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ||
            8) <= 4,
      );
      if (motion.matches) {
        setEnabled(false);
        setReady(false);
        return;
      }
      const canvas = document.createElement("canvas");
      let gl: WebGL2RenderingContext | null;
      try {
        gl = canvas.getContext("webgl2", { powerPreference: "low-power" });
      } catch {
        setEnabled(false);
        setReady(false);
        return;
      }
      const supported = !!gl;
      gl?.getExtension("WEBGL_lose_context")?.loseContext();
      setEnabled(supported);
    };
    const timer = window.setTimeout(initialize, 350);
    motion.addEventListener("change", initialize);
    const updateVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting && !document.hidden),
      { threshold: 0.05 },
    );
    if (wrapper.current) observer.observe(wrapper.current);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      observer.disconnect();
      motion.removeEventListener("change", initialize);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  return (
    <div className="core-panel" ref={wrapper}>
      <div className="core-corner top-left" aria-hidden="true" />
      <div className="core-corner bottom-right" aria-hidden="true" />
      <div className="core-topline" aria-hidden="true">
        <span>{portfolio.scene.topLabel}</span>
        <span>01 / ∞</span>
      </div>
      <div
        className={`core-fallback ${ready && enabled ? "core-fallback-hidden" : ""}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 600 600" fill="none">
          <defs>
            <radialGradient id="core-halo">
              <stop stopColor="#4bbde2" stopOpacity=".23" />
              <stop offset="1" stopColor="#080b14" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="core-line"
              x1="140"
              y1="100"
              x2="470"
              y2="530"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#b4ffff" />
              <stop offset=".5" stopColor="#53bbd2" />
              <stop offset="1" stopColor="#7d53d8" />
            </linearGradient>
          </defs>
          <circle cx="300" cy="300" r="290" fill="url(#core-halo)" />
          <g transform="rotate(-28 300 300)" stroke="url(#core-line)">
            {Array.from({ length: 17 }, (_, i) => (
              <ellipse
                key={i}
                cx="300"
                cy="300"
                rx={75 + i * 6}
                ry={165 - i * 4}
                transform={`rotate(${i * 11} 300 300)`}
                strokeWidth=".7"
                opacity=".75"
              />
            ))}
            <ellipse
              cx="300"
              cy="300"
              rx="245"
              ry="73"
              strokeWidth=".6"
              opacity=".45"
            />
          </g>
          <circle cx="467" cy="182" r="3" fill="#9cf6ff" />
          <circle cx="128" cy="418" r="2" fill="#b5a1fc" />
        </svg>
      </div>
      {enabled && (
        <div className="core-canvas" aria-hidden="true">
          <SceneBoundary
            onFailure={() => {
              setEnabled(false);
              setReady(false);
            }}
          >
            <Scene
              lowPower={lowPower}
              active={visible && !paused}
              onReady={() => setReady(true)}
              onFailure={() => {
                setEnabled(false);
                setReady(false);
              }}
            />
          </SceneBoundary>
        </div>
      )}
      <div className="core-bottomline">
        <span aria-hidden="true">{portfolio.scene.bottomLabel}</span>
        {enabled && ready && (
          <button
            className="scene-control"
            onClick={() => setPaused(!paused)}
            aria-label={
              paused ? "Reanudar animación 3D" : "Pausar animación 3D"
            }
          >
            {paused ? <Play size={13} /> : <Pause size={13} />}
            <span>{paused ? "Reanudar" : "Pausar"}</span>
          </button>
        )}
      </div>
    </div>
  );
}
