import React from 'react'
import './Result.css'
import { AiOutlineGift } from 'react-icons/ai'
import { GiPartyPopper } from 'react-icons/gi'
import questions from '../store/questions'

export default function Result({ correct }) {

  
  return (
    <div className='result'>
        <GiPartyPopper className='result_icon'/>
        <h2 className='result_text'>Вы отгадали {correct} ответа из {questions.length} </h2>
        <a href="/">
          <button className='result_btn'>Попробовать снова</button>
        </a>
    </div>
  )
}
