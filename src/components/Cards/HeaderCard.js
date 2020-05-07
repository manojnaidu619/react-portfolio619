import React from 'react'
import '../../styles/HeaderCard.css'


const HeaderCard = () => {
    return (
        <div className="header-card">
            <div className="mj-avatar"></div>
            <div className="social-links">
                <span className="gh-logo"></span>
                <span className="email-logo"></span>
                <span className="dev-logo"></span>
            </div>
        </div>
    )
}

export default HeaderCard