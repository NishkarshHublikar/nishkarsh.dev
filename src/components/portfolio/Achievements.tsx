import { motion } from "framer-motion";
import Section from "./Section";
import { FaTrophy, FaCode, FaCertificate, FaMedal, FaTools } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiGithub } from "react-icons/si";

const STATS = [
  { value: "100+", label: "LeetCode submissions", icon: SiLeetcode, color: "#ffa116" },
  { value: "300+", label: "Github Contributions", icon: SiGithub, color: "#1f8acb" },
  { value: "5★", label: "HackerRank SQL", icon: SiHackerrank, color: "#2ec866" },
  { value: "15+", label: "Technologies Used", icon: FaTools, color: "#2f8d46" },
];

const CARDS = [
  {
    icon: FaTrophy,
    title: "Development Journey",
    body: "30+ public repositories spanning full-stack, cloud, and data-driven applications.",
    color: "var(--amber)",
  },
  {
    icon: FaCertificate,
    title: "Cloud Fundamentals",
    body: "Hands-on experience deploying full-stack applications using AWS services, Vercel, Cloudflare Workers, and modern CI/CD workflows.",
    color: "var(--cyan)",
  },
  {
    icon: FaCode,
    title: "Open Source",
    body: "Merged PRs across React, Node, and Python projects. Maintainer of two npm packages.",
    color: "var(--neon)",
  },
  {
    icon: FaMedal,
    title: "Competitive Programming",
    body: "Consistent contest performer with a focus on DP, graphs, and clean implementation.",
    color: "var(--magenta)",
  },
];

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="achievements.json"
      title={<>Wins, <span className="text-gradient">badges</span> & receipts</>}
      description="Proof of work — across coding platforms, hackathon stages, and certifications."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STATS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-5 text-center hover:border-neon/50 border border-transparent transition-all"
              data-cursor-hover
            >
              <Icon className="mx-auto text-3xl mb-3" style={{ color: s.color }} />
              <div className="font-display font-bold text-3xl text-gradient">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">{s.label}</div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CARDS.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 flex gap-4 hover:border-neon/40 border border-transparent transition-colors"
              data-cursor-hover
            >
              <div
                className="shrink-0 h-12 w-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: "oklch(1 0 0 / 5%)", color: c.color, boxShadow: `0 0 30px ${c.color}40` }}
              >
                <Icon />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
