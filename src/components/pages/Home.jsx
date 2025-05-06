import React from "react";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Project from "./Projects";
import Experience from "./Experience";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
