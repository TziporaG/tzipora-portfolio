import React from "react";
import "./skills.css";
// import {
//   SiLogoTypescript,
//   BiLogoJavascript,
//   BiLogoHtml5,
//   BiLogoCss3,
//   BsFillDatabaseFill,
//   BiLogoAngular,
//   BsFillFileCodeFill,
//   BiLogoJava,
//   BiLogoReact,
//   BiLogoPostgresql,
//   BiLogoDocker,
//   BiLogoNodejs,
//   BiLogoGit,
// } from "react-icons/si";

import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";
const Skills = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className=".container skills__container">
        <div className=".container skills__languages">
          <h3>Languages</h3>
          <div className="skills__content">
            <article className="skills__details">
              {/* <SiLogoTypescript /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>TypeScript</h4>
            </article>
            <article className="skills__details">
              {/* <BiLogoJavascript /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills__details">
              {/* <BiLogoHtml5 /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills__details">
              {/* <BiLogoCss3 /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills__details">
              {/* <BsFillDatabaseFill /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>SQL</h4>
            </article>
            <article className="skills__details">
              {/* <BiLogoJava /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>Java</h4>
            </article>
            <article className="skills__details">
              {/* <BsFillFileCodeFill /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>C#</h4>
            </article>
          </div>
        </div>
        <div className=".container skills__tools">
          <h3>Tools</h3>
          <div className="skills__content">
            <article className="skills__details">
              {/* <BiLogoAngular /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>Angular</h4>
            </article>
            <article className="skills__details">
              {/* <BiLogoReact /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>React</h4>
            </article>
            <article className="skills__details">
              {/* <BiLogoPostgresql /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="skills__details">
              {/* <BiLogoDocker /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>Docker</h4>
            </article>
            <article className="skills__details">
              {/* <AiFillApi /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>RESTful API</h4>
            </article>
            <article className="skills__details">
              {/* <BiLogoNodejs /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>NodeJS</h4>
            </article>
            <article className="skills__details">
              {/* <BiLogoGit /> */}
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>Git</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
