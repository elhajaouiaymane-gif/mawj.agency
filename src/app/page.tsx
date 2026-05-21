import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Manifesto />
      <Services />
      <Portfolio />
      <Stats />
      <ProcessTimeline />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
