import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHover(!!target.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block transition-[width,height,opacity] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 44 : 14,
          height: hover ? 44 : 14,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "1.5px solid var(--neon)",
          background: hover ? "oklch(0.88 0.25 145 / 10%)" : "transparent",
          boxShadow: "0 0 20px oklch(0.88 0.25 145 / 40%)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          width: 4,
          height: 4,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "var(--neon)",
        }}
      />
    </>
  );
}
