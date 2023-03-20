import React, { useState, useEffect } from 'react';
import { images } from '../../constants';

import './navbar.css';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // handle button click
  const handleToggleClick = () => {
    setShowLinks(!showLinks);
    setIsButtonClicked(true);
  };

  // handle animation end event for later use
  function handleAnimationEnd() {
    setIsButtonClicked(false);
  }

  return (
    <div className='navbar'>
      <div className={`navbar__background-blur ${hasScrolled ? 'navbar--scrolled' : ''}`} />

      <div className={showLinks ? 'navbar__container' : 'navbar__container-dropdown'}>
        {/* Logo section */}
        <div className='navbar__logo'>
          {/* <img className='navbar__logo-picture' src={images.profile} alt='profile picture' /> */}
          <p className='navbar__logo-text' style={showLinks ? { display: 'none' } : {}}>Stevens Bougault</p>
        </div>

        {/* Links section */}
        <div className='navbar__links'>
          {['Work', 'About', 'Contact', 'Resume'].map((item) => (
            <a key={item} className='navbar__links-item' href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
          <button
            className={`navbar__toggle ${isButtonClicked ? 'navbar__toggle--clicked' : ''}`}
            onClick={handleToggleClick}
            onAnimationEnd={handleAnimationEnd}
          >
            {/* Text that changes with state */}
            {showLinks ? (
              <span className='navbar__toggle-back-text'>Back</span>
            ) : (
              <span className='navbar__toggle-menu-text'>Menu</span>
            )}
          </button>

          {/* Mobile links section */}
          {showLinks && (
            <div className='navbar__links-mobile'>
              {['Work', 'About', 'Contact', 'Resume'].map((item) => (
                <a key={item} className='navbar__links-mobile-item' href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
