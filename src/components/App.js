import React from 'react'
import HeaderCard from './Cards/HeaderCard'
import Intro from './Domains/intro'

const App = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Intro />
                <Intro />
                <Intro />
            </div>
        </div>
    )
}

export default App