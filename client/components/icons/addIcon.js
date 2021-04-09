import React from 'react'

const AddIcon = ({
  height = 18, width = 18, className, fillColor = '#C2C7CC',
}) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    height={height}
    width={width}
    version='1.1'
    id='svg3013'
    viewBox='0 -256 1408 1408'
  >
    <g id='g3015' transform='matrix(1,0,0,-1,0,1152)' fill={fillColor} stroke='#FFFFFF'>
      <path
        id='path3017'
        d='M 1408,800 V 608 q 0,-40 -28,-68 -28,-28 -68,-28 H 896 V 96 Q 896,56 868,28 840,0 800,0 H 608 Q 568,0 540,28 512,56 512,96 V 512 H 96 Q 56,512 28,540 0,568 0,608 v 192 q 0,40 28,68 28,28 68,28 h 416 v 416 q 0,40 28,68 28,28 68,28 h 192 q 40,0 68,-28 28,-28 28,-68 V 896 h 416 q 40,0 68,-28 28,-28 28,-68 z'
      />
    </g>
  </svg>
)

export default AddIcon
