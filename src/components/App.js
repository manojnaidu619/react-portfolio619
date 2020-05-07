import React from 'react'
import HeaderCard from './Cards/HeaderCard'
import DomainCard from './Cards/DomainCard'

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <DomainCard />
                <DomainCard />
            </div>
        </div>
    )
}

export default App