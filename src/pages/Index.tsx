import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Carousel } from "@/components/Carousel";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Carousel />
        <Services />
        <HowItWorks />
        <FAQ />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
