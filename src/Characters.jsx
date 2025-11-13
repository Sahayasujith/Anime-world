import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import "./Home.css";

const characters = [
  {
    id: 1,
    name: "Hasaki",
    image: "/images/hasaki.jpeg",
    power: "Master of Shadow Blade",
  },
  {
    id: 2,
    name: "Kaido",
    image: "/images/kaido.jpeg",
    power: "Dragon Fist Fury",
  },
  {
    id: 3,
    name: "Mira",
    image: "/images/mira.jpeg",
    power: "Illusion Magic",
  },
  {
    id: 4,
    name: "Rin",
    image: "/images/rin.jpeg",
    power: "Wind Manipulation",
  },
];

function Characters() {
  return (
    <div className="characters-container">
      <Navbar />

      <section className="characters-hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="characters-title"
        >
          Characters
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="characters-subtitle"
        >
          Meet the heroes and villains of the Hasaki Universe.
        </motion.p>
      </section>

      <section className="characters-grid">
        {characters.map((char, index) => (
          <motion.div
            key={char.id}
            className="character-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 76, 96, 0.5)" }}
          >
            <div className="card-image-container">
              <img src={char.image} alt={char.name} className="character-image" />
              <div className="overlay">
                <p className="character-power">{char.power}</p>
              </div>
            </div>
            <h3 className="character-name">{char.name}</h3>
          </motion.div>
        ))}
      </section>

      <footer className="characters-footer">
        <p>© 2025 Hasaki Universe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Characters;
