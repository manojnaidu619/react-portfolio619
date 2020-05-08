import React from 'react'
import DomainCard from '../Cards/DomainCard'
import FrontFaceCard from '../Cards/FrontFaceCard'
import BackFaceCard from '../Cards/BackFaceCard'

const Intro = () => {
    const frontFace =
        <div>
            Hello world
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