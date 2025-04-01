import React from "react";
import "./contact.css";
import Aktu from "../../assets/aktu_img.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import Blogger from "../../assets/blogger.png";
import Gmail from "../../assets/mail.png";
import emailjs from "@emailjs/browser";

import { useRef } from "react";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6vmgdmi", "template_un6v37b", form.current, {
        publicKey: "pUuOlCJFwR8aY05Hh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contactPage">
      <div id="exp">
        <h1 className="contactPageTitle">Education</h1>
        <p className="expDesc">
          I have completed my Bachelors in Technology with Computer Science as
          my major from ABES Engineering College, affiliated to AKTU, Lucknow.
        </p>
        <div className="expImgs">
          <img src={Aktu} alt="Exp" className="expImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunites.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://github.com/kaartikeya">
              <img src={githubIcon} alt="Github" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/kaartikeya-srivastava-1b9382202/">
              <img src={linkedinIcon} alt="Linkedin" className="link" />
            </a>
            <a href="https://theboiledegg01.blogspot.com/">
              <img src={Blogger} alt="Blogger" className="link" />
            </a>
            <a href="mailto:kaartikeya.1@gmail.com">
              <img src={Gmail} alt="Blogger" className="link" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
