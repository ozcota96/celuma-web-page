import React from "react";
import './Contact.css'

const Contact = () => {
    return(
        <div className="contact-wrapper">
            <div className="contact-main">
                <p>Contáctanos</p>

                <form className="formulario">
                    <label htmlFor="name">Nombre:</label>
                    <br />
                    <input type="text" id="name" name="name"/>
                    <br />
                    <label htmlFor="lastname">Apellido:</label>
                    <br />
                    <input type="text" id="lastname" name="lastname"/>
                    <br />
                    <label htmlFor="mail">Correo Electrónico:</label>
                    <br />
                    <input type="text" id="mail" name="mail"/>
                    <br />
                    <label htmlFor="phone">Teléfono:</label>
                    <br />
                    <input type="text" id="phone" name="phone"/>
                </form>

                <button>Enviar</button>
            </div>
        </div>
    )


}

export default Contact;