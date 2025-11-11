import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import balcony from "@/assets/Balcony.jpg";
import balcony2 from "@/assets/Balcony2.jpg";
import banner from "@/assets/Banner.jpg";
import building from "@/assets/Building.jpg";
import lobby1 from "@/assets/Lobby1.jpg";
import roof from "@/assets/Roof.jpg";
import roof2 from "@/assets/Roof2.jpg";
import room1 from "@/assets/Room1.jpg";
import room3 from "@/assets/Room3.jpg";
import room4 from "@/assets/Room4.jpg";
import room5 from "@/assets/Room5.jpg";
import room6 from "@/assets/Room6.jpg";
import room7 from "@/assets/Room7.jpg";
import room8 from "@/assets/Room8.jpg";
import room9 from "@/assets/Room9.jpg";
import room10 from "@/assets/Room10.jpg";
import stair1 from "@/assets/Stair1.jpg";
import stair2 from "@/assets/Stair2.jpg";
import stair3 from "@/assets/Stair3.jpg";
import toilet1 from "@/assets/Toilet1.jpg";
import toilet2 from "@/assets/Toilet2.jpg";
import toilet3 from "@/assets/Toilet3.jpg";

import video1 from "@/assets/Video1.mp4";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const media = [
    { src: building, alt: "Exterior building – yellow and blue painted facility", type: "image" },
    { src: banner, alt: "Information poster of Debangga Old Age Home", type: "image" },
    { src: balcony, alt: "Balcony view overlooking greenery", type: "image" },
    { src: balcony2, alt: "Another balcony angle of the home", type: "image" },
    { src: lobby1, alt: "Lobby area with bright walls and comfortable space", type: "image" },
    { src: roof, alt: "Rooftop area with railing and open view", type: "image" },
    { src: roof2, alt: "Additional rooftop view", type: "image" },
    { src: room1, alt: "Bedroom with pink bedding", type: "image" },
    { src: room3, alt: "Brightly lit double bedroom", type: "image" },
    { src: room4, alt: "Bedroom corner view", type: "image" },
    { src: room5, alt: "Room with red carpet walkway", type: "image" },
    { src: room6, alt: "Comfortable bedroom interior", type: "image" },
    { src: room7, alt: "Single bed with green chair", type: "image" },
    { src: room8, alt: "Blue-painted single bedroom", type: "image" },
    { src: room9, alt: "Bedroom with sunlight", type: "image" },
    { src: room10, alt: "Bedside window view", type: "image" },
    { src: stair1, alt: "Red-carpeted staircase with railing", type: "image" },
    { src: stair2, alt: "Stairway view to upper floors", type: "image" },
    { src: stair3, alt: "Corridor with stairs and blue doors", type: "image" },
    { src: toilet1, alt: "Clean attached toilet with modern fittings", type: "image" },
    { src: toilet2, alt: "Bathroom with tiled walls", type: "image" },
    { src: toilet3, alt: "Restroom interior view", type: "image" },
    { src: video1, alt: "Facility walkthrough video", type: "video" },
  ];

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const navigate = (direction) => {
    if (selectedIndex === null) return;
    const total = media.length;
    setSelectedIndex((prev) =>
      direction === "prev" ? (prev === 0 ? total - 1 : prev - 1) : (prev === total - 1 ? 0 : prev + 1)
    );
  };

  const handleKey = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigate("prev");
    if (e.key === "ArrowRight") navigate("next");
  };

  return (
    <section id="gallery" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the spaces, comfort, and care that make Debangga Old Age Home feel like family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              onClick={() => openLightbox(index)}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Click to view</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              onKeyDown={handleKey}
              tabIndex={0}
              role="dialog"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="absolute top-4 right-4 text-white hover:text-yellow-400"
              >
                <X className="w-10 h-10" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("prev");
                }}
                className="absolute left-4 text-white hover:text-yellow-400"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              <div className="max-h-[90vh] max-w-[90vw] flex items-center justify-center">
                {media[selectedIndex].type === "video" ? (
                  <video
                    src={media[selectedIndex].src}
                    controls
                    autoPlay
                    className="rounded-lg max-h-[90vh] max-w-[90vw]"
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <motion.img
                    key={selectedIndex}
                    src={media[selectedIndex].src}
                    alt={media[selectedIndex].alt}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="rounded-lg max-h-[90vh] max-w-[90vw] object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("next");
                }}
                className="absolute right-4 text-white hover:text-yellow-400"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
