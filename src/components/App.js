import React, {useEffect} from 'react'
import HeaderCard from './Cards/HeaderCard'
import Intro from './Domains/intro'
import Skills from './Domains/skills'
import Projects from './Domains/projects'
import Experiences from './Domains/experiences'
import Education from './Domains/education'
import Hobbies from './Domains/hobbies'
import FooterCard from '../components/Cards/FooterCard'

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}

const App = () => {

    useEffect(() => {
        const effects = [ "center","top", "left", "bottom", "right"]
        const size = effects.length
        setInterval(() => {
            let styleCount = getRandomInt(size+1)
            document.querySelector('.header-card')
                .style.backgroundPosition = effects[styleCount] 
        },3000)
    },[])

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <HeaderCard/>
            </div>
            <div className="row container cards-container justify-content-center">
                <Intro />
                <Skills />
                <Projects />
                <Experiences />
                <Education />
                <Hobbies />
            </div>
            <div className="row justify-content-center">
                <FooterCard/>
            </div>
        </div>
    )
}

export default App