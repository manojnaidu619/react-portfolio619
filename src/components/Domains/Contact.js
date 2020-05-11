import React, {useState} from 'react'
import DomainCard from '../Cards/DomainCard'
import FormSanitizerAndSubmitter from '../utils/FormSanitizerAndSubmitter'
import "../../styles/IndividualCardStyles.scss"

const Contact = () => {

    const [name, changeName] = useState('')
    const [email, changeEmail] = useState('')
    const [message, changeMessage] = useState('')
    const [errmsg, changeErrmsg] = useState(false)

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const formErr = FormSanitizerAndSubmitter(name, email, message, event.target)
        if (typeof (formErr) == 'string') changeErrmsg(formErr)
        console.log(event.target)
    }

    const frontFace =
        <div className="front-face-card intro-front-face animate__animated animate__fadeIn animate__delay-0.5s">
            <p className="err-msg">{errmsg}</p>
            <div className="front-face-card-content contact-card">         
                <form action="https://formspree.io/mpzywrqy" method="POST" onSubmit={onSubmitHandler}>
                    <input type="text" name="name" onChange={e => changeName(e.target.value)} value={name} />
                    <br/>
                    <input type="email" name="_replyto" onChange={e => changeEmail(e.target.value)} value={email} />
                    <br />
                    <textarea type="text" name="message" onChange={e => changeMessage(e.target.value)} value={message} />
                    <br/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            cardClass="contact-card" />
    )
}

export default Contact
