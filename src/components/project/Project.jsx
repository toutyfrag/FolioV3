import React from 'react'; // Import the 'react' library to use React in this file

import './project.css'

function Project({ image, title, techs, href, year}) {


    const project = {
        width: `100%`,
        height: `40rem`,
        backgroundsize: `cover`,
        borderradius: `0.9rem`,
        objectfit: `cover`,
        backgroundposition: `center`,
        display: `flex`,
        flexdirection: `column`,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40rem',
        position: 'relative',
        borderRadius: `0.9rem`,
        cursor: `pointer`,
        marginBottom: `5rem`       
    };
  
    const project__bottom__div = {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      padding: '20px',
      borderRadius: `0 0 0.9rem 0.9rem`

    };
  
    const project__bottom__div__title = {
      fontSize: '5rem',
      fontWeight: 'bold',
      margin: '0'
    };
  
    const project__bottom__div__techs = {
      fontSize: '1.5rem',
      margin: '0'
    };
    
    const project__bottom__div__year = {
        fontSize: '4rem',
        margin: '0'
      };
  
    return (
        <a href={href}>
            <div style={project}>
                <div style={project__bottom__div}>
                    <div>
                        <h5 style={project__bottom__div__techs}>{techs}</h5>
                        <h1 style={project__bottom__div__title}>{title}</h1>
                    </div>
                    <div>
                        <h2 style={project__bottom__div__year}>{year}</h2>
                    </div>
                </div>
            </div>
        </a>

    );
  }

  export default Project