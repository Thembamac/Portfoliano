import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import imgOnekey from "@/assets/project-onekey.png";
import imgXcoinch from "@/assets/project-xcoinch.png";
import imgMicash from "@/assets/project-micash.png";
import imgIndisty from "@/assets/project-indisty.png";

const projects = [
  {
    title: "MiCash – Mobile Payment App",
    description:
      "A secure cross-platform mobile payment application built for Unlimited Technologies. Features real-time transaction processing, biometric authentication, wallet management, and payment history tracking.",
    tech: ["React Native", "Expo", "C#", "SQL Server", "REST API"],
    demo: "https://process.micash360.co.za/",
    image: imgMicash,
    color: "primary",
  },
  
  {
    title: "Indisty – Print Network Platform",
    description:
      "A web platform for the world's first public carrier printing network, enabling users to access linked printers across the Indisty network. Built responsive UI and backend integrations.",
    tech: ["React", "ASP.NET", "SQL Server", "TypeScript", "REST API"],
    demo: "https://indisty.co.za/",
    image: imgIndisty,
    color: "primary",
  },

  {
    title: "OneKey – Crypto Wallet App",
    description:
      "Contributed to the OneKey secure crypto wallet — a multi-platform app for buying, staking, and trading crypto. Developed mobile features using React Native & Expo with Node.js backends.",
    tech: ["React Native", "Expo", "Node.js", "TypeScript", "REST API"],
    demo: "https://onekey.so/download/",
    image: imgOnekey,
    color: "blue",
  },
  
  {
    title: "XCoinch – DEX Trading Platform",
    description:
      "A decentralized exchange (DEX) dashboard with real-time order books, live trade charts, crypto pair swapping, and blockchain data visualization built for Rari Capital.",
    tech: ["React", "TypeScript", "Web3.js", "Tailwind CSS", "Node.js"],
    demo: "https://www.xcoinch.com/dex.html",
    image: imgXcoinch,
    color: "green",
  },
];

const colorMap: Record<string, { border: string; accent: string; bg: string }> = {
  primary: {
    border: "hsl(var(--neon-cyan) / 0.3)",
    accent: "hsl(var(--neon-cyan))",
    bg: "hsl(var(--neon-cyan) / 0.08)",
  },
  blue: {
    border: "hsl(var(--neon-blue) / 0.3)",
    accent: "hsl(var(--neon-blue))",
    bg: "hsl(var(--neon-blue) / 0.08)",
  },
  green: {
    border: "hsl(var(--neon-green) / 0.3)",
    accent: "hsl(var(--neon-green))",
    bg: "hsl(var(--neon-green) / 0.08)",
  },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// section-04"}</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Featured Projects</h2>
          <div className="mt-3 h-px w-24 mx-auto" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }} />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Latest real-world projects I've built and contributed to across mobile, web, and blockchain platforms.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((proj, i) => {
            const c = colorMap[proj.color];
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{ border: `1px solid ${c.border}` }}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 30%, hsl(var(--card)) 100%)`,
                    }}
                  />
                  {/* Overlay link on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: "hsl(var(--background) / 0.75)", backdropFilter: "blur(4px)" }}
                  >
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 rounded-lg font-mono text-sm font-semibold transition-all"
                      style={{ background: c.accent, color: "hsl(var(--background))" }}
                    >
                      <ExternalLink className="w-4 h-4" /> View Live
                    </a>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {proj.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{proj.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded font-mono text-xs"
                        style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.accent }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex gap-3">
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-mono text-muted-foreground transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.color = c.accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                      <ExternalLink className="w-4 h-4" /> View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
