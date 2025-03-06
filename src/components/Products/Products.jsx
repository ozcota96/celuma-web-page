import React, { useEffect, useState } from "react";
import './Products.css';
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import { useRef } from 'react';
import { getProducts, newProduct } from "../Services/Services";
import GlobalModal from "../GlobalModal/GlobalModal";
import Modal from "../Modal/Modal";


const Products = () => {

    const sliderRef = useRef();
    const [activeModal, setActiveModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [list, setList] = useState(false);
    const [modal, setModal] = useState(true)

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

    const [products, setProducts] = useState([]);
    const [skincareProd, setSkincareProd] = useState([]);
    const [hair, setHairProd] = useState([]);
    const [otherProd, setOtherProd] = useState([]);

    const [newProdName, setNewProdName] = useState('');
    const [newProdContent, setNewProdContent] = useState('');
    const [newProdCategory, setNewProdCategory] = useState();
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false)
    const [currentItem, setCurrentItem] = useState("");


    useEffect(() => {
        const fetchProducts = async () => {

            try {
                const products_data = await getProducts();
                setProducts(products_data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        setSkincareProd(products.filter(prod => prod.categoryId === 1));
        setHairProd(products.filter(prod => prod.categoryId === 2));
        setOtherProd(products.filter(prod => prod.categoryId === 3));
    }, [products]);

    const toggleGlobalModal = () => {
        setActiveModal(!activeModal);
    };
    
    const handleClose = () => {
        setActiveModal(!activeModal);
        setErrors(" ");
    }

    const handleTitleChange = (e) => {
        setNewProdName(e.target.value);
    }

    const handleContentChange = (e) => {
        setNewProdContent(e.target.value);
    }

    const handleCategoryChange = (category) => {
        setNewProdCategory(category);
    }
    
    const handleNewProduct = async (event) => {

        event.preventDefault();
        
        try {
            const product = await newProduct( newProdName, newProdContent, newProdCategory);
            window.location.href="/products"
        } catch (error) {
            if (error.response && error.response.data) {
                setErrors(error.response.data);
            } else {
                console.log("An unexpected error ocurred", error);
                
            }
            
        }
    }

    const displayList = () => {
        setList(!list);
    };

    const displayCategory = (categoryId) => {
        switch (categoryId) {
            case 1:
                return 'Skincare'
                break;
            case 2:
                return 'Shampoo'
                break;
            case 3:
                return 'Otros'
                break;
            default:
                break;
        }
    };

    const toggleModal = (item) => {
        setShowModal(!showModal);
        setCurrentItem(item);
    };

    const handleModalClose = () => {
        setShowModal(!showModal)
    };

    useEffect(() => {
        const user_type = sessionStorage.getItem('user_type');
        setIsAdmin(user_type === "1");
    }, []);

    
    return(
        <>

            <div className="products-main">
                {isAdmin == true ?
                <div className="products-options">
                    <div className="products-option" onClick={toggleGlobalModal}>
                        <img src="/images/add-button.svg" alt=""/>
                    </div>
                    <div className="products-option">
                        <img src={list == true ? "/images/grid.svg" : "/images/list.svg"} alt=""  onClick={displayList}/>
                    </div>
                </div>
                :
                ""
                }

                {list == false ?
                <div className="products-carousel">
                    <h5>Skincare</h5>
                    <Slider ref={sliderRef} {...productsSlidersettings} className="slider products-section">
                        {skincareProd.map((prod, index) => (
                                <div key={index} className="products-productcard">
                                    <ProductCard item={prod}/>
                                </div>
                            ))}
                    </Slider>

                    <h5>Cabello</h5>
                    <Slider ref={sliderRef} {...productsSlidersettings} className="slider products-section">
                        {hair.map((prod, index) => (
                                <div key={index} className="products-productcard">
                                    <ProductCard item={prod}/>
                                </div>
                            ))}
                    </Slider>

                    <h5>Otros</h5>
                    <Slider ref={sliderRef} {...productsSlidersettings} className="slider products-section">
                        {otherProd.map((prod, index) => (
                                <div key={index} className="products-productcard">
                                    <ProductCard item={prod}/>
                                </div>
                            ))}
                    </Slider>
                </div>

                :

                <div className="products-table-container">
                    <table className="products-table">
                        <tr>
                            <td>Id</td>
                            <td>Nombre</td>
                            <td>Categoría</td>
                            <td>Acciones</td>
                        </tr>  

                        {products.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td className="products-edit-options">{item.productId}</td>
                                    <td className="products-edit-options">{item.name}</td>
                                    <td className="products-edit-options">{displayCategory(item.categoryId)}</td>
                                    <td className="products-edit-options" id={item.id}>
                                        <button className="edit-user"><img src="./images/edit.svg" alt="" onClick={() => toggleModal(item)}/></button>   
                                    </td>
                                </tr>
                        )
                    }
                    )}
                                            
                    </table>

                </div>
                }
            </div>

            <GlobalModal option={"Salir"} show={activeModal} handleClose={() => setActiveModal(false)}>


                    <div className="new-product-container">


                        <div>
                            <span className="line"></span>
                            <p>Agregar un producto</p>
                            <span className="line"></span>
                        </div>

                        <form action="" className="new-product-form" onSubmit={handleNewProduct}>
                            <label htmlFor="">Nombre: </label>
                            <input type="text" name="" id="" required onChange={handleTitleChange}/>

                            <label htmlFor="">Contenido: </label>
                            <textarea name="" id="" maxLength={250} rows={10} cols={50} required onChange={handleContentChange}></textarea>

                            <div>

                                <h4>Categoría</h4>
                                <input
                                type="radio"
                                name="category"
                                id="category1"
                                value="1"
                                onChange={() => handleCategoryChange(1)}
                                required
                                />
                                <label htmlFor="">Skincare</label>

                                <input
                                    type="radio"
                                    name="category" 
                                    id="category2" 
                                    value="2"
                                    onChange={() => handleCategoryChange(2)}
                                    />
                                <label htmlFor="">Shampoo</label>

                                <input 
                                    type="radio" 
                                    name="category" 
                                    id="category3" 
                                    value="3"
                                    onChange={() => handleCategoryChange(3)}
                                    />
                                <label htmlFor="">Otros</label> 
                            </div>

                            <div className="new-product-buttons">
                                    <button className="cancel-button" onClick={handleClose}>Cancelar</button>
                                    <button className="save-button" type="submit" >Guardar productos</button>
                            </div>


                        </form>

                        <div className={Object.keys(errors).length > 0 ? "new-product-warning-active" : " "}>
                            {errors.name && <p>{errors.name}</p>}
                            {errors.content && <p>{errors.content}</p>}
                            {errors.category && <p>{errors.category}</p>}
                        </div>

                    </div>

            </GlobalModal>

            <Modal show={showModal} item={currentItem} handleClose={handleModalClose}>
                
            </Modal>

            
        </>

            

    );
}

export default Products;