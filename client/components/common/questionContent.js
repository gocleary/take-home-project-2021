import React from 'react'

import FroalaRichTextView from 'components/common/froalaRichTextView'
import QuestionByLine from 'components/common/questionByLine'

const QuestionContent = (props) => {
  const { question } = props

  return (
    <div>
      <QuestionByLine
        question={question}
        className='text-small text-secondary mb-2'
      />

      <FroalaRichTextView
        record={question}
        recordType='question'
        richTextKey='content'
        className='QuestionContent break-word'
      />
    </div>
  )
}

export default QuestionContent
