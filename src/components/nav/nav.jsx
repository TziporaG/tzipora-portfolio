import { React, useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./nav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import Tooltip from "@mui/material/Tooltip";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const observer = useRef(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setActiveNav(`#${visibleSection.id}`);
      }
    });
    //Get sections
    const sections = document.querySelectorAll("header, section");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <nav>
      <h1>Tzipora Gutmann</h1>
      <a
        href="#home"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        <Tooltip title="home" placement="bottom">
          <HomeOutlinedIcon />
        </Tooltip>
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <Tooltip title="skills" placement="bottom">
          <BuildOutlinedIcon />
        </Tooltip>
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <Tooltip title="projects" placement="bottom">
          <WorkOutlineOutlinedIcon />
        </Tooltip>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <Tooltip title="contact me" placement="bottom">
          <SmsOutlinedIcon />
        </Tooltip>
      </a>

      <div className="dropdown">
        <RxHamburgerMenu />
        <div className="dropdown-content">
          <a
            href="#home"
            onClick={() => setActiveNav("#home")}
            className={activeNav === "#home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#skills"
            onClick={() => setActiveNav("#skills")}
            className={activeNav === "#skills" ? "active" : ""}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
