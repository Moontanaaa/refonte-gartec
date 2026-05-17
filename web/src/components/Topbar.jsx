export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <a href="tel:+33670811421" className="topbar-link">
          +33 6 70 81 14 21
        </a>
        <a href="mailto:commerce@gartec.fr" className="topbar-link">
          commerce@gartec.fr
        </a>
        <div className="lang-switcher">
          <a href="#" className="active">
            FR
          </a>
          <a href="#">EN</a>
          <a href="#">ES</a>
        </div>
      </div>
    </div>
  );
}
