import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a Frontend Developer.I build clean, interactive, and responsive
        websites using HTML, CSS, JavaScript, and React. I focus on smooth user
        experiences and bringing designs to life, making your ideas look and
        work perfectly on the web.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Implementation</h2>
            <p>Converting designs into pixel-perfect, responsive interfaces</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend</h2>
            <p>
              React.js / Redux / Bootstrap / Tailwind CSS / JavaScript / HTML /
              CSS
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend</h2>
            <p>Node.js / Express.js </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
