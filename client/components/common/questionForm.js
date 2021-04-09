import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import questionSlice from 'redux/slices/questions'

import FroalaEditor from 'components/common/froalaEditor'
import Card from 'components/common/card'
import CancelButton from 'components/common/cancelButton'
import { Button } from 'components/common/buttons/button'

const QuestionForm = (props) => {
  const { event } = props
  const {
    pendingQuestionContent,
    meta: { isLoading },
  } = useSelector(questionSlice.selectors.getQuestionFormData())
  const dispatch = useDispatch()

  const hideQuestionFormHandler = () => dispatch(questionSlice.actions.isQuestionFormVisible(false))
  const setQuestionContentHandler = content => dispatch(questionSlice.actions.updatePendingQuestionContent(content))
  const createQuestionHandler = () => {
    const questionParams = {
      eventId: event.id,
      question: {
        content: pendingQuestionContent,
      },
    }

    dispatch(questionSlice.asyncActions.createQuestion(questionParams, event))
  }

  const justifyContent = 'justify-content-end'

  return (
    <Card className='QuestionForm my-4'>
      <p className='mb-3'>Ask a question</p>

      <Card cardBodyClassName='pt-0' hasBoxShadow={false} hideBorder={false}>
        <FroalaEditor
          onChange={setQuestionContentHandler}
          html={pendingQuestionContent}
          className='FroalaEditor QuestionFormFroalaEditor'
          focusOnInitialize
          hideFontControls
        />
      </Card>

      {
        // flex column in mobile
        // flex in medium devices and up
      }
      <div className={`d-flex ${justifyContent} mt-3 alig-items-center flex-column flex-md-row`}>
        {
          // display: flex in mobile
          // display: block medium devices and up
        }
        <div className='form-group text-right m-0 d-flex d-md-block justify-content-between mt-3 mt-md-0'>
          <CancelButton
            className='position-relative'
            onClick={hideQuestionFormHandler}
          />

          <Button className='ml-3' onClick={createQuestionHandler} disabled={isLoading || !pendingQuestionContent}>
            Submit question
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default QuestionForm
