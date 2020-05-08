import React, { useState, Fragment } from 'react'
import FrontFaceCard from './FrontFaceCard'
import BackFaceCard from './BackFaceCard'
import '../../styles/DomainCard.css'

const DomainCard = (props) => {

  const [showDetails, setDetails] = useState(false)
  const mouseEnterHandler = () => setDetails(true)
  const mouseLeaveHandler = () => setDetails(false)
  let presentData = null

  if (!showDetails) {
    presentData = <FrontFaceCard><Fragment>{props.frontFace}</Fragment></FrontFaceCard>
  }
  else{
    presentData = <BackFaceCard><Fragment>{props.backFace}</Fragment></BackFaceCard>
  }

  return (
      <div className="card col-md-5" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        {presentData}
      </div>
  )
}

export default DomainCard