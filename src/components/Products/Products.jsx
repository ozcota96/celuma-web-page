import React, { useEffect, useState } from "react";
import './Products.css';
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import { useRef } from 'react';
import { getProducts } from "../Services/Services";

const Products = () => {

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

    const [products, setProducts] = useState([]);
    const [skincareProd, setSkincareProd] = useState([]);
    const [hair, setHairProd] = useState([]);
    const [otherProd, setOtherProd] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products_data = await getProducts();
                console.log("Fetched Products:", products_data);
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

    return(
            <div className="products-main">

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

    );
}

export default Products;