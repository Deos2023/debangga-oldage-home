import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Bed, 
  Wind, 
  Bath, 
  Shield, 
  Sparkles, 
  Stethoscope,
  Wallet
} from "lucide-react";

const Facilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facilities = [
    {
      icon: Bed,
      title: "Single & Double Sharing Rooms",
      description: "Comfortable accommodations with options for single or double occupancy to suit individual preferences.",
    },
    {
      icon: Wind,
      title: "AC Rooms Available",
      description: "Climate-controlled rooms with air conditioning for enhanced comfort during all seasons.",
    },
    {
      icon: Bath,
      title: "Attached Clean Bathrooms",
      description: "Each room features an attached bathroom with modern fixtures and safety features for elderly residents.",
    },
    {
      icon: Shield,
      title: "Secure Premises & CCTV",
      description: "24/7 security monitoring with CCTV cameras in common areas ensuring resident safety and peace of mind.",
    },
    {
      icon: Sparkles,
      title: "Daily Housekeeping",
      description: "Professional housekeeping services maintain cleanliness and hygiene throughout the facility daily.",
    },
    {
      icon: Stethoscope,
      title: "Doctor on Call",
      description: "Medical support available with doctor on call and proper medication management for all residents.",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-warm-gray">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Facilities</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive care and modern amenities to ensure comfort and well-being
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <facility.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{facility.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Deposit Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-secondary/20 border-2 border-secondary rounded-2xl p-6 max-w-2xl mx-auto text-center"
        >
          <Wallet className="w-10 h-10 mx-auto mb-4 text-primary" />
          <p className="text-lg font-semibold text-foreground">
            Note: Refundable deposit applicable for all admissions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
