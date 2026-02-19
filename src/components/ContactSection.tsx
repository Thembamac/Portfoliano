import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const contacts = [
    { icon: Mail, label: "Email", value: "thembamacheke.tm@gmail.com", href: "mailto:thembamacheke.tm@gmail.com" },
    { icon: Phone, label: "Phone", value: "083-359-1649", href: "tel:0833591649" },
    { icon: MapPin, label: "Location", value: "Kempton Park, South Africa", href: "https://www.google.com/maps/place/Wood+Lake/@-26.0817919,28.2455979,17z/data=!3m1!4b1!4m6!3m5!1s0x1e95158abd23dc5d:0x8a78b105d0db87d2!8m2!3d-26.0817967!4d28.2481728!16s%2Fg%2F11f8jfx052?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D" },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/Thembamac", color: "hsl(var(--foreground))" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/themba-macheke-612351197/", color: "hsl(var(--neon-blue))" },
    { icon: Mail, label: "Email", href: "mailto:thembamacheke.tm@gmail.com", color: "hsl(var(--neon-cyan))" },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 section-bg-alt" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">{"// section-05"}</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Get In Touch</h2>
          <div className="mt-3 h-px w-24 mx-auto" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)" }} />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Let's work together</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently open to full-time positions, freelance projects, and interesting collaborations.
                Feel free to reach out!
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-3">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl neon-border transition-all duration-200 hover:bg-primary/5 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(var(--primary) / 0.1)", border: "1px solid hsl(var(--primary) / 0.2)" }}
                  >
                    <c.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground">{c.label}</div>
                    <div className="text-sm text-foreground group-hover:text-primary transition-colors">{c.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-sm text-muted-foreground mb-3">// find me online</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center glass-card neon-border transition-all duration-200 hover:scale-110"
                    onMouseEnter={(e) => (e.currentTarget.querySelector("svg")!.style.color = s.color)}
                    onMouseLeave={(e) => (e.currentTarget.querySelector("svg")!.style.color = "")}
                  >
                    <s.icon className="w-4 h-4 text-muted-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download CV */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--neon-blue)))",
                boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
              }}
            >
              ⬇ Download CV / Resume
            </a>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-xl p-6 neon-border"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-10">
                <CheckCircle className="w-16 h-16 text-neon-green animate-bounce" style={{ color: "hsl(var(--neon-green))" }} />
                <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out, Themba will get back to you soon.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                  className="mt-2 font-mono text-sm text-primary underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-muted-foreground mb-1.5">// name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-200"
                    style={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary) / 0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-muted-foreground mb-1.5">// email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-200"
                    style={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary) / 0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-muted-foreground mb-1.5">// message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary) / 0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "hsl(var(--border))")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-mono font-semibold transition-all duration-300 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--neon-blue)))",
                    color: "hsl(var(--primary-foreground))",
                    boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
                  }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
