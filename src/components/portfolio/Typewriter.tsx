import { useEffect, useState } from "react";

const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Python Automation Developer",
  "AI Enthusiast",
];

export default function Typewriter({ className = "" }: { className?: string }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 35 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className={className}>
      <span className="text-gradient">{text}</span>
      <span className="ml-1 inline-block w-[2px] h-[1em] -mb-1 bg-neon animate-blink align-middle" />
    </span>
  );
}
