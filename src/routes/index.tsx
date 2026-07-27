import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import BootScreen from "../components/portfolio/BootScreen";
import CustomCursor from "../components/portfolio/CustomCursor";
import MatrixRain from "../components/portfolio/MatrixRain";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Skills from "../components/portfolio/Skills";
import Projects from "../components/portfolio/Projects";
import Experience from "../components/portfolio/Experience";
import Achievements from "../components/portfolio/Achievements";
import GitHubDashboard from "../components/portfolio/GitHubDashboard";
import Resume from "../components/portfolio/Resume";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";
import CommandPalette from "../components/portfolio/CommandPalette";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nishkarsh.dev — Software Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Nishkarsh — Software Engineer, Full Stack Developer, Python Automation builder and AI enthusiast. Explore projects, skills and an interactive developer terminal.",
      },
      { property: "og:title", content: "Nishkarsh.dev — Developer Portfolio" },
      {
        property: "og:description",
        content:
          "An interactive, terminal-inspired portfolio showcasing full-stack projects, automation tools, and AI experiments.",
      },
      { property: "og:type", content: "website" },
      { name: "instagram:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);
  const [palette, setPalette]
    = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      <CustomCursor />
      <MatrixRain />
      <Navbar onOpenPalette={() => setPalette(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <GitHubDashboard />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={palette} onClose={() => setPalette(false)} />
    </div>
  );
}
