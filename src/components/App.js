import React from 'react'
import HeaderCard from './Cards/HeaderCard'
import Intro from './Domains/intro'
import Skills from './Domains/skills'
import Projects from './Domains/projects'
import Experiences from './Domains/experiences'
import Education from './Domains/education'
import Hobbies from './Domains/hobbies'

const App = () => {
    return (
        <div className="container">
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