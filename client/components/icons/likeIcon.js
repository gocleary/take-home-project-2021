import React from 'react'

const LikeIcon = ({ height = '1.35em', width = '1.45em', className = '' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 54 50'
    className={`Icon-like ${className}`}
  >
    <g className='Icon-like--fill' transform='translate(2.000000, 2.000000)' fillRule='nonzero'>
      <path d='M24.85,7.23168945 C26.868,2.44868945 31.478,0.001 36.84,0.001 C44.063,0.001 49.265,6.18 49.919,13.544 C49.919,13.544 50.272,15.372 49.495,18.663 C48.437,23.145 45.95,27.127 42.597,30.166 L24.85,46 L7.402,30.165 C4.049,27.127 1.562,23.144 0.504,18.662 C-0.273,15.371 0.08,13.543 0.08,13.543 C0.734,6.179 5.936,0 13.159,0 C18.522,0 22.832,2.44868945 24.85,7.23168945 Z' />
    </g>
  </svg>
)

export default LikeIcon
