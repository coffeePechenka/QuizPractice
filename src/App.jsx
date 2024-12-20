
import { useEffect, useState } from 'react'
import './App.css'
import Game from './components/Game/Game'
import Result from './components/Result/Result'
import questions from './components/store/questions'

function App() {

  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  useEffect(() => {
  console.log(correct)
  }, [correct])

  const question = questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1)

    if(index == question.correct) {
      setCorrect( correct + 1)
    }

  }


  return (


    <div className='App'>
      {
        step != questions.length ? ( <Game step={step} question={question} onClickVariant={onClickVariant} /> )
        : (
        <Result correct={correct} />
        )
    }
    </div>
  )
}

export default App
