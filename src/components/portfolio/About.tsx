import { motion } from "framer-motion";
import Section from "./Section";
import { FaUserAstronaut } from "react-icons/fa";

const TIMELINE = [
  { year: "2025", title: "B.Tech in Computer Science", place: "ongoing — building, breaking, learning" },
  { year: "2024", title: "Foundation", place: "Switched fully into software engineering" },
  { year: "2022", title: "First lines of code", place: "Python automations that scratched real itches" },
];

const INTERESTS = ["LLM tooling", "Realtime systems", "Web automation", "Developer experience", "Edge runtimes", "Open source"];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="about.md"
      title={<>The human behind the <span className="text-gradient">terminal</span></>}
      description="I design and build full-stack products end-to-end — from the database to the pixel. I obsess over latency, micro-interactions, and the kind of details only other developers notice."
    >
      <div className="grid lg:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4"
        >
          <div className="glass-strong rounded-2xl p-6 sticky top-28">
            <div className="aspect-square rounded-xl overflow-hidden mb-5 relative grid-bg flex items-center justify-center border border-border bg-gradient-to-br from-secondary to-card">
              <FaUserAstronaut className="text-8xl text-neon/40" />
              <div className="absolute inset-0 ring-1 ring-inset ring-neon/20 rounded-xl" />
              <div className="absolute bottom-3 left-3 right-3 glass rounded-lg px-3 py-2 font-mono text-xs">
                <span className="text-neon">●</span> online · IST
              </div>
            </div>
            <div className="font-mono text-xs space-y-2">
              <Row k="alias" v="@nishkarsh" />
              <Row k="role" v="Software Engineer" />
              <Row k="loc" v="India" />
              <Row k="years" v="3+ shipping" />
              <Row k="caffeine" v="2 cups · espresso" />
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-mono text-neon text-sm mb-3">$ cat bio.txt</h3>
            <p className="text-foreground/90 leading-relaxed">
              I'm Nishkarsh — a full-stack developer who treats software like
              craft. I've shipped collaborative tools, scraping pipelines, and
              AI-flavored automations that real teams depend on. Whether it's
              squeezing milliseconds out of a render loop or making a CLI feel
              like a video game, I want the things I build to feel{" "}
              <span className="text-neon">alive</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Career goal: spend the next decade building products that
              developers, founders, and operators actually love opening every
              morning — and to leave each codebase faster, kinder, and a little
              more delightful than I found it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-mono text-neon text-sm mb-5">$ git log --education</h3>
            <ol className="relative border-l border-border space-y-6 pl-6">
              {TIMELINE.map((t) => (
                <li key={t.year}>
                  <span className="absolute -left-[7px] h-3 w-3 rounded-full bg-neon shadow-[0_0_12px_var(--neon)]" />
                  <div className="font-mono text-xs text-neon">{t.year}</div>
                  <div className="font-semibold">{t.title}</div>
                  <div className="text-muted-foreground text-sm">{t.place}</div>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="font-mono text-neon text-sm mb-5">$ ls technical-interests/</h3>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-md font-mono text-sm bg-white/5 border border-border hover:border-neon/50 hover:text-neon transition-colors"
                >
                  {i}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border/50 py-1.5">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-foreground">{v}</span>
    </div>
  );
}
