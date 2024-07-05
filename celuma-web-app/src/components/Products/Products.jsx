import React from "react";
import './Products.css';
import { best_sellers, cabello, otros, skincare} from "../../products_data";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import { useRef } from 'react';

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
    return(
        <div className="products-wrapper">
            <div className="products-main">

                <div className="products-section">
                    {best_sellers.map((item, index) =>(
                        <div className="products-productcard">
                            <h5>#{index+1} más vendido</h5>
                            <ProductCard item={item}/>
                        </div>
                    ))}
                </div>

                <h5>Skincare</h5>
                <Slider ref={sliderRef} {...productsSlidersettings} className="slider products-section">
                    {skincare.map((item) => (
                            <div className="products-productcard">
                                <ProductCard item={item}/>
                            </div>
                        ))}
                </Slider>

                <h5>Cabello</h5>
                <Slider ref={sliderRef} {...productsSlidersettings} className="slider products-section">
                {cabello.map((item) => (
                        <div className="products-productcard">
                            <ProductCard item={item}/>
                        </div>
                    ))}
                </Slider>

                <h5>Otros</h5>
                <Slider ref={sliderRef} {...productsSlidersettings} className="slider products-section">
                {otros.map((item) => (
                        <div className="products-productcard">
                            <ProductCard item={item}/>
                        </div>
                    ))}
                </Slider>

            </div>


        </div>
    );
}

export default Products;