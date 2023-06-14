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
      github: "https://github.com/shaindel-n/MemeGenerator",
      discription: [
        "Designed a program in Java that allows a user to upload an image and add a caption, customizing the text position and styling.",
        "Utilized unique Java packages to manage necessary input/output structure.",
        "Employed the Agile approach, collaborating within a group of three and implementing peer suggestions along the way.",
      ],
    },
    {
      id: 1,
      image: recipe,
      title: "Recipe Website",
      github: "https://github.com/TziporaG/React-Final-Project",
      demo: "https://tziporag.github.io/React-Final-Project/",
      discription: [
        "Developed a functional website utilizing the React framework and JavaScript. The process included sketching a wireframe, testing API calls using Postman, fetching data from a REST API, and using CSS to enhance the styling.",
        "Utilized useState, useReducer, useRef, and useContext hooks for state management.",
        "Allows the user to favorite recipes, share recipes via email, generate a weekly menu, and search, filter, read and browse various recipes.",
      ],
    },
    {
      id: 2,
      image: cpu,
      title: "Distributed System Project",
      github: "https://github.com/shaindel-n/OSTermProject",
      discription: [
        "Developed a simulated distributed system in Java, utilizing client/server socket connections. This system allowed client programs to submit 'jobs' to " +
          "a central controller, which efficiently managed and distributed these jobs to the most suitable agent for completion.",
        "Leveraged the power of threads to create a multi-directional communication environment. This allowed concurrent communication " +
          "to take place simultaneously, enabling efficient coordination between the clients, the controller, and the agents.",
      ],
    },
  ];
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="container projects__container">
        {projects.map(({ id, image, title, github, demo, discription }) => {
          return (
            <article key={id} className="projects__item">
              <div className="projects__item--img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="projects__item--buttons">
                <a href={github} target="_blank">
                  <button className="btn">Github</button>
                </a>
                {demo && (
                  <a href={demo} target="_blank">
                    <button className="btn">Live demo</button>
                  </a>
                )}
              </div>
              <ul>
                {discription?.map(function (item) {
                  return <li>{item}</li>;
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
