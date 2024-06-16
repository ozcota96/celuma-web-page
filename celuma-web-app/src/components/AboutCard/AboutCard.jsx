import React, { useState } from "react";
import './AboutCard.css'

const AboutCard = ({item, index, isActive, onClick}) => {

    return(
        <div className="aboutcard-container">

                <button 
                className={isActive ? "aboutcard-button active" : "aboutcard-button"}
                onClick={onclick}
                >
                    {item.section}
                </button>

        </div>
    )
}

export default AboutCard;