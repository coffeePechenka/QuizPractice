import React from 'react'
import './Game.css'
import questions from '../store/questions'

export default function Game({ question, onClickVariant, step }) {

  const percentage = Math.round((step / questions.length) * 100)

  return (
    <div className='game'>
        <div className="progress_bar">
            <div style={{ width: `${percentage}%` }} className="progress_line"></div>
        </div>
        
        <div className="content_bar">

            <h1 className='game_question'>{question.title} </h1>
            <ul className='answer_bar'>
                {
                  question.variants.map((text, index) => (
                    <li onClick={() => onClickVariant(index)} key={text} className='question'>{text} </li>
                  ))
                }  
              
            </ul>

        </div>
    </div>
  )
}
