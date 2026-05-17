import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "../components/Reveal.jsx";
import { staggerGap, itemRise, viewportReveal, springSnappy } from "../motion/presets";

function IconPhone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-6.84 4.125a2.25 2.25 0 01-2.16 0l-6.84-4.125a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.125-7.5 11.25-7.5 11.25S4.5 17.625 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

const contactBlocks = [
  { title: "Téléphone", body: "+33 6 70 81 14 21", href: "tel:+33670811421", Icon: IconPhone },
  { title: "Email", body: "commerce@gartec.fr", href: "mailto:commerce@gartec.fr", Icon: IconMail },
  { title: "Site web", body: "www.gartec.fr", href: "https://www.gartec.fr", Icon: IconGlobe },
  { title: "Adresse", body: "France", href: null, Icon: IconPin },
];

export function ContactSection() {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);

  const list = reduce ? { hidden: {}, show: {} } : staggerGap(0.08);
  const item = reduce ? { hidden: {}, show: {} } : itemRise;

  const submit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    if (!fd.get("name")?.trim()) return;
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 5200);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-tag">Contact</span>
          <h2>
            Échangez avec <span className="text-accent">notre équipe</span>
          </h2>
          <p>
            Pour un devis, une démonstration ou une question technique, laissez vos
            coordonnées : nous vous répondons sous 48&nbsp;h ouvrées.
          </p>
        </Reveal>

        <div className="contact-layout">
          <motion.div
            className="contact-info"
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={viewportReveal}
          >
            {contactBlocks.map((c) => (
              <motion.div key={c.title} className="contact-item" variants={item}>
                <div className="ci-icon" aria-hidden="true">
                  <c.Icon />
                </div>
                <div>
                  <h4>{c.title}</h4>
                  {c.href ? <a href={c.href}>{c.body}</a> : <p>{c.body}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="contact-form-wrap"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={
              reduce ? undefined : { opacity: 1, y: 0, transition: springSnappy }
            }
            viewport={viewportReveal}
          >
            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input id="name" name="name" placeholder="Jean Dupont" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jean@exemple.fr"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input id="phone" name="phone" type="tel" placeholder="+33 6 00 00 00 00" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Objet *</label>
                  <select id="subject" name="subject" required defaultValue="">
                    <option value="">Sélectionnez...</option>
                    <option>Demande de devis – Ludomètre FTv3</option>
                    <option>Mise à jour FTv2 → FTv3</option>
                    <option>Gartec Connect</option>
                    <option>LudoGab</option>
                    <option>Support technique</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={5} placeholder="Décrivez votre besoin..." required />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                whileHover={
                  reduce ? undefined : { scale: 1.006, transition: springSnappy }
                }
                whileTap={reduce ? undefined : { scale: 0.992 }}
              >
                Envoyer le message
              </motion.button>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    className="form-success"
                    role="status"
                    initial={
                      reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }
                    }
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.98 }}
                    transition={springSnappy}
                    style={{ display: "block", marginTop: "1rem" }}
                  >
                    Votre message a bien été envoyé. Nous vous répondrons dans les
                    plus brefs délais.
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
