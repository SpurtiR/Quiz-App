import React, { useState } from 'react'
import QuestionList from  './QuestionList'

export default function Quiz() {
    const questions = [
        {
            "question": "A flashing red traffic light signifies that a driver should do what?",
            "option":["stop","speed up","proceed with caution","honk the horn"],
            "answer": "stop"
          }, {
            "question": "A knish is traditionally stuffed with what filling?",
            "option":["potato","creamed corn","lemon custard","aspberry jelly"],
            "answer": "potato"
          }, {
            "question": "A pita is a type of what?",
            "option":["fresh fruit","flat bread","French tart","friend bean dip"],
            "answer": "flat bread"
          }, {
            "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
            "option":["landscape","caricature","still life","Impressionism"],
            "answer": "caricature"
          }, {
            "question": "According to folklore, the 'jackalope' is an antlered version of what animal?",
            "option":["chicken","rabbit","moose","snake"],
            "answer": "rabbit"
          }, {
            "question": "According to Greek mythology, who was Apollo's twin sister?",
            "option":["Aphrodite","Artemis","Venus","Athena"],
            "answer": "Artemis"
          }, {
            "question": "According to legend, if you give someone the 'evil eye' what are you doing?",
            "option":["cursing them","blessing a child","counting money","passing time"],
            "answer": "cursing them"
          }          
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentAnswer,setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0)

    const handleClick=(option)=>{
        setCurrentAnswer(option)
        console.log(score)
        if(option === questions[currentQuestionIndex].answer){
            setScore(score + 1);
        }
    }

    const handleNextQuestion = () =>{
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null)
    }

  return (
    <>
    {currentQuestionIndex < questions.length ? <div> 
        <QuestionList question={questions[currentQuestionIndex].question}
                 option={questions[currentQuestionIndex].option}
                answer = {questions[currentQuestionIndex].answer} handleClick={handleClick} currentAnswer={currentAnswer}/>
        <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
    </div>
    : <div>
    <h3>Your Score is {score}</h3>
    </div>}
   
    </>
  )
}
