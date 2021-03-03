import questions from './QuizComponentList.js';
import './QuizComponent.css';
import React, { useState } from "react";

const QuizComponent = (props)=>{
   

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [recordedScore, setRecordedScore] = useState(0);

    const resetStateClick =()=>{

        setRecordedScore(score)
        setCurrentQuestion(0)
        setShowScore(false)
        setScore(0)
        
    }

    //Adds 1 to Current Question//
    const handleAnswerClick = (isCorrect)=>{
        //Check if true or false//
        if(isCorrect===true){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion +1;
        //Check End of Questions//
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true);
        }
    }

    return(
        //Ternary fire, dynamically display Score, loop through array.
        <div className="quiz-container"> 
                <h1>Check Learning</h1>
                <br/>
                {showScore ? 
                (<div className="score">You scored {score} out {questions.length}<button className="quiz-button" onClick={resetStateClick}>Retry</button></div>) :

                (<div>
                    <div className="quiz-count"><span>Question {currentQuestion+1}</span>/{questions.length}</div>
                    <div className="quiz-question">{questions[currentQuestion].questionText}</div>
                    <br/>
                    <div className="quiz-options">
                        {questions[currentQuestion].answerOptions.map((answerOptions)=> (
                        <button className="quiz-button"onClick= {()=> handleAnswerClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                        ))}
                    </div>
                    <br/>
                    <div>
                        <p>Your Last Score: {recordedScore}</p>
                    </div>
                </div>
            )}
        </div>
        );
}

export default QuizComponent;