import React from "react";

const Hero = () => {
  return (
    <section id="main" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            <span role="img" aria-label="wave">
              👋
            </span>{" "}
            Hi, I'm <span className="accent">Youssif</span>. I'm here to offer
            fast & simple
            <span className="accent"> Frontend services</span>
          </h1>

          <h2 className="hero__subtitle">What I'm offering</h2>
          <p className="hero__lead">
            I provide quick, clean frontend improvements, fixes, and edits.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </div>

          <h3 className="hero__skillsTitle">Skills</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>Vanilla JavaScript</li>
            <li>React</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
