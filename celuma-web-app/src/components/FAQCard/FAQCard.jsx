    import React, { useState } from "react";
    import './FAQCard.css'

    const FAQCard = ({item}) => {

        const [visibility, setVisibility] = useState(false);

        const toggleVisibility = () => {
            setVisibility(!visibility);
        };

        return(
            <div className="faqcard-container">

                <div className="faq-question" onClick={toggleVisibility}>
     
                        <p>{item.question}</p>
                        <img className="down-arrow" src="./images/down-arrow.svg" alt="down-arrow" />

                </div>

                <div className={`faq-answers ${visibility ? 'visible' : ''}`}>
                {item.answers.map((answer, index) => (
                    <p key={index}>- {answer.answer}</p>
                ))}
            </div>
            </div>
        );
    }

    export default FAQCard;