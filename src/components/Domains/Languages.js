import React from 'react'
import DomainCard from '../Cards/DomainCard'
import "../../styles/IndividualCardStyles.scss"

const Languages = () => {
    const frontFace =
        <div className="front-face-card intro-front-face animate__animated animate__fadeIn animate__delay-0.5s">
            <div className="front-face-card-content">         
                <h1>Languages I speak</h1>
            </div>
            <div className="more">See here<img alt="right-arrow" src="https://img.icons8.com/ios/96/000000/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div className="back-face-card intro-back-face animate__animated animate__fadeIn animate__delay-0.5s">
            <h1 className="animate__animated animate__fadeInUp">I Speak</h1>
            <div className="back-face-card-content">
                <ul>
                    <li>Hello - English</li>
                    <li>ನಮಸ್ಕಾರ - Kannada<small> (native)</small></li>
                    <li>नमस्ते - Hindi</li>
                    <li>வணக்கம் - Tamil</li>
                    <li>వందనం - Telugu</li>
                </ul>
            </div>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace}
            cardClass="languages-card" />
    )
}

export default Languages
