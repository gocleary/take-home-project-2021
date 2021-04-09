import React from 'react'

const EmployeeLinkWithPopover = ({ user, className
                                 }) => {
  return (
    <span className={className}>
      <span className='font-weight-500 link-color'>
        {user.firstName}
      </span>
    </span>
  )
}

export default EmployeeLinkWithPopover
