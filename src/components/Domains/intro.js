import React from 'react'
import DomainCard from '../Cards/DomainCard'
import '../../styles/Domains/intro.css'

const Intro = () => {
    const frontFace =
        <div className="front-face-card">
            <h1>Hello World! 🌎</h1>
            <div className="more-abt-me">More about me <img src="https://img.icons8.com/all/500/long-arrow-right.png"/></div>
        </div>
    
    const backFace = 
        <div>
            <h1>About</h1>
            <p>👋 Hi! I am Manoj Naidu, just a simple dude who believes in learn and <strike>code</strike> explore! </p>
            <h2>Code Experience</h2>
            <p>3 years coding (every experiences, studies, personal projects, work...)</p>
            <p>I'm open to opportunities</p>
            <h2>Self taught?</h2>
            <p>Yep!</p>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace} />
    )
}

export default Intro