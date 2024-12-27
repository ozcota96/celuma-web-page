import React, { useEffect, useState } from "react";
import './PasswordUpdate.css';
import { updatePassword } from "../Services/Services";
import GlobalModal from "../GlobalModal/GlobalModal";

const PasswordUpdate = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmedPassword, setConfirmedPasswprd] = useState('');
    const [warning, setWarning] = useState(false);
    const user_id = localStorage.getItem('user_id');
    const [activeModal, setActiveModal] = useState(false);

    // Password requirements
    const [minLength, setMinLength] = useState(false);
    const [upperLower, setUpperLower] = useState(false);
    const [nums, setNums] = useState(false);
    const [specialChar, setSpecialChar] = useState(false)
    const [passwordValidation, setPasswordValidation] = useState(false);

    const toggleGlobalModal = (e) => {
        setActiveModal(!activeModal);
    }

    const handleCloseModale = () => {
        window.location.href = '/profile';
    }

    const handlePasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        console.log(passwordValidation)
    };

    const handleConfirmation = (e) => {
        setConfirmedPasswprd(e.target.value);
    };

    const changePassword = async () => {
        
        if (newPassword == confirmedPassword) {
            await updatePassword(user_id, currentPassword, newPassword);
            toggleGlobalModal();
        } else {
            setWarning(true);
        }
    };

    useEffect(() => {
            // Validar tamaño
            setMinLength(newPassword.length >= 8);

            // Validar números
            setNums(/[0-9]/.test(newPassword));
    
            // Validar mayus y minus
            setUpperLower(/[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword));
    
            // Validar caracteres especiales
            setSpecialChar(/[!@#\$%\^\&*\)\(+=._-]+/.test(newPassword));
    }, [newPassword]);

    useEffect(() => {
        if (minLength && nums && upperLower && specialChar) {
            setPasswordValidation(true);
        } else {
            setPasswordValidation(false);
        }
    }, [minLength, nums, upperLower, specialChar]);

    return(
        <>
            <div className="password-update-container">
                <h1>Cambiar contraseña</h1>


                <form action="" className="password-update-fields">
                    <label >Contraseña actual: </label>
                    <input type="password" onChange={handlePasswordChange}/>
                    <br />
                    <label >Contraseña nueva: </label>
                    <input type="password" onChange={handleNewPasswordChange}/>
                    <br />
                    <label >Confirmar contraseña: </label>
                    <input type="password" onChange={handleConfirmation}/>
                    <br />
                    
                </form>
                <div className={warning ? "warning-on" : "warning-off"}>
                    <p>Las contraseñas no coinciden</p>
                </div>    

                <button className={passwordValidation ? "global-button" : "global-button-disabled"} onClick={changePassword} disabled={!passwordValidation} >Guardar cambios</button>


                <div className="password-warnings">

                    <div className="password-requirements">
                        <p>La contraseña debe contener:</p>

                        <ul>
                            <li className={minLength ? "valid-item" : "invalid-item"}>Mínimo 8 caracteres</li>
                            <li className={upperLower ? "valid-item" : "invalid-item"}>Mayúsculas y minúsculas</li>
                            <li className={nums ? "valid-item" : "invalid-item"}>Números</li>
                            <li className={specialChar ? "valid-item" : "invalid-item"}>Caracter especial</li>
                        </ul>

                    </div>
                </div>

            </div>
            <GlobalModal show={activeModal} handleClose={handleCloseModale}>
                <div className="success-message">
                    <img src="./images/success.svg" alt="" />
                    <p>¡Cambio de contraseña exitoso!</p>
                </div>
                
            </GlobalModal>
        </>

    )
};

export default PasswordUpdate;