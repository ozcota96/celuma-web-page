import React, { useState } from "react";
import './SignUp.css'
import { serviceSignUp } from "../Services/Services";

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastname(e.target.value);
    };

    const handleMailChange = (e) => {
        setMail(e.target.value);
        console.log(mail)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await serviceSignUp(username, name, lastname, mail, password,)
        } catch (error) {
            console.error('Hubo un error: ', error)
        }
    }

    return(
        <div className="signup-container">
            <img src="/images/celuma-logo.svg" alt="" />
            <p>Registro</p>

            <form className="signup-formulario" onSubmit={handleSubmit}>
                <label for="username">Nombre de usuario:</label>
                <br />
                <input type="text" id="username" name="username" onChange={handleUsernameChange} />
                <br />
                <label for="name">Nombre:</label>
                <br />
                <input type="text" id="name" name="name" onChange={handleNameChange}/>
                <br />
                <label for="lastname">Apellido</label>
                <br />
                <input type="text" id="lastname" name="lastname" onChange={handleLastNameChange}/>
                <br />
                <label for="mail">Correo Electrónico:</label>
                <br />
                <input type="text" id="email" name="mail" onChange={handleMailChange}/>
                <br />
                <label for="password">Contraseña:</label>
                <br />
                <input type="password" id="password" name="password" onChange={handlePasswordChange}/>
                <br />

                <button className="" type="submit">
                    Registrarse
                </button>
            </form>

        </div>
    )
}

export default SignUp;