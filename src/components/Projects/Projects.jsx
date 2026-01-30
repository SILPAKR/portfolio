import React from "react";
import "./projects.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
const Projects = () => {
  return (
    <section id="projects">
      <h2 className="workTitle">My Projects</h2>
      <div className="workImgs">
        <img src={Portfolio1} alt="" className="workImg" />
        <img src={Portfolio2} alt="" className="workImg" />
        <img src={Portfolio3} alt="" className="workImg" />
        <img src={Portfolio4} alt="" className="workImg" />
        <img src={Portfolio5} alt="" className="workImg" />
        <img src={Portfolio6} alt="" className="workImg" />
      </div>
      <button className="projectBtn">See more</button>
    </section>
  );
};

export default Projects;
