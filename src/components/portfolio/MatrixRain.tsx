import { useEffect, useState } from "react";

const COLS = 30;

export default function MatrixRain() {
  const [cols, setCols] = useState<number[]>([]);
  useEffect(() => {
    setCols(Array.from({ length: COLS }, (_, i) => i));
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-[0.07]">
      {cols.map((i) => {
        const left = (i / COLS) * 100;
        const delay = (i * 0.37) % 5;
        const duration = 8 + ((i * 1.7) % 6);
        return (
          <div
            key={i}
            className="absolute top-0 font-mono text-xs"
            style={{
              left: `${left}%`,
              color: "var(--neon)",
              animation: `float-up ${duration}s linear ${delay}s infinite`,
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.2em",
            }}
          >
            {Array.from({ length: 25 }, () =>
              String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96)),
            ).join("")}
          </div>
        );
      })}
    </div>
  );
}
