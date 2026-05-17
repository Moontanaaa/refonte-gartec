import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MotionA } from "./MotionA.jsx";
import {
  spring,
  springSnappy,
  staggerGap,
  itemRise,
} from "../motion/presets";

function handleSmooth(e, href) {
  if (!href?.startsWith("#")) return;
  const id = href.slice(1);
  const target = document.getElementById(id);
  if (target) {
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

const easeScrollHint = [0.42, 0, 0.58, 1];

export function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 56]);

  const contentStagger = reduce ? { hidden: {}, show: {} } : staggerGap(0.082);
  const item = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : itemRise;

  const statsBlocks = reduce
    ? { hidden: {}, show: {} }
    : { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } };

  const stats = [
    { value: "23,43", small: "kHz", label: "Fréquence d'acquisition" },
    { value: "IP65", small: null, label: "Étanchéité certifiée" },
    { value: "20", small: "h", label: "Autonomie batterie" },
    { value: "3 ans", small: null, label: "Gartec Connect offert" },
  ];

  return (
    <section className="hero" id="accueil" ref={ref}>
      <div className="hero-bg" />
      <div className="hero-particles" aria-hidden />

      <motion.div
        className="hero-content"
        variants={contentStagger}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-badge" variants={item}>
          <motion.span
            className="badge-dot"
            aria-hidden
            animate={
              reduce
                ? undefined
                : { scale: [1, 1.12, 1], opacity: [1, 0.82, 1] }
            }
            transition={
              reduce ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
            }
          />
          Norme EN1177:2018 & XP S54-215
        </motion.div>

        <motion.h1 className="hero-title" variants={item}>
          Mesure d'atténuation des chocs
          <br />
          <span className="hero-emphasis">pour aires de jeux</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={item}>
          Le <strong>Ludomètre FTv3</strong> est conçu pour les contrôles de
          terrain exigeants : homologation EN1177:2018 et XP&nbsp;S54-215,
          traçabilité des mesures et intégration logicielle.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <MotionA
            href="#produit"
            className="btn btn-primary btn-lg"
            onClick={(e) => handleSmooth(e, "#produit")}
          >
            Découvrir le FTv3
          </MotionA>
          <MotionA
            href="#logiciel"
            className="btn btn-outline btn-lg"
            onClick={(e) => handleSmooth(e, "#logiciel")}
          >
            Voir Gartec Connect
          </MotionA>
        </motion.div>

        <motion.div
          className="hero-stats"
          variants={statsBlocks}
          initial="hidden"
          animate="show"
        >
          {stats.flatMap((s, i) => {
            const el = (
              <motion.div className="stat" key={s.label} variants={item}>
                <span className="stat-value">
                  {s.value}
                  {s.small ? <small>{s.small}</small> : null}
                </span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            );
            if (i === 0) return [el];
            return [<div key={`div-${s.label}`} className="stat-divider" aria-hidden />, el];
          })}
        </motion.div>
      </motion.div>

      <motion.div className="hero-visual" style={{ y: imgY }}>
        <div className="device-glow" />
        <motion.div
          className="device-img-wrap"
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 0.32 }}
        >
          {!imgFailed ? (
            <motion.img
              src="https://www.gartec.fr/wp-content/uploads/2019/04/ludometre-scaled.jpg"
              alt="Ludomètre FTv3"
              loading="eager"
              whileHover={
                reduce ? undefined : { scale: 1.02, transition: springSnappy }
              }
              transition={springSnappy}
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="device-placeholder">
              <span>◈</span>
              <p>Ludomètre FTv3</p>
            </div>
          )}
        </motion.div>
      </motion.div>

      {!reduce ? (
        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ delay: 1.15, duration: 0.5 }}
          aria-hidden
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.75, repeat: Infinity, ease: easeScrollHint }}
          >
            ↓
          </motion.span>
        </motion.div>
      ) : null}
    </section>
  );
}
