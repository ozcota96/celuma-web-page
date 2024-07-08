import React from "react";
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <img src="/images/celuma-logo.svg" alt="" />
            <p>Acceso</p>

            <form className="login-formulario">
                <label for="name">Correo electrónico:</label>
                <br />
                <input type="text" id="name" name="name"/>
                <br />
                <label for="name">Contraseña:</label>
                <br />
                <input type="text" id="name" name="name"/>
                <br />
            </form>

            <div className="login-options">
                <button>
                    Acceder
                </button>

                <a href=""><p>¿Olvidaste tu contraseña?</p></a>
                <a href=""><p>¿No tienes cuenta?</p></a>
                
                
            </div>

        </div>
    )
}

export default Login;