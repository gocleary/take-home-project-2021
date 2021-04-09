import React from 'react'
import { Link } from 'react-router-dom'

import classNames from 'classnames'

import Card from 'components/common/card'

const EventCard = ({ event, index }) => {
  const { participantsCount } = event
  const isFirstEventInRow = index % 3 === 0
  const isLastEventInRow = (index + 1) % 3 === 0

  return (
    <div className={classNames('EventCard d-inline-block', { isFirstEventInRow, isLastEventInRow })}>
      <Card className='w-100' cardBodyClassName='EventCardBody d-flex flex-column justify-content-between'>
        <div>
          <h5 className='mb-0 truncate-text-at-2-lines'>
            <Link
              className='text-primary-link'
              to={`/events/${event.slug}`}
            >
              {event.title}
            </Link>
          </h5>
        </div>
      </Card>
    </div>
  )
}

export default EventCard
