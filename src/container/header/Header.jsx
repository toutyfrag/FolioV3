import React from "react";
import Typed from "react-typed";
import "./header.css";
import GradientButton from "../../components/gradientButton/GradientButton";
import { buttonsHeroLink } from "../../constants";
import { Trail } from "../../animations";

function Header() {
  // -----------------------------------------------------------------------
  // Typed effect text
  const typedIntroText = (
    <Typed
      strings={["Hello", "Bonjour"]}
      typeSpeed={140}
      backSpeed={80}
      startDelay={700}
      showCursor={false}
    >
      <span>Hello</span>
    </Typed>
  );

  // -----------------------------------------------------------------------
  // To open a new tab instead of using actual tab
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };
  // -----------------------------------------------------------------------

  return (
    <div
      className="header max-w-7xl mx-auto mt-[5.5rem] py-[4rem] md:px-[2rem] px-[1rem]"
      id="home"
    >
      <div className="header__container">
        {/* Top section */}
        <div className="header__section-top">
          <div className="trail__container">
            {/* Reaveal animation Animation */}
            <Trail open={true}>
              {/* Typed animation */}
              {typedIntroText}
              <span>I'm Stevens</span>
            </Trail>
          </div>
        </div>
      </div>

      <div className="header__section-bottom">
        <div className="header__description">
          <p>
            Junior Front End Developer <br />
            with 24 months experience
          </p>
        </div>

        <div className="header__buttons">
          {/* Render buttons using a dictionary on calls openLinkInNewTab to open a new tab when clicked */}
          {buttonsHeroLink.map((buttonInfo, index) => {
            const [name, link] = Object.entries(buttonInfo)[0];
            return (
              <div key={index} className="header__buttonDivs">
                <div onClick={() => openLinkInNewTab(link)}>
                  <GradientButton content={name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
