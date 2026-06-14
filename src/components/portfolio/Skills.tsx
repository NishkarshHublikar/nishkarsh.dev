import { motion } from "framer-motion";
import Section from "./Section";
import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiGit, SiGithub, SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType; level: number; color: string };

const GROUPS: { title: string; items: Skill[] }[] = [
  {
    title: "programming",
    items: [
      { name: "Java", icon: FaJava, level: 85, color: "#f89820" },
      { name: "Python", icon: SiPython, level: 92, color: "#ffd43b" },
      { name: "JavaScript", icon: SiJavascript, level: 95, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, level: 90, color: "#3178c6" },
    ],
  },
  {
    title: "frontend",
    items: [
      { name: "React", icon: SiReact, level: 95, color: "#61dafb" },
      { name: "HTML", icon: SiHtml5, level: 95, color: "#e34f26" },
      { name: "CSS", icon: SiCss, level: 90, color: "#1572b6" },
      { name: "Tailwind", icon: SiTailwindcss, level: 95, color: "#38bdf8" },
    ],
  },
  {
    title: "backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, level: 90, color: "#3c873a" },
      { name: "Express", icon: SiExpress, level: 88, color: "#ffffff" },
    ],
  },
  {
    title: "database",
    items: [
      { name: "MySQL", icon: SiMysql, level: 85, color: "#4479a1" },
      { name: "MongoDB", icon: SiMongodb, level: 88, color: "#47a248" },
    ],
  },
  {
    title: "tools",
    items: [
      { name: "Git", icon: SiGit, level: 92, color: "#f1502f" },
      { name: "GitHub", icon: SiGithub, level: 95, color: "#ffffff" },
      { name: "Docker", icon: SiDocker, level: 80, color: "#2496ed" },
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="stack.json"
      title={<>The <span className="text-gradient">tools</span> of the trade</>}
      description="A curated toolbox I've sharpened over years of shipping production software."
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {GROUPS.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6 hover:border-neon/30 border border-transparent transition-colors"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-mono text-sm text-neon">/{g.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {g.items.length} modules
              </span>
            </div>
            <div className="space-y-4">
              {g.items.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.name} data-cursor-hover>
                    <div className="flex items-center gap-3 mb-1.5">
                      <Icon style={{ color: s.color }} className="text-xl shrink-0" />
                      <span className="font-medium text-sm flex-1">{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${s.color}, var(--neon))`,
                          boxShadow: `0 0 12px ${s.color}80`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
