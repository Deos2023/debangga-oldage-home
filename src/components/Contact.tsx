import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const phoneNumbers = [
    "9875679149",
    "7686086156",
    "7890665028",
    "8961330891",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=amamchandrasarkar35@gmail.com&su=Visit%20Booking%20Request&body=${emailBody}`;
    const mailtoLink = `mailto:amalchandrasarkar35@gmail.com?subject=Visit%20Booking%20Request&body=${emailBody}`;

    window.open(gmailLink, "_blank") || (window.location.href = mailtoLink);

    toast({
      title: "Opening your email client...",
      description: "Your message has been prepared for sending.",
    });

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us to learn more or schedule a visit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-10 items-stretch">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full flex"
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      Address
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Shyamnagar, Basudevpur, Netaji Pally <br />
                      Near Kalyani High Road, Bharat Petroleum Pump
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      Phone
                    </h3>
                    <div className="space-y-2">
                      {phoneNumbers.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:amamchandrasarkar35@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      amamchandrasarkar35@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <p className="pt-6 border-t border-border mt-8 text-sm text-muted-foreground text-center">
                We’re available 24×7 for your queries.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Book a Visit
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Your phone number"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your requirements..."
                    className="w-full min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto animate-zoom-in"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Find Us
          </h3>
          <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3689.1321629350305!2d88.39852637529503!3d22.386374579624817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDIzJzExLjAiTiA4OMKwMjQnMDQuMCJF!5e0!3m2!1sen!2sin!4v1761910342500!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Debangga Old Age Home Location"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
