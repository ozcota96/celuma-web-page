import React from 'react';
import "./QuoteCard.css"

const QuoteCard = ({quote, author}) => {
    return ( 
        <div className='quotecard-container'>
            <p className='quotecard-quote'>{quote}</p>
            <p className='quotecard-author'>— {author}</p>
        </div>
    );
}

export default QuoteCard;