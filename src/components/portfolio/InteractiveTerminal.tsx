import { useEffect, useRef, useState } from "react";

type Line = { type: "in" | "out" | "ascii"; content: string };

const ASCII = `
███╗   ██╗██╗███████╗██╗  ██╗
████╗  ██║██║██╔════╝██║  ██║
██╔██╗ ██║██║███████╗███████║
██║╚██╗██║██║╚════██║██╔══██║
██║ ╚████║██║███████║██║  ██║
╚═╝  ╚═══╝╚═╝╚══════╝╚═╝  ╚═╝
`;

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  about       — who is Nishkarsh
  skills      — tech stack overview
  projects    — featured projects
  experience  — career timeline
  achievements— awards & profiles
  contact     — get in touch
  resume      — download my CV
  social      — find me online
  clear       — clear the screen
  whoami      — current session info`,
  about: `Nishkarsh — Software Engineer & Full Stack Developer.
Building automation, AI tools and elegant web platforms.
Type "skills" or "projects" to dig deeper.`,
  skills: `Programming  : Java · Python · JavaScript · TypeScript
Frontend     : React · HTML · CSS · Tailwind
Backend      : Node.js · Express
Database     : MySQL · MongoDB
Tools        : Git · GitHub · Docker`,
  projects: `1. SheetCollab          → real-time collaborative spreadsheets
2. Contact Extractor    → web scraping & lead gen
3. Email Automation     → analytics & extraction
4. Excel Insights Hub   → reporting & automation
Type "open <n>" or scroll to the Projects section.`,
  experience: `→ Full Stack Engineer · Independent  (2024 — Present)
→ Python Automation Dev · Freelance (2023 — 2024)
→ Open-Source Contributor          (2022 — Present)`,
  achievements: `★ 300+ commits in 2026
★ 15+ Technologies 
★ HackerRank 5 Star Rated SQL
★ IBM DevOps Certified`,
  contact: `email   : nishkarshhublikar@gmail.com
github  : github.com/NishkarshHublikar
linkedin: linkedin.com/in/nishkarsh-hublikar
or scroll to the contact terminal below.`,
  resume: `Resume ready. Click the "Download Resume" button in the Resume section.`,
  social: `github · linkedin · instagram · email — see Contact section`,
  whoami: `guest@nishkarsh.dev — session ${new Date().toISOString()}`,
};

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: "ascii", content: ASCII },
    { type: "out", content: "Welcome — type 'help' to list commands." },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [lines]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const next: Line[] = [...lines, { type: "in", content: raw }];
    if (!cmd) {
      setLines(next);
      return;
    }
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    if (cmd.startsWith("open ")) {
      const id = cmd.split(" ")[1];
      const section = document.getElementById("projects");
      section?.scrollIntoView({ behavior: "smooth" });
      setLines([...next, { type: "out", content: `Opening project ${id}…` }]);
      return;
    }
    const out = COMMANDS[cmd] ?? `command not found: ${cmd}. type 'help'.`;
    setLines([...next, { type: "out", content: out }]);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      if (input.trim()) setHistory((h) => [...h, input]);
      setInput("");
      setHistIdx(null);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const i = histIdx === null ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(i);
      setInput(history[i]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx === null) return;
      const i = histIdx + 1;
      if (i >= history.length) {
        setHistIdx(null);
        setInput("");
      } else {
        setHistIdx(i);
        setInput(history[i]);
      }
    }
  };

  return (
    <div
      className="glass-strong rounded-xl overflow-hidden font-mono text-sm shadow-[0_0_60px_oklch(0.88_0.25_145_/_15%)]"
      onClick={() => inputRef.current?.focus()}
      data-cursor-hover
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-black/40">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-destructive" />
          <span className="h-3 w-3 rounded-full bg-amber" />
          <span className="h-3 w-3 rounded-full bg-neon" />
        </div>
        <span className="text-xs text-muted-foreground">nishkarsh@portfolio: ~</span>
        <span className="text-xs text-muted-foreground">zsh</span>
      </div>
      <div className="p-4 h-[420px] overflow-y-auto bg-black/30">
        {lines.map((l, i) => {
          if (l.type === "ascii") {
            return (
              <pre key={i} className="text-neon text-[10px] leading-tight md:text-xs mb-3 whitespace-pre">
                {l.content}
              </pre>
            );
          }
          if (l.type === "in") {
            return (
              <div key={i} className="text-foreground/90">
                <span className="text-neon">➜</span> <span className="text-cyan">~</span>{" "}
                <span>{l.content}</span>
              </div>
            );
          }
          return (
            <pre key={i} className="text-muted-foreground whitespace-pre-wrap mb-2">
              {l.content}
            </pre>
          );
        })}
        <div className="flex items-center gap-2">
          <span className="text-neon">➜</span>
          <span className="text-cyan">~</span>
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            className="flex-1 bg-transparent outline-none text-foreground caret-neon"
            spellCheck={false}
            aria-label="terminal input"
          />
        </div>
        <div ref={endRef} />
      </div>
    </div>
  );
}
