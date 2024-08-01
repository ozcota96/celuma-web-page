import React, { useContext, useState } from "react";
import './SignIn.css';
import {serviceSignIn } from "../Services/Services";
import { AuthContext } from "../AuthContext/AuthContext";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await serviceSignIn(email, password);
            login(response.data.token);
            window.location.href= "/";
        } catch (error) {
            console.error("Hubo un error: " , error)
        }
    };

    return (
        <div className="signin-container">
            <img src="/images/celuma-logo.svg" alt="" />
            <p>Acceso</p>

            <form className="signin-formulario" onSubmit={handleSubmit}>
                <label htmlFor="email">Nombre de usuario:</label>
                <br />
                <input type="text" id="email" name={email} onChange={handleEmailChange}/>
                <br />
                <label htmlFor="password">Contraseña:</label>
                <br />
                <input type="password" id="password" name={password} onChange={handlePasswordChange}/>
                <br />

                <button type="submit">Acceder</button>
            </form>

            <div className="signin-options">

                <a href=""><p>¿Olvidaste tu contraseña?</p></a>
                <a href=""><p>¿No tienes cuenta?</p></a>

            </div>

        </div>
    )
}

export default SignIn;
