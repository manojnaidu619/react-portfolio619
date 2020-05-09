import React, {useEffect} from 'react'
import HeaderCard from './Cards/HeaderCard'
import Intro from './Domains/intro'
import Skills from './Domains/skills'
import Projects from './Domains/projects'
import Experiences from './Domains/experiences'
import Education from './Domains/education'
import Hobbies from './Domains/hobbies'

const App = () => {

    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
    }

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
                <Intro />
                <Skills />
                <Projects />
                <Experiences />
                <Education />
                <Hobbies/>
            </div>
        </div>
    )
}

export default App