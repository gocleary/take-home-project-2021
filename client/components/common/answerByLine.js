import React from 'react'
import moment from 'moment'

const AnswerByLine = ({ answer, className }) => {
  const { createdAt, creator } = answer

  const answerCreator = (
    <span className={className}>
      <span className='font-weight-500 link-color'>
        {creator.firstName}
      </span>
    </span>
  )
  const answerCreatedAt = moment(createdAt).fromNow()

  return (
    <div className={className || 'text-secondary'}>
      Answered by {answerCreator} {answerCreatedAt}
    </div>
  )
}

export default AnswerByLine
