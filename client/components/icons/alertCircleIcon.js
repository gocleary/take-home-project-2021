import React from 'react'

import classNames from 'classnames'

const AlertCircleIcon = ({ fill = 'var(--white-pure)', className }) => (
  <span className={classNames('AlertCircleIcon d-inline-block', className)}>
    <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='inherit'>
      <g data-name='Layer 2'>
        <g data-name='alert-circle'>
          <rect width='24' height='24' opacity='0' />
          {/* fill: white, fillOpacity: 0.5 neccessary so the enclosing circle is transparent */}
          <path d='M 12 2 a 10 10 0 1 0 10 10 A 10 10 0 0 0 12 2 z z' fill='white' fillOpacity='0.5' />
          <circle cx='12' cy='16' r='1' />
          <path d='M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z' />
        </g>
      </g>
    </svg>
  </span>
)

export default AlertCircleIcon
