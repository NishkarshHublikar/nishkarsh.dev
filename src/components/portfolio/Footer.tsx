import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div>
            <div className="font-mono text-sm">
              <span className="text-neon">$</span> echo "designed & built with caffeine ☕"
            </div>
            <div className="text-muted-foreground text-xs mt-1 font-mono">
              © {new Date().getFullYear()} Nishkarsh · all rights reserved
            </div>
          </div>
          <div className="flex items-center gap-4 text-xl text-muted-foreground">
            <a href="https://github.com/NishkarshHublikar" aria-label="github" className="hover:text-neon transition-colors" data-cursor-hover><FaGithub /></a>
            <a href="https://www.linkedin.com/in/nishkarsh-hublikar/" aria-label="linkedin" className="hover:text-cyan transition-colors" data-cursor-hover><FaLinkedin /></a>
            <a href="https://www.instagram.com/_nishkarsh_274/" aria-label="instagram" className="hover:text-magenta transition-colors" data-cursor-hover><FaInstagram /></a>
            <a href="mailto:[EMAIL_ADDRESS]" aria-label="email" className="hover:text-amber transition-colors" data-cursor-hover><FaEnvelope /></a>
          </div>
        </div>
        <div className="mt-6 text-center font-mono text-[11px] text-muted-foreground">
          <span className="text-neon animate-blink">▊</span> press{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-white/10">⌘ K</kbd> anywhere to navigate
        </div>
      </div>
    </footer>
  );
}
