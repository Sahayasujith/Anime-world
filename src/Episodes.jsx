import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import "./Home.css"; // We'll create this CSS

const episodes = [
  { id: 1, title: "Episode 1: Dawn of Hasaki", image: "/images/episode1.jpeg" },
  { id: 2, title: "Episode 2: Clash of Titans", image: "/images/episode2.jpeg" },
  { id: 3, title: "Episode 3: Shadows Rise", image: "/images/episode3.jpeg" },
  { id: 4, title: "Episode 4: Fury Unleashed", image: "/images/episode4.jpeg" },
  { id: 5, title: "Episode 5: Destiny's Path", image: "/images/episode5.jpeg" },
];

function Episodes() {
  return (
    <div className="episodes-container">
      <Navbar />

      <section className="episodes-hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="episodes-title"
        >
          Episodes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="episodes-subtitle"
        >
          Explore the epic saga of Hasaki, episode by episode.
        </motion.p>
      </section>

      <section className="episodes-grid">
        {episodes.map((ep, index) => (
          <motion.div
            key={ep.id}
            className="episode-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 76, 96, 0.5)" }}
          >
            <img src={ep.image} alt={ep.title} className="episode-image" />
            <h3 className="episode-title">{ep.title}</h3>
          </motion.div>
        ))}
      </section>

      <footer className="episodes-footer">
        <p>© 2025 Hasaki Universe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Episodes;
