import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACTIONS = [
  { id: "home", label: "Go to Home", icon: "⌂", section: "#home" },
  { id: "about", label: "View About", icon: "◉", section: "#about" },
  { id: "skills", label: "Skills & Stack", icon: "◆", section: "#skills" },
  { id: "projects", label: "Browse Projects", icon: "▦", section: "#projects" },
  { id: "experience", label: "Experience Timeline", icon: "⌗", section: "#experience" },
  { id: "achievements", label: "Achievements", icon: "★", section: "#achievements" },
  { id: "github", label: "GitHub Dashboard", icon: "✦", section: "#github" },
  { id: "resume", label: "Resume", icon: "▤", section: "#resume" },
  { id: "contact", label: "Contact Me", icon: "✉", section: "#contact" },
  { id: "gh", label: "Open GitHub Profile", icon: "↗", href: "https://github.com/NishkarshHublikar" },
  { id: "li", label: "Open LinkedIn", icon: "↗", href: "https://www.linkedin.com/in/nishkarsh-hublikar/" },
  { id: "mail", label: "Send Email", icon: "↗", href: "mailto:nishkarshhublikar@gmail.com" },
];

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const filtered = ACTIONS.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Enter") {
        const a = filtered[active];
        if (!a) return;
        if (a.href) window.open(a.href, "_blank");
        else if (a.section) document.querySelector(a.section)?.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9000] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -20, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -20, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl glass-strong rounded-2xl overflow-hidden shadow-[0_0_80px_oklch(0.88_0.25_145_/_20%)] border border-neon/30"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
              <span className="text-neon font-mono">›</span>
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                placeholder="type a command or search…"
                className="flex-1 bg-transparent outline-none font-mono text-foreground placeholder:text-muted-foreground"
              />
              <kbd className="px-2 py-1 rounded bg-white/10 text-[10px] font-mono">esc</kbd>
            </div>
            <div className="max-h-[50vh] overflow-y-auto py-2">
              {filtered.length === 0 && (
                <div className="px-5 py-6 text-center text-muted-foreground text-sm font-mono">
                  no results — try another keyword
                </div>
              )}
              {filtered.map((a, i) => (
                <button
                  key={a.id}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    if (a.href) window.open(a.href, "_blank");
                    else if (a.section) document.querySelector(a.section)?.scrollIntoView({ behavior: "smooth" });
                    onClose();
                  }}
                  className={`w-full flex items-center gap-3 px-5 py-2.5 font-mono text-sm transition-colors ${i === active ? "bg-neon/10 text-neon" : "text-foreground hover:bg-white/5"
                    }`}
                >
                  <span className="text-lg w-6 text-center">{a.icon}</span>
                  <span className="flex-1 text-left">{a.label}</span>
                  {i === active && <span className="text-xs text-muted-foreground">↵</span>}
                </button>
              ))}
            </div>
            <div className="px-5 py-2 border-t border-border flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span>↑↓ navigate · ↵ select</span>
              <span>⌘ K to toggle</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
