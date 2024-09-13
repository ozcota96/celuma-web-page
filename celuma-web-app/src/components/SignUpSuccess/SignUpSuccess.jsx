import React from "react";
import './SignUpSuccess.css';

const SignUpSuccess = () => {

    const storedName = sessionStorage.getItem('stored_username');

    const handleClick = () => {
        window.location.href="/products";
    }

    return(
        <div className="success-wrapper">
            <div className="success-container">

                <img src="./images/celuma-logo.svg" alt="" />
                
                <p>¡Bienvenido a Celuma, {storedName}! 🌸 </p>
                <p>Nos alegra mucho que te hayas unido a nuestra comunidad de cuidado personal. Aquí, encontrarás los mejores productos y consejos para resaltar tu belleza natural y cuidar de ti mismo(a) de adentro hacia afuera. ¡Gracias por confiar en nosotros para acompañarte en tu viaje hacia el bienestar!</p>


                <button onClick={handleClick}>
                    Ir a productos!
                </button>
            </div>
        </div>
    )
}

export default SignUpSuccess;