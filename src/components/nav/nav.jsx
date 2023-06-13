import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./nav.css";
import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import Tooltip from "@mui/material/Tooltip";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

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

      <div class="dropdown">
        <RxHamburgerMenu />
        <div class="dropdown-content">
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
