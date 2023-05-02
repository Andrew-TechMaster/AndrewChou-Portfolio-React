import React from "react";
import ProjectIMG4 from "../../../asstes/porject04.jpeg";
import ProjectIMG1 from "../../../asstes/project01.png";
import ProjectIMG2 from "../../../asstes/project02.jpg";
import ProjectIMG3 from "../../../asstes/project03.png";
import Project from "./Project";
import "./portfolio.css";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: ProjectIMG2,
      title: "Workout Nation",
      github: "https://github.com/Andrew-TechMaster/Workout-Nation",
      demo: "https://boiling-dusk-37737.herokuapp.com/",
    },
    {
      id: 2,
      image: ProjectIMG1,
      title: "Cocktail Generator",
      github: "https://github.com/Andrew-TechMaster/cocktail-generator",
      demo: "https://jlddukes.github.io/cocktail-generator/",
    },
    {
      id: 3,
      image: ProjectIMG3,
      title: "Code Quiz",
      github:
        "https://github.com/Andrew-TechMaster/Andrew-UWBootcamp-Challenge-04-Web-APIs-Code-Quiz",
      demo: "https://andrew-techmaster.github.io/Andrew-UWBootcamp-Challenge-04-Web-APIs-Code-Quiz/",
    },
    {
      id: 4,
      image: ProjectIMG4,
      title: "HopShop",
      github: "https://github.com/Andrew-TechMaster/shophop",
      demo: "https://shophop2.herokuapp.com/",
    },
  ];

  const projects = data.map((project) => {
    return (
      <Project
        id={project.id}
        image={project.image}
        title={project.title}
        github={project.github}
        demo={project.demo}
      />
    );
  });

  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ProjectIMG1} alt="project1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article> */}
        {projects}
      </div>
    </section>
  );
};

export default Portfolio;
