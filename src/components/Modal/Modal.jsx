import React, { useEffect, useRef, useState } from 'react';
import './Modal.css';
import Portal from '../Portal/Portal.jsx';
import Slider from 'react-slick';
import { deleteProduct, updateProduct, uploadProductImage } from '../Services/Services.jsx';
import GlobalModal from '../GlobalModal/GlobalModal.jsx';

const Modal = ({children, show, handleClose, item, mode}) => {

    const sliderRef = useRef();
    const user_type = sessionStorage.getItem("user_type");
    const [newTitle, setNewTitle] = useState(null);
    const [newContent, setNewContent] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [toDeleteProduct, setToDeleteProduct] = useState();
    const [isActive, setIsActive] = useState(false);
    const [deleteError, setDeleteError] = useState(false);
    const [uploadImage, setUploadImage] = useState(null);

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

    const toggleGlobalModal = () => {
        setIsActive(!isActive);
    }

    const handleDeleteModal = () => {
        setIsActive(!isActive);
        setDeleteError(false);
    };

    const handleDeleteProduct = async (productId) => {

        try {
            await deleteProduct(productId);
            window.location.href="/products";
        } catch (error) {
            setDeleteError(true);
        }
        
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const res = await uploadProductImage(file, item.productId);
            setUploadImage(res);
            window.location.href="/products";
        } catch (error) {
            console.error(error);
        }
    };

    console.log(item)

    useEffect(() => {
        if (item) {
            setNewTitle(item.name || "");
            setNewContent(item.content || "");
            setSelectedCategory(item.categoryId || null);
        }
    }, [item]);

    return (
        show && (
            <Portal>
                <>
                <div className="modal" onClick={handleClose}>
                    <div className="modal-main" onClick={(e) => e.stopPropagation()}> 
                        <img className='modal-close' src="./images/arrow-back.svg" alt="" onClick={handleClose}/>

                        {mode == 'show' ?
                        <div className='show-modal'>
                            <h5>{item.name}</h5>
                            <img src={item.imageUrl} alt="" />
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

                            <div className='images-container'>

                                <div>
                                    <img className='product_image' src={item.imageUrl} alt="" />
                                </div>
                                
                                <input 
                                    id='file-upload'
                                    type="file"
                                    accept='image/*'
                                    onChange={handleImageUpload}
                                    /*style={{display: 'none'}}*/
                                    />

                            </div>

                            <textarea name="" id="" className='edit-content' onChange={handleContentChange} >{item.content}</textarea>

                            <div>
                                
                            </div>
                            
                            <div className="category-container">
                                <div className="line-container">
                                    <span className="line"></span>
                                    <h4>Categoría</h4>
                                    <span className="line"></span>
                                </div>

                                <form action="" className='category-form'>

                                    <div className='category-item'>
                                        <label htmlFor="">Skincare</label>
                                        <input
                                            type="checkbox"
                                            name="category1"
                                            id="category1"
                                            value="1"
                                            checked={selectedCategory === 1}
                                            onChange={() => handleCategoryChange(1)}/>
                                    </div>

                                    <div className='category-item'>
                                        <label htmlFor="">Otros</label>
                                        <input
                                            type="checkbox"
                                            name="category2" 
                                            id="category2" 
                                            value="2"
                                            checked={selectedCategory === 2}
                                            onChange={() => handleCategoryChange(2)}/>
                                    </div>
                                    
                                    <div className='category-item'>
                                        <label htmlFor="">Shampoo</label>
                                        <input 
                                        type="checkbox" 
                                        name="category3" 
                                        id="category3" 
                                        value="3"
                                        checked={selectedCategory === 3}
                                        onChange={() => handleCategoryChange(3)}/>
                                    </div>
                                    
                                </form>
                            </div>

                            <div className='modal-buttons'>
                                <button className='cancel-button' onClick={handleClose}>Cancelar</button>
                                <button className='save-button' onClick={() => saveChanges()} >Guardar cambios</button>
                            </div>
                            
                            <div className='delete-product'>

                                <div className="line-container">
                                    <span className="line"></span>
                                    <h4>Eliminar producto</h4>
                                    <span className="line"></span>
                                </div>
                                
                                <p>¡Cuidado, una vez eliminado no hay vuelta atrás!</p>
                                <button onClick={toggleGlobalModal}>Eliminar producto</button>
                            </div>
                        </div>
                        }

                        
                    </div>
                </div>

                <GlobalModal show={isActive}>
                    <div className='delete-product-modal'>
                        <img src="/images/arrow-back.svg" alt="" className='modal-close' onClick={() => handleDeleteModal()}/>
                        <img className='warning' src="/images/warning-color.svg" alt="" />
                        <p>¿Estás seguro que deseas eliminar este producto?</p>

                        <div className='modal-buttons'>
                            <button  className={deleteError ? 'button-hide' : 'cancel-button'} onClick={() => toggleGlobalModal()}>Cancelar</button>
                            <button className={deleteError ? 'button-hide' : 'delete-button'} onClick={() => handleDeleteProduct(item.productId)}>Eliminar</button>

                            <p className={deleteError ? "signin-warning-active" : "signin-warning"}>Hubo un error al intentar borrar el producto.</p>
                        </div>

                    </div>
                </GlobalModal>
                </>

            </Portal>
        )
    );
};

export default Modal;