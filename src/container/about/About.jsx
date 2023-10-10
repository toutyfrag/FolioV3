import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import aboutImage from "../../assets/photos/stevensAbout.jpeg";
import "./about.css";

const About = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isPictureVisible, setIsPictureVisible] = useState(false);
  const textRef = useRef(null);
  const pictureRef = useRef(null);

  // -----------------------------------------------------------------------
  //Text observer logic and lazy loading
  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          textObserver.unobserve(entry.target); // Stop observing once the div is visible
        }
      },
      {
        threshold: 1, // Adjust the threshold for about__container-pictureText (e.g., 0.2 for 20% visibility)
      }
    );

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      textObserver.disconnect(); // Cleanup the observer on component unmount
    };
  }, []);

  const textSpringProps = useSpring({
    opacity: isTextVisible ? 1 : 0,
    transform: isTextVisible ? "translateY(0)" : "translateY(50px)",
    config: config.gentle, // Use a slower and smoother easing function
  });

  // -----------------------------------------------------------------------
  //Picture observer logic and lazy loading
  useEffect(() => {
    const pictureObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPictureVisible(true);
          pictureObserver.unobserve(entry.target); // Stop observing once the div is visible
        }
      },
      {
        threshold: 0.2, // Adjust the threshold for about__container-picture (e.g., 0.5 for 50% visibility)
      }
    );

    if (pictureRef.current) {
      pictureObserver.observe(pictureRef.current);
    }

    return () => {
      pictureObserver.disconnect(); // Cleanup the observer on component unmount
    };
  }, []);

  const pictureSpringProps = useSpring({
    opacity: isPictureVisible ? 1 : 0,
    transform: isPictureVisible ? "translateY(0)" : "translateY(50px)",
    config: config.gentle, // Use a slower and smoother easing function
  });

  // -----------------------------------------------------------------------
  return (
    <div className="about__container bg-[#e8e8e8]" id="about">
      <div className="about__container-div mx-auto max-w-7xl py-[4rem] md:px-[2rem] px-[1rem]">
        <div className="about__container-headings">
          <div className="about__container-title">
            <h2>Front End Developer</h2>
            <h2>based in Leeds</h2>
          </div>
          <div className="about__container-text">
            <p>
              I've been employed as a software developer for 24 months and am
              currently making a transition into front-end technologies
            </p>
          </div>
        </div>
        <animated.div
          ref={pictureRef}
          className="about__container-picture"
          style={{
            ...pictureSpringProps, // Apply the springProps to animate the div
            backgroundImage: `url(${aboutImage})`, // Use background image URL here
          }}
        >
          <animated.div
            ref={textRef}
            className="about__container-pictureText"
            style={textSpringProps} // Apply the springProps to animate the text content div
          >
            <div>
              <h5>🤙 Hi</h5>
              <p>
                I'm Stevens, I like to watch PSG games, play video games,
                practice Thai boxing, and watch videos about astronomy
              </p>
            </div>
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
};

export default About;
