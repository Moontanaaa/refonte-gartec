import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { springSnappy, springSoft } from "../motion/presets";
import { MotionA } from "./MotionA.jsx";

const SECTION_IDS = [
  "accueil",
  "produit",
  "logiciel",
  "ludogab",
  "offres",
  "normes",
  "contact",
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const [logoFailed, setLogoFailed] = useState(false);

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 48);
  });

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (!href?.startsWith("#")) return;
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      className={`navbar${scrolled ? " scrolled" : ""}`}
      id="navbar"
      initial={false}
      animate={{
        boxShadow: scrolled
          ? "0 1px 0 rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.06)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={springSnappy}
    >
      <div className="nav-inner">
        <a
          href="#accueil"
          className="nav-logo"
          onClick={(e) => handleNavClick(e, "#accueil")}
        >
          {!logoFailed ? (
            <img
              src="https://www.gartec.fr/wp-content/uploads/2018/10/LogoGartec2018.png"
              alt="Gartec"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span className="logo-fallback" style={{ display: "flex" }}>
              <span className="logo-icon">◈</span>
              <span className="logo-text">GARTEC</span>
            </span>
          )}
        </a>
        <ul className="nav-links">
          {[
            ["#produit", "Ludomètre FTv3"],
            ["#logiciel", "Gartec Connect"],
            ["#ludogab", "LudoGab"],
            ["#offres", "Nos Offres"],
            ["#normes", "Normes"],
          ].map(([href, label]) => {
            const id = href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  className={active === id ? "is-active" : ""}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <MotionA href="#contact" className="btn btn-primary nav-cta" onClick={(e) => handleNavClick(e, "#contact")}>
          Demander un devis
        </MotionA>
        <button
          type="button"
          className="hamburger"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={springSnappy}
          />
          <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.15 }} />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={springSnappy}
          />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            key="mobile"
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={springSoft}
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: "0.35rem",
              padding: "1rem 1.75rem 1.25rem",
              paddingTop: mobileOpen ? "0.85rem" : 0,
            }}
          >
            {[
              ["#produit", "Ludomètre FTv3"],
              ["#logiciel", "Gartec Connect"],
              ["#ludogab", "LudoGab"],
              ["#offres", "Nos Offres"],
              ["#normes", "Normes"],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={(e) => handleNavClick(e, href)}>
                {label}
              </a>
            ))}
            <MotionA href="#contact" className="btn btn-primary" style={{ marginTop: "0.5rem", textAlign: "center" }} onClick={(e) => handleNavClick(e, "#contact")}>
              Demander un devis
            </MotionA>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
