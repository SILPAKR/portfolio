import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
