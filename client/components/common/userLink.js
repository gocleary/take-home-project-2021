import React from 'react'
import { Link } from 'react-router-dom'

import classNames from 'classnames'

const UserLink = ({ user, targetId, showLinkColor, customClassName }) => {
  const className = customClassName || classNames(
    'font-weight-500', showLinkColor || 'link-color'
  )

  return (
        <span className='font-weight-500'>
          {user.firstName}
        </span>
  )
}

export default UserLink
