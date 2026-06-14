import { motion } from "framer-motion";
import Section from "./Section";
import { FaDownload, FaFilePdf, FaEye } from "react-icons/fa";

export default function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="resume.pdf"
      title={<>My <span className="text-gradient">résumé</span>, in one click</>}
      description="Prefer the classic format? Grab the PDF — it's always up to date."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid lg:grid-cols-5 gap-6 items-center"
      >
        <div className="lg:col-span-3 glass-strong rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full bg-amber" />
            <span className="h-3 w-3 rounded-full bg-neon" />
            <span className="ml-3 text-muted-foreground">nishkarsh_resume_2025.pdf</span>
          </div>
          <div className="aspect-[8.5/11] rounded-lg bg-white/[0.03] border border-border p-6 md:p-8 font-mono text-[10px] md:text-xs space-y-3 overflow-hidden relative">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative">
              <div className="font-display font-bold text-base md:text-xl text-foreground">Nishkarsh</div>
              <div className="text-neon">Software Engineer · Full Stack · AI</div>
              <div className="text-muted-foreground text-[9px] md:text-[10px]">nishkarshhublikar@gmail.com · github.com/NishkarshHublikar</div>
            </div>
            <div className="relative">
              <div className="text-neon">EXPERIENCE</div>
              <div className="h-px bg-border my-1" />
              <div className="text-foreground/90">Full Stack Engineer — Independent · 2024 → Present</div>
              <div className="text-foreground/90">Python Automation Dev — Freelance · 2023 → 2024</div>
            </div>
            <div className="relative">
              <div className="text-neon">PROJECTS</div>
              <div className="h-px bg-border my-1" />
              <div className="text-foreground/90">SheetCollab · Contact Extractor · Excel Insights Hub</div>
            </div>
            <div className="relative">
              <div className="text-neon">SKILLS</div>
              <div className="h-px bg-border my-1" />
              <div className="text-foreground/80">Java · Python · TS · React · Node · Mongo · Docker</div>
            </div>
            <div className="absolute bottom-6 right-6 opacity-30 rotate-[-12deg] border-2 border-neon text-neon px-3 py-1 rounded font-display font-bold text-sm">
              2025
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="glass rounded-2xl p-6">
            <FaFilePdf className="text-4xl text-destructive mb-3" />
            <div className="font-display font-bold text-xl">nishkarsh_resume_2025.pdf</div>
            <div className="text-muted-foreground text-sm mb-4">
              ~ 124 KB · 2 pages · updated this month
            </div>
            <div className="space-y-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 rounded-lg bg-neon text-primary-foreground font-mono font-semibold hover:shadow-[0_0_30px_oklch(0.88_0.25_145_/_50%)] transition-shadow"
                data-cursor-hover
              >
                <FaDownload /> Download Resume
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 rounded-lg glass border border-border hover:border-neon/50 font-mono transition-colors"
                data-cursor-hover
              >
                <FaEye /> Preview
              </a>
            </div>
          </div>
          <div className="glass rounded-2xl p-5 font-mono text-xs">
            <div className="text-neon mb-1">$ resume --diff</div>
            <div className="text-muted-foreground">
              <span className="text-neon">+</span> Added SheetCollab as featured project
            </div>
            <div className="text-muted-foreground">
              <span className="text-neon">+</span> Cloud fundamentals certifications
            </div>
            <div className="text-muted-foreground">
              <span className="text-destructive">-</span> Removed outdated freelance gigs
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
