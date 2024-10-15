import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import CompProg from "../../assets/images.jpg";

export const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web developer with experience in creating
        visually appealing, reactive, scalable and user-friendly websites. I
        have a stong understanding of design and a keen eye for detail.
        Currently I am learning back-end technologies to become a full stack web
        developer.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              I am capable of crafting intuitive and engaging user interfaces
              and experiences with a strong focus on user-centered design.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              I can develop reactive and scalable websites with expertise in
              front-end technologies.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={CompProg} alt="CompetativeProg" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Competative Programming</h2>
            <p>
              I have strong problem-solving skills, actively practicing Data
              Structures and Algorithms on platforms like LeetCode and CodeChef
              to excel in coding challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
