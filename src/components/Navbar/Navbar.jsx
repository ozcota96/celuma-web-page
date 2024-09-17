import {React, useContext, useState } from "react";
import "./Navbar.css"
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import "../../ReactFonts.css"
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import LogoutModal from "../LogoutModal/LogoutModal";
import GlobalModal from "../GlobalModal/GlobalModal";

const Navbar = () => {
    
    const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const {isAuthenticated, logout} = useContext(AuthContext);
    const [activeModal, setActiveModal] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const handleClick = (path) => {
        setActiveLink(path);
    };

    const toggleGlobalModal = () => {
        setActiveModal(!activeModal);
    }

    const handleLogout = () => {
        logout();
    };

    return(
        <>
        <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>
        <div className="nav-wrapper">
            <div className="nav-content">
                <h1>
                <Link to="/" className="navbar-active" onClick={() => handleClick("/")}>Celuma</Link>
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
                            {isAuthenticated ? (
                                <>
                                    <li>
                                        <Link to="/profile" className={activeLink === "/account" ? "navbar-active" : ""} onClick={() => handleClick("/profile")}>
                                            <img src="/images/account.svg" className="navbar-icon" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cart" className={activeLink === "/cart" ? "navbar-active" : ""} onClick={() => handleClick("/cart")}>
                                            <img src="/images/cart.svg" className="navbar-icon" alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="" onClick={toggleGlobalModal}>
                                            <img src="/images/logout.svg" className="navbar-icon" alt="" />
                                        </Link>

                                    </li>

                                        

                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/signin" className={activeLink === "/signin" ? "navbar-active" : ""} onClick={() => handleClick("/signin")}>Iniciar sesión</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" className={activeLink === "/signup" ? "navbar-active" : ""} onClick={() => handleClick("/signup")}>Registro</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>

                <button className="menu-btn" onClick={(toggleMenu)}>
                        <span>
                            <img src="./images/menu-icon.svg" alt="" />
                        </span>
                </button>

            </div>
        </div>
        
        <GlobalModal message={<p>¿Estás seguro que deseas salir?</p>} option={<p>Salir</p>} action={handleLogout} show={activeModal} handleClose={toggleGlobalModal} />
        </>
    )
}

export default Navbar;