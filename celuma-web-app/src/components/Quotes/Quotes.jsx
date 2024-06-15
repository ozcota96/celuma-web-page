import React from "react";
import { QUOTES } from "../../data";
import QuoteCard from "../QuoteCard/QuoteCard";
import './Quotes.css'

const Quotes = () => {
    return(
        <div className="quotes-container">
            {QUOTES.map((item, index) => (
                <QuoteCard key={index} author={item.author} quote={item.quote}/>
            ))}
        </div>
    )
}

export default Quotes;