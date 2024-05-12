import React, { useEffect, useState } from "react";
import "../Carousel/Carousel.css";

const Carousel = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut = 
        autoPlay && 
        setTimeout(() => {
            addIndex();
        }, 2500);
    });

    const addIndex = () => {
        if (currentIndex === 3) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
        return setCurrentIndex;
    }

    const subIndex = () => {
        if (currentIndex === 0) {
            setCurrentIndex(3);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
        return setCurrentIndex;
    }

    return (
    <div className="carousel"
    onMouseEnter={() => {
        (setAutoPlay(false));
        clearTimeout(timeOut);
    }}
    onMouseLeave={() => {
        (setAutoPlay(true))
    }}
    >

        <div className="carousel-wrapper">
            {images.map((image, index) => {
                return(
                <div 
                key={index}
                className={
                    index === currentIndex
                    ? "carousel-card carousel-card-active"
                    : "carousel-card"
                }
                >
                    <button className='carousel-control-prev' onClick={subIndex}>
                        <span>&lt;</span>
                    </button>

                    <img className="card-image" src={image.image} alt="" onClick={addIndex}/>

                    <button className='carousel-control-next' onClick={addIndex}>
                        <span>&gt;</span>
                    </button>

                    <div className="carousel_pagination">
                        {images.map((_, index) => {
                            return(
                                <div key={index}
                                className={
                                    index === currentIndex
                                    ? "pagination-dot pagination-dot-active"
                                    : "pagination-dot"
                                }
                                onClick={() => setCurrentIndex(index)}
                                >

                                </div>
                            )
                        })}
                    </div>
                </div>
                ) 
            })}
        </div>

    </div>
    )
}

export default Carousel;