import React, { useState } from "react";
import './ProductCard.css';
import Modal from "../Modal/Modal";
import { useEffect } from "react";
import Slider from "react-slick";
import { useRef } from "react";

const ProductCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    const [mode, setMode] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const ADMIN = '1';
    const sliderRef = useRef();

    const productsSlidersettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: false,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };

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

                <img src={item.imageUrl} alt="" />

                <button className="info-button" onClick={() => toggleModal('show')}>Leer más...</button>
                {isAdmin == true ? <button className="edit-button" onClick={() => toggleModal('edit')}>Editar</button> : ''}

                <Modal show={showModal} handleClose={toggleModal} item={item} mode={mode}/>
                
            </div>
        </div>
    );
};

export default ProductCard;