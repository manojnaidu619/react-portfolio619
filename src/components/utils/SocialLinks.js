import React from 'react'
import '../../styles/HeaderCard.scss'

const SocialLinks = () => {
    return (
        <div className="social-links">
            <a className="gh-logo" alt="github" href="https://github.com/manojnaidu619" target="_blank" rel="noopener noreferrer" aria-label="github-link"> </a>
            <a className="rbgem-logo" alt="rubygems" href="https://rubygems.org/profiles/manojnaidu619" target="_blank" rel="noopener noreferrer" aria-label="rubygems-link"> </a>
            <a className="cv-link" alt="resume" href="https://drive.google.com/file/d/1xepoKGa9Js7pQVloLtCCBlnea6BKwdte/view" target="_blank" rel="noopener noreferrer" aria-label="resume-link">RESUME</a>
            <a className="in-logo" alt="linkedin" href="https://www.linkedin.com/in/manoj-kumar-d-b65394159/" target="_blank" rel="noopener noreferrer" aria-label="linkedin-link"> </a>
            <a className="dev-logo" alt="dev.to" href="https://dev.to/manojnaidu619" target="_blank" rel="noopener noreferrer" aria-label="devto-link"> </a>
        </div>
    )
}

export default SocialLinks