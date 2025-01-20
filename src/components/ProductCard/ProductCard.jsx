import React, { useState } from "react";
import './ProductCard.css';
import Modal from "../Modal/Modal";
import { useEffect } from "react";

const ProductCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const ADMIN = '1';

    const toggleModal = (mode) => {
        setShowModal(!showModal);
        setMode(mode);
    };

    useEffect(() => {
        const userType = sessionStorage.getItem('user_type');
        setIsAdmin(userType === ADMIN);
    }, []);
    
    return (
        <div className="productcard-wrapper">
            <div className='productcard-container'>
                
                <h1>{item.name}</h1>

                <button className="info-button" onClick={() => toggleModal('show')}>Leer más...</button>
                {isAdmin == true ? <button className="edit-button" onClick={() => toggleModal('edit')}>Editar</button> : ''}

                <Modal show={showModal} handleClose={toggleModal} item={item} mode={mode}/>
                
            </div>
        </div>
    );
};

export default ProductCard;