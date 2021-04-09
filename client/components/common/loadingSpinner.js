import React from 'react'

import classNames from 'classnames'

const LoadingSpinner = ({ className }) => (
  <div className={classNames('container mt-4', className)}>
    <div className='LoadingSpinner' />
  </div>
)

export default LoadingSpinner
