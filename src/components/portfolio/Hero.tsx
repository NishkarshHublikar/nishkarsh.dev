import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowDown } from "react-icons/fa";
import Typewriter from "./Typewriter";
import InteractiveTerminal from "./InteractiveTerminal";

const CODE_LINES = [
  { c: "muted-foreground", t: "// nishkarsh.config.ts" },
  { c: "magenta", t: "const " },
  { c: "cyan", t: "developer " },
  { c: "foreground", t: "= {" },
  { c: "amber", t: "  name: " },
  { c: "neon", t: "'Nishkarsh'," },
  { c: "amber", t: "  role: " },
  { c: "neon", t: "'Full Stack + AI'," },
  { c: "amber", t: "  stack: " },
  { c: "neon", t: "['React','TS','Python']," },
  { c: "amber", t: "  status: " },
  { c: "neon", t: "'shipping ✦'," },
  { c: "foreground", t: "};" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 min-h-screen flex items-center grid-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-xs mb-6">
              <span className="h-2 w-2 rounded-full bg-neon animate-pulse" />
              <span className="text-muted-foreground">available for opportunities</span>
            </div>
            <h1 className="font-display font-bold leading-[0.95] tracking-tight text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-gradient">Nishkarsh</span>
              <br />
              <span className="text-foreground/90">I build </span>
              <span className="neon-text">things</span>
              <span className="text-foreground/90"> on the web.</span>
            </h1>
            <div className="mt-6 font-mono text-lg md:text-2xl text-muted-foreground min-h-[2em]">
              <span className="text-neon">$</span> whoami →{" "}
              <Typewriter />
            </div>
            <p className="mt-6 max-w-xl text-muted-foreground text-base md:text-lg">
              A developer obsessed with crafting fast, beautiful, and intelligent
              software — from real-time collaboration platforms to Python
              automations that quietly save thousands of hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-neon text-primary-foreground font-mono font-semibold hover:shadow-[0_0_30px_oklch(0.88_0.25_145_/_50%)] transition-shadow"
                data-cursor-hover
              >
                ./view-projects
                <FaArrowDown className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg glass border border-border hover:border-neon/50 font-mono transition-colors"
                data-cursor-hover
              >
                <span className="text-neon">$</span> contact --me
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-xl text-muted-foreground">
              <a href="https://github.com/NishkarshHublikar" target="_blank" rel="noreferrer" className="hover:text-neon transition-colors" data-cursor-hover aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/in/nishkarsh-hublikar" target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors" data-cursor-hover aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.instagram.com/_nishkarsh_274" target="_blank" rel="noreferrer" className="hover:text-magenta transition-colors" data-cursor-hover aria-label="Instagram"><FaInstagram /></a>
              <a href="mailto:nishkarshhublikar@gmail.com" className="hover:text-amber transition-colors" data-cursor-hover aria-label="Email"><FaEnvelope /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <InteractiveTerminal />
            <div className="glass rounded-xl p-5 font-mono text-sm">
              <div className="text-xs text-muted-foreground mb-2">~/identity.ts</div>
              {CODE_LINES.map((l, i) => (
                <div key={i} style={{ color: `var(--color-${l.c})` }}>
                  {l.t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
