import React from "react";
import { ProjectDivLink } from "../../components";
import { projectData } from "../../constants";
import "./projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="project" id="project">
      <div className="project__div mx-auto max-w-7xl py-[4rem] md:px-[2rem] px-[1rem]">
        <div className="project__title">
          <h2>Projects</h2>
          <p>
            I'm excited to share what I have been working on with you. Take a
            look around and see what I've created. If you have any questions or
            feedback, don't hesitate to reach out. Enjoy!
          </p>
        </div>
        {Object.keys(projectData).map((projectKey) => {
          const project = projectData[projectKey];
          if (project.isActive) {
            return (
              <Link to={`/${project.path}`} key={projectKey}>
                <div className="md:py-[2rem] py-[1rem]">
                  {" "}
                  <ProjectDivLink
                    key={projectKey}
                    image={project.image}
                    title={project.title}
                    techs={project.techs.join(" ")}
                    year={project.year}
                  />
                </div>
              </Link>
            );
          } else {
            return null; // If the project is not active, return null or an empty fragment
          }
        })}
      </div>
    </div>
  );
};

export default Projects;
