import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="intro-text">Hello, I'm</p>

        <h1 className="hero-name">
          Satya Durga Prasad
        </h1>

        <h2 className="hero-role">
          Full-Stack Developer | AI & Backend Enthusiast
        </h2>

        <p className="hero-description">
         I build scalable full-stack applications with intelligent backend systems
and clean, performance-focused design.

        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a href="/resume.pdf" className="btn secondary-btn" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glow-circle"></div>
      </div>

      <div className="scroll-down">Scroll ↓</div>
    </section>
  );
};

export default Hero;
