import React from 'react'

const EmployeeMiniCard = (props) => {
  const {
    employee: { preferredFullName, title },
    additionalContent,
    padding = '2',
    onMouseEnter,
    onMouseLeave,
  } = props

  return (
    <div
      className={`EmployeeMiniCard p-${padding}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='EmployeeMiniCard-content position-relative'>
        <div className='text-primary font-weight-500 truncate-text-at-1-lines'>{preferredFullName}</div>

        <div className='text-secondary text-small truncate-text-at-1-lines'>{title}</div>

        {additionalContent}
      </div>
    </div>
  )
}

export default EmployeeMiniCard
