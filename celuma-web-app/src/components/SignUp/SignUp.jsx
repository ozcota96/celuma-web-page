import React, { useContext, useState } from "react";
import './SignUp.css'
import { serviceSignIn, serviceSignUp } from "../Services/Services";
import { AuthContext } from "../AuthContext/AuthContext";

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext);
    const [warning, setWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState('')

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
            const response = await serviceSignUp(username, name, lastname, mail, password,);
            setWarning(true);
            setWarningMessage(response);

            const loginResponse = await serviceSignIn(username, password);
            login(response.data.token);
            window.location.href= "/success";
        } catch (error) {
            
        }
    }

    return(
        <div className="signup-container">
            <img src="/images/celuma-logo.svg" alt="" />
            <p>Registro</p>

            <form className="signup-formulario" onSubmit={handleSubmit}>
                <label for="username">Nombre de usuario:</label>
                <br />
                <input type="text" id="username" name="username" onChange={handleUsernameChange} required/>
                <br />
                <label for="name">Nombre:</label>
                <br />
                <input type="text" id="name" name="name" onChange={handleNameChange} required/>
                <br />
                <label for="lastname">Apellido</label>
                <br />
                <input type="text" id="lastname" name="lastname" onChange={handleLastNameChange} required/>
                <br />
                <label for="mail">Correo Electrónico:</label>
                <br />
                <input type="text" id="email" name="mail" onChange={handleMailChange} required/>
                <br />
                <label for="password">Contraseña:</label>
                <br />
                <input type="password" id="password" name="password" onChange={handlePasswordChange} required/>
                <br />

                <button className="" type="submit">
                    Registrarse
                </button>
            </form>

            <div className={warning ? "signin-warning-active" : "signin-warning"}>
                <p>{warningMessage}</p>
            </div>

        </div>
    )
}

export default SignUp;