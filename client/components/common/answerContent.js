import React from 'react'
import classNames from 'classnames'

import FroalaRichTextView from 'components/common/froalaRichTextView'
import AnswerByLine from 'components/common/answerByLine'

const AnswerContent = ({
  answer, className, children,
}) => {
  return (
    <div className={classNames('AnswerContent d-flex', className)}>
      <div className='d-flex flex-column flex-grow-1'>
        <AnswerByLine answer={answer} className='mb-2 text-small text-secondary' />

        <FroalaRichTextView record={answer} recordType='answer' richTextKey='content' className='break-word' />

        {children}
      </div>
    </div>
  )
}

export default AnswerContent
