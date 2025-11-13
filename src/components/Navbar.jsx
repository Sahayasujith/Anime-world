import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Hasaki</div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/episodes">Episodes</a>
        <a href="/characters">Character</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
      </div>

      <div className="nav-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
