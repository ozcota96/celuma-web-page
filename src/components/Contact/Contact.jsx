import React from "react";
import './Contact.css'

const Contact = () => {
    return(
        <div className="contact-wrapper">
            <div className="contact-main">
                <p>Contáctanos</p>

                <form className="formulario">
                    <label for="name">Nombre:</label>
                    <br />
                    <input type="text" id="name" name="name"/>
                    <br />
                    <label for="lastname">Apellido:</label>
                    <br />
                    <input type="text" id="lastname" name="lastname"/>
                    <br />
                    <label for="mail">Correo Electrónico:</label>
                    <br />
                    <input type="text" id="mail" name="mail"/>
                    <br />
                    <label for="phone">Teléfono:</label>
                    <br />
                    <input type="text" id="phone" name="phone"/>
                </form>

                <button>Enviar</button>
            </div>
        </div>
    )


}

export default Contact;