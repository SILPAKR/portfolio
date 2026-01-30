import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
      <img
        className="mobMenu"
        src={menu}
        alt="menu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
