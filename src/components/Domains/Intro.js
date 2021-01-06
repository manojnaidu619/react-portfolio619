import React from 'react'
import DomainCard from '../Cards/DomainCard'
import "../../styles/IndividualCardStyles.scss"

const Intro = () => {
    const frontFace =
        <div className="front-face-card intro-front-face animate__animated animate__fadeIn animate__delay-0.5s">
            <div className="front-face-card-content">         
                <h1>Hello World! <span role="img" aria-label="earth-emoji">🌎</span>
                <br />
                I'm <u><strong>Manoj Kumar</strong></u></h1>
                <p style={{marginTop: '-15px'}}>from Bangalore, India</p>
            </div>
            <div className="more">More About Me<img src="https://img.icons8.com/ios/96/000000/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div className="back-face-card intro-back-face animate__animated animate__fadeIn animate__delay-0.5s">
            <h1 className="animate__animated animate__fadeInUp">About</h1>
            <div className="back-face-card-content">
                <p>I'm just a simple dude who likes to program things and believes in <strong>learn & explore</strong>. But, definitely not that guy who turns coffee to code 😐. </p>
                <h2>Code Experience</h2>
                <p>3+ years coding (every experiences, studies, personal projects, work...)</p>
                <p>I'm open to opportunities</p>
                <h2>Self taught?</h2>
                <p>Yep!</p>
            </div>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace}
            cardClass="intro-card" />
    )
}

export default Intro
