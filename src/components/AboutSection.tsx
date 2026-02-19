import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "10+", label: "Technologies" },
    { value: "3", label: "Countries Worked" },
    { value: "∞", label: "Lines of Code" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 section-bg-alt" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// section-01"}</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">About Me</h2>
          <div className="mt-3 h-px w-24 mx-auto" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-70 blur-sm"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--neon-blue)))" }}
              />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden"
                style={{ border: "2px solid hsl(var(--primary) / 0.4)" }}
              >
                <img
                  src={profileImg}
                  alt="Themba Macheke"
                  className="w-full h-full object-cover object-top"
                />
                {/* Scan line overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.03) 2px, hsl(var(--primary) / 0.03) 4px)",
                  }}
                />
              </div>
              {/* Status badge */}
              <div
                className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full font-mono text-xs font-semibold flex items-center gap-2"
                style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--primary) / 0.3)" }}
              >
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                Available for hire
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Hi, I'm <span className="gradient-text">Themba Macheke</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a passionate Software Developer with over{" "}
              <span className="text-primary font-semibold">4 years of experience</span> building
              scalable web and mobile applications. I specialize in{" "}
              <span className="text-primary font-semibold">C#, Python3, ASP.NET, React Native, TypeScript,</span> and{" "}
              <span className="text-primary font-semibold">SQL development</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I enjoy solving complex problems and building systems that make a real impact. I have
              experience working in <span className="text-neon-blue font-semibold">remote international teams</span> and
              contributing to production-level applications across web and mobile platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, I'm exploring new technologies and frameworks to stay sharp in this
              ever-evolving tech landscape.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center neon-border"
                >
                  <div className="text-2xl font-bold gradient-text font-mono">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Terminal info */}
            <div
              className="rounded-lg p-4 font-mono text-sm"
              style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
            >
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="text-muted-foreground space-y-1 text-xs">
                <div><span className="text-primary">location</span>: <span className="text-neon-blue">"Kempton Park, South Africa"</span></div>
                <div><span className="text-primary">email</span>: <span className="text-neon-blue">"thembamacheke.tm@gmail.com"</span></div>
                <div><span className="text-primary">phone</span>: <span className="text-neon-blue">"083-359-1649"</span></div>
                <div><span className="text-primary">status</span>: <span className="text-neon-green">"Open to opportunities"</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
