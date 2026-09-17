import { useEffect, useRef } from "react";
import styles from "./ParticleField.module.css";

type Particle = { x: number; y: number; vx: number; vy: number; kind: number };

/**
 * "Particle life" discreto: três espécies com uma matriz de atração assimétrica.
 * Pausa fora da viewport e com a aba oculta; com reduced-motion desenha um único quadro.
 */
const RULES = [
  [0.12, -0.06, 0.08],
  [0.1, 0.1, -0.1],
  [-0.08, 0.12, 0.06],
];
const RADIUS = 110;
const LINK = 90;

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999 };
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let colors: string[] = [];
    let line = "";
    let frame = 0;
    let running = false;

    const readColors = () => {
      const css = getComputedStyle(document.documentElement);
      colors = [css.getPropertyValue("--accent"), css.getPropertyValue("--accent-2"), css.getPropertyValue("--text-faint")].map((c) => c.trim());
      line = css.getPropertyValue("--border-strong").trim();
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.round(Math.min(150, (width * height) / 11000));
      while (particles.length < target) {
        particles.push({ x: Math.random() * width, y: Math.random() * height, vx: 0, vy: 0, kind: particles.length % 3 });
      }
      particles = particles.slice(0, target);
    };

    const step = () => {
      for (const a of particles) {
        let fx = 0;
        let fy = 0;
        for (const b of particles) {
          if (a === b) continue;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const d = Math.hypot(dx, dy);
          if (d === 0 || d > RADIUS) continue;
          const f = d < 24 ? d / 24 - 1 : RULES[a.kind][b.kind] * (1 - Math.abs(2 * d - RADIUS - 24) / (RADIUS - 24));
          fx += (dx / d) * f;
          fy += (dy / d) * f;
        }
        const pdx = a.x - pointer.x;
        const pdy = a.y - pointer.y;
        const pd = Math.hypot(pdx, pdy);
        if (pd < 140 && pd > 0) {
          fx += (pdx / pd) * (1 - pd / 140) * 1.6;
          fy += (pdy / pd) * (1 - pd / 140) * 1.6;
        }
        a.vx = (a.vx + fx * 0.05) * 0.9;
        a.vy = (a.vy + fy * 0.05) * 0.9;
      }
      for (const p of particles) {
        p.x += p.vx + 0.04;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = line;
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (dx * dx + dy * dy < LINK * LINK) {
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.stroke();
      for (const p of particles) {
        ctx.fillStyle = colors[p.kind];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.kind === 2 ? 1.4 : 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      step();
      draw();
      frame = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduce) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    readColors();
    resize();
    for (let i = 0; i < 120; i++) step();
    draw();

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting && !document.hidden ? start() : stop()));
    io.observe(canvas);
    const onVisibility = () => (document.hidden ? stop() : start());
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const ro = new ResizeObserver(() => {
      resize();
      if (!running) draw();
    });
    ro.observe(canvas);
    const mo = new MutationObserver(() => {
      readColors();
      if (!running) draw();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
