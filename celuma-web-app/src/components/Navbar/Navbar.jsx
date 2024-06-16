import React, { useState } from "react";
import "./Navbar.css"
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import "../../ReactFonts.css"
import { Link } from "react-router-dom";

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
                            <Link to="/">Inicio</Link>
                        </li>

                        <li>
                            <Link to="/about">Acerca de</Link>
                        </li>

                        <li>
                            <Link to="/products">Productos</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contacto</Link>
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