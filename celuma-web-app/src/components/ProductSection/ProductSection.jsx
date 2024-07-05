import React from 'react';
import './ProductSection.css';
import ProductCard from '../ProductCard/ProductCard';
import { useRef } from 'react';
import Slider from 'react-slick';


const ProductSection = ({item}) => {

    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
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


    return ( 
        <div className="productsection-wrapper">
            <h5>{item.name}</h5>

            <div className="productsection-container">

                <Slider ref={sliderRef} {...settings} className='slider'>
                    {item.products.map((product) => (
                        <div>
                            <ProductCard item={product}/>
                        </div>
                    ))}
                </Slider>


            </div>
        </div>
    );
}

export default ProductSection;