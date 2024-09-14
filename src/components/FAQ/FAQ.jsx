import React from "react";
import FAQCard from "../FAQCard/FAQCard";
import { FAQs } from "../../data";
import './FAQ.css'

const FAQ = () => {
    return(
        <div className="faq-container">
            {FAQs.map((item, index) => (
                <FAQCard key={index} item={item}/>
            ))}
        </div>
    )
}

export default FAQ;