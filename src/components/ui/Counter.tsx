"use client";
import { useEffect, useRef, useState } from "react";
export function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null); const [count, setCount] = useState(0);
  useEffect(() => { const node = ref.current; if (!node) return; const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) return; if (reduce) setCount(value); else { const start = performance.now(); const tick = (now: number) => { const progress = Math.min((now - start) / 900, 1); setCount(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); } observer.disconnect(); }, { threshold: 0.4 }); observer.observe(node); return () => observer.disconnect(); }, [value]);
  return <span ref={ref}>{count}{suffix}</span>;
}
