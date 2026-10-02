import { motion, useReducedMotion } from "motion/react";

// Fades and lifts its children into place the first time they scroll into view.
export default function Reveal({ children, delay = 0 }) {
  if (useReducedMotion()) return children;
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
