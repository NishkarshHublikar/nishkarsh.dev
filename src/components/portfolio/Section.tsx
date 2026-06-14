import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <div className="font-mono text-sm text-neon mb-3">
            <span className="text-muted-foreground">{`// `}</span>
            {eyebrow}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-lg">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
