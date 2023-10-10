import React from "react";
import "./footer.css";
import { GradientButton } from "../../components";

const Footer = () => {
  function sendEmail() {
    const recipient = "bougault.stevens@gmail.com";
    const subject = "Portfolio";
    const body = "Hi, Stevens";
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="footer bg-[#e8e8e8]" id="contact">
      <div className="footer__div mx-auto max-w-7xl py-[4rem] md:px-[2rem] px-[1rem]">
        <h1>Now it's</h1>
        <h1>your turn to say hi.</h1>
        <div onClick={sendEmail}>
          <GradientButton content="Bougault.stevens@gmail.com" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
