import React from "react";
import ME from "../../../asstes/me.jpg";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./home.css";

export default function Home() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Andrew Chou</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
}
