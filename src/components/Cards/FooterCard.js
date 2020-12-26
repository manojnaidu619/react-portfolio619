import React from 'react'

const FooterCard = () => {
    return (
        <div className="footer-card" style={{"padding":"35px"}}>
            © {new Date().getFullYear()} Manoj Naidu
        </div>
    )
}

export default FooterCard