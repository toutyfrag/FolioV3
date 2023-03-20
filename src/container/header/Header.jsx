import React from 'react'; // Import the 'react' library to use React in this file

import './header.css'

// Define a new function component called 'Header'
const Header = () => {
  return (
    <div className='main__container'>
        <div className='hero'>
            <div className='hero__top'>
                <div className='hero__top-heading'>
                    <h1>Bonjour</h1>
                    <h1>I'm Stevens</h1>
                </div>
            </div>
            <div className='hero__bottom'>
                <div className='hero__bottom-intro'>
                <p>Junior Software developer with 18 months experience</p>
                </div>
                {/* <div className='hero__bottom-email'>
                    <p>Bougault.stevens@gmail.com</p>
                </div> */}
            </div>
        </div> 
    </div>
  );
};

export default Header; // Export the 'Header' component to be used in other files
