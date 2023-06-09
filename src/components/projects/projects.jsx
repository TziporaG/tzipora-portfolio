import React from "react";
import "./projects.css";
import cpu from "../../assets/cpu.jpg";
import recipe from "../../assets/recipe.jpg";
import meme from "../../assets/meme.jpg";
const Projects = () => {
  const projects = [
    {
      id: 0,
      image: meme,
      title: "Meme Generator Program",
      github: "",
      demo: "",
    },
    {
      id: 1,
      image: recipe,
      title: "Recipe Website",
      github: "",
      demo: "",
    },
    {
      id: 2,
      image: cpu,
      title: "Distributed System Project",
      github: "",
      demo: "",
    },
  ];
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="container projects__container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="projects__item">
              <div className="projects__item--img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="projects__item--buttons">
                <button href={github} className="btn" target="_blank">
                  Github
                </button>
                <button href={demo} className="btn" target="_blank">
                  Other link?
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
