import React from 'react'

const ExternalLinkIcon = ({
  height = 18, width = 18, className, fillColor = 'var(--subnav-text-color)',
}) => (
  <svg
    height={height}
    width={width}
    className={className}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    fill={fillColor}
  >
    <path
      d='M20 11a1 1 0 00-1 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h6a1 1 0 000-2H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-6a1 1 0 00-1-1z'
    />
    <path
      d='M16 5h1.58l-6.29 6.28a1 1 0 000 1.42 1 1 0 001.42 0L19 6.42V8a1 1 0 001 1 1 1 0 001-1V4a1 1 0 00-1-1h-4a1 1 0 000 2z'
    />
  </svg>
)

export default ExternalLinkIcon
