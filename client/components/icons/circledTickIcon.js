import React from 'react'

const CircledTickIcon = ({
  fill = 'var(--success-color)', className, width = '28', height = '28', style,
}) => (
  <svg
    style={style}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 35 35'
    fill='none'
  >
    <circle cx='17.5' cy='17.5' r='17.5' fill={fill} />
    <path d='M9 17.0058L15.7953 23.8011L26.3736 12' stroke='white' strokeWidth='3' />
  </svg>
)

export default CircledTickIcon
