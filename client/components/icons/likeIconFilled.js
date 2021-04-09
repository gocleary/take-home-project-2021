import React from 'react'

const LikeIconFilled = ({ fill = 'var(--like-highlight-color)' }) => (
  <svg
    data-testid='cy_like_icon_filled'
    width='15px'
    height='13px'
    viewBox='0 0 15 13'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-329.000000, -2875.000000)'>
        <g transform='translate(328.000000, 2873.000000)'>
          <rect fill='#000000' fillRule='nonzero' opacity='0' x='0' y='0' width='17' height='17' />
          <path
            d='M8.5,14.875 C8.31174806,14.8760767 8.13080854,14.80216 7.99715057,14.669566 L2.4941364,9.15858517 C1.05751009,7.70671399 1.05751009,5.36864941 2.4941364,3.91677823 C3.94258561,2.47218503 6.28665307,2.47218503 7.73510228,3.91677823 L8.5,4.6817987 L9.26489772,3.91677823 C10.7133469,2.47218503 13.0574144,2.47218503 14.5058636,3.91677823 C15.9424899,5.36864941 15.9424899,7.70671399 14.5058636,9.15858517 L9.00284943,14.669566 C8.86919146,14.80216 8.68825194,14.8760767 8.5,14.875 Z'
            fill={fill}
          />
        </g>
      </g>
    </g>
  </svg>
)

export default LikeIconFilled
