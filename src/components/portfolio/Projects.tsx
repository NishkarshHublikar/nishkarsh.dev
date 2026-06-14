import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Section from "./Section";

type Project = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  demo: string;
  gradient: string;
  glyph: string;
};

const PROJECTS: Project[] = [
  {
    name: "SheetCollab",
    tagline: "Real-time collaborative spreadsheet platform",
    description:
      "A Google-Sheets-style workspace where teams edit, comment, and analyze data together in real time — built for low-latency collaboration at scale.",
    features: [
      "Live multi-cursor editing with operational transforms",
      "Formulas, charts, and conditional formatting",
      "Role-based sharing and presence indicators",
      "WebSocket sync with offline conflict resolution",
    ],
    stack: ["React", "TypeScript", "Node.js", "WebSocket", "MongoDB", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "linear-gradient(135deg, oklch(0.5 0.25 145), oklch(0.4 0.2 200))",
    glyph: "▦",
  },
  {
    name: "Website Contact Information Extractor",
    tagline: "Web scraping & lead generation automation",
    description:
      "A multi-threaded scraper that crawls any list of domains and extracts emails, phones, and decision-maker profiles — ready to drop into a CRM.",
    features: [
      "Parallel crawling with adaptive rate limits",
      "Smart pattern + ML email validation",
      "CSV / JSON / Sheets export pipeline",
      "Built-in proxy rotation",
    ],
    stack: ["Python", "BeautifulSoup", "Selenium", "Pandas", "FastAPI"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "linear-gradient(135deg, oklch(0.5 0.25 340), oklch(0.4 0.25 280))",
    glyph: "⌖",
  },
  {
    name: "Email Search & Data Extraction Automation",
    tagline: "Email analytics and automation system",
    description:
      "A toolkit for digging signal out of inbox noise — search across accounts, extract attachments, and turn threads into structured datasets.",
    features: [
      "IMAP + Gmail API multi-account search",
      "Attachment ↦ structured data pipelines",
      "Scheduled digests & smart filters",
      "One-click export to spreadsheets",
    ],
    stack: ["Python", "Gmail API", "SQLite", "Streamlit"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "linear-gradient(135deg, oklch(0.5 0.22 80), oklch(0.45 0.2 30))",
    glyph: "✉",
  },
  {
    name: "Excel Insights Hub",
    tagline: "Excel automation and reporting platform",
    description:
      "Upload a messy workbook, get back dashboards, KPIs, and shareable reports — no formulas required. Designed for ops teams drowning in spreadsheets.",
    features: [
      "Drag-and-drop Excel ingestion",
      "Auto-generated charts and KPIs",
      "Templated PDF + email reports",
      "Scheduled refresh + Slack alerts",
    ],
    stack: ["Python", "Pandas", "OpenPyXL", "React", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "linear-gradient(135deg, oklch(0.5 0.2 200), oklch(0.45 0.2 260))",
    glyph: "▤",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="projects/"
      title={<>Things I've <span className="text-gradient">shipped</span></>}
      description="A handful of projects that taught me the most — each one solved a real problem for real people."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-2xl overflow-hidden group hover:border-neon/40 border border-transparent transition-all hover:-translate-y-1"
            data-cursor-hover
          >
            <div
              className="h-44 relative overflow-hidden flex items-center justify-center"
              style={{ background: p.gradient }}
            >
              <div className="absolute inset-0 grid-bg opacity-30" />
              <span className="text-9xl text-white/30 group-hover:scale-110 transition-transform duration-500">
                {p.glyph}
              </span>
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start font-mono text-xs">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neon/80" />
                </div>
                <span className="text-white/80">~/projects/{p.name.toLowerCase().split(" ")[0]}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display font-bold text-2xl mb-1">{p.name}</h3>
              <p className="text-neon font-mono text-xs mb-3">› {p.tagline}</p>
              <p className="text-muted-foreground text-sm mb-4">{p.description}</p>

              <div className="mb-4">
                <div className="font-mono text-xs text-muted-foreground mb-2">features:</div>
                <ul className="space-y-1 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-neon mt-1">▹</span>
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded font-mono text-[11px] bg-white/5 border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md glass border border-border hover:border-neon/50 font-mono text-xs transition-colors"
                  data-cursor-hover
                >
                  <FaGithub /> code
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neon text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
                  data-cursor-hover
                >
                  <FaExternalLinkAlt /> live demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
