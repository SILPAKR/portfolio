import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Silpa K R </span>
          <br />
          Frontend Developer
        </span>
        <p className="introPara">
          I am a skilled frontend developer with experience in creating <br />
          responsive and user friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
