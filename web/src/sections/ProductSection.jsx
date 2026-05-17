import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/Reveal.jsx";
import { MotionA } from "../components/MotionA.jsx";
import { staggerGap, itemRise, scaleIn, viewportReveal } from "../motion/presets";
import { smoothScrollClick } from "../utils/smoothScroll.js";

const svgAttrs = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
};

function Ico({ children }) {
  return <svg {...svgAttrs}>{children}</svg>;
}

const features = [
  {
    title: "Accéléromètre triaxial",
    body:
      "Technologie piezorésistive. Mesures sans parasites en courant continu pour une précision maximale.",
    icon: (
      <Ico>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </Ico>
    ),
  },
  {
    title: "Bluetooth 4.1",
    body:
      "Connexion sans fil à l'application Gartec Connect. Transfert instantané des données de mesure.",
    icon: (
      <Ico>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.809-3.808-9.98 0-13.788m13.788 0c3.808 3.809 3.808 9.981 0 13.788"
        />
      </Ico>
    ),
  },
  {
    title: "Étanche IP65",
    body:
      "Utilisable sous toutes conditions météorologiques. Résiste à la pluie, à la poussière et aux chocs.",
    icon: (
      <Ico>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c-1.657 4.5-6 7.215-6 12a6 6 0 1012 0c0-4.785-4.343-7.5-6-12z"
        />
      </Ico>
    ),
  },
  {
    title: "Robustesse certifiée",
    body:
      "Résiste à un impact de 500g. Conçu pour les conditions les plus exigeantes du terrain.",
    icon: (
      <Ico>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </Ico>
    ),
  },
  {
    title: "Autonomie 20h",
    body:
      "Chargeur intelligent embarqué. Une journée complète de travail sans interruption.",
    icon: (
      <Ico>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </Ico>
    ),
  },
  {
    title: "Norme EN1177 & XP S54-215",
    body:
      "Conformité complète aux dernières versions. Évolutif pour accompagner les futures normes.",
    icon: (
      <Ico>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </Ico>
    ),
  },
];

export function ProductSection() {
  const reduce = useReducedMotion();
  const [imgFail, setImgFail] = useState(false);

  const grid = reduce ? { hidden: {}, show: {} } : staggerGap(0.075);
  const cell = reduce
    ? { hidden: {}, show: {} }
    : itemRise;

  const detailParent = reduce
    ? undefined
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      };

  return (
    <section className="section" id="produit">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Le Produit</span>
          <h2>
            Ludomètre <span className="text-accent">FTv3</span>
          </h2>
          <p>
            La troisième génération de Ludomètre, conçue pour répondre aux
            dernières exigences normatives et aux besoins terrain des contrôleurs
            professionnels.
          </p>
        </Reveal>

        <motion.div
          className="features-grid"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={viewportReveal}
        >
          {features.map((f) => (
            <motion.article
              key={f.title}
              className="feature-card"
              variants={cell}
              whileHover={
                reduce
                  ? undefined
                  : { y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }
              }
            >
              <div className="feature-icon" aria-hidden="true">
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="product-detail"
          variants={detailParent}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={viewportReveal}
        >
          <motion.div className="product-image-wrap" variants={scaleIn}>
            <div className="img-glow" />
            {!imgFail ? (
              <img
                src="https://www.gartec.fr/wp-content/uploads/2019/04/ludometre-scaled.jpg"
                alt="Ludomètre FTv3 détail"
                className="product-img"
                onError={() => setImgFail(true)}
              />
            ) : (
              <div className="product-placeholder">
                <span>◈</span>
              </div>
            )}
            <div className="img-badge">FTv3</div>
          </motion.div>

          <motion.div className="product-info" variants={cell}>
            <h3>Pourquoi le FTv3 ?</h3>
            <p>
              Gartec a été fondé dans le but de concevoir un équipement
              permettant de contrôler la bonne conformité d&apos;une
              installation récréative équipée de sols amortissants
              conformément à la norme EN1177.
            </p>
            <p>
              Le Ludomètre FTv3 représente l&apos;aboutissement de cette vision
              : un outil de précision professionnelle, connecté et évolutif.
            </p>
            <ul className="check-list">
              <li>Valise de transport incluse</li>
              <li>Certificat de conformité EN1177:2018 & XP S54-215</li>
              <li>3 ans d&apos;accès Gartec Connect offerts</li>
              <li>Garantie matériel 2 ans</li>
              <li>Mise à jour FTv2 disponible</li>
            </ul>
            <MotionA
              href="#offres"
              className="btn btn-primary"
              onClick={(e) => smoothScrollClick(e, "#offres")}
            >
              Voir les offres
            </MotionA>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
