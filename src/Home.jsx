import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import "./Home.css";

const featuredEpisodes = [
  "Episode 1: Dawn of Hasaki",
  "Episode 2: Clash of Titans",
  "Episode 3: Shadows Rise",
];

const featuredCharacters = ["Hasaki", "Kaido", "Mira"];

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      <Navbar />

      {/* 🌌 Hero Section */}
      <section className="hero-section">
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/images/hero.jpg"
          alt="Hasaki Hero"
          className="hero-image"
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-title"
        >
          Welcome to the World of Hasaki
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hero-description"
        >
          Dive into an epic saga of power, fate, and honor.
        </motion.p>
      </section>

      {/* 🔹 Featured Episodes */}
      <section className="section">
        <h2>Featured Episodes</h2>
        <div className="card-grid">
          {featuredEpisodes.map((ep, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255,76,96,0.5)" }}
            >
              {ep}
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Featured Characters */}
      <section className="section dark">
        <h2>Meet the Characters</h2>
        <div className="card-grid">
          {featuredCharacters.map((char, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255,76,96,0.5)" }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚡ Footer */}
      <footer className="footer">
        <p>© 2025 Hasaki Universe. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

export default Home;
