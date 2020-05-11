/* eslint-disable */

import axios from 'axios'

const formSanitizer = (name, email, msg) => {
    const emailRe = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    name = name.replace(/([^a-z0-9áéíóúñü_-\s\.,]|[\t\n\f\r\v\0])/gim, "")
    msg = msg.replace(/([^a-z0-9áéíóúñü_-\s\.,]|[\t\n\f\r\v\0])/gim, "")
    const isEmailValid = emailRe.test(email)

    if (name === '' || name.length < 5) return "Enter valid name with 5 or more characters"
    if (!isEmailValid) return "Enter valid email"
    if (msg.length <= 20 || msg == '') return "Enter valid message with 20 or more characters"
    
    return true
}

const FormSubmitter = (name, email, message, formData) => {
    const formSanitized = formSanitizer(name, email, message)
    if (typeof (formSanitized) == 'string') return formSanitized

    if (typeof (formSanitized) == 'boolean') {
        return axios({
            method: "post",
            url: "https://formspree.io/mpzywrqy",
            data: new FormData(formData)
        })
    }
}

export default FormSubmitter

