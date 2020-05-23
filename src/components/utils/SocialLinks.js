import React from 'react'
import '../../styles/HeaderCard.scss'

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a alt="github" href="https://github.com/manojnaidu619" target="_blank" rel="noopener noreferrer" aria-label="github-link">
                <img src="/images/github.png" width="30" alt="github"/>
            </a>
            <a alt="rubygems" href="https://rubygems.org/profiles/manojnaidu619" target="_blank" rel="noopener noreferrer" aria-label="rubygems-link">
                <img src="/images/ruby.png" width="30" alt="rubygems"/>
            </a>
            <a alt="resume" href="https://drive.google.com/file/d/1xepoKGa9Js7pQVloLtCCBlnea6BKwdte/view" target="_blank" rel="noopener noreferrer" aria-label="resume-link">
                <h3 style={{color: '#333333'}}>RESUME</h3>
            </a>
            <a alt="linkedin" href="https://www.linkedin.com/in/manoj-kumar-d-b65394159/" target="_blank" rel="noopener noreferrer" aria-label="linkedin-link">
                <img src="/images/linkedin.png" width="30" alt="linkedin"/>
            </a>
            <a alt="dev.to" href="https://dev.to/manojnaidu619" target="_blank" rel="noopener noreferrer" aria-label="devto-link">
                <img src="/images/dev.webp" width="30" alt="dev.to"/>
            </a>
        </div>
    )
}

export default SocialLinks