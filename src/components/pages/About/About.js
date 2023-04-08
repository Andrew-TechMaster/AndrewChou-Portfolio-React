import React from "react";
import { Experience } from "./Experience";
import "./about.css";

export default function About() {
  const frontEndSkill = [
    { techName: "HTML", level: "Experienced" },
    { techName: "CSS", level: "Intermediate" },
    { techName: "JavaScript", level: "Experienced" },
    { techName: "Bootstrap", level: "Experienced" },
    { techName: "React", level: "Experienced" },
    { techName: "Angular", level: "Experienced" },
  ];

  const backEndSkill = [
    { techName: "Node JS", level: "Experienced" },
    { techName: "MongoDB", level: "Basic" },
    { techName: "MySQL", level: "Experienced" },
    { techName: "ASP .NET", level: "Experienced" },
  ];

  const frontEndContent = frontEndSkill.map((d) => {
    return <Experience techName={d.techName} level={d.level} />;
  });

  const backEndContent = backEndSkill.map((d) => {
    return <Experience techName={d.techName} level={d.level} />;
  });

  return (
    <>
      <section id="experience">
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">{frontEndContent}</div>
          </div>
          {/* END OF FRONTEND */}
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">{backEndContent}</div>
          </div>
        </div>
      </section>
    </>
  );
}
