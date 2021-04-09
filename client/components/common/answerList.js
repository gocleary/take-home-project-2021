import React from 'react'
import classNames from 'classnames'

import Answer from 'components/common/answer'

const AnswerList = ({ answers, className, isPreview = false }) => (
  <div className={classNames('AnswerList', className)}>
    {!_.isEmpty(answers) && (
      <div className='mt-3'>
        {answers.map(answer => (
          <div key={`answer-${answer.id}-list-item`} className='mb-4 pb-0'>
            <Answer answer={answer} isPreview={isPreview} />
          </div>
        ))}
      </div>
    )}
  </div>
)

export default AnswerList
