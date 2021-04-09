import React from 'react'

const BadgedTickIcon = ({
  fill = 'var(--success-color)', className, width = '24', height = '30', style,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    style={style}
    className={className}
  >
    <path
      d='M12 29.376c2.261-.555 4.32-1.643 6.176-3.264 1.792-1.579 3.21-3.477 4.256-5.696C23.477 18.155 24 15.808 24 13.376v-8L12 0 0 5.376v8c0 2.432.523 4.779 1.568 7.04 1.045 2.219 2.464 4.117 4.256 5.696 1.856 1.621 3.915 2.71 6.176 3.264zm-2.688-8L4 16l1.888-1.888 3.424 3.456 8.8-8.768L20 10.688 9.312 21.376z'
      fill={fill}
      fillRule='evenodd'
    />
  </svg>
)

export default BadgedTickIcon
