import React from 'react'
import classNames from 'classnames'

const HeartCircleIcon = ({ width = '14', height = '14', className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
    className={classNames('HeartCircleIcon', className)}
  >
    <circle cx='7' cy='7' r='7' />
    <path
      d='M7 11L6.41992 10.504C4.35996 8.71118 3 7.54758 3 6.09809C3 4.91549 3.95996 4 5.2 4C5.89998 4 6.55994 4.30519 7 4.80112C7.44004 4.30519 8.09998 4 8.8 4C10.04 4 11 4.91549 11 6.09809C11 7.5476 9.64002 8.7112 7.58008 10.504L7 11Z'
      fill='white'
    />
  </svg>
)

export default HeartCircleIcon
