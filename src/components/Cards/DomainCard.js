import React, { useState, Fragment } from 'react'
import FrontFaceCard from './Wrappers/FrontFaceCard'
import BackFaceCard from './Wrappers/BackFaceCard'
import '../../styles/DomainCard.scss'

const DomainCard = (props) => {

  let classesList = `card ${props.cardClass}`
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let presentData = null
  const hoverOverContactCard = props.cardClass==="contact-card"

  const [showDetails, setDetails] = useState(false)

  const mouseEnterHandler = () => {
    if (!isMobile) {
      if(!hoverOverContactCard) setDetails(true)
    }
  }
  const mouseLeaveHandler = () => {
    if(!isMobile) setDetails(false)
  }
  const onClickHandler = () => {
    if (isMobile) {
      if(!hoverOverContactCard) setDetails(!showDetails)
    }
  }

  if (!showDetails) {
    presentData = <FrontFaceCard><Fragment>{props.frontFace}</Fragment></FrontFaceCard>
  }
  else{
    presentData = <BackFaceCard><Fragment>{props.backFace}</Fragment></BackFaceCard>
  }

  return (
    <div className={classesList} onClick={onClickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        {presentData}
    </div>
  )
}

export default DomainCard