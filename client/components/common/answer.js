import React  from 'react'

import AnswerContent from 'components/common/answerContent'

const Answer = ({ answer }) => {
  return (
    <div className='mt-4 position-relative'>
      <AnswerContent answer={answer}/>
    </div>
  )
}

export default Answer
