import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export const Experience = (props) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{props.techName}</h4>
        <small className="text-light">{props.level}</small>
      </div>
    </article>
  );
};
