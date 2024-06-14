import React from "react";
import './Footer.css'

const Footer = () => {
    return(
        <div className="footer-container">
            <p className="text">Contáctanos a través de nuestras redes sociales:</p>
            <div className="icons">
                <a href="https://m.facebook.com/ProductosCelumaOficial/"><img src="../images/facebook.svg" alt="facebook_logo" /></a>
                <a href="https://www.instagram.com/productosceluma/"><img src="../images/instagram.svg" alt="instagram_logo" /></a>
                <a href="https://api.whatsapp.com/message/DXTFXPSVMOQPE1?autoload=1&app_absent=0"><img src="../images/whatsapp.svg" alt="whatsapp_logo" /></a>
            </div>

            <div className="policy">
                <p>Politica de privacidad</p>
                <p>Code Monkey</p>
            </div>

        </div>
    )
}

export default Footer;