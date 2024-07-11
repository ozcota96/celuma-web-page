import React, { useState } from "react";
import "./Navbar.css"
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import "../../ReactFonts.css"
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
    };



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
                            <Link to="/" className={activeLink === "/" ? "navbar-active" : ""} onClick={() => handleClick("/")}>Inicio</Link>
                        </li>

                        <li>
                            <Link to="/about" className={activeLink === "/about" ? "navbar-active" : ""} onClick={() => handleClick("/about")}>Acerca de</Link>
                        </li>

                        <li>
                            <Link to="/products" className={activeLink === "/products" ? "navbar-active" : ""} onClick={() => handleClick("/products")}>Productos</Link>
                        </li>

                        <li>
                            <Link to="/contact" className={activeLink === "/contact" ? "navbar-active" : ""} onClick={() => handleClick("/contact")}>Contacto</Link>
                        </li>
                        
                    </ul>
                </div>

                <div className="account">
                    <ul>
                        <li>
                            <a href="/signin" className={activeLink === "/signin" ? "navbar-active" : ""} onClick={() => handleClick("/signin")}>Iniciar sesión</a>
                        </li>
                        
                        <li>
                            <a href="/signup" className={activeLink === "/signup" ? "navbar-active" : ""} onClick={() => handleClick("/signup")}>Registro</a>
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