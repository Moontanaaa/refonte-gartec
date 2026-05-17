/** Transitions type “produit” : ressorts calibrés, pas trop rebondissants */

export const spring = {
  type: "spring",
  stiffness: 118,
  damping: 26,
  mass: 0.92,
};

export const springSnappy = {
  type: "spring",
  stiffness: 280,
  damping: 30,
};

export const springSoft = {
  type: "spring",
  stiffness: 72,
  damping: 22,
};

export const easeOut = [0.22, 1, 0.36, 1];

export const viewportReveal = {
  once: true,
  margin: "-72px",
  amount: 0.22,
};

export const staggerGap = (seconds) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: seconds, delayChildren: 0.06 },
  },
});

export const itemRise = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: spring,
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springSoft,
  },
};
