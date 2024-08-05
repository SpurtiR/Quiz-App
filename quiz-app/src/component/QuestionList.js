import React from 'react'

export default function QuestionList({question,option,handleClick,currentAnswer}) {
  return (
    <>
    <h2>{question}</h2>
    <ul>{option.map((option,index)=><li key={index} onClick={()=>handleClick(option)} className={currentAnswer === option ? 'selected' : ''}>{option}</li>)}</ul>
    
    </>
  )
}
