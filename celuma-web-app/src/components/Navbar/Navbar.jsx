import React, { useState } from "react";
import "./Navbar.css"
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import "../../ReactFonts.css"

const Navbar = () => {
    
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    return(
        <>
        <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>
        <div className="nav-wrapper">
            <div className="nav-content">
                <h1>
                    Celuma
                </h1>

                <div>
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
                        
                    </ul>
                </div>

                <div className="account">
                    <ul>
                        <li>
                            <a href="">Iniciar sesión</a>
                        </li>
                        
                        <li>
                            <a href="">Registro</a>
                        </li>
                    </ul>
                </div>

                <button className="menu-btn" onClick={(toggleMenu)}>
                        <span>
                            <img src="./images/menu-icon.svg" alt="" />
                        </span>
                </button>

            </div>

        </div>
        </>
    )
}

export default Navbar;