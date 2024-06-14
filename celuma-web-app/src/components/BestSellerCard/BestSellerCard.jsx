import React from "react";
import "./BestSellerCard.css";

const BestSellerCard = ({details}) => {
    return(
        <div className="best-seller">
            <img src={details.image} alt="" />

            <div>
                <h1>{details.title}</h1>

                <p className="best-seller-description">
                    {details.description}
                    
                </p>
            </div>
        </div>
    )
};

export default BestSellerCard;