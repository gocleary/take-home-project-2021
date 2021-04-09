import React from 'react'
import LoadingSpinner from 'components/common/circlesLoadingIndicator'

const LoadingSpinnerText = ({
  className,
  width,
  height,
  children,
  showLoadingSpinner = false,
}) => (
  <>
    {showLoadingSpinner ? <LoadingSpinner className={className} width={width} height={height} /> : children}
  </>
)

export default LoadingSpinnerText
