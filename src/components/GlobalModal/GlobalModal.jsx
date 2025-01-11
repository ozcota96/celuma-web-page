import React, {useContext, useEffect} from "react";
import './GlobalModal.css';
import Portal from "../Portal/Portal";
import { AuthContext } from "../AuthContext/AuthContext";

const GlobalModal = ({children, option, action, show, handleClose}) => {

    const {isAuthenticated, logout} = useContext(AuthContext);

    const handleAction = () => {
        action();
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
                <div className="global-modal-wrapper">
                    <div className="global-modal-container">
                        

                        {children}

                    </div>
                </div>
            </Portal>
        )
    );
};

export default GlobalModal;