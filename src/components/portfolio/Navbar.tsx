import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const NAV = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#achievements", label: "achievements" },
  { href: "#github", label: "github" },
  { href: "#resume", label: "resume" },
  { href: "#contact", label: "contact" },
];

export default function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`flex items-center justify-between rounded-xl px-4 py-2.5 transition-all ${scrolled ? "glass-strong" : "glass"
            }`}
        >
          <a href="#home" className="flex items-center gap-2 font-mono">
            <span className="text-neon">$</span>
            <span className="font-bold">nishkarsh</span>
            <span className="text-neon animate-blink">_</span>
          </a>
          <div className="hidden lg:flex items-center gap-1 font-mono text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-neon hover:bg-white/5 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPalette}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-xs glass border border-border hover:border-neon/50 transition-colors"
              data-cursor-hover
            >
              <span className="text-muted-foreground">search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px]">⌘ K</kbd>
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-xs bg-neon text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              data-cursor-hover
            >
              ./hire-me
            </a>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-white/5"
              onClick={() => setOpen(!open)}
              aria-label="menu"
            >
              <div className="space-y-1.5">
                <span className="block w-5 h-px bg-foreground" />
                <span className="block w-5 h-px bg-foreground" />
              </div>
            </button>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-xl p-3 font-mono text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-white/5 hover:text-neon"
              >
                <span className="text-neon">›</span> {n.label}
              </a>
            ))}
            <div className="flex gap-3 px-3 pt-3 border-t border-border mt-2">
              <FaGithub className="text-muted-foreground" />
              <FaLinkedin className="text-muted-foreground" />
              <FaInstagram className="text-muted-foreground" />
              <FaEnvelope className="text-muted-foreground" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
