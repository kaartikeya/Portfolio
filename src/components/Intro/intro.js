import React, { useEffect, useState } from "react";
import "./intro.css";
// import bg from "../../assets/edited.jpeg";
import bg1 from "../../assets/edited2.jpeg";
import bg2 from "../../assets/edited3.jpeg";
import bg3 from "../../assets/editednew.jpeg";
import bg4 from "../../assets/edited5.jpeg";
import cvDownload from "../../assets/download_file.png";

// import btnImg from "../../assets/hireme.png";
// import { Link } from "react-scroll";

export const Intro = () => {
  const images = [bg4, bg2, bg3, bg1];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [hovering, setHovering] = useState(false);
  const [stopped, setStopped] = useState(false);

  let intervalId;

  useEffect(() => {
    let index = 0;

    if (hovering && !stopped) {
      intervalId = setInterval(() => {
        index = (index + 1) % images.length;
        setCurrentImage(images[index]);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [hovering, stopped]);

  return (
    <div className="intro">
      <div
        className="intro_img"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          setStopped(false); // Reset stopped state when leaving
          setCurrentImage(images[0]); // Reset to first image
        }}
        onClick={() => setStopped((prev) => !prev)} // Toggle stopped state on click>
      >
        <img src={currentImage} alt="Profile" className="bg" />
      </div>
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
        <div className="cv">
          <a href="/resume.pdf" download className="cv_btn">
            <img className="cv_icon" src={cvDownload} alt="resume" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};
