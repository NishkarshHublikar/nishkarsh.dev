import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const SOCIALS = [
  { icon: FaGithub, label: "github", handle: "@NishkarshHublikar", href: "https://github.com/NishkarshHublikar", color: "var(--foreground)" },
  { icon: FaLinkedin, label: "linkedin", handle: "in/nishkarsh-hublikar", href: "https://www.linkedin.com/in/nishkarsh-hublikar/", color: "var(--cyan)" },
  { icon: FaInstagram, label: "instagram", handle: "_nishkarsh_274", href: "https://www.instagram.com/_nishkarsh_274/", color: "var(--magenta)" },
  { icon: FaEnvelope, label: "email", handle: "nishkarshhublikar@gmail.com", href: "mailto:nishkarshhublikar@gmail.com", color: "var(--amber)" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Section
      id="contact"
      eyebrow="contact.sh"
      title={<>Let's <span className="text-gradient">talk</span></>}
      description="Got an idea, an opening, or just want to nerd out about a stack? My inbox is open."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 glass-strong rounded-2xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/40 font-mono text-xs">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full bg-amber" />
            <span className="h-3 w-3 rounded-full bg-neon" />
            <span className="ml-3 text-muted-foreground">send-message.sh</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-5">
            <Field
              label="name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="ada lovelace"
            />
            <Field
              label="email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="you@domain.com"
            />
            <div>
              <label className="block text-neon mb-1.5">
                <span className="text-muted-foreground">$</span> message --body
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="tell me about your project..."
                className="w-full bg-black/40 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-neon text-primary-foreground font-semibold hover:shadow-[0_0_30px_oklch(0.88_0.25_145_/_50%)] transition-shadow"
              data-cursor-hover
            >
              <FaPaperPlane /> ./send
            </button>
            {sent && (
              <div className="text-neon text-xs">
                ✓ message transmitted. I'll reply within 24 hours.
              </div>
            )}
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-4"
        >
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-xl p-5 flex items-center gap-4 hover:border-neon/40 border border-transparent transition-all hover:-translate-y-0.5 group"
                data-cursor-hover
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "oklch(1 0 0 / 5%)", color: s.color }}
                >
                  <Icon />
                </div>
                <div className="flex-1 font-mono">
                  <div className="text-xs text-muted-foreground">/{s.label}</div>
                  <div className="text-sm group-hover:text-neon transition-colors">{s.handle}</div>
                </div>
                <span className="text-muted-foreground group-hover:text-neon transition-colors">→</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-neon mb-1.5">
        <span className="text-muted-foreground">$</span> {label} --input
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-black/40 border border-border rounded-lg px-4 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-colors"
      />
    </div>
  );
}
