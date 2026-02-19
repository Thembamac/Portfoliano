import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--neon-blue)))",
            boxShadow: "0 0 20px hsl(var(--primary) / 0.4)",
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-primary-foreground" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
