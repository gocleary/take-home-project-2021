import React from 'react'

const AnswersCount = ({ answersCount, showAnswers, showCursor = true }) => {
  const pointerClass = showCursor ? 'pointer' : ''

  if (showAnswers) {
    return <span className={pointerClass}>Hide Answers</span>
  }

  if (answersCount === 0) return <span className='text-secondary'>No Answers</span>

  let answerCountText = `${answersCount} Answers`

  if (answersCount === 1) {
    answerCountText = '1 Answer'
  }

  return <span className={pointerClass}>{answerCountText}</span>
}

export default AnswersCount
