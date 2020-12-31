import React, {useState} from 'react'
import DomainCard from '../Cards/DomainCard'
import FormSanitizerAndSubmitter from '../utils/FormSanitizerAndSubmitter'
import "../../styles/IndividualCardStyles.scss"

const Contact = () => {

    const [name, changeName] = useState('')
    const [email, changeEmail] = useState('')
    const [message, changeMessage] = useState('')
    const [errmsg, changeErrmsg] = useState(false)
    const [submitStatus, changeSubmitStatus] = useState(false)
    let cardContent = null

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const sumbitBtn = document.querySelector(".form-submit-btn")
        sumbitBtn.disabled = true
        sumbitBtn.textContent = "SENDING..."

        const formErr = FormSanitizerAndSubmitter(name, email, message, event.target)
        if (typeof (formErr) == 'string') changeErrmsg(formErr)
        if (typeof (formErr) == 'object') {
            formErr
                .then(r => {
                    changeSubmitStatus(true)
                    changeErrmsg(false)
                })
                .catch(r => {return "There's some error!, try again later sometime..." });   
        }

        sumbitBtn.disabled = false
        sumbitBtn.textContent = "SEND"
    }

    if (submitStatus) {
        cardContent = 
            <div className="front-face-card-content">
                <img alt="success" src="https://i.ya-webdesign.com/images/success-transparent-green-8.png" height="75px"></img>
                <br/>
                <h2>Message successfully posted!, I'll get back to you soon...</h2>
            </div>
    } else {
        cardContent = 
            <div className="front-face-card-content contact-card">  
            <h2 style={{margin: "10px 0px"}}>Contact/Feedback Section</h2>
            <div className="contact-form">
                <form action="https://formspree.io/mpzywrqy" method="POST" onSubmit={onSubmitHandler}>
                    <div className="name-div">
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" name="name" onChange={e => changeName(e.target.value)} value={name} />
                    </div>
                    <div className="email-div">
                        <label htmlFor="_replyto">Email</label><br/>
                        <input type="email" name="_replyto" onChange={e => changeEmail(e.target.value)} value={email} />
                    </div>
                    <div className="msg-div">
                        <label htmlFor="message">Message</label><br/>
                        <textarea name="message" onChange={e => changeMessage(e.target.value)} value={message} />
                    </div>
                    <button className="form-submit-btn" type="submit">SEND</button>
                </form>
            </div>
        </div>
    }

    const frontFace =
        <div className="front-face-card intro-front-face animate__animated animate__fadeIn animate__delay-0.5s">
            <p className="err-msg">{errmsg}</p>
            {cardContent}
        </div>
    
    return (
        <DomainCard
            frontFace={frontFace}
            cardClass="contact-card" />
    )
}

export default Contact
