import React from "react";
import "./MobileNavbar.css";
import "../../ReactFonts.css";

const MobileNavbar = ({isOpen, toggleMenu}) => {


    return(
        <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <h1>
                    Menú
                </h1>

                <ul>
                    <li>
                        <a href="">Inicio</a>
                    </li>

                    <li>
                        <a href="">Acerca de</a>
                    </li>

                    <li>
                        <a href="">Productos</a>
                    </li>

                    <li>
                        <a href="">Contacto</a>
                    </li>

                    <li>
                        <a href="">Iniciar sesión</a>
                    </li>

                    <li>
                        <a href="">Registro</a>
                    </li>
                </ul>

            </div>
        </div>
        </>
    );
}

export default MobileNavbar;