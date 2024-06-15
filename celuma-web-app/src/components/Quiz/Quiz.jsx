import React, { useState } from "react";
import './Quiz.css';
import { QUIZ_QUESTIONS } from "../../data";
import QuizCard from "../QuizCard/QuizCard";

const Quiz = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(QUIZ_QUESTIONS.length).fill(null));
    const [counters, setCounters] = useState({a: 0, b: 0, c: 0, d: 0});
    const [showResult, setShowResult] = useState(false);
    
    const handleOptionSelect = (option) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[currentIndex] = option;
        setSelectedAnswers(newAnswers);
    };

    const addIndex = () => {
        if (selectedAnswers[currentIndex] !== null) {
            const answer = QUIZ_QUESTIONS[currentIndex].answers[selectedAnswers[currentIndex]].type;
            setCounters((prevCounters) => ({
                ...prevCounters,
                [answer]: prevCounters[answer] + 1,
            }));

            if (currentIndex === QUIZ_QUESTIONS.length - 1) {
                setShowResult(true);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        } else {
            alert("Selecciona una opción.");
        }
    };

    const subIndex = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const calculateResult = () => {
        const { a, b, c, d } = counters;
        if (a > b && a > c && a > d) return "NORMAL";
        if (b > a && b > c && b > d) return "SECA";
        if (c > a && c > b && c > d) return "GRASA";
        if (d > a && d > b && d > c) return "MIXTA";
        return "No clear result"; // default case, should never hit if data is balanced
    };

    return(
        <div className="quiz-wrapper">
            <h1>Quiz</h1>
            <div className="quiz-container">
                {!showResult ? (
                    QUIZ_QUESTIONS.map((question, index) => (
                        <div
                            key={index}
                            className={index === currentIndex ? "quiz-card-active" : "quiz-card"}
                        >
                            <QuizCard
                                item={question}
                                index={index}
                                onOptionSelect={handleOptionSelect}
                                selectedOption={selectedAnswers[index]}
                            />
                        </div>
                    ))
                ) : (
                    <div className="result-container">
                        <h2>Resultado</h2>
                        <p>Tu tipo de piel es: {calculateResult()}</p>
                    </div>
                )}
                {!showResult && (
                    <div className="botones">
                        <button
                            onClick={subIndex}
                            className={currentIndex === 0 ? "disabled" : "boton-quiz active"}
                        >
                            Atrás
                        </button>
                        <button onClick={addIndex} className="addIndex boton-quiz">
                            {currentIndex === QUIZ_QUESTIONS.length - 1 ? "Enviar" : "Siguiente"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Quiz;