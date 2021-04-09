import React from 'react'
import classNames from 'classnames'

const ListToggle = ({ className = '', fill = 'var(--highlight-color)' }) => (
  <svg className={classNames('ListToggleIcon mr-1', className)} height='8' width='8' fill={fill}>
    <polygon points='0,0 0,8 8,4' />
  </svg>
)

export default ListToggle
