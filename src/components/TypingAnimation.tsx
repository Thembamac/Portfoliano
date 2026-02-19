import { useState, useEffect } from "react";

const phrases = [
  "Hello, I'm Themba 👋",
  "Software Developer",
  "I build scalable web & mobile apps.",
  "const developer = 'Themba';",
];

const TypingAnimation = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  const isCode = displayed.includes("const") || displayed.includes("function");

  return (
    <span
      className={`${
        isCode ? "text-neon-blue font-mono text-2xl md:text-3xl" : "text-neon font-mono text-3xl md:text-5xl"
      } font-bold`}
      style={{
        textShadow: "0 0 20px hsl(185 100% 50% / 0.5), 0 0 40px hsl(185 100% 50% / 0.25)",
      }}
    >
      {displayed}
      <span className="cursor-blink text-primary ml-0.5">|</span>
    </span>
  );
};

export default TypingAnimation;
