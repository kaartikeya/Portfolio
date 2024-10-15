import React from "react";
import "./works.css";
import Project1 from "../../assets/pig_game.png";
import Project2 from "../../assets/youtube_clone.png";
import Project3 from "../../assets/movieland.png";
// import Project4 from "../../assets/portfolio-4.png";
// import Project5 from "../../assets/portfolio-5.png";
// import Project6 from "../../assets/portfolio-6.png";

export const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smalllest details and making
        sure that my work is pixel perfect. I am excited to bring my skills and
        experience to help business achieve their goals and create a stong
        online presence.
      </span>
      <div className="worksImgs">
        <img src={Project1} alt="img1" className="worksImg" />
        <img src={Project2} alt="img2" className="worksImg" />
        <img src={Project3} alt="img3" className="worksImg" />
        {/* <img src={Project4} alt="img4" className="worksImg" />
        <img src={Project5} alt="img5" className="worksImg" />
        <img src={Project6} alt="img6" className="worksImg" /> */}
      </div>
      {/* <button className="worksBtn">See More</button> */}
    </section>
  );
};
