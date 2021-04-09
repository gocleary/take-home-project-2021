import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import questionSlice from 'redux/slices/questions'
import LoadingContainer from 'components/common/loadingContainer'
import QuestionForm from 'components/common/questionForm'
import EventPageQuestion from 'components/common/eventPageQuestion'
import Card from 'components/common/card'
import EventTitle from 'components/common/eventTitle'

const EventPage = ({
  event,
  isLoading,
}) => {
  const { eventId } = useParams()
  const dispatch = useDispatch()
  const { isQuestionFormVisible } = useSelector(questionSlice.selectors.getQuestionFormData())
  const { questions, meta: qnaQuestionsMeta } = useSelector(questionSlice.selectors.getQuestionsByEvent(eventId))

  useEffect(() => {
    // this ensures that the event page is loaded from the top
    // otherwise there is an issue with the event page loading from
    // the same location as the event list page location you scrolled to
    window.scrollTo(0, 0)

    dispatch(questionSlice.asyncActions.fetchAll(eventId))
  }, [eventId])

  const hasMoreQuestions = () => {
    // In theory we could probably just get away with only 'return questions.length < event.questionsCount'
    // However it feels a bit dirty not to use pagination though as this would rely on questionsCount (cached column on event)
    // always being 100% accurate

    if (qnaQuestionsMeta.queryParams.totalPages === null) {
      return questions.length < event.questionsCount
    } else {
      const { page, totalPages } = qnaQuestionsMeta.queryParams

      return page < totalPages
    }
  }

  const handleFetchQuestions = () => {
    const { queryParams } = qnaQuestionsMeta
    dispatch(questionSlice.asyncActions.fetchAll(eventId, { page: queryParams.page + 1, perPage: 10 }))
  }

  const EventContent = () => {
    const orderBy = 'createdAt'
    let sortedQuestions = _.sortBy(questions, orderBy).reverse()

    return (
      <>
        <div className='EventPage row'>
          <div className='col-lg-8'>
            <span className='d-flex d-lg-inline flex-column'>
              <span className='order-2'>
                <Card className='EventDetails'>
                  <div className='d-flex flex-column'>
                    <EventTitle event={event} />
                  </div>
                </Card>
              </span>
            </span>

            {isQuestionFormVisible && <QuestionForm event={event} />}

            <div className='mt-3'>
              {sortedQuestions.map(question => (
                <Card key={question.id} className='EventPage-questionListItem mb-3'>
                  <EventPageQuestion key={`question-${question.id}-list-item`} question={question}/>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='container mt-4'>
      <LoadingContainer isLoading={isLoading}>{EventContent}</LoadingContainer>
    </div>
  )
}

export default EventPage
