import React from 'react'
import DomainCard from '../Cards/DomainCard'

const Experiences = () => {
    const frontFace =
        <div className="front-face-card animate__animated animate__fadeIn animate__delay-0.5s">
            <div className="front-face-card-content">
                <h1>Experience and more...</h1>
            </div>
            <div className="more">See here<img src="https://img.icons8.com/all/500/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div className="back-face-card animate__animated animate__fadeIn animate__delay-0.5s">
            <h1>Experience</h1>
            <div className="back-face-card-content">
                <h2>Full Stack Developer Intern</h2>
                <p>
                    <a href="https://www.linkedin.com/company/cashtrack/" target="_blank">@CashTrack</a> · Singapore
                </p>
                <ul>
                    <li>Fabricated a completely fledged web application for a beginning time MedTech startup.</li>
                    <li>Integrated payment gateway, worked with Contentful CMS for data storage and management.</li>
                    <li>Worked with AWS EC2 and S3 for application hosting and media uploads respectively.</li>
                </ul>
            </div>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace} />
    )
}

export default Experiences