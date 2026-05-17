function smooth(e, href) {
  if (!href?.startsWith("#")) return;
  const el = document.getElementById(href.slice(1));
  if (el) {
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-text">◈ GARTEC</span>
          <p>
            L&apos;instrument de référence pour le contrôle des aires de jeux.
            Conformité EN1177:2018 & XP S54-215.
          </p>
        </div>
        <div className="footer-links">
          <h5>Navigation</h5>
          {[
            ["#produit", "Ludomètre FTv3"],
            ["#logiciel", "Gartec Connect"],
            ["#ludogab", "LudoGab"],
            ["#offres", "Nos Offres"],
            ["#normes", "Normes"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={(e) => smooth(e, href)}>
              {label}
            </a>
          ))}
        </div>
        <div className="footer-links">
          <h5>Contact</h5>
          <a href="tel:+33670811421">+33 6 70 81 14 21</a>
          <a href="mailto:commerce@gartec.fr">commerce@gartec.fr</a>
        </div>
        <div className="footer-links">
          <h5>Langues</h5>
          <a href="#">Français</a>
          <a href="#">English</a>
          <a href="#">Español</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Gartec. Tous droits réservés.</p>
        <p>Mentions légales · Politique de confidentialité</p>
      </div>
    </footer>
  );
}
