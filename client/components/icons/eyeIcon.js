import React from 'react'

const EyeIcon = ({
  height = 11, width = 15, className, fillColor = '#FFFFFF',
}) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    height={height}
    width={width}
    version='1.1'
    id='svg3013'
  >
    <path
      d='M7.309.542c4.236-.128 6.729 3.818 7.182 4.604.127.219.127.489 0 .708-.609 1.063-2.883 4.505-6.8 4.604h-.177C3.342 10.458.955 6.626.51 5.854a.708.708 0 010-.708C1.125 4.083 3.392.64 7.309.542zm.07 1.416C4.547 2.03 2.699 4.36 1.99 5.5c.623.999 2.614 3.613 5.667 3.542 2.833-.071 4.66-2.402 5.39-3.542-.63-.999-2.628-3.62-5.666-3.542zM7.5 3.021a2.48 2.48 0 110 4.958 2.48 2.48 0 010-4.958zm0 1.417a1.062 1.062 0 100 2.124 1.062 1.062 0 000-2.125z'
      fill={fillColor}
      fillRule='evenodd'
    />
  </svg>
)

export default EyeIcon
