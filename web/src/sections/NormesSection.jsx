import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/Reveal.jsx";
import { staggerGap, itemRise, viewportReveal } from "../motion/presets";

const normes = [
  {
    code: "EU",
    title: "EN1177:2018",
    body:
      "Revêtements de surfaces d'aires de jeux absorbant les chocs — Méthodes d'essai pour déterminer l'atténuation des chocs.",
    status: "Conforme ✓",
    variant: "compliant",
  },
  {
    code: "FR",
    title: "XP S54-215",
    body:
      "Norme française relative aux méthodes d'essai et exigences de performance pour les revêtements des aires de jeux.",
    status: "Conforme ✓",
    variant: "compliant",
  },
  {
    code: "1176",
    title: "EN1176:2017",
    body:
      "Équipements d'aires de jeux et revêtements de sol — Exigences générales de sécurité et méthodes d'essai.",
    status: "Compatible ✓",
    variant: "compatible",
  },
];

export function NormesSection() {
  const reduce = useReducedMotion();
  const grid = reduce ? { hidden: {}, show: {} } : staggerGap(0.1);
  const item = reduce ? { hidden: {}, show: {} } : itemRise;

  return (
    <section className="section section-dark" id="normes">
      <div className="container">
        <Reveal className="section-header light">
          <span className="section-tag">Réglementation</span>
          <h2>
            Conformité aux <span className="text-accent">normes</span>
          </h2>
          <p>
            Le Ludomètre FTv3 est conçu et certifié pour répondre aux exigences
            des normes françaises et européennes en vigueur.
          </p>
        </Reveal>

        <motion.div
          className="normes-grid"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={viewportReveal}
        >
          {normes.map((n) => (
            <motion.article
              key={n.title}
              className="norme-card"
              variants={item}
              whileHover={
                reduce
                  ? undefined
                  : {
                      scale: 1.015,
                      transition: { type: "spring", stiffness: 380, damping: 28 },
                    }
              }
            >
              <div className="norme-icon norme-code" aria-hidden="true">
                {n.code}
              </div>
              <h4>{n.title}</h4>
              <p>{n.body}</p>
              <div className={`norme-status ${n.variant}`}>{n.status}</div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
