import { motion, useReducedMotion } from "framer-motion";
import { springSnappy } from "../motion/presets";

export function MotionA({ className, href, children, ...props }) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      className={className}
      whileHover={
        reduce
          ? undefined
          : { y: -2, transition: springSnappy }
      }
      whileTap={reduce ? undefined : { scale: 0.987 }}
      transition={springSnappy}
      {...props}
    >
      {children}
    </motion.a>
  );
}
