import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/Reveal.jsx";
import { MotionA } from "../components/MotionA.jsx";
import {
  staggerGap,
  itemRise,
  viewportReveal,
  springSoft,
  springSnappy,
} from "../motion/presets";
import { smoothScrollClick } from "../utils/smoothScroll.js";

const svg = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  strokeWidth: 1.5,
  stroke: "currentColor",
};

const SW = [
  {
    title: "Stockage cloud sécurisé",
    desc: "Toutes vos mesures archivées et accessibles depuis n'importe quel appareil.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15a4.5 4.5 0 004.5 4.5h7.5a4.5 4.5 0 004.5-4.5v-4.5A4.5 4.5 0 0016.5 6h-1.879c-.621 0-1.125-.504-1.125-1.125V4.125A1.125 1.125 0 0012.375 3h-1.5c-.621 0-1.125.504-1.125 1.125V4.875c0 .621-.504 1.125-1.125 1.125H8.25A4.5 4.5 0 002.25 15v.75z"
      />
    ),
  },
  {
    title: "Rapports automatisés",
    desc: "Génération de rapports de conformité au format PDF en un clic.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    ),
  },
  {
    title: "Alertes de conformité",
    desc:
      "Notifications automatiques lorsque des zones ne sont plus conformes à la norme.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.082M9.394 17.082a23.848 23.848 0 00-5.454-1.082M12 21v0m0-18v0a6 6 0 016 6v3.75c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125.504 1.125 1.125v0c0 .621-.504 1.125-1.125 1.125h-15c-.621 0-1.125-.504-1.125-1.125v0c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125-.504 1.125-1.125V9a6 6 0 016-6z"
      />
    ),
  },
  {
    title: "Cartographie des sites",
    desc: "Visualisation géographique de tous vos sites contrôlés.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.125-7.5 11.25-7.5 11.25S4.5 17.625 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </>
    ),
  },
];

const chartHeights = ["60%", "80%", "45%", "90%", "70%", "55%"];

export function SoftwareSection() {
  const reduce = useReducedMotion();
  const grid = reduce ? { hidden: {}, show: {} } : staggerGap(0.085);
  const item = reduce ? { hidden: {}, show: {} } : itemRise;

  const barContainer = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.055,
            delayChildren: 0.14,
          },
        },
      };
  const barItem = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { scaleY: 0.15, opacity: 0 },
        show: {
          scaleY: 1,
          opacity: 1,
          transition: springSoft,
        },
      };

  return (
    <section className="section section-dark" id="logiciel">
      <div className="container">
        <Reveal className="section-header light">
          <span className="section-tag">Logiciel Cloud</span>
          <h2>
            Gartec <span className="text-accent">Connect</span>
          </h2>
          <p>
            La plateforme en ligne qui centralise toutes vos données de mesure,
            génère vos rapports et assure le suivi de vos équipements.
          </p>
        </Reveal>

        <div className="software-showcase">
          <motion.div
            className="software-features"
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={viewportReveal}
          >
            {SW.map((w) => (
              <motion.div key={w.title} className="sw-item" variants={item}>
                <div className="sw-icon" aria-hidden="true">
                  <svg {...svg}>{w.icon}</svg>
                </div>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </motion.div>
            ))}
            <MotionA
              href="#contact"
              className="btn btn-primary software-cta"
              onClick={(e) => smoothScrollClick(e, "#contact")}
            >
              Accéder à Gartec Connect
            </MotionA>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 48 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%", amount: 0.25 }}
            transition={springSoft}
          >
            <motion.div
              className="screen-frame"
              whileHover={
                reduce ? undefined : { y: -5, transition: springSnappy }
              }
              transition={springSoft}
            >
              <div className="screen-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="screen-url">app.gartec.fr</span>
              </div>
              <div className="screen-content">
                <div className="app-sidebar">
                  <div className="app-nav-item active">Tableau de bord</div>
                  <div className="app-nav-item">Sites</div>
                  <div className="app-nav-item">Rapports</div>
                  <div className="app-nav-item">Paramètres</div>
                </div>
                <div className="app-main">
                  <div className="app-header-bar">Tableau de bord – Q1 2026</div>
                  <div className="app-stats-row">
                    <div className="app-stat-card">
                      <div className="asc-value" style={{ color: "#156896" }}>
                        47
                      </div>
                      <div className="asc-label">Sites contrôlés</div>
                    </div>
                    <div className="app-stat-card">
                      <div className="asc-value" style={{ color: "#1d7a4a" }}>
                        38
                      </div>
                      <div className="asc-label">Conformes</div>
                    </div>
                    <div className="app-stat-card">
                      <div className="asc-value" style={{ color: "#b45309" }}>
                        9
                      </div>
                      <div className="asc-label">À surveiller</div>
                    </div>
                  </div>
                  <motion.div
                    className="app-chart"
                    variants={barContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportReveal}
                  >
                    {chartHeights.map((h, i) => (
                      <motion.div
                        key={i}
                        className="chart-bar"
                        style={{
                          height: h,
                          background: "linear-gradient(to top, #156896, #3d8ab8)",
                          transformOrigin: "bottom center",
                        }}
                        variants={barItem}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
