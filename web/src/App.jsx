import "./global.css";

import { Topbar } from "./components/Topbar.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Footer } from "./components/Footer.jsx";
import { ProductSection } from "./sections/ProductSection.jsx";
import { SoftwareSection } from "./sections/SoftwareSection.jsx";
import { LudogabSection } from "./sections/LudogabSection.jsx";
import { PricingSection } from "./sections/PricingSection.jsx";
import { NormesSection } from "./sections/NormesSection.jsx";
import { ContactSection } from "./sections/ContactSection.jsx";

export default function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <ProductSection />
      <SoftwareSection />
      <LudogabSection />
      <PricingSection />
      <NormesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
