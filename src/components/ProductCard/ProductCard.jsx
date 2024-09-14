import React, { useState } from "react";
import './ProductCard.css';
import Modal from "../Modal/Modal";

const ProductCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    
    const firstImage = item.images[0];
    
    return (
        <div className="productcard-wrapper">
            <div className='productcard-container'>
                <img src={firstImage} alt="" />
                <h1>{item.title}</h1>
                <button onClick={toggleModal}>Leer más...</button>
                <Modal show={showModal} handleClose={toggleModal} item={item}/>
            </div>
        </div>
    );
};

export default ProductCard;