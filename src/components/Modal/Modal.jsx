import React, { useEffect, useRef, useState } from 'react';
import './Modal.css';
import Portal from '../Portal/Portal.jsx';
import Slider from 'react-slick';
import { updateProduct } from '../Services/Services.jsx';

const Modal = ({children, show, handleClose, item, mode}) => {

    const sliderRef = useRef();
    const user_type = sessionStorage.getItem("user_type");
    const [newTitle, setNewTitle] = useState(item.name);
    const [newContent, setNewContent] = useState(item.content);
    const [selectedCategory, setSelectedCategory] = useState(item.categoryId);

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
    };

    const handleContentChange = (e) => {
        setNewContent(e.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    }
    
    const saveChanges = () => {
        updateProduct(newTitle, newContent, item.productId, selectedCategory);
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

                            <div className='modal-buttons'>
                                <button className='cancel-button' onClick={handleClose}>Cerrar</button>
                            </div>
                        </div>
                        :
                        <div className='edit-modal'>
                            <div className='id'>
                                <label htmlFor="">Id:</label>
                                <input type="text" value={item.productId} disabled />
                            </div>

                            <textarea name="" id="" className='edit-name' onChange={handleTitleChange} >{item.name}</textarea>
                            <textarea name="" id="" className='edit-content' onChange={handleContentChange} >{item.content}</textarea>

                            
                            <div className="category-container">
                                <div className="line-container">
                                    <span className="line"></span>
                                    <h4>Categoría</h4>
                                    <span className="line"></span>
                                </div>

                                <form action="">
                                    <input
                                        type="checkbox"
                                        name="category1"
                                        id="category1"
                                        value="1"
                                        checked={selectedCategory === 1}
                                        onChange={() => handleCategoryChange(1)}/>
                                    <label htmlFor="">Skincare</label>

                                    <input
                                        type="checkbox"
                                        name="category2" 
                                        id="category2" 
                                        value="2"
                                        checked={selectedCategory === 2}
                                        onChange={() => handleCategoryChange(2)}/>
                                    <label htmlFor="">Shampoo</label>

                                    <input 
                                        type="checkbox" 
                                        name="category3" 
                                        id="category3" 
                                        value="3"
                                        checked={selectedCategory === 3}
                                        onChange={() => handleCategoryChange(3)}/>
                                    <label htmlFor="">Otros</label>
                                </form>
                            </div>

                            <div className='modal-buttons'>
                                <button className='cancel-button' onClick={handleClose}>Cerrar</button>
                                <button className='save-button' onClick={() => saveChanges()} >Guardar cambios</button>
                            </div>
                        </div>
                        }

                        
                    </div>
                </div>
            </Portal>
        )
    );
};

export default Modal;