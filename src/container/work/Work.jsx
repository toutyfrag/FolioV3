import React from 'react';
import { images } from '../../constants';
import { Project } from '../../components';
import './work.css';
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className='work'>
      <div className='work__div'>
        <div className='work__title'>
          <h2>Project</h2>
          <p>I'm excited to share what I have been working on with you. Take a look around and see what I've created. If you have any questions or feedback, don't hesitate to reach out. Enjoy!</p>
        </div>

        <Link to="/simon" scroll={false}>
            <div className="project-wrapper">
                <Project
                className="project"
                image={images.simon}
                title="Simon"
                techs="HTML BOOTSTRAP JAVASCRIPT"
                year="2021"
                />
            </div>
        </Link>

        <Link to="/clock" scroll={false}>
            <div className="project-wrapper">
            <Project
                image={images.clock}
                title="Clock"
                techs="HTML BOOTSTRAP JAVASCRIPT"
                year="2021"
            />
            </div>
        </Link>

        <Link to="/folio1" scroll={false}>
        <div className="project-wrapper">
            <Project
            image={images.folio1}
            title="Folio 1"
            techs="HTML CSS BOOTSTRAP"
            year="2021"
            />
        </div>

        </Link>

      </div>
    </div>
  )
}

export default Work