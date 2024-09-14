import React from "react";
import "../Carousel/Carousel.css";
import Slider from "react-slick";

const Carousel = ({images}) => {

    const carouselSlidersettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 80,
    pauseOnHover: true,
    };

    return(
        <div className="carousel-container">

            <Slider {...carouselSlidersettings}>
                {images.map((item, index) => (
                    <div key={index} className="carousel-card">
                        <img src={item.image} alt={item.title} />
                    </div>
                ))}
            </Slider>


        </div>
    )

}

export default Carousel;