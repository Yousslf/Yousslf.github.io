import React from "react";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />

      <Projects />
      <Contact />
    </div>
  );
};

export default App;
