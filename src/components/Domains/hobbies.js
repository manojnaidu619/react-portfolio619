import React from 'react'
import DomainCard from '../Cards/DomainCard'

const Hobbies = () => {
    const frontFace =
        <div className="front-face-card animate__animated animate__fadeIn animate__delay-0.5s">
            <div className="front-face-card-content">
                <h1>Explore space at least once in my lifetime...🚀</h1>
            </div>
            <div className="more">more interests<img src="https://img.icons8.com/all/500/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div className="back-face-card animate__animated animate__fadeIn animate__delay-0.5s">
            <h1>Hobbies & Interests</h1>
            <div className="back-face-card-content">
                <ul>
                    <li>I ❤️ Gadgets.</li>
                    <li>Need to go to space atleast once in my lifetime!</li>
                    <li>
                        Keyboard typing ASMRs are so satisfying... Aren't they?.
                        <a href="https://youtu.be/Tn8IDh21AVY?t=655" target="_blank"> Here is my favourite one!</a>
                    </li>
                    <li>love to play Badminton 🏸</li>
                    <li>
                        Always fascinated to learn something new in science like 
                        <a href="https://en.wikipedia.org/wiki/Mind_uploading" target="_blank"> Mind Uploading</a>
                        . Which I stumbled upon recently.
                    </li>
                    <li>and a whole lot more...</li>
                </ul>
            </div>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace}
            cardClass="hobbies-card" />
    )
}

export default Hobbies