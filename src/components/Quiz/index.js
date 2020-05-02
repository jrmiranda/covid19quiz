import React, { useState } from 'react'
import questions from 'questions'
import Question from 'components/Question'
import Result from 'components/Result'

const Quiz = () => {
  const nTotal = questions.length;
  const [active, setActive] = useState(0);
  const [answers, setAnswers] = useState(Array(nTotal).fill(null));
  const [finished, setFinished] = useState(0);

  const handleSelect = (questionIndex, value) => {
    let ans = answers
    ans[questionIndex] = value
    setAnswers(ans)
  }

  const handleNext = (i) => {
    let next = i+1;

    if (questions[next] === undefined)
      return false

    if (questions[next].dependsOn !== undefined) {
      if (answers[questions[next].dependsOn] !== questions[next].dependsOnValue) {
        next = i+2
      } else {
        next = i+1
      }
    }
    setActive(next)
  }

  const handlePrev = (i) => {
    let prev = i-1;

    if (questions[prev] === undefined)
      return false

    if (questions[prev].dependsOn !== undefined) {
      if (answers[questions[prev].dependsOn] !== questions[prev].dependsOnValue) {
        prev = i-2
      } else {
        prev = i-1
      }
    }
    setActive(prev)
  }

  if (!finished)
    return (
      <div>
        {questions.map((question, i) => (
          <Question
            key={i}
            index={i}
            question={question}
            active={active===i}
            total={nTotal-1}
            onSelect={handleSelect}
            onPrev={() => handlePrev(i)}
            onNext={() => handleNext(i)}
            onFinish={() => setFinished(1)}
          />
        ))}
      </div>
    )
  
  return (
    <Result answers={answers} />
  )
}

export default Quiz;