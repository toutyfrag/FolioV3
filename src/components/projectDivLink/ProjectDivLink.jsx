import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";

import "./projectDivLink.css";

function ProjectDivLink({ image, title, techs, href, year }) {
  const [isProjectVisible, setisProjectVisible] = useState(false);
  const pictureRef = useRef(null);

  // -----------------------------------------------------------------------
  // Div observer logic for animation and lazy loading
  useEffect(() => {
    const projectObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setisProjectVisible(true);
          projectObserver.unobserve(entry.target); // Stop observing once the div is visible
        }
      },
      {
        threshold: 0.2, // Adjust the threshold for about__container-picture (e.g., 0.5 for 50% visibility)
      }
    );

    if (pictureRef.current) {
      projectObserver.observe(pictureRef.current);
    }

    return () => {
      projectObserver.disconnect(); // Cleanup the observer on component unmount
    };
  }, []);

  const projectSpringProps = useSpring({
    opacity: isProjectVisible ? 1 : 0,
    transform: isProjectVisible ? "translateY(0)" : "translateY(50px)",
    config: config.gentle, // Use a slower and smoother easing function
  });
  // -----------------------------------------------------------------------

  return (
    <animated.div
      ref={pictureRef} // Apply the observer animation and lazy loading
      style={{
        ...projectSpringProps, // Apply the springProps to animate the div
      }}
    >
      <div>
        <div
          className="projectDivLink"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="projectDivLink__bottom__div">
            <div>
              <h5 className="projectDivLink__bottom__div__techs">{techs}</h5>
              <h1 className="projectDivLink__bottom__div__title">{title}</h1>
            </div>
            <div>
              <h2 className="projectDivLink__bottom__div__year">{year}</h2>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default ProjectDivLink;
