import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterkIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  emailjs.init("PvgEUy6V-iwJgnc5M"); // Initialize with PUBLIC key

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yaqsikj",
        "template_ujp3uwl",
        form.current,
        "PvgEUy6V-iwJgnc5M",
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <section id="contactPage">
      <div id="skill">
        <h1 className="contactPageTitle">My Skills</h1>
        <div className="SkillImgs">
          <img src={Walmart} alt="" className="skillImg" />
          <img src={Adobe} alt="" className="skillImg" />{" "}
          <img src={Microsoft} alt="" className="skillImg" />{" "}
          <img src={Facebook} alt="" className="skillImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <h1 className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </h1>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your EMail"
            name="your_email"
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Meassage"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Send Message
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="" className="link" />
            <img src={YouTubeIcon} alt="" className="link" />
            <img src={TwitterkIcon} alt="" className="link" />
            <img src={TwitterkIcon} alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
