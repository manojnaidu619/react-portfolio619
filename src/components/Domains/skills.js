import React from 'react'
import DomainCard from '../Cards/DomainCard'
import "../../styles/IndividualCardStyles.scss"

const Skills = () => {
    const frontFace =
        <div className="front-face-card skills-front-face animate__animated animate__fadeIn animate__delay-0.5s">
            <div className="front-face-card-content">
                <img style={{"width": "375px"}} src="https://pngimage.net/wp-content/uploads/2018/06/ruby-on-rails-png-2.png" />
                <h1>I mainly do Ruby/Rails</h1>
            </div>
            <div className="more">More skills <img src="https://img.icons8.com/all/500/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div className="back-face-card skills-back-face animate__animated animate__fadeIn animate__delay-0.5s">
            <h1 className="animate__animated animate__fadeInUp">Skills</h1>
            <div className="back-face-card-content">
                <h2>Languages</h2>
                <p>Ruby, Python, Javascript, C, C++, Brainf**k</p>
                <h2>Web stuff</h2>
                <p>Rails, ReactJS, NodeJS, Git, REST API, Jquery, MySQL, Postgresql </p>
                <h2>Others</h2>
                <p>Heroku, AWS</p>
            </div>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace}
            cardClass="skills-card" />
    )
}

export default Skills