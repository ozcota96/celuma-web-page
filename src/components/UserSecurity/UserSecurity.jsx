import React, {useState} from 'react';
import './UserSecurity.css';
import GlobalModal from '../GlobalModal/GlobalModal';
import { userDelete } from '../Services/Services';

const UserSecurity = () => {

    const [activeModal, setActiveModal] = useState(false);

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

    const toggleGlobalModal = () => {
        setActiveModal(!activeModal);
    }

    const getUser_id = () => {
        const user_id = localStorage.getItem('user_id');
        userDelete(user_id);
    }

    return(
        <>
        <div className="user-security-container">
            
            <div className="security-options">
                {security_options.map((item, index) => (
                    <div className="security-option" onClick={() => (handleOnClick(item.link))}>
                        <p>{item.option}</p>
                        <img className="down-arrow" src="./images/down-arrow.svg" alt="down-arrow" />
                    </div>
                ))}
            </div>
            
            <div className="delete-account" onClick={toggleGlobalModal}>
                <p>Eliminar cuenta</p>
            </div>
        </div>
        
        <GlobalModal message={<p>¿Estás seguro que quieres eliminar tu cuenta?</p>} option={<p>Eliminar</p>} action={getUser_id} show={activeModal} handleClose={toggleGlobalModal} />
        </>
    )

}

export default UserSecurity;