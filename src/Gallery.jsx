import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import "./Home.css";

const images = [
  "/images/gallery1.jpeg",
  "/images/gallery2.jpeg",
  "/images/gallery3.jpeg",
  "/images/gallery4.jpeg",
  "/images/gallery5.jpeg",
  "/images/gallery6.jpeg",
];

function Gallery() {
  const [lightbox, setLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (img) => {
    setCurrentImage(img);
    setLightbox(true);
  };

  const closeLightbox = () => {
    setLightbox(false);
    setCurrentImage(null);
  };

  return (
    <div className="gallery-container">
      <Navbar />

      <section className="gallery-hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="gallery-title"
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="gallery-subtitle"
        >
          Explore the art, screenshots, and visuals from the Hasaki Universe.
        </motion.p>
      </section>

      <section className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            onClick={() => openLightbox(img)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 76, 96, 0.5)" }}
          >
            <img src={img} alt={`Gallery ${index + 1}`} />
          </motion.div>
        ))}
      </section>

      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImage} alt="Enlarged" />
        </div>
      )}

      <footer className="gallery-footer">
        <p>© 2025 Hasaki Universe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Gallery;
