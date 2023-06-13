import React from "react";
import resume from "../../assets/resume.pdf";
import { BsArrowUpRight } from "react-icons/bs";
import { HiDocument, HiMail } from "react-icons/hi";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const ButtonsRow = () => {
  return (
    <div>
      <div className="header__buttons_row">
        <a href={resume} target="_blank">
          <button className="btn">
            Open Resume &nbsp;
            <BsArrowUpRight />
          </button>
        </a>
        <a href="#contact">
          <button className="btn">Contact me</button>
        </a>
      </div>
      <div className="header__buttons_row">
        <a
          href="https://www.linkedin.com/in/tzipora-gutmann-9b3b511ba/"
          target="_blank"
        >
          <Tooltip title="LinkedIn" placement="bottom">
            <LinkedInIcon className="icon" fontSize="large" />
          </Tooltip>
        </a>
        <a href="https://github.com/TziporaG" target="_blank">
          <Tooltip title="Github" placement="bottom">
            <GitHubIcon className="icon" fontSize="large" />
          </Tooltip>
        </a>
      </div>
    </div>
  );
};

export default ButtonsRow;
