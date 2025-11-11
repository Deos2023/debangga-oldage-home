import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Home, Utensils, Users } from "lucide-react";
import buildingExterior from "@/assets/Building.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Clock, text: "24×7 Care" },
    { icon: Home, text: "Clean Rooms" },
    { icon: Utensils, text: "Nutritious Meals" },
    { icon: Users, text: "Family Visits" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">About Us</h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={buildingExterior}
              alt="Debangga Old Age Home Building"
              className="rounded-2xl shadow-2xl overflow-hidden aspect-[4/3]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Welcome to Debangga Old Age Home, where we provide compassionate residential care
              with a focus on dignity, safety, and comfort for your loved ones.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Our trained staff specializes in caring for residents with diverse needs, including
              those with Dementia, Autism, and Schizophrenia. We understand that each individual
              requires personalized attention and support.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Located in a peaceful neighborhood at Shyamnagar, Basudevpur, Netaji Pally, near
              Kalyani High Road and Bharat Petroleum Pump, our facility offers a serene environment
              perfect for seniors to live comfortably and safely.
            </p>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <highlight.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <p className="text-lg font-semibold text-card-foreground">{highlight.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
