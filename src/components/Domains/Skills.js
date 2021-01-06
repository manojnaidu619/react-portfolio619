import React from 'react'
import DomainCard from '../Cards/DomainCard'
import "../../styles/IndividualCardStyles.scss"

const Skills = () => {
    const frontFace =
        <div className="front-face-card skills-front-face animate__animated animate__fadeIn animate__delay-0.5s">
            <div className="front-face-card-content">
                <img alt="rails-official-logo" style={{"width": "375px"}} src="https://pngimage.net/wp-content/uploads/2018/06/ruby-on-rails-png-2.png" />
                <h1>I mostly do Ruby/Rails</h1>
            </div>
            <div className="more">More skills<img alt="right-arrow" src="https://img.icons8.com/ios/96/000000/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div className="back-face-card skills-back-face animate__animated animate__fadeIn animate__delay-0.5s">
            <h1 className="animate__animated animate__fadeInUp">Skills</h1>
            <div className="back-face-card-content">
                <h2>Languages</h2>
                <small>prioritized from high to low</small>
                <ul>
                    <li>Python</li>
                    <li>Ruby</li>
                    <li>Javascript</li>
                    <li>C++</li>
                    <li>C</li>
                    <li>Brainf**k</li>
                </ul>
                <h2>Web stuff</h2>
                <small>prioritized from high to low</small>
                <ul>
                    <li>Ruby on Rails</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>VueJS</li>
                </ul>
                <h2>Databases</h2>
                <small>prioritized from high to low</small>
                <ul>
                    <li>MySQL</li>
                    <li>Postgresql</li>
                    <li>Redis</li>
                    <li>MongoDB</li>
                </ul>
                <h2>Others</h2>
                <p>Git & Github, HTML, CSS, Jquery, REST API, Web Automation, UNIX, Heroku, AWS.</p>
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