import React from "react";
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="signin-container">
            <img src="/images/celuma-logo.svg" alt="" />
            <p>Acceso</p>

            <form className="signin-formulario">
                <label for="name">Correo electrónico:</label>
                <br />
                <input type="text" id="name" name="name"/>
                <br />
                <label for="name">Contraseña:</label>
                <br />
                <input type="text" id="name" name="name"/>
                <br />
            </form>

            <div className="signin-options">
                <button>
                    Acceder
                </button>

                <a href=""><p>¿Olvidaste tu contraseña?</p></a>
                <a href=""><p>¿No tienes cuenta?</p></a>
                
                
            </div>

        </div>
    )
}

export default SignIn;