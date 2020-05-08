import React from 'react'
import DomainCard from '../Cards/DomainCard'
import '../../styles/Domains/intro.css'

const Intro = () => {
    const frontFace =
        <div>
            <h1>Hello world</h1>
        </div>
    
    const backFace = 
        <div>
            Cool Buddy!
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            backFace={backFace} />
    )
}

export default Intro