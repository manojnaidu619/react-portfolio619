import React, { useState, Fragment } from 'react'
import FrontFaceCard from './Wrappers/FrontFaceCard'
import BackFaceCard from './Wrappers/BackFaceCard'
import '../../styles/DomainCard.scss'

const DomainCard = (props) => {

  const [showDetails, setDetails] = useState(true)
  const mouseEnterHandler = () => { }//setDetails(true)
  const mouseLeaveHandler = () => { }//setDetails(false)
  let presentData = null

  if (!showDetails) {
    presentData = <FrontFaceCard><Fragment>{props.frontFace}</Fragment></FrontFaceCard>
  }
  else{
    presentData = <BackFaceCard><Fragment>{props.backFace}</Fragment></BackFaceCard>
  }

  let classesList = `card ${props.cardClass}`

  return (
      <div className={classesList} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        {presentData}
      </div>
  )
}

export default DomainCard