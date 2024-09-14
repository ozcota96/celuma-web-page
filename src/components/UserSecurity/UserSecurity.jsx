import React from "react";
import './UserSecurity.css';

const UserSecurity = () => {

    const security_options = [
        {
            option: 'Métodos de pago',
            link: '/EditAccount',
        },

        {
            option: 'Cambiar contraseña',
            link: '/Security',
        },
    ];

    const handleOnClick = (link) => {
        window.location = link;
    }
    return(

        <div className="user-security-container">
            
            <div className="security-options">
                {security_options.map((item, index) => (
                    <div className="security-option" onClick={() => (handleOnClick(item.link))}>
                        <p>{item.option}</p>
                        <img className="down-arrow" src="./images/down-arrow.svg" alt="down-arrow" />
                    </div>
                ))}
            </div>
            
            <div className="delete-account">
                <p>Eliminar cuenta</p>
            </div>
        </div>

    )
}

export default UserSecurity;