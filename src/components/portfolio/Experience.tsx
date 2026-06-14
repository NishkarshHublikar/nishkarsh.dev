import { motion } from "framer-motion";
import Section from "./Section";

const ITEMS = [
  {
    role: "Full Stack Engineer",
    org: "Independent / Personal Projects",
    period: "2024 — Present",
    bullets: [
      "Designed and shipped SheetCollab end-to-end with realtime sync.",
      "Architected scalable Node.js + MongoDB backends.",
      "Drove design systems and DX standards across multiple repos.",
    ],
    stack: ["React", "TS", "Node", "Mongo"],
  },
  {
    role: "Python Automation Developer",
    org: "Freelance",
    period: "2025 — 2026",
    bullets: [
      "Built scrapers and ETL pipelines processing 1M+ records weekly.",
      "Automated Excel & email workflows that saved teams ~30 hrs / week.",
      "Delivered dashboards turning raw exports into actionable KPIs.",
    ],
    stack: ["Python", "Pandas", "Selenium", "FastAPI"],
  },
  {
    role: "Open-Source Contributor",
    org: "GitHub Community",
    period: "2024 — Present",
    bullets: [
      "Contributed bugfixes and DX improvements to popular OSS tools.",
      "Maintained personal libraries with consistent semver releases.",
    ],
    stack: ["TS", "Python", "Docker"],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="experience.log"
      title={<>A <span className="text-gradient">timeline</span> of building</>}
      description="Roles, contracts, and side bets — every one of them taught me something I still use today."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/50 to-transparent" />
        <div className="space-y-12">
          {ITEMS.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${isLeft ? "" : "md:[&>div]:col-start-2"
                  }`}
              >
                <span className="absolute left-2 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-neon shadow-[0_0_20px_var(--neon)] ring-4 ring-background" />
                <div>
                  <div className="glass rounded-2xl p-6 hover:border-neon/40 border border-transparent transition-colors">
                    <div className="font-mono text-xs text-neon mb-2">{item.period}</div>
                    <h3 className="font-display font-bold text-xl">{item.role}</h3>
                    <div className="text-muted-foreground text-sm mb-3">@ {item.org}</div>
                    <ul className="space-y-1.5 text-sm">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-neon mt-1">▹</span>
                          <span className="text-foreground/85">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded font-mono text-[11px] bg-white/5 border border-border"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
