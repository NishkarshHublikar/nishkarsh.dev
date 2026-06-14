import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  { text: "BOOT > initializing nishkarsh.dev kernel v4.2.1...", delay: 250 },
  { text: "[ OK ]  mounting /portfolio", delay: 200 },
  { text: "[ OK ]  loading neural modules", delay: 200 },
  { text: "[ OK ]  starting terminal interface", delay: 200 },
  { text: "[ OK ]  injecting design tokens", delay: 180 },
  { text: "[ OK ]  warming the GPU", delay: 200 },
  { text: "READY > welcome, visitor.", delay: 280 },
];

export default function BootScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (i >= LINES.length) {
        setTimeout(() => {
          setClosing(true);
          setTimeout(onDone, 600);
        }, 400);
        return;
      }
      setVisible(i + 1);
      const d = LINES[i].delay;
      i++;
      setTimeout(tick, d);
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background grid-bg"
        >
          <div className="w-full max-w-2xl px-6 font-mono text-sm md:text-base">
            <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-3 w-3 rounded-full bg-destructive" />
              <span className="h-3 w-3 rounded-full bg-amber" />
              <span className="h-3 w-3 rounded-full bg-neon" />
              <span className="ml-3">nishkarsh@dev — boot</span>
            </div>
            {LINES.slice(0, visible).map((l, idx) => (
              <div key={idx} className="text-foreground/90">
                <span className="text-neon">$</span> {l.text}
              </div>
            ))}
            {visible < LINES.length && (
              <div className="mt-1">
                <span className="text-neon">$</span> <span className="animate-blink">▊</span>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
