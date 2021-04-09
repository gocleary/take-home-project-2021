import React from 'react'

const ProfileIcon = ({
  fill = 'var(--nav-text-active-color)', width = '22', height = '22', viewBox = '0 0 100 100',
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    height={height}
    width={width}
    fill={fill}
    x='0px'
    y='0px'
    viewBox={viewBox}
    xmlSpace='preserve'
  >
    <g>
      <path d='M48,2.5c-12.7,0-23,10.3-23,23s10.3,23,23,23s23-10.3,23-23S60.7,2.5,48,2.5z M48,44.5c-10.5,0-19-8.5-19-19s8.5-19,19-19   s19,8.5,19,19S58.5,44.5,48,44.5z' />
      <path d='M13,93.5c1.1,0,2-0.9,2-2c0-19.1,14.5-34,33-34s33,14.9,33,34c0,1.1,0.9,2,2,2s2-0.9,2-2c0-21.3-16.3-38-37-38   s-37,16.7-37,38C11,92.6,11.9,93.5,13,93.5z' />
    </g>
  </svg>
)

export default ProfileIcon
