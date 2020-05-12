import React, {useEffect, useState, Suspense} from 'react'
import HeaderCard from './Cards/HeaderCard'
import Intro from './Domains/Intro'
import Skills from './Domains/Skills'
import Projects from './Domains/Projects'
import Experiences from './Domains/Experiences'
import Education from './Domains/Education'
import Hobbies from './Domains/Hobbies'
import Languages from './Domains/Languages'
import Contact from './Domains/Contact'
import FooterCard from '../components/Cards/FooterCard'
import Spinner from './utils/Spinner'
import DynamicHeader from './utils/DynamicHeader'

const App = () => {

    const [windowstatus, changeWindowStatus] = useState(false)

    useEffect(() => {
        DynamicHeader()
        window.addEventListener('load', () => {changeWindowStatus(true)})
    })

    if (windowstatus) {
        return (
            <div className="animate__animated animate__fadeIn animate__delay-0.8s container-fluid">
                <div className="row justify-content-center">
                    <Suspense fallback={<div>Loading...</div>}>
                        <HeaderCard />
                    </Suspense>
                </div>
                <div className="row container cards-container justify-content-center">
                    <Intro />
                    <Skills />
                    <Projects />
                    <Experiences />
                    <Education />
                    <Hobbies />
                    <Languages />
                    <Contact/>
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
