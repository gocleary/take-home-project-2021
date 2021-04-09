import React from 'react'

import classNames from 'classnames'

const PlusIcon = ({ fill = 'var(--gray)', className }) => (
  <span className={classNames('PlusIcon d-inline-block', className)}>
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill={fill}>
      <g data-name='Layer 2'>
        <g data-name='plus'>
          <rect width='24' height='24' transform='rotate(180 12 12)' opacity='0' />
          <path d='M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z' />
        </g>
      </g>
    </svg>
  </span>
)

export default PlusIcon
