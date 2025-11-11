import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Facilities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
