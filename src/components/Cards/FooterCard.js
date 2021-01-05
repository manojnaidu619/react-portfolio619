import React from 'react'

const FooterCard = () => {
    return (
        <div className="footer-card" style={{"padding":"35px"}}>
            © {new Date().getFullYear()} Manoj Kumar
        </div>
    )
}

export default FooterCard