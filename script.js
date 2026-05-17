// Gartec — navigation, formulaire, animations au scroll

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    const target = href && href !== "#" ? document.querySelector(href) : null;
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

const fadeEls = document.querySelectorAll(
  ".feature-card, .ludogab-card, .pricing-card, .norme-card, .sw-item, .contact-item, .section-header, .product-detail, .software-showcase, .upgrade-banner"
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-up", "visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

fadeEls.forEach((el, index) => {
  el.classList.add("fade-up");
  el.style.transitionDelay = `${(index % 4) * 70}ms`;
  observer.observe(el);
});

document.querySelectorAll(".feature-card").forEach((card, i) => {
  card.style.transitionDelay = `${i * 70}ms`;
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
function updateActiveNav() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === "#" + current);
  });
}
window.addEventListener("scroll", updateActiveNav);
updateActiveNav();

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
if (contactForm) {
  const defaultBtnLabel = "Envoyer le message";
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = "Envoi en cours…";
    btn.disabled = true;
    setTimeout(() => {
      formSuccess.style.display = "block";
      contactForm.reset();
      btn.textContent = defaultBtnLabel;
      btn.disabled = false;
      formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 1200);
  });
}
