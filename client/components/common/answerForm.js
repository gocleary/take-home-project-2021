import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import answerSlice from 'redux/slices/answers'

import FroalaEditor from 'components/common/froalaEditor'
import Card from 'components/common/card'
import CancelButton from 'components/common/cancelButton'
import { Button } from 'components/common/buttons/button'

const AnswerForm = ({ question, className }) => {
  const dispatch = useDispatch()

  const {
    pendingAnswerContent,
    meta: { isLoading },
  } = useSelector(answerSlice.selectors.getAnswerFormData())

  const hideAnswerFormHandler = () => dispatch(answerSlice.actions.isAnswerFormVisible(false))
  const setAnswerContentHandler = content => dispatch(answerSlice.actions.updatePendingAnswerContent(content))
  const createAnswerHandler = () => {
    const answerParams = {
      questionId: question.id,
      answer: {
        content: pendingAnswerContent,
      },
    }

    dispatch(answerSlice.asyncActions.createAnswer(answerParams, question))
  }

  return (
    <>
      <Card cardBodyClassName='pt-0' className={className} hasBoxShadow={false} hideBorder={false}>
        <FroalaEditor
          className='FroalaEditor AnswerFormFroalaEditor'
          onChange={setAnswerContentHandler}
          html={pendingAnswerContent}
          focusOnInitialize
          hideFontControls
        />
      </Card>

      <div className='form-group text-right mt-3'>
        <CancelButton onClick={hideAnswerFormHandler} />

        <Button className='ml-3' onClick={createAnswerHandler} disabled={isLoading || !pendingAnswerContent}>
          Submit Answer
        </Button>
      </div>
    </>
  )
}

export default AnswerForm
