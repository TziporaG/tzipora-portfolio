import React from "react";
import "./skills.css";

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
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>TypeScript</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>SQL</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>Java</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>C#</h4>
            </article>
          </div>
        </div>
        <div className=".container skills__tools">
          <h3>Tools</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>Angular</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>React</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>PostgreSQL</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>Docker</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>RESTful API</h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details--icon" />
              <h4>NodeJS</h4>
            </article>
            <article className="skills__details">
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
