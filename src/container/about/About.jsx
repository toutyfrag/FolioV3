import React from 'react'; // Import the 'react' library to use React in this file
import { images } from '../../constants';


import './about.css'

// Define a new function component called 'Header'
const About = () => {
    return (
        <div className='about__container'>
                <div className='about__container-div'>
                    <div className='about__container-headings'>
                        <div className='about__container-title'>
                            <h2>Self taught programmer</h2>
                            <h2>based in leeds</h2>
                        </div>
                        <div className='about__container-text'>
                            <p>I have been working as a sotware programmer for 18 months now looking for my next challenge</p>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${images.aboutMe})`}}  className='about__container-picture'>
                        <div className='about__container-pictureText'>
                            <div>
                                <h5>🤙 Hi</h5>
                                <p>I'm Stevens, i like to watch PSG game, video games, thai boxing and watch videos about astronomy</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};
export default About;
