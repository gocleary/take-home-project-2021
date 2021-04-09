import React from 'react'

import classNames from 'classnames'

const ImageIcon = ({ fill = 'var(--white-pure)', className }) => (
  <span className={classNames('ImageIcon d-inline-block', className)}>
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill={fill}>
      <g>
        <g data-name='image'>
          <rect width='24' height='24' opacity='0' />
          <path d='M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1zm12 14H6.56l7-5.84a.78.78 0 0 1 .93 0L19 17v1a1 1 0 0 1-1 1z' />
          <circle cx='8' cy='8.5' r='1.5' />
        </g>
      </g>
    </svg>
  </span>
)

export default ImageIcon
