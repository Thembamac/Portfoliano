import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowDown, Github, Linkedin } from "lucide-react";
import MatrixRain from "./MatrixRain";
import TypingAnimation from "./TypingAnimation";

const floatingSnippets = [
  { code: "const developer = 'Themba';", top: "15%", left: "5%", delay: 0 },
  { code: "function buildAmazingApps() {", top: "25%", right: "4%", delay: 0.5 },
  { code: "  return true; // always", top: "32%", right: "4%", delay: 0.7 },
  { code: "}", top: "39%", right: "4%", delay: 0.9 },
  { code: "await deploy({ env: 'prod' });", top: "70%", left: "3%", delay: 1.2 },
  { code: "// 4+ years of experience", top: "60%", right: "3%", delay: 0.8 },
];

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/90 pointer-events-none" />

      {/* Floating code snippets - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingSnippets.map((s, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-primary/25"
            style={{ top: s.top, left: s.left, right: s.right }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.25] }}
            transition={{ duration: 1.5, delay: s.delay, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
          >
            {s.code}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Terminal prompt badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-mono text-sm"
          style={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--primary) / 0.3)",
            boxShadow: "0 0 20px hsl(var(--primary) / 0.1)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-muted-foreground">themba@portfolio</span>
          <span className="text-primary">:~$</span>
          <span className="text-foreground">whoami</span>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 min-h-[80px] md:min-h-[100px] flex items-center justify-center"
        >
          <TypingAnimation />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Software Developer specializing in{" "}
          <span className="text-primary font-semibold">C#</span>,{" "}
          <span className="text-primary font-semibold">Python3</span>,{" "}
          <span className="text-primary font-semibold">ASP.NET</span>,{" "}
          <span className="text-primary font-semibold">React</span>,{" "}
          <span className="text-primary font-semibold">TypeScript</span> &{" "}
          <span className="text-primary font-semibold">React Native</span>.
          Building scalable applications from{" "}
          <span className="text-neon-blue">Kempton Park, South Africa 🇿🇦</span>.
        </motion.p>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-muted-foreground font-mono"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Kempton Park, SA
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-primary" />
            thembamacheke.tm@gmail.com
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-primary" />
            083-359-1649
          </span>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-lg font-mono font-semibold text-primary-foreground transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--neon-blue)))",
              boxShadow: "0 0 20px hsl(var(--primary) / 0.4)",
            }}
          >
            View Projects
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-lg font-mono font-semibold text-primary neon-border hover:bg-primary/5 transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </button>
          <a
            href="https://github.com/Thembamac"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg text-muted-foreground hover:text-primary neon-border hover:bg-primary/5 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/themba-macheke-612351197/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg text-muted-foreground hover:text-neon-blue neon-border hover:bg-primary/5 transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      >
        <span className="font-mono text-xs">scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
