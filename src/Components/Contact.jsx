import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <header className="contact__header">
          <h1 className="section-title">Contact</h1>
          <p className="contact__lead">
            Have a project or need quick frontend help? Reach out and I'll get
            back fast.
          </p>
        </header>
        <div className="contact__actions">
          <a
            className="btn btn--primary"
            href="https://www.freelancer.com/u/yousslf"
            rel="noopener noreferrer"
          >
            <span className="btn__label">My Profile</span>
          </a>
          <a
            className="btn btn--ghost"
            href="https://github.com/Yousslf"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
              alt="GitHub"
              width="20"
              height="20"
              className="btn__icon"
              aria-hidden="true"
            />
            <span className="btn__label">My GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
