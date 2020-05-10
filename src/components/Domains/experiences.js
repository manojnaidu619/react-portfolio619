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
            <h1 className="animate__animated animate__fadeInUp">Experience & more</h1>
            <div className="back-face-card-content">
                <h2 style={{"fontSize":"22px"}}>Full Stack Developer Intern</h2>
                <p style={{ "marginTop": "8px" }}>
                    <a href="https://www.linkedin.com/company/cashtrack/" target="_blank">@CashTrack</a> · Singapore
                </p>
                <ul>
                    <li>Built and launched a fully fledged multi-tenant web application for an early stage MedTech startup.</li>
                    <li>Integrated payment gateway, worked with Contentful CMS for data storage and management.</li>
                    <li>Worked with AWS EC2 and S3 for application hosting and media uploads respectively.</li>
                    <li>and a lot of other new stuffs...which widened my practical knowledge.</li>
                </ul>
                <hr />
                <h2>Also ❤️ to...</h2>
                <ul>
                    <li>Attend hackathons (tookpart in 5+)</li>
                    <li>
                        Participate in online progamming contests(spare time activity). Have a look at my 
                        <a href="https://leetcode.com/manojnaidu619/" target="_blank"> leetcode profile</a>.
                    </li>
                    <li>Develop open-source apps/softwares.</li>
                </ul>
            </div>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace}
            cardClass="experiences-card" />
    )
}

export default Experiences