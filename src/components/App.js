import React from 'react'
import HeaderCard from './Cards/HeaderCard'
import Intro from './Domains/intro'
import Skills from './Domains/skills'

const App = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Intro />
                <Skills/>
            </div>
        </div>
    )
}

export default App