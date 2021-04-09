import React from 'react'

const DocIcon = ({ height = '2rem', width = '2rem', className = '' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    version='1.1'
    x='0px'
    y='0px'
    height={height}
    width={width}
    className={className}
    viewBox='0 0 100 100'
    enableBackground='new 0 0 100 100'
    xmlSpace='preserve'
    fill='#9B9B9B'
  >
    <path d='M71.2,76.8v-6.1H28.8v6.1H71.2z M71.2,62.8v-6.1H28.8v6.1H71.2z M36.9,33.3c3.3,0,6.1-2.7,6.1-6.1c0-3.3-2.7-6-6.1-6  c-3.3,0-6,2.7-6,6C30.9,30.6,33.6,33.3,36.9,33.3L36.9,33.3z M71.2,48.7v-6.1H28.8v6.1H71.2z M84.3,25.6c0,0-0.3-0.3-19.4-19.4  C64.4,5.7,63.3,5,62,5H18.6c-2.2,0-4,1.9-4,4.1V91c0,2.2,1.8,4,4,4h62.9c2.2,0,4-1.8,4-4V28.5C85.5,27.2,85,26.3,84.3,25.6  L84.3,25.6z M22.7,86.8V13.2h35.2v15.3c0,2.2,1.9,4.1,4.1,4.1h15.3v54.2H22.7z' />
  </svg>
)

export default DocIcon
