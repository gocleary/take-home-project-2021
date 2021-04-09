import React from 'react'

import classNames from 'classnames'

const CancelButton = ({ onClick, className, style }) => (
  <span
    style={style}
    className={classNames('CancelButton text-secondary pointer mr-3', className)}
    onClick={onClick}
  >
    Cancel
  </span>
)

export default CancelButton
