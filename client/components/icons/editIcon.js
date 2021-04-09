import React from 'react'
import classNames from 'classnames'

const EditIcon = ({ width, height, className }) => (
  <svg
    width={width}
    height={height}
    className={classNames('EditIcon', className)}
    viewBox='0 0 19 19'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-784.000000, -396.000000)' fill='#73777A'>
        <path
          d='M790.990778,395 C790.443586,395 790,395.449949 790,396.006845 L790,409 L796,409 L796,396.006845 C796,395.45078 795.549025,395 795.009222,395 L790.990778,395 Z M790,411 L796,411 L793,418 L790,411 Z'
          transform='translate(793.000000, 406.500000) rotate(-315.000000) translate(-793.000000, -406.500000) '
        />
      </g>
    </g>
  </svg>
)

export default EditIcon
