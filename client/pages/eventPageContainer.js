import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useParams } from 'react-router-dom'

import eventSlice from 'redux/slices/events'
import EventPage from 'pages/eventPage'

const EventPageContainer = () => {
  const { eventId } = useParams()

  const dispatch = useDispatch()
  const { event, meta } = useSelector(eventSlice.selectors.getEventPageData(eventId))
  const isLoading = meta.isLoading || !event

  useEffect(() => {
    dispatch(eventSlice.asyncActions.fetch(eventId))
  }, [eventId])

  return (
    <Switch>
      <Route exact path='/events/:eventId'>
        <EventPage
          isLoading={isLoading}
          event={event}
        />
      </Route>
    </Switch>
  )
}

export default EventPageContainer
