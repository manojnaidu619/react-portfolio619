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

