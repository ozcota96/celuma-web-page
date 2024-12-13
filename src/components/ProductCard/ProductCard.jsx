import React, { useState } from "react";
import './ProductCard.css';
import Modal from "../Modal/Modal";

const ProductCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    const userType = sessionStorage.getItem('user_type');
    const [mode, setMode] = useState('');

    const toggleModal = (mode) => {
        setShowModal(!showModal);
        setMode(mode);
    };
    
    
    return (
        <div className="productcard-wrapper">
            <div className='productcard-container'>
                
                <h1>{item.title}</h1>

                <button className="info-button" onClick={() => toggleModal('show')}>Leer más...</button>
                {userType == 3 ? ''
                : 
                <button className="edit-button" onClick={() => toggleModal('edit')}>Editar</button>}

                <Modal show={showModal} handleClose={toggleModal} item={item} mode={mode}/>
                
            </div>
        </div>
    );
};

export default ProductCard;