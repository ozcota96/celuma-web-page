import React, { useEffect, useRef } from 'react';
import './Modal.css';
import Portal from '../Portal/Portal.jsx';
import Slider from 'react-slick';

const Modal = ({children, show, handleClose, item, mode}) => {

    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        show && (
            <Portal>
                <div className="modal" onClick={handleClose}>
                    <div className="modal-main" onClick={(e) => e.stopPropagation()}> 
                        <img className='modal-close' src="./images/cross.svg" alt="" onClick={handleClose}/>

                        {mode == 'show' ?
                        <div>
                            <h5>{item.name}</h5>
                            <p>{item.content}</p>
                        </div>
                        :
                        <div className='edit-modal'>
                            <div className='id'>
                                <label htmlFor="">Id:</label>
                                <input type="text" value={item.productId} disabled />
                            </div>

                            <textarea name="" id="" className='edit-name' >{item.name}</textarea>
                            <textarea name="" id="" className='edit-content'>{item.content}</textarea>
                        </div>
                        }

                        <div className='modal-buttons'>
                            <button className='cancel-button' onClick={handleClose}>Descartar</button>
                            <button className='save-button'>Guardar cambios</button>
                        </div>
                        
                    </div>
                </div>
            </Portal>
        )
    );
};

export default Modal;