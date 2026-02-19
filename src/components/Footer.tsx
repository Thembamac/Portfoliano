import { Code2, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-4 sm:px-6 border-t"
      style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--background))" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: "hsl(var(--primary))" }}
          >
            <Code2 className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="font-mono font-bold gradient-text">TM.dev</span>
        </div>

        {/* Copyright */}
        <p className="font-mono text-sm text-muted-foreground text-center">
          <span className="text-primary">© {year}</span> Themba Macheke. Built with{" "}
          <span className="text-primary">React</span> &{" "}
          <span className="text-primary">❤️</span>
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Thembamac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/themba-macheke-612351197/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-blue transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:thembamacheke.tm@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
