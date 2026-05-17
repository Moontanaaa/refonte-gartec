import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/Reveal.jsx";
import { MotionA } from "../components/MotionA.jsx";
import { staggerGap, itemRise, viewportReveal } from "../motion/presets";
import { smoothScrollClick } from "../utils/smoothScroll.js";

const cards = [
  {
    title: "Gabarits d'écartement",
    body:
      "Jeu complet de gabarits pour mesurer les espaces de piégeage et d'entrapment conformément à la norme EN1176.",
    num: "01",
    tag: "EN1176:2017",
    featured: false,
  },
  {
    title: "Valise LudoGab complète",
    body:
      "La solution tout-en-un : l'ensemble des gabarits nécessaires pour un contrôle de conformité complet sur site.",
    num: "02",
    tag: "Recommandé",
    featured: true,
  },
  {
    title: "Accessoires de mesure",
    body:
      "Thermomètre, hygromètre, télémètre et mètre ruban 3m. Tout ce qu'il faut pour une intervention complète.",
    num: "03",
    tag: "EN1176 & EN1177",
    featured: false,
  },
];

export function LudogabSection() {
  const reduce = useReducedMotion();
  const grid = reduce ? { hidden: {}, show: {} } : staggerGap(0.1);
  const item = reduce ? { hidden: {}, show: {} } : itemRise;

  return (
    <section className="section" id="ludogab">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Accessoires</span>
          <h2>
            Ludo<span className="text-accent">Gab</span>
          </h2>
          <p>
            Une gamme complète de gabarits professionnels pour le contrôle des
            aires de jeux selon la norme EN1176:2017.
          </p>
        </Reveal>

        <motion.div
          className="ludogab-grid"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={viewportReveal}
        >
          {cards.map((c) => (
            <motion.article
              key={c.title}
              className={`ludogab-card${c.featured ? " featured" : ""}`}
              variants={item}
              whileHover={
                reduce ? undefined : { y: -5, transition: { type: "spring", stiffness: 320, damping: 26 } }
              }
            >
              <div className="lc-number">{c.num}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
              <span className="lc-tag">{c.tag}</span>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center ludogab-cta">
          <MotionA
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => smoothScrollClick(e, "#contact")}
          >
            En savoir plus sur LudoGab
          </MotionA>
        </div>
      </div>
    </section>
  );
}
