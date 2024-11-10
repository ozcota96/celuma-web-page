import React, { useState } from "react";
import './ProductCard.css';
import Modal from "../Modal/Modal";

const ProductCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    const userType = sessionStorage.getItem('user_type');
    const [modalAction, setModalAction] = useState("");

    const toggleModal = (action) => {
        setModalAction(action);
        setShowModal(!showModal);
    };
    
    const firstImage = item.images[0];
    
    return (
        <div className="productcard-wrapper">
            <div className='productcard-container'>
                <img src={firstImage} alt="" />
                <h1>{item.title}</h1>

                <button className="info-button" onClick={() => toggleModal("more")}>Leer más...</button>
                {userType == 3 ? ''
                : 
                <button className="edit-button" onClick={() => toggleModal("edit")}>Editar</button>}
                
                <Modal show={showModal} handleClose={toggleModal} item={item} handleAction={modalAction}/>
            </div>
        </div>
    );
};

export default ProductCard;