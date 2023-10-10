import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Navbar } from "../../components";
import "./navbarContainer.css";

const NavbarContainer = () => {
  // Hooks
  const [isDark, setIsDark] = useState(false);
  const [removeComponents, setRemoveComponents] = useState(false);

  // Callback function to receive the value from the child components
  const updateIsDark = (newState) => {
    setIsDark(newState);
  };

  // Define spring animation for removal of the navbar container when scrolling
  const removalSpring = useSpring({
    opacity: removeComponents ? 0 : 1,
    transform: removeComponents ? "translateY(-50px)" : "translateY(0)",
    config: { duration: 300 }, // Adjust duration
  });

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY) {
          // Scrolling down
          setRemoveComponents(true);
        } else {
          // Scrolling up
          setRemoveComponents(false);
        }

        // Update the previous scroll position
        prevScrollY = currentScrollY;
      } else {
        setRemoveComponents(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <animated.div
      style={removalSpring}
      className={
        isDark ? "navbarContainer__fullScreen-dark" : "navbarContainer"
      }
    >
      <div className="header max-w-7xl mx-auto md:px-[2rem] px-[1rem]">
        <Navbar updateIsDark={updateIsDark} />
      </div>
    </animated.div>
  );
};

export default NavbarContainer;
