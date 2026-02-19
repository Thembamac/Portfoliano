import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: "⌨️",
    skills: ["C#", "TypeScript", "JavaScript", "Python"],
    color: "primary",
  },
  {
    title: "Frameworks",
    icon: "🧩",
    skills: ["ASP.NET", "React Native", "Expo", "React.js", "Node.js", "Angular", "Vue.js"],
    color: "blue",
  },
  {
    title: "Backend & APIs",
    icon: "🔧",
    skills: ["REST API", "ASP.NET Web API", "Express.js"],
    color: "green",
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["SQL Server", "MySQL"],
    color: "primary",
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "Visual Studio", "VS Code", "PowerApps"],
    color: "blue",
  },
];

const colorMap: Record<string, { border: string; glow: string; text: string }> = {
  primary: {
    border: "hsl(var(--neon-cyan) / 0.35)",
    glow: "hsl(var(--neon-cyan) / 0.2)",
    text: "hsl(var(--neon-cyan))",
  },
  blue: {
    border: "hsl(var(--neon-blue) / 0.35)",
    glow: "hsl(var(--neon-blue) / 0.2)",
    text: "hsl(var(--neon-blue))",
  },
  green: {
    border: "hsl(var(--neon-green) / 0.35)",
    glow: "hsl(var(--neon-green) / 0.2)",
    text: "hsl(var(--neon-green))",
  },
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// section-02"}</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Skills & Technologies</h2>
          <div className="mt-3 h-px w-24 mx-auto" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }} />
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: ci * 0.1 }}
                className="glass-card rounded-xl p-6"
                style={{ border: `1px solid ${c.border}` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-mono font-bold text-lg" style={{ color: c.text }}>
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: ci * 0.1 + si * 0.05 + 0.2 }}
                      className="skill-badge px-3 py-1 rounded-md font-mono text-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 glass-card rounded-xl p-6 neon-border"
        >
          <h3 className="font-mono font-bold text-lg text-primary mb-6">Proficiency</h3>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {[
              { name: "C# / ASP.NET", level: 90 },
              { name: "TypeScript / React", level: 88 },
              { name: "React Native", level: 85 },
              { name: "SQL / Databases", level: 80 },
              { name: "Node.js / Express", level: 75 },
              { name: "Python", level: 65 },
            ].map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1 font-mono text-sm">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: "hsl(var(--border))" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--neon-blue)))",
                      boxShadow: "0 0 8px hsl(var(--primary) / 0.5)",
                    }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
