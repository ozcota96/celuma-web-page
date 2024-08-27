import {React, useContext, useEffect} from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import '../LogoutModal/LogoutModal.css';
import Portal from '../Portal/Portal.jsx';

const LogoutModal = ({show, handleClose}) => {

    const {isAuthenticated, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        handleClose();
        window.location.href="/";
    };

    useEffect(() => {
        if(show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [show])

    return(
        show && (
            <Portal>
                <div className="logout-wrapper">
                    <div className="logout-container">
                        <img src="./images/cross.svg" className="logout-modal-close" alt="" onClick={handleClose}/>
                        <img src="./images/warning.svg" className="warning" alt="" />
                        <p>¿Estás seguro que deseas salir?</p>
                        <button onClick={handleLogout}>
                            Salir
                        </button>
                    </div>
                </div>
            </Portal>

        )
    )
};

export default LogoutModal;