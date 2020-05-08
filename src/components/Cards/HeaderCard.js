import React from 'react'
import '../../styles/HeaderCard.scss'

const HeaderCard = () => {
    return (
        <div className="header-card">
            <div className="mj-avatar"></div>
            <div className="social-links">
                <a className="gh-logo" href="https://github.com/manojnaidu619" target="_blank" rel="noopener noreferrer"></a>
                <a className="email-logo" href="mailto:manojnaidu619@gmail.com" rel="noopener noreferrer"></a>
                <a className="rbgem-logo" href="https://rubygems.org/profiles/manojnaidu619" target="_blank" rel="noopener noreferrer"></a>
                <a className="in-logo" href="https://www.linkedin.com/in/manoj-kumar-d-b65394159/" target="_blank" rel="noopener noreferrer"></a>
                <a className="dev-logo" href="https://dev.to/manojnaidu619" target="_blank" rel="noopener noreferrer"></a>
            </div>
        </div>
    )
}

export default HeaderCard