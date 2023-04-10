import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__socials">
      <a
        href="https://www.linkedin.com/in/sheng-chu-chou-092079175/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Andrew-TechMaster"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      {/* <a href="https://google.com" target="_blank" rel="noreferrer">
        <FiDribbble />
      </a> */}
    </div>
  );
};

export default Footer;
