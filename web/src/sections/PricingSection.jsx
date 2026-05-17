import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/Reveal.jsx";
import { MotionA } from "../components/MotionA.jsx";
import { staggerGap, itemRise, viewportReveal, springSoft } from "../motion/presets";
import { smoothScrollClick } from "../utils/smoothScroll.js";

const packs = [
  {
    featured: false,
    title: "Pack Essentiel",
    badge: null,
    tag: "Démarrage",
    lines: [
      "Ludomètre FTv3",
      "Valise de transport",
      "Certificat de conformité EN1177:2018",
      "3 ans Gartec Connect (licence de base)",
      "Garantie matériel 2 ans",
    ],
    ctaOutline: true,
  },
  {
    featured: true,
    title: "Pack Avancé",
    badge: "Populaire",
    tag: "Professionnel",
    lines: [
      "Ludomètre FTv3",
      "Valise de transport",
      "Certificat de conformité EN1177:2018 & XP S54-215",
      "3 ans Gartec Connect (licence de base)",
      "1 trépied standard",
      "Garantie matériel 2 ans",
    ],
    ctaOutline: false,
  },
  {
    featured: false,
    title: "Pack Expert",
    badge: null,
    tag: "Complet",
    lines: [
      "Ludomètre FTv3",
      "Valise de transport",
      "Certificat de conformité EN1177:2018 & XP S54-215",
      "3 ans Gartec Connect",
      "1 trépied Advence (plus stable)",
      "Kit accessoires complet",
      "Valise LudoGab EN1176",
      "Garantie matériel 2 ans",
    ],
    ctaOutline: true,
  },
];

export function PricingSection() {
  const reduce = useReducedMotion();
  const grid = reduce ? { hidden: {}, show: {} } : staggerGap(0.11);
  const item = reduce ? { hidden: {}, show: {} } : itemRise;

  return (
    <section className="section section-alt" id="offres">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Tarification</span>
          <h2>
            Nos <span className="text-accent">offres</span>
          </h2>
          <p>
            Choisissez le pack adapté à votre activité. Toutes nos offres
            incluent l&apos;accès à Gartec Connect.
          </p>
        </Reveal>

        <motion.div
          className="pricing-grid"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={viewportReveal}
        >
          {packs.map((p) => (
            <motion.article
              key={p.title}
              className={`pricing-card${p.featured ? " featured" : ""}`}
              variants={item}
              whileHover={
                reduce
                  ? undefined
                  : { y: -6, transition: { type: "spring", stiffness: 260, damping: 22 } }
              }
            >
              {p.badge ? <div className="pricing-badge">{p.badge}</div> : null}
              <div className="pricing-header">
                <h3>{p.title}</h3>
                <div className="pricing-tag">{p.tag}</div>
              </div>
              <ul className="pricing-list">
                {p.lines.map((line) => (
                  <li key={line}>✓ {line}</li>
                ))}
              </ul>
              {p.ctaOutline ? (
                <MotionA
                  href="#contact"
                  className="btn btn-outline btn-full"
                  onClick={(e) => smoothScrollClick(e, "#contact")}
                >
                  Demander un devis
                </MotionA>
              ) : (
                <MotionA
                  href="#contact"
                  className="btn btn-primary btn-full"
                  onClick={(e) => smoothScrollClick(e, "#contact")}
                >
                  Demander un devis
                </MotionA>
              )}
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="upgrade-banner"
          initial={reduce ? false : { opacity: 0, x: -20 }}
          whileInView={
            reduce ? undefined : { opacity: 1, x: 0, transition: springSoft }
          }
          viewport={{ once: true, margin: "-8%", amount: 0.35 }}
          style={{ marginTop: "0.5rem" }}
        >
            <div className="upgrade-icon" aria-hidden="true">
              <svg {...{ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" }}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
            <div>
              <h4>Vous possédez un Ludomètre FTv2 ?</h4>
              <p>
                Gartec propose une mise à jour vers le FTv3. Contactez-nous pour
                découvrir les options de migration.
              </p>
            </div>
            <MotionA
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => smoothScrollClick(e, "#contact")}
            >
              Mise à jour FTv2 → FTv3
            </MotionA>
          </motion.div>
      </div>
    </section>
  );
}
