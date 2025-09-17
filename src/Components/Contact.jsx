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
            href="mailto:Youssif.252008@gmail.com"
          >
            Email Me ✉️
          </a>
          <a
            className="btn btn--ghost"
            href="https://github.com/Yousslf"
            target="_blank"
            rel="noreferrer"
          >
            My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
