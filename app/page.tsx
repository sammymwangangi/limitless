import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CommercialPillars from "@/components/sections/CommercialPillars";
import Pricing from "@/components/sections/Pricing";
import AutomationFlow from "@/components/sections/AutomationFlow";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Technologies from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Marquee />
        <About />
        <CommercialPillars />
        <Pricing />
        <AutomationFlow />
        <Industries />
        <Process />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
