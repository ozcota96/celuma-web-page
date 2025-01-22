import React, { useContext, useState } from "react";
import "./MobileNavbar.css";
import "../../ReactFonts.css";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

const MobileNavbar = ({isOpen, toggleMenu}) => {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const {isAuthenticated, logout} = useContext(AuthContext);

    const handleClick = (path) => {
        setActiveLink(path);
    };

    const handleLogout = async () => {
        sessionStorage.clear();
        localStorage.clear();
        window.location.href="/";
        await logout();
    };

    return(
        <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <h1>
                    Menú
                </h1>


                {isAuthenticated ? 
                <ul>
                    <li>
                        <Link to={"/"} className={activeLink === "/" ? "navbar-active" : ""} onClick={() => handleClick("/")}>Inicio</Link>
                    </li>

                    <li>
                        <Link to={"/profile"} className={activeLink === "/profile" ? "navbar-active" : ""} onClick={() => handleClick("/profile")}>Mi cuenta</Link>
                    </li>

                    <li>
                        <Link to={"/cart"} className={activeLink === "/cart" ? "navbar-active" : ""} onClick={() => handleClick("/cart")}>Carrito</Link>
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
                        <Link  className={activeLink === "/signup" ? "navbar-active" : ""} onClick={() => handleLogout()}>Cerrar sesión</Link>
                    </li>

                </ul>

                :

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
                    <Link to={"/signin"} className={activeLink === "/signin" ? "navbar-active" : ""} onClick={() => handleClick("/signin")}>Iniciar sesión</Link>
                </li>

                <li>
                    <Link to={"/signup"} className={activeLink === "/signup" ? "navbar-active" : ""} onClick={() => handleClick("/signup")}>Registro</Link>
                </li>

            </ul>
                }

            </div>
        </div>
        </>
    );
}

export default MobileNavbar;