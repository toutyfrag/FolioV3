import React from 'react'
import './footer.css'

const Footer = () => {

    function sendEmail () {
        const recipient = "bougault.stevens@gmail.com";
        const subject = "Portfolio";
        const body = "Hi, Stevens\n\n";
    
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }

  return (
    <div className='footer'>
        <div className='footer__div'>
            <h1>Now it's</h1>
            <h1>your turn to say hi.</h1>
            <button className='footer__div' onClick={sendEmail}>Bougault.stevens@gmail.com</button>
        </div>
    </div>
  );
};

export default Footer;