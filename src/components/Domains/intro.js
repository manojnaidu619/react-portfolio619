import React from 'react'
import DomainCard from '../Cards/DomainCard'

const Intro = () => {
    const frontFace =
        <div className="front-face-card">
            <div className="front-face-card-content">
                <h1>Hello World! 🌎</h1>
            </div>
            <div className="more">More about me <img src="https://img.icons8.com/all/500/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div className="back-face-card">
            <h1>About</h1>
            <div className="back-face-card-content">
                <p>👋 Hi! I am Manoj Naidu, just a simple dude who believes in learn and <strike>code</strike> explore! </p>
                <h2>Code Experience</h2>
                <p>3 years coding (every experiences, studies, personal projects, work...)</p>
                <p>I'm open to opportunities</p>
                <h2>Self taught?</h2>
                <p>Yep!</p>
            </div>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace} />
    )
}

export default Intro