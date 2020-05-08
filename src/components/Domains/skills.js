import React from 'react'
import DomainCard from '../Cards/DomainCard'
import '../../styles/Domains/skills.css'

const Skills = () => {
    const frontFace =
        <div className="front-face-card">
            <div className="front-face-card-content">
                <img className="rails-img" src="https://pngimage.net/wp-content/uploads/2018/06/ruby-on-rails-png-2.png" />
                <h1>I mainly do Ruby/Rails</h1>
            </div>
            <div className="more">More skills <img src="https://img.icons8.com/all/500/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div className="back-face-card">
            <h1>Skills</h1>
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
            backFace={backFace} />
    )
}

export default Skills