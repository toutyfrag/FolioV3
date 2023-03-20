import React from 'react'
import { Project } from '../../components';


const projectpage = ({ProjectName, aboutText, challengeText, image}) => {

    const projectPage = {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: 'center',
        alignItems: `center`,
        marginBottom: `5rem`

    }

    const projectPage__div = {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: 'center',
        width: `1280px`,
        paddingLeft: `2rem`,
        paddingRight: `2rem`
    }

    const projectPage__div_top = {
        marginTop: `5rem`,
        display: `flex`,
        justifyContent: 'space-between',
        alignItems: `center`,
        paddingBottom: `3rem`
    }

    const projectPage__div_top_h1 = {
        fontSize: `11rem`,
        margin:`0`
    }

    const projectPage__div_top_button = {
        paddingLeft: `2rem`,
        paddingRight: `2rem`,
        height: `3rem`,
        border: `2px solid black`,
        bordeRadius: `0.9rem`,
        backgroundColor: `#fff`,
        fontSize: `20px`
    }

    const projectPage__div_bottom = {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: 'center',
        alignItems: `center`
    }

    const projectPage__div_bottom_heading = {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: 'center',
        alignItems: `center`,
        fontSize: `3rem`
    }

    const projectPage__div_bottom_text = {
        fontSize: `1.5rem`,
        fontWeight: `300`,
        textAlign: `center`,
        maxWidth: '1000px'
    }
    
  return (
    <div style={projectPage}>
        <div style={projectPage__div}>
            <div style={projectPage__div_top}>
                <h1 style={projectPage__div_top_h1}>{ProjectName}</h1>
                <button style={projectPage__div_top_button}>Code</button>
            </div>
            <div>
                <Project
                image={image}
                title=""
                techs=""
                year=""
                />
            </div>
            <div style={projectPage__div_bottom}>
                <div>
                    <h2 style={projectPage__div_bottom_heading}>About</h2>
                    <p style={projectPage__div_bottom_text}>{aboutText}</p>
                </div>
                <div>
                    <h2 style={projectPage__div_bottom_heading}>Challenges</h2>
                    <p style={projectPage__div_bottom_text}>{challengeText}</p>
                </div>
                <button style={projectPage__div_top_button}>{ProjectName}</button>
            </div>
        </div>
    </div>
  )
}

export default projectpage