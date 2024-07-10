import React from "react";
import './SignUp.css'

const SignUp = () => {
    return(
        <div className="signup-container">
            <img src="/images/celuma-logo.svg" alt="" />
            <p>Registro</p>

            <form className="signup-formulario">
                <label for="username">Nombre de usuario:</label>
                <br />
                <input type="text" id="name" name="username"/>
                <br />
                <label for="name">Nombre:</label>
                <br />
                <input type="text" id="name" name="name"/>
                <br />
                <label for="lastname">Apellido</label>
                <br />
                <input type="text" id="name" name="lastname"/>
                <br />
                <label for="mail">Correo Electrónico:</label>
                <br />
                <input type="text" id="name" name="mail"/>
                <br />
                <label for="password">Contraseña:</label>
                <br />
                <input type="text" id="name" name="password"/>
                <br />
            </form>

            <div className="signup-options">
                <button>
                    Acceder
                </button>
                
            </div>

        </div>
    )
}

export default SignUp;