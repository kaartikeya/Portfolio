import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import "./experience.css";

export const Experience = () => {
  const experiences = [
    {
      title: "Front End Web Developer Intern",
      company: "Hyper Cloud Digital Solutions",
      location: "Remote",
      period: "November 2024 - March 2025",
      description: [
        "Developing and enhancing website’s UI and functionality with ReactJS, and integrating APIs to ensure scalability and responsiveness.",
        "Conducted client meetings and provided project progress walkthroughs to ensure alignment with requirements.",
        "Executed comprehensive unit-level testing across multiple projects, identifying and resolving critical bugs which improved overall project reliability. ",
      ],
      technologies: ["React", "JavaScript", "Firebase", "CSS/SCSS", "HTML"],
    },
    {
      title: "Full Stack Web Developer Intern",
      company: "CodeSpaze",
      location: "Remote",
      period: "October 2024 - November 2024",
      description: [
        "Designed and developed a personal portfolio website, showcasing projects and skills with an intuitive and visually appealing UI. ",
        "Built a full-stack e-commerce platform featuring integrated payment gateways (Stripe, Razor pay, Cash on Delivery), user authentication, cart functionality, and a streamlined multi-page design.",
        "Enhanced user engagement by designing a user-friendly and logical interface that improved navigation.  ",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "CSS",
        "HTML",
      ],
    },
  ];
  return (
    <section id="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <h3 className="job-title">{exp.title}</h3>
              <div className="company-info">
                <Briefcase className="icon" size={18} />
                <span className="company-name">{exp.company}</span>
              </div>
              <div className="job-meta">
                <div className="location">
                  <MapPin className="icon" size={18} />
                  <span>{exp.location}</span>
                </div>
                <div className="period">
                  <Calendar className="icon" size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>

            <div className="experience-content">
              <ul className="responsibilities">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="technologies">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
