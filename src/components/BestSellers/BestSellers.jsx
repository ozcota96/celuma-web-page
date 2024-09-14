import React from "react";
import "./BestSellers.css"
import { BEST_SELLERS } from "../../data";
import BestSellerCard from "../BestSellerCard/BestSellerCard";

const BestSellers = ({}) => {
    return(
        <div className="best-sellers-container">
            <h3 className="best-sellers-title">Más vendidos</h3>

            <div className="best-sellers-content">
                {BEST_SELLERS.map((item) => (
                    <BestSellerCard key={item.title} details={item}/>
                ))}
            </div>

        </div>
    )
}

export default BestSellers;