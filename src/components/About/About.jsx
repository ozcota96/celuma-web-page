import React, { useState } from "react";
import { ABOUT } from "../../data";
import './About.css'
import AboutCard from "../AboutCard/AboutCard";

const About = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const showInfo = (value) => {
        setSelectedIndex(value);

    };

    return(
        <div className="about-wrapper">

            <img src="./images/celuma-logo.svg" alt="" />
            
            <h1>Acerca de nosotros</h1>
            <div className="about-container">
                <div className="about-sections">
                    {ABOUT.map((item, index) => (
                        <div key={index} onClick={() => showInfo(index)}>
                            <AboutCard 
                            item={item} 
                            key={index}
                            isActive={index===selectedIndex}
                            onClick={() => showInfo(index)}
                            />
                        </div>

                    ))}
                </div>

                <div className="about-content">
                    {
                    ABOUT[selectedIndex].content.includes('•') ? 
                    (
                        <ul>
                            {ABOUT[selectedIndex].content.split('•').map((bullet, index) => {
                                const trimmedBullet = bullet.trim();
                                return (
                                    <li key={index}>{index != 0 ? `• ${trimmedBullet}` : trimmedBullet}</li>
                                );
                            })}
                        </ul>
                    ) 
                    : 
                    (
                        <p>{ABOUT[selectedIndex].content}</p>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default About;