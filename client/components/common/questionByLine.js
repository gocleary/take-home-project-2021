import React from 'react'
import moment from 'moment'

const QuestionByLine = (props) => {
  const { question, className = 'text-secondary' } = props

  const { creator, createdAt } = question

  const questionCreatedAt = moment(createdAt).fromNow()

  const questionCreatorContent = (
      <span className='mr-1'>
        <span className={className}>
          <span className='font-weight-500 link-color'>
            {creator.firstName}
          </span>
        </span>
      </span>
    )


  return (
    <div className={className}>
      Asked by {questionCreatorContent} {questionCreatedAt}
    </div>
  )
}

export default QuestionByLine
