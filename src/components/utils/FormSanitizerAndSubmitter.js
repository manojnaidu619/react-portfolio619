import axios from 'axios'

const formSanitizer = (name,email,msg) => {
    name = name.replace(/([^a-z0-9áéíóúñü_-\s\.,]|[\t\n\f\r\v\0])/gim, "");
    msg = msg.replace(/([^a-z0-9áéíóúñü_-\s\.,]|[\t\n\f\r\v\0])/gim, "");

    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    
    if (name === '' || name.length <= 5) return "Enter valid name with 5 or more characters"
    if (!isEmailValid) return "Enter valid email"
    if (msg.length <= 20 || msg == '') return "Enter valid message with 20 or more characters"
    
    console.log(msg)
    return true
}

const submitForm = async (form) => {
    try {
        await axios({
            method: "post",
            url: "https://formspree.io/mpzywrqy",
            data: new FormData(form)
        })
        console.log("done!")
        return(true)
    } catch (error) {
        return "There's some error!, try again later sometime..."
    }
}

const FormSubmitter = (name, email, message, formData) => {
    const formSanitized = formSanitizer(name, email, message)
    if (typeof (formSanitized) == 'string') return formSanitized
    if (typeof (formSanitized) == 'boolean') return submitForm(formData)
}

export default FormSubmitter