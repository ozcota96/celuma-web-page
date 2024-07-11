import React, { useState } from "react";
import "./MobileNavbar.css";
import "../../ReactFonts.css";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = ({isOpen, toggleMenu}) => {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const handleClick = (path) => {
        setActiveLink(path);
    };

    return(
        <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <h1>
                    Menú
                </h1>

                <ul>
                    <li>
                        <Link to={"/"} className={activeLink === "/" ? "navbar-active" : ""} onClick={() => handleClick("/")}>Inicio</Link>
                    </li>

                    <li>
                        <Link to={"/about"} className={activeLink === "/about" ? "navbar-active" : ""} onClick={() => handleClick("/about")}>Acerca de</Link>
                    </li>

                    <li>
                        <Link to={"/products"} className={activeLink === "/products" ? "navbar-active" : ""} onClick={() => handleClick("/products")}>Productos</Link>
                    </li>

                    <li>
                        <Link to={"/contact"} className={activeLink === "/contact" ? "navbar-active" : ""} onClick={() => handleClick("/contact")}>Contacto</Link>
                    </li>

                    <li>
                        <Link to={"/signin"} className={activeLink === "/singin" ? "navbar-active" : ""} onClick={() => handleClick("/signin")}>Iniciar sesión</Link>
                    </li>

                    <li>
                        <Link to={"/signup"} className={activeLink === "/signup" ? "navbar-active" : ""} onClick={() => handleClick("/signup")}>Registro</Link>
                    </li>

                </ul>

            </div>
        </div>
        </>
    );
}

export default MobileNavbar;