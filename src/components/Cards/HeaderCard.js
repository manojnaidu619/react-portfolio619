import React from 'react'
import '../../styles/HeaderCard.scss'
import SocialLinks from '../utils/SocialLinks'

const HeaderCard = () => {
    return (
        <div className='header-card'>
            <div className='mj-avatar'></div>
            <SocialLinks />
        </div>
    )
}

export default HeaderCard

// <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='#0099ff' fill-opacity='1' d='M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,213.3C672,213,768,235,864,240C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path></svg>
