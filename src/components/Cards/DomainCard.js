import React, {useState} from 'react'
import '../../styles/DomainCard.css'

const DomainCard = (props) => {

    const [showDetails, setDetails] = useState(false)

    const mouseEnterHandler = () => {
        setDetails(true)
    }

    const mouseLeaveHandler = () => {
        setDetails(false)
    }

    return (
        <div className="card" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          {!showDetails ? (
            <div>Hello</div>
          ) : (
            <div>Cool</div>
          )}   
        </div>
    )
}

export default DomainCard