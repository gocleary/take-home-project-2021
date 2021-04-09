import React from 'react'

const EventTitle = ({ event }) => (
  <div className='d-flex'>
    <h1 className='col-md-12 truncate-text-at-2-lines EventTitle'>
      {event.title}
    </h1>
  </div>
)

export default EventTitle
