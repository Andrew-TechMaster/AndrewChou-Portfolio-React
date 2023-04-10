import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../../asstes/me.jpg";
import "./about.css";

export default function Home() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 + Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>4 + Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20 + Completed</small>
            </article>
          </div>
          <p>
            Hello, my name is Andrew (Sheng-Chu), Chou and I am a full stack
            developer with 3 years of professional experience. I have a passion
            for developing elegant and efficient web solutions using modern
            technologies and tools. With a strong background in both front-end
            and back-end development, I am confident in my ability to bring your
            ideas to life and deliver a great user experience. Please take a
            look at my portfolio to see some of my recent work and feel free to
            get in touch if you have any questions or would like to discuss a
            project.
          </p>
          <a href="mailto:andrewchou1996@gmail.com" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
