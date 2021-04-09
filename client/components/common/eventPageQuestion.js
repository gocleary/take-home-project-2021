import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useMouseLeave from 'use-mouse-leave'

import classNames from 'classnames'
import answerSlice from 'redux/slices/answers'
import questionSlice from 'redux/slices/questions'
import isMobile from 'utils/isMobile'

import QuestionContent from 'components/common/questionContent'
import AnswerForm from 'components/common/answerForm'
import AnswerList from 'components/common/answerList'
import LoadingIndicator from 'components/common/circlesLoadingIndicator'
import { Button } from 'components/common/buttons/button'
import AnswersCount from 'components/common/answersCount'

const EventPageQuestion = ({ question }) => {
  const dispatch = useDispatch()
  const [showAnswers, setShowAnswers] = useState(false)
  const [answersFetched, setAnswersFetched] = useState(false)
  const [answerCountHover, setAnswerCountHover] = useState(false)

  const questionContainerRef = useRef()
  const answerSliceData = useSelector(answerSlice.selectors.getAnswerFormData())
  const [mouseLeft, answerCountButtonRef] = useMouseLeave()

  const { isAnswerFormVisible, newAnswerIds } = answerSliceData
  const questionSliceData = useSelector(questionSlice.selectors.getQuestionPageData(question.id))
  const {
    meta: { isLoadingAnswers },
    currentQuestionId,
  } = answerSliceData
  const answers = questionSliceData.question.answers ?? []
  const answersCount = answers.length
  const shouldDisplayAnswerCountHoverBackground = answerCountHover && answersCount > 0

  const showHorizonalRule = showAnswers
  const isQuestionBeingAnswered = question.id === currentQuestionId
  const showAnswerQuestionButtonAndCount = (!isAnswerFormVisible && isQuestionBeingAnswered) || (!isQuestionBeingAnswered)

  const fetchAndToggleAnswers = (questionId) => {
    if (answers.length === 0) return

    if (answersFetched) {
      setShowAnswers(!showAnswers)
      return
    }

    dispatch(answerSlice.actions.resetNewAnswerIds())
    dispatch(answerSlice.actions.resetAnswerForm())

    dispatch(answerSlice.asyncActions.fetchAnswers(questionId)).then(() => {
      setShowAnswers(true)
      setAnswersFetched(true)
    })
  }

  const showAnswerForm = (questionId) => {
    dispatch(answerSlice.actions.resetAnswerForm())
    dispatch(answerSlice.actions.isAnswerFormVisible(true))
    dispatch(answerSlice.actions.setCurrentQuestionId(questionId))
  }

  const showAnswerFormHandler = (ev, questionId) => {
    ev.stopPropagation()

    showAnswerForm(questionId)
  }

  useEffect(
    () => () => {
      dispatch(answerSlice.actions.isAnswerFormVisible(false))
      dispatch(answerSlice.actions.resetNewAnswerIds())
      dispatch(answerSlice.actions.setCurrentQuestionId(null))
    },
    []
  )

  useEffect(() => {
    if (mouseLeft) {
      setAnswerCountHover(false)
    }
  }, [mouseLeft])

  const AnswerThisQuestionButtonAndAnswerCount = () => (
    <>
      <span className='d-flex d-md-inline-block justify-content-between mt-3 mb-2'>
          <Button
            className='mr-0 mr-md-3 btn-muted'
            onClick={ev => showAnswerFormHandler(ev, question.id)}
            disabled={isAnswerFormVisible && isQuestionBeingAnswered}
          >
            Answer This Question
          </Button>
      </span>
      <span
        className={classNames('text-small pill-button', shouldDisplayAnswerCountHoverBackground && 'pill-button-active', answersCount === 0 && 'cursor-default')}
        onClick={() => fetchAndToggleAnswers(question.id)}
        {...{
          ...(!isMobile() && { ref: answerCountButtonRef, onMouseEnter: () => setAnswerCountHover(true) }),
        }}
      >
        <AnswersCount answersCount={answersCount} showAnswers={showAnswers} />
      </span>
    </>
  )

  return (
    <div ref={questionContainerRef}>
      <div className='d-flex'>
        <div className='mr-3' style={{ width: '100%' }}>
          <QuestionContent question={question} />
          <div>
            {showAnswerQuestionButtonAndCount && <AnswerThisQuestionButtonAndAnswerCount />}
          </div>

          {isAnswerFormVisible && isQuestionBeingAnswered && <AnswerForm question={question} className='mt-3' />}

          {showHorizonalRule && <hr className='my-3' />}

          {isLoadingAnswers && question.id === currentQuestionId && <LoadingIndicator />}

          {showAnswers && <AnswerList answers={answers} />}
        </div>
      </div>
    </div>
  )
}

export default EventPageQuestion
