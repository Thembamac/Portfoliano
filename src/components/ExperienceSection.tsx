import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "Unlimited Technologies",
    period: "2024 – Present",
    type: "Full-time",
    highlights: [
      "Building and debugging mobile applications for production",
      "Backend development with C# and system integrations",
      "SQL development and database optimization",
      "Payment system integrations and fintech features",
    ],
    tech: ["C#", "SQL", "Mobile Dev", "REST API", "Payment Systems"],
    color: "primary",
  },
  {
    title: "Junior React Developer",
    company: "Onekey.so",
    period: "2022 – 2023",
    type: "Remote",
    highlights: [
      "Developed mobile applications using React Native & Expo",
      "Backend development with Node.js and REST APIs",
      "Testing and debugging production applications",
      "Collaborated with international remote teams",
    ],
    tech: ["React Native", "Expo", "Node.js", "TypeScript", "REST API"],
    color: "blue",
  },
  {
    title: "Junior Frontend Developer",
    company: "Rari Capital",
    period: "2021",
    type: "Remote",
    highlights: [
      "Built Web3 decentralized applications (DApps)",
      "Blockchain API integrations and smart contract interactions",
      "UI development with React and Tailwind CSS",
      "Contributed to DeFi product features",
    ],
    tech: ["React", "Tailwind CSS", "Web3", "Blockchain", "JavaScript"],
    color: "green",
  },
];

const colorMap: Record<string, { accent: string; dotGlow: string }> = {
  primary: { accent: "hsl(var(--neon-cyan))", dotGlow: "0 0 12px hsl(var(--neon-cyan) / 0.8)" },
  blue: { accent: "hsl(var(--neon-blue))", dotGlow: "0 0 12px hsl(var(--neon-blue) / 0.8)" },
  green: { accent: "hsl(var(--neon-green))", dotGlow: "0 0 12px hsl(var(--neon-green) / 0.8)" },
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 section-bg-alt" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// section-03"}</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Work Experience</h2>
          <div className="mt-3 h-px w-24 mx-auto" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.5), hsl(var(--neon-blue) / 0.3), transparent)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center mt-5">
                    <div
                      className="w-4 h-4 rounded-full border-2 flex-shrink-0 z-10"
                      style={{
                        background: c.accent,
                        borderColor: c.accent,
                        boxShadow: c.dotGlow,
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 glass-card rounded-xl p-6 transition-all duration-300 hover:scale-[1.01]"
                    style={{ borderLeft: `3px solid ${c.accent}` }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-bold text-xl text-foreground">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase className="w-4 h-4" style={{ color: c.accent }} />
                          <span className="font-semibold" style={{ color: c.accent }}>
                            {exp.company}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-xs font-mono text-muted-foreground"
                            style={{ background: "hsl(var(--border))" }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span style={{ color: c.accent }} className="mt-0.5 flex-shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md font-mono text-xs"
                          style={{
                            background: `${c.accent}14`,
                            border: `1px solid ${c.accent}40`,
                            color: c.accent,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
