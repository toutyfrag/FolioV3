import React, { useState } from "react";
import "./projectPage.css"; // Import the CSS file
import GradientButton from "../../components/gradientButton/GradientButton";

const ProjectPage = ({
  ProjectName,
  aboutText,
  image,
  techs,
  projectUrl,
  codeUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const overlayStyle = {
    backgroundImage: `url(${image})`,
    filter: isHovered ? "brightness(0.15)" : "brightness(1)",
    transition: "filter 0.5s ease", // Add a transition for the filter property
  };

  const overlayTextStyles = {
    opacity: isHovered ? 1 : 0, // Control the opacity based on hover
    transition: "opacity 0.5s ease", // Add a transition for the opacity property
  };
  const handleClick = () => {
    if (isHovered) {
      // Code to run when the button is clicked and isHovered is true
      setIsHovered(false);
    } else {
      // Code to run when the button is clicked and isHovered is false
      setIsHovered(true);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="projectPage">
      <div className="projectPage__container mx-auto max-w-7xl py-[4rem] md:px-[2rem] px-[1rem]">
        <div>
          <p className="projectPage__heading text-[5rem] sm:text-[8rem]">
            {ProjectName}
          </p>
        </div>
        <div
          className="projectPage__image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <div className="overlay" style={overlayStyle}></div>
          <div className="overlay1" style={overlayTextStyles}>
            <div className="overlay__text">
              <div className="overlay__text-about">
                <p className="overlay__heading">About</p>
                <p className="overlay__print">{aboutText}</p>
              </div>
            </div>

            <div className="overlay__divider"></div>

            <div className="overlay__Links">
              <div className="overlay__Links-heading">
                <p className="overlay__heading">Techs Used</p>
                <p className="overlay__print">{techs.join(" ")}</p>
              </div>
              <div className="overlay__buttons">
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                  <GradientButton content="Link" />
                </a>
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <GradientButton content="Code" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
