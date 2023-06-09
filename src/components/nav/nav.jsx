import React from "react";
import { BiBook } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
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
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <Tooltip title="skills" placement="bottom">
          <BuildOutlinedIcon />
        </Tooltip>
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
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
    </nav>
  );
};

export default Nav;
