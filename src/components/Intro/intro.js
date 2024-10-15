import React from "react";
import "./intro.css";
import bg from "../../assets/my_img.jpeg";
// import btnImg from "../../assets/hireme.png";
// import { Link } from "react-scroll";

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Kaartikeya Srivastava,</span> <br />
          Website Developer
        </span>
        <p className="introPara">
          I am a skilled web developer with experience in creating <br />{" "}
          reactive and scalable full-stack websites. <br />
        </p>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};
