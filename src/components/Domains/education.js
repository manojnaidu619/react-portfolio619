import React from 'react'
import DomainCard from '../Cards/DomainCard'

const Education = () => {
    const frontFace =
        <div className="front-face-card animate__animated animate__fadeIn animate__delay-0.5s">
            <div className="front-face-card-content">
                <h1>I am pursuing my Bachelors in <strong>Computer Science Engineering</strong></h1>
            </div>
            <div className="more">See here<img src="https://img.icons8.com/all/500/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div className="back-face-card animate__animated animate__fadeIn animate__delay-0.5s">
            <h1>Studies</h1>
            <div className="back-face-card-content">
                <h2>Dayananda Sagar University</h2>
                <small>Bangalore ● 2017-2021</small>
                <p>Bachelors in Computer Science Engineering</p>

                <h2>Narayana PU College</h2>
                <p>Bangalore ● 2015-2017</p>

                <h2>Vidhatha Global High School</h2>
                <p>Bangalore ● 2004-2015</p>
            </div>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace} />
    )
}

export default Education