import React, {useEffect, useState} from 'react'
import HeaderCard from './Cards/HeaderCard'
import Intro from './Domains/intro'
import Skills from './Domains/skills'
import Projects from './Domains/projects'
import Experiences from './Domains/experiences'
import Education from './Domains/education'
import Hobbies from './Domains/hobbies'
import FooterCard from '../components/Cards/FooterCard'
import Spinner from './utils/Spinner'
import DynamicHeader from './utils/DynamicHeader'

const App = () => {

    const [windowstatus, changeWindowStatus] = useState(false)

    useEffect(() => {
        DynamicHeader()
        window.addEventListener('load', () => {changeWindowStatus(true)})
    },[])

    if (windowstatus) {
        return (
            <div className="animate__animated animate__fadeIn animate__delay-0.5s container-fluid">
                <div className="row justify-content-center">
                    <HeaderCard />
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
    else{
        return <Spinner/> 
    }
    
}

export default App