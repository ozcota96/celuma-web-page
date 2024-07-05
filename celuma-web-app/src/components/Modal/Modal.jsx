import React, { useRef } from 'react';
import './Modal.css';
import Portal from '../Portal/Portal.jsx';
import Slider from 'react-slick';

const Modal = ({ show, handleClose, item}) => {

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
                        <div className='modal-content'>
                            <h1>{item.title}</h1>

                            <Slider ref={sliderRef} {...settings} className="slider modal-slider">
                                {item.images.map((image) => (
                                    <div className="modal-image-container">
                                        <img src={image } alt="" className='modal-image'/>
                                    </div>
                                ))}
                            </Slider>

                            
                            <p>{item.description}</p>
                        </div>

                        <div className='modal-bottom'>
                            <a href={item.link}>{item.link ? 'Ver en Amazon' : ''}</a>
                            <button onClick={handleClose}>Cerrar</button>
                        </div>
                        
                    </div>
                </div>
            </Portal>



        )
    );
};

export default Modal;