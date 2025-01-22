import React, { useContext, useState, useEffect} from "react";
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
    const [warningMessage, setWarningMessage] = useState('');
    const [minPassword, setMinPassword] = useState(false)
    const [passwordValidation, setPasswordValidation] = useState(false);

    // Password requirements
    const [minLength, setMinLength] = useState(false);
    const [upperLower, setUpperLower] = useState(false);
    const [nums, setNums] = useState(false);
    const [specialChar, setSpecialChar] = useState(false)

    const [formValidation, setFormValidation] = useState(false);


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
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const toggleRequirements = () => {
        setMinPassword(!minPassword);
    }

    // Password validation
    useEffect(() => {
        // Validar tamaño
        setMinLength(password.length >= 8);

        // Validar números
        setNums(/[0-9]/.test(password));

        // Validar mayus y minus
        setUpperLower(/[A-Z]/.test(password) && /[a-z]/.test(password));

        // Validar caracteres especiales
        setSpecialChar(/[!@#\$%\^\&*\)\(+=._-]+/.test(password));
    }, [password]);
    
    // Password criteria
    useEffect(() => {

        if (minLength && nums && upperLower && specialChar) {
            setPasswordValidation(true);
        } else {
            setPasswordValidation(false);
        }
    }, [minLength, nums, upperLower, specialChar]);


    useEffect(() => {
        if (username && name && lastname && mail && passwordValidation) {
            setFormValidation(true);
        } else {
            setFormValidation(false);
        }
    }, [username, name, lastname, mail, passwordValidation])

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
                <label htmlFor="username">Nombre de usuario:</label>
                <br />
                <input type="text" id="username" name="username" onChange={handleUsernameChange} required/>
                <br />
                <label htmlFor="name">Nombre:</label>
                <br />
                <input type="text" id="name" name="name" onChange={handleNameChange} required/>
                <br />
                <label htmlFor="lastname">Apellido</label>
                <br />
                <input type="text" id="lastname" name="lastname" onChange={handleLastNameChange} required/>
                <br />
                <label htmlFor="mail">Correo Electrónico:</label>
                <br />
                <input type="text" id="email" name="mail" onChange={handleMailChange} required/>
                <br />
                <label htmlFor="password">Contraseña:</label>
                <br />
                <input type="password" id="password" name="password" onChange={handlePasswordChange} onFocus={toggleRequirements} onBlur={toggleRequirements} required/>
                <br />

                <div className={minPassword ? "show-requirements" : "hide-requirements"}>
                    <p>La contraseña debe contener:</p>
                    <ul>
                        <li className={minLength ? "valid-item" : "invalid-item"}>Mínimo 8 caracteres</li>
                        <li className={upperLower ? "valid-item" : "invalid-item"}>Mayúsculas y minúsculas</li>
                        <li className={nums ? "valid-item" : "invalid-item"}>Números</li>
                        <li className={specialChar ? "valid-item" : "invalid-item"}>Caracter especial</li>
                    </ul>

                </div>

                <button className={(formValidation && passwordValidation) ? "valid" : "not-valid"} type="submit" disabled={!(formValidation && passwordValidation)}>
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