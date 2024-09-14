import React from "react";
import "./QuizCard.css";

const QuizCard = ({item, index, onOptionSelect}) => {

    const handleOptionChange = (event) => {
        onOptionSelect(event.target.value);
    }

    return(

        <div className="card" key={index}>
            {item.question}

            <ul>
                {item.answers.map((answerObject, answerIndex) => {
                    return(
                        <li key={answerIndex}>
                            <input 
                            type="radio" 
                            id={`answer_${answerIndex}`}
                            name={`question_${index}`}
                            value={answerIndex}
                            className="custom-radio"
                            onChange={handleOptionChange}
                            />
                            <label htmlFor={`answer_${answerIndex}`}>{answerObject.answer}</label>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
};

export default QuizCard;