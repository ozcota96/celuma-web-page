import React, { useRef, useState } from 'react';
import './Modal.css';
import Portal from '../Portal/Portal.jsx';
import Slider from 'react-slick';
import { updateProduct } from '../Services/Services.jsx';

const Modal = ({ show, handleClose, item, handleAction}) => {

    const sliderRef = useRef();
    const user_type = sessionStorage.getItem("user_type");
    const [newTitle, setNewTitle] = useState(item.title);
    const [newContent, setNewContent] = useState(item.description);

    const saveChanges = async () => {
        const update = await updateProduct(newTitle, newContent);
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setNewContent(e.target.value);
    }

    return (
        show && (
            <Portal>
                <div className="modal" onClick={handleClose}>
                    <div className="modal-main" onClick={(e) => e.stopPropagation()}> 
                        <img className='modal-close' src="./images/cross.svg" alt="" onClick={handleClose}/>
                        <div className='modal-content'>

                            <h1>
                                {handleAction === "edit" ?
                                <textarea className='edit-title' id="" value={newTitle} onChange={handleTitleChange}></textarea>
                                :
                                item.title}
                            </h1>

                            <Slider ref={sliderRef} {...settings} className="slider modal-slider">
                                {item.images.map((image) => (
                                    <div className="modal-image-container">
                                        <img src={image } alt="" className='modal-image'/>
                                    </div>
                                ))}
                            </Slider>

                            
                            <p>
                                {handleAction === "edit" ? 
                            <textarea className='edit-description' value={newContent} onChange={handleContentChange}></textarea>
                            :
                            item.description
                            }
                            </p>
                        </div>

                        <div className='modal-bottom'>
                            <a href={item.link}>{item.link ? 'Ver en Amazon' : ''}</a>

                            <button onClick={handleAction === 'edit' ? saveChanges : handleClose}>
                                {handleAction === 'edit' ? 'Guardar cambios' : 'Cerrar'}
                            </button>
                        </div>
                        
                    </div>
                </div>
            </Portal>
        )
    );
};

export default Modal;