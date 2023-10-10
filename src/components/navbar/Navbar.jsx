import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { HashLink } from "react-router-hash-link";
import { navigationLinks, homeLink } from "../../constants";
import "./navbar.css";

const Navbar = ({ updateIsDark }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 }); // check if viewport is wider that 768 px
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false); // check if the navbar is expanded

  //------------------------------------------------------------------------------------------
  // Render links from looping navigationLinks
  const renderNavbarLinks = () => {
    return navigationLinks.map((link, index) => (
      <HashLink
        className={`navLinkStyle ${
          isNavbarExpanded ? "links__extended" : "links"
        }`}
        smooth // Add the smooth prop for smooth scrolling
        to={link.href} // Use "to" instead of "href"
        key={index}
      >
        {link.linkValue}
      </HashLink>
    ));
  };

  // Render Menu button value depending on the state of isNavbarExpanded
  const renderMenuButton = () => {
    const dropDownMenuButton = isNavbarExpanded ? "Back" : "Menu";

    return (
      <button className="navLinkStyle" onClick={toggleNavbar}>
        {dropDownMenuButton}
      </button>
    );
  };

  //------------------------------------------------------------------------------------------
  // Behaviour logic when viewport is above 640px in width
  useEffect(() => {
    if (!isSmallScreen) {
      setIsNavbarExpanded(false);
      updateIsDark(false);
    }
  }, [isSmallScreen, updateIsDark]);

  //------------------------------------------------------------------------------------------
  // Function to toggle the navbar expansion state this is used for my links when click it collaps the navbar
  const toggleNavbar = () => {
    setIsNavbarExpanded((prevExpanded) => !prevExpanded); // Toggle the navbar expanded state
    updateIsDark((prevDark) => !prevDark);
  };

  // -----------------------------------------------------------------------
  // Effects unable scrolling when the navbar is expanded
  useEffect(() => {
    if (isNavbarExpanded) {
      document.body.style.overflow = "hidden"; // Disable scrolling when the navbar is expanded
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when the navbar is collapsed
    }

    // Cleanup function to enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavbarExpanded]);

  // -----------------------------------------------------------------------

  return (
    <nav className="navbar__container">
      <div className="navbar">
        <div>
          <a className="navLinkStyle" href={homeLink.Home.href}>
            {homeLink.Home.linkValue}
          </a>
        </div>
        {isSmallScreen ? (
          <div>{renderMenuButton()}</div>
        ) : (
          <div>{renderNavbarLinks()} </div>
        )}
      </div>
      {isNavbarExpanded && (
        <div className="navbar__extended" onClick={toggleNavbar}>
          {renderNavbarLinks()}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
