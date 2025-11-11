import { motion } from "framer-motion";
import { Phone, MapPin, ChevronDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about-content");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Debangga Old Age Home - Caring environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Debangga Old Age Home
          </h1>
          <p className="text-xl md:text-3xl text-secondary mb-12 font-medium">
            A caring home for your loved ones
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              variant="default"
              className="bg-secondary text-secondary-foreground hover:text-secondary text-lg px-8 py-6"
              asChild
            >
              <a href="tel:9875679149" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              asChild
            >
              <a
                href="https://maps.app.goo.gl/4n7g3VZLZsmWsU2P8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                View on Maps
              </a>
            </Button>
          </div>

          <motion.button
            onClick={scrollToAbout}
            className="text-primary-foreground hover:text-secondary transition-colors cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-12 h-12 mx-auto" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
