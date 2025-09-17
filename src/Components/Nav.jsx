import React from "react";
import logo from "../assets/logo.png";

const Nav = () => {
  const [activeId, setActiveId] = React.useState("main");

  React.useEffect(() => {
    const sectionIds = ["main", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => () => setActiveId(id);

  return (
    <header className="navbar">
      <h1 className="brand">
        Portofolio <img className="logo" src={logo} alt="logo" />
      </h1>
      <nav>
        <ul className="nav-links">
          <li className={activeId === "main" ? "active" : ""}>
            <a href="#main" onClick={handleClick("main")}>
              Main
            </a>
          </li>
          <li className={activeId === "projects" ? "active" : ""}>
            <a href="#projects" onClick={handleClick("projects")}>
              Projects
            </a>
          </li>
          <li className={activeId === "contact" ? "active" : ""}>
            <a href="#contact" onClick={handleClick("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
