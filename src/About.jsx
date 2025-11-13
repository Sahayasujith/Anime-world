import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import "./Home.css";

function About() {
  return (
    <div className="about-container">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="about-title"
        >
          About Hasaki Universe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="about-subtitle"
        >
          Dive into the story, lore, and creators behind the Hasaki saga.
        </motion.p>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="story-content"
        >
          <h2>The Saga Begins</h2>
          <p>
            In a world torn by power struggles, fate and honor collide. Hasaki,
            a young warrior with a mysterious past, embarks on a journey filled
            with epic battles, hidden secrets, and legendary foes. Every
            episode unveils new challenges, alliances, and the true nature of
            destiny.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="story-content"
        >
          <h2>The Creators</h2>
          <p>
            Hasaki Universe is brought to life by a passionate team of artists,
            writers, and animators, dedicated to crafting a rich, immersive
            anime experience. Our goal is to transport fans into a vibrant,
            action-packed world where every character and story arc is
            unforgettable.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>© 2025 Hasaki Universe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
