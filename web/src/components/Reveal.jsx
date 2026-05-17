import { motion, useReducedMotion } from "framer-motion";
import { spring, viewportReveal } from "../motion/presets";

/** Apparition au scroll — une fois, easing ressort */
export function Reveal({ children, className, delay = 0, y = 26, ...rest }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={viewportReveal}
      transition={{ ...spring, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
